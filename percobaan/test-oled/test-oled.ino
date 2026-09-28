#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

const uint8_t lebarLayar = 128;
const uint8_t tinggiLayar = 64;
const uint8_t alamatI2c = 0x3C;
const int8_t pinResetOled = -1;

Adafruit_SSD1306 layarOled(lebarLayar, tinggiLayar, &Wire, pinResetOled);

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("==========================================");
  Serial.println("    Pengujian oled SSD1306 (I2C 0x3C)      ");
  Serial.println("==========================================");

  Wire.begin(21, 22);

  bool statusInisialisasi = layarOled.begin(SSD1306_SWITCHCAPVCC, alamatI2c);

  if (!statusInisialisasi) {
    Serial.println("Gagal menginisialisasi OLED SSD1306.");
    while (true);
  }

  Serial.println("OLED SSD1306 berhasil diinisialisasi");

  layarOled.clearDisplay();

  layarOled.drawRect(0, 0, lebarLayar, tinggiLayar, SSD1306_WHITE);

  layarOled.setTextSize(1);
  layarOled.setTextColor(SSD1306_WHITE);
  layarOled.setCursor(28, 10);
  layarOled.println("Halo Suamikuu");

  layarOled.setTextSize(1);
  layarOled.setCursor(32, 20);
  layarOled.println("Ini Cyrene!!");

  layarOled.setCursor(36, 35);
  layarOled.println("Jawabb!!!");

   layarOled.setCursor(18, 50);
  layarOled.println("hmmph!!! (0///0)");

  layarOled.display();
}

void loop() {
  delay(1000);
}
