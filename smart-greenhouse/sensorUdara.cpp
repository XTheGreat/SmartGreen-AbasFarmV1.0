#include "sensorUdara.h"

DataSensorUdara dataUdara;

DHT dht(PIN_DHT22, DHT22);

OneWire oneWire(PIN_DS18B20);
DallasTemperature sensorDS(&oneWire);

void setupSensorUdara() {
  dht.begin();
  Serial.println("[SensorUdara] DHT22 siap pada GPIO " + String(PIN_DHT22));

  sensorDS.begin();
  int jumlahDS = sensorDS.getDeviceCount();
  Serial.printf("[SensorUdara] DS18B20 ditemukan: %d probe pada GPIO %d\n",
    jumlahDS, PIN_DS18B20);

  dataUdara.suhuUdara = 0.0;
  dataUdara.kelembabanUdara = 0.0;
  dataUdara.suhuTanah = 0.0;
  dataUdara.suhuTanahProbe[0] = 0.0;
  dataUdara.suhuTanahProbe[1] = 0.0;
  dataUdara.dhtValid = false;
  dataUdara.ds18b20Valid = false;
}

void bacaSensorUdara(DataSensorUdara &data) {
  float suhu = dht.readTemperature();
  float kelembaban = dht.readHumidity();

  if (!isnan(suhu) && !isnan(kelembaban)) {
    data.suhuUdara = suhu;
    data.kelembabanUdara = kelembaban;
    data.dhtValid = true;
  } else {
    data.dhtValid = false;
    Serial.println("[SensorUdara] Gagal baca DHT22");
  }

  sensorDS.requestTemperatures();

  int jumlahProbe = sensorDS.getDeviceCount();
  if (jumlahProbe > 0) {
    float totalSuhuTanah = 0.0;
    int probeTerbaca = 0;

    for (int i = 0; i < min(jumlahProbe, 2); i++) {
      float nilaiSuhu = sensorDS.getTempCByIndex(i);
      if (nilaiSuhu != DEVICE_DISCONNECTED_C && nilaiSuhu > -50.0) {
        data.suhuTanahProbe[i] = nilaiSuhu;
        totalSuhuTanah += nilaiSuhu;
        probeTerbaca++;
      }
    }

    if (probeTerbaca > 0) {
      data.suhuTanah = totalSuhuTanah / (float)probeTerbaca;
      data.ds18b20Valid = true;
    } else {
      data.ds18b20Valid = false;
      Serial.println("[SensorUdara] DS18B20 tidak terbaca!");
    }
  } else {
    data.ds18b20Valid = false;
    Serial.println("[SensorUdara] Tidak ada probe DS18B20 terdeteksi!");
  }

  Serial.printf("[SensorUdara] Udara: %.1fC, %.1f%% | Tanah: %.1fC | DHT:%s DS:%s\n",
    data.suhuUdara, data.kelembabanUdara, data.suhuTanah,
    data.dhtValid ? "OK" : "ERR",
    data.ds18b20Valid ? "OK" : "ERR");
}
