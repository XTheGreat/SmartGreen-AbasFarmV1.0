#include <OneWire.h>
#include <DallasTemperature.h>

const uint8_t pinDs18b20 = 5;

OneWire oneWireBus(pinDs18b20);
DallasTemperature sensorSuhu(&oneWireBus);

uint8_t jumlahSensorTerdeteksi = 0;

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  Serial.println("   Pengujian Sensor DS18B20      ");
  Serial.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

  sensorSuhu.begin();
  jumlahSensorTerdeteksi = sensorSuhu.getDeviceCount();

  Serial.print("Memindai bus 1-Wire... ");
  Serial.print("Jumlah sensor terdeteksi: ");
  Serial.println(jumlahSensorTerdeteksi);

  if (jumlahSensorTerdeteksi == 0) {
    Serial.println("Peringatan: Tidak ada sensor DS18B20");
  } else if (jumlahSensorTerdeteksi < 2) {
    Serial.println("catatan:Kurang dari 2 sensor");
  } else {
    Serial.println("Berhasil mendeteksi 2 sensor DS18B20");
  }
}

void loop() {
  sensorSuhu.requestTemperatures();

  jumlahSensorTerdeteksi = sensorSuhu.getDeviceCount();
  Serial.print("Pembacaan Suhu (Total Sensornya ada: ");
  Serial.print(jumlahSensorTerdeteksi);
  Serial.println(") bosskyuhh ");

  for (uint8_t indeksSensor = 0; indeksSensor < jumlahSensorTerdeteksi; indeksSensor++) {
    float nilaiSuhuSensor = sensorSuhu.getTempCByIndex(indeksSensor);

    Serial.print("  Ini adalah sensor ke-");
    Serial.print(indeksSensor + 1);
    Serial.print(": ");

    if (nilaiSuhuSensor == DEVICE_DISCONNECTED_C) {
      Serial.println("ERROR (-127.00 °C) - Terputus");
    } else {
      Serial.print(nilaiSuhuSensor);
      Serial.println(" °C YGY");
        Serial.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  Serial.println("        Aku Sayang Cyrene AWWWW<3       ");
  Serial.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    }
  }

  delay(1000);
}
