#include "config.h"
#include "sensorTanah.h"
#include "sensorUdara.h"
#include "kontrolRelay.h"
#include "koneksiFirebase.h"
#include "tampilOled.h"

unsigned long waktuBacaSensorTerakhir = 0;

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.println();
  Serial.println("=======================================");
  Serial.println("  Smart Greenhouse - Melon Farm v1.0");
  Serial.println("  12 baris x 30 tanaman x 18 sensor");
  Serial.println("=======================================");
  Serial.println();

  Serial.println("[Main] Inisialisasi OLED...");
  setupOled();

  Serial.println("[Main] Inisialisasi sensor tanah...");
  setupSensorTanah();

  Serial.println("[Main] Inisialisasi sensor udara...");
  setupSensorUdara();

  Serial.println("[Main] Inisialisasi relay pompa...");
  setupRelay();

  Serial.println("[Main] Menghubungkan ke WiFi & Firebase...");
  setupFirebase();

  Serial.println("[Main] Pembacaan sensor awal...");
  bacaSemuaSensor(dataTanah);
  bacaSensorUdara(dataUdara);

  Serial.println();
  Serial.println("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=");
  Serial.println("  Sistem siap - memasuki loop utama");
  Serial.println("=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=");
  Serial.println();
}

void loop() {
  unsigned long sekarang = millis();

  if (sekarang - waktuBacaSensorTerakhir >= INTERVAL_BACA_SENSOR) {
    waktuBacaSensorTerakhir = sekarang;

    bacaSemuaSensor(dataTanah);

    bacaSensorUdara(dataUdara);
  }

  cekKondisiSiram(dataTanah.rataRataTotal);

  kirimDataFirebase();

  bacaKontrolFirebase();

  tampilkanOled();

  static unsigned long waktuCekWiFiTerakhir = 0;
  if (sekarang - waktuCekWiFiTerakhir >= 30000) {
    waktuCekWiFiTerakhir = sekarang;
    cekKoneksiWiFi();
  }

  yield();
}
