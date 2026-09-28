#include <Wire.h>

void setup() {
  Wire.begin(21, 22);
  Serial.begin(115200);
  delay(1000);
  Serial.println("Scanning I2C...");
}

void loop() {
  byte error, address;
  int jumlahDitemukan = 0;

  for (address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0) {
      Serial.print("Device ditemukan di alamat 0x");
      Serial.println(address, HEX);
      jumlahDitemukan++;
    }
  }

  if (jumlahDitemukan == 0) {
    Serial.println("Tidak ada device I2C terdeteksi!");
  }

  delay(3000);
}
