#include "koneksiFirebase.h"

#include <addons/TokenHelper.h>
#include <addons/RTDBHelper.h>

bool firebaseTerhubung = false;
unsigned long waktuKirimTerakhir = 0;
unsigned long waktuBacaKontrolTerakhir = 0;

FirebaseData fbdo;
FirebaseData fbdoStream;
FirebaseAuth auth;
FirebaseConfig config;

void streamCallback(FirebaseStream data);
void streamTimeoutCallback(bool timeout);

void setupFirebase() {
  sambungWiFi();

  config.api_key = FIREBASE_API_KEY;
  config.database_url = FIREBASE_HOST;

  auth.user.email = FIREBASE_USER_EMAIL;
  auth.user.password = FIREBASE_USER_PASS;

  config.token_status_callback = tokenStatusCallback;

  config.fcs.download_buffer_size = 512;

  Firebase.begin(&config, &auth);
  Firebase.reconnectNetwork(true);

  fbdo.setBSSLBufferSize(2048, 1024);
  fbdo.setResponseSize(1024);

  unsigned long waktuMulai = millis();
  while (!Firebase.ready() && (millis() - waktuMulai < 10000)) {
    delay(100);
  }

  if (Firebase.ready()) {
    firebaseTerhubung = true;
    Serial.println("[Firebase] Terhubung ke Firebase RTDB");

    if (Firebase.RTDB.beginStream(&fbdoStream, "/greenhouse/kontrol")) {
      Firebase.RTDB.setStreamCallback(&fbdoStream, streamCallback, streamTimeoutCallback);
      Serial.println("[Firebase] Stream listener aktif: /greenhouse/kontrol");
    }
  } else {
    firebaseTerhubung = false;
    Serial.println("[Firebase] Gagal terhubung ke Firebase!");
  }
}

void kirimDataFirebase() {
  if (!Firebase.ready()) {
    firebaseTerhubung = false;
    return;
  }

  unsigned long sekarang = millis();
  if (sekarang - waktuKirimTerakhir < INTERVAL_KIRIM_FIREBASE) {
    return;
  }
  waktuKirimTerakhir = sekarang;
  firebaseTerhubung = true;

  FirebaseJson json;

  for (int i = 0; i < JUMLAH_SENSOR_PER_ZONA; i++) {
    json.set("sensor/depan" + String(i), dataTanah.nilaiDepan[i]);
    json.set("sensor/tengah" + String(i), dataTanah.nilaiTengah[i]);
    json.set("sensor/belakang" + String(i), dataTanah.nilaibelakang[i]);
  }

  json.set("sensor/rataRataDepan", dataTanah.rataRataDepan);
  json.set("sensor/rataRataTengah", dataTanah.rataRataTengah);
  json.set("sensor/rataRataBelakang", dataTanah.rataRataBelakang);
  json.set("sensor/rataRataTotal", dataTanah.rataRataTotal);

  json.set("pompa/statusPompa", statusPompa.pompaHidup);
  json.set("pompa/waktuSiramTerakhir", getWaktuSiramTerakhirText());
  json.set("pompa/cooldownAktif", statusPompa.cooldownAktif);

  json.set("udara/suhuUdara", dataUdara.suhuUdara);
  json.set("udara/kelembabanUdara", dataUdara.kelembabanUdara);

  json.set("tanah/suhuTanah", dataUdara.suhuTanah);

  json.set("sistem/jumlahSensorAktif", dataTanah.jumlahSensorAktif);
  json.set("sistem/uptime", (int)(millis() / 1000));
  json.set("sistem/online", true);

  unsigned long mulaiKirim = millis();
  if (Firebase.RTDB.updateNode(&fbdo, "/greenhouse", &json)) {
    unsigned long durasiKirim = millis() - mulaiKirim;
    Serial.printf("[Firebase] Data terkirim ke RTDB (%lu ms)\n", durasiKirim);
  } else {
    Serial.printf("[Firebase] Gagal kirim: %s\n", fbdo.errorReason().c_str());
  }
}

void bacaKontrolFirebase() {
  if (!Firebase.ready()) return;

  unsigned long sekarang = millis();
  if (sekarang - waktuBacaKontrolTerakhir < 3000) return;
  waktuBacaKontrolTerakhir = sekarang;

  if (Firebase.RTDB.getInt(&fbdo, "/greenhouse/setting/batasKeringTanah")) {
    int nilai = fbdo.intData();
    if (nilai > 0 && nilai < 100 && nilai != statusPompa.batasKeringTanah) {
      statusPompa.batasKeringTanah = nilai;
      Serial.printf("[Firebase] batasKeringTanah diubah: %d%%\n", nilai);
    }
  }

  if (Firebase.RTDB.getInt(&fbdo, "/greenhouse/setting/batasBasahTanah")) {
    int nilai = fbdo.intData();
    if (nilai > 0 && nilai < 100 && nilai != statusPompa.batasBasahTanah) {
      statusPompa.batasBasahTanah = nilai;
      Serial.printf("[Firebase] batasBasahTanah diubah: %d%%\n", nilai);
    }
  }

  if (Firebase.RTDB.getInt(&fbdo, "/greenhouse/setting/waktuSiramMaksimal")) {
    int nilai = fbdo.intData();
    if (nilai > 0 && nilai <= 60 && nilai != statusPompa.waktuSiramMaksimal) {
      statusPompa.waktuSiramMaksimal = nilai;
      Serial.printf("[Firebase] waktuSiramMaksimal diubah: %d menit\n", nilai);
    }
  }

  if (Firebase.RTDB.getBool(&fbdo, "/greenhouse/kontrol/modeOtomatis")) {
    statusPompa.modeOtomatis = fbdo.boolData();
  }

  if (Firebase.RTDB.getBool(&fbdo, "/greenhouse/kontrol/overrideManual")) {
    statusPompa.overrideManual = fbdo.boolData();
  }
}

void streamCallback(FirebaseStream data) {
  String path = data.dataPath();

  Serial.printf("[Firebase] Stream update: %s = %s\n",
    path.c_str(), data.stringData().c_str());

  if (path == "/overrideManual" || path == "overrideManual") {
    statusPompa.overrideManual = data.boolData();
    Serial.printf("[Firebase] Override manual: %s\n",
      statusPompa.overrideManual ? "ON" : "OFF");
  }

  if (path == "/modeOtomatis" || path == "modeOtomatis") {
    statusPompa.modeOtomatis = data.boolData();
    Serial.printf("[Firebase] Mode otomatis: %s\n",
      statusPompa.modeOtomatis ? "ON" : "OFF");
  }
}

void streamTimeoutCallback(bool timeout) {
  if (timeout) {
    Serial.println("[Firebase] Stream timeout - mencoba reconnect...");
  }
}

void sambungWiFi() {
  Serial.println("[WiFi] Menghubungkan ke " + String(WIFI_SSID) + "...");
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  int percobaan = 0;
  while (WiFi.status() != WL_CONNECTED && percobaan < 30) {
    delay(500);
    Serial.print(".");
    percobaan++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\n[WiFi] Terhubung, IP: " + WiFi.localIP().toString());
  } else {
    Serial.println("\n[WiFi] Gagal terhubung ke WiFi!");
  }
}

bool cekKoneksiWiFi() {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("[WiFi] Koneksi terputus - mencoba sambung ulang...");
    sambungWiFi();
    return WiFi.status() == WL_CONNECTED;
  }
  return true;
}

String getStatusWiFiText() {
  if (WiFi.status() == WL_CONNECTED) {
    return "WiFi:OK " + String(WiFi.RSSI()) + "dBm";
  }
  return "WiFi:OFF";
}
