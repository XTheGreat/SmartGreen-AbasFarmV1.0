#include "tampilOled.h"

Adafruit_SSD1306 layar(LEBAR_LAYAR, TINGGI_LAYAR, &Wire, -1);

unsigned long waktuUpdateOledTerakhir = 0;

void setupOled() {
  Wire.begin(PIN_SDA_OLED, PIN_SCL_OLED);

  if (!layar.begin(SSD1306_SWITCHCAPVCC, ALAMAT_OLED)) {
    Serial.println("[OLED] Gagal inisialisasi SSD1306");
    return;
  }

  layar.clearDisplay();
  layar.setTextColor(SSD1306_WHITE);
  layar.setTextSize(1);

  Serial.println("[OLED] Display SSD1306 siap (128x64)");

  tampilkanSplash();
}

void tampilkanSplash() {
  layar.clearDisplay();

  layar.setTextSize(1);
  layar.setCursor(10, 5);
  layar.println("================");
  layar.setCursor(15, 18);
  layar.setTextSize(1);
  layar.println("SMART GREENHOUSE");
  layar.setCursor(20, 30);
  layar.println("Melon Farm v1.0");
  layar.setCursor(10, 42);
  layar.println("================");
  layar.setCursor(15, 54);
  layar.println("Memulai sistem...");

  layar.display();
  delay(2000);
}

void tampilkanOled() {
  unsigned long sekarang = millis();
  if (sekarang - waktuUpdateOledTerakhir < INTERVAL_UPDATE_OLED) {
    return;
  }
  waktuUpdateOledTerakhir = sekarang;

  layar.clearDisplay();
  layar.setTextSize(1);
  layar.setTextColor(SSD1306_WHITE);

  layar.setCursor(0, 0);
  layar.printf("Klb:%.0f%%", dataTanah.rataRataTotal);

  String statusPompaText = getStatusPompaText();
  int lebarStatus = statusPompaText.length() * 6;
  layar.setCursor(LEBAR_LAYAR - lebarStatus, 0);
  layar.print(statusPompaText);

  layar.drawLine(0, 10, LEBAR_LAYAR, 10, SSD1306_WHITE);

  layar.setCursor(0, 14);
  if (dataUdara.dhtValid) {
    layar.printf("Udara:%.1fC %.0f%%", dataUdara.suhuUdara, dataUdara.kelembabanUdara);
  } else {
    layar.print("Udara: -- ERR --");
  }

  layar.setCursor(0, 26);
  if (dataUdara.ds18b20Valid) {
    layar.printf("Tanah:%.1fC", dataUdara.suhuTanah);
  } else {
    layar.print("Tanah:--");
  }

  String modeTeks = statusPompa.modeOtomatis ? "AUTO" : "MANUAL";
  int lebarMode = modeTeks.length() * 6;
  layar.setCursor(LEBAR_LAYAR - lebarMode, 26);
  layar.print(modeTeks);

  layar.drawLine(0, 36, LEBAR_LAYAR, 36, SSD1306_WHITE);

  layar.setCursor(0, 40);
  layar.print(getStatusWiFiText());

  unsigned long uptimeDetik = millis() / 1000;
  int jam = uptimeDetik / 3600;
  int menit = (uptimeDetik % 3600) / 60;
  int detik = uptimeDetik % 60;

  char bufferUptime[12];
  sprintf(bufferUptime, "%02d:%02d:%02d", jam, menit, detik);
  int lebarUptime = 8 * 6;
  layar.setCursor(LEBAR_LAYAR - lebarUptime, 40);
  layar.print(bufferUptime);

  layar.setCursor(0, 52);
  layar.printf("D:%.0f T:%.0f B:%.0f S:%d",
    dataTanah.rataRataDepan,
    dataTanah.rataRataTengah,
    dataTanah.rataRataBelakang,
    dataTanah.jumlahSensorAktif);

  if (firebaseTerhubung) {
    layar.fillCircle(LEBAR_LAYAR - 3, 55, 2, SSD1306_WHITE);
  } else {
    layar.drawCircle(LEBAR_LAYAR - 3, 55, 2, SSD1306_WHITE);
  }

  layar.display();
}

void tampilkanError(String pesan) {
  layar.clearDisplay();
  layar.setTextSize(1);
  layar.setCursor(0, 0);
  layar.println("!! ERROR !!");
  layar.setCursor(0, 16);
  layar.println(pesan);
  layar.display();
}
