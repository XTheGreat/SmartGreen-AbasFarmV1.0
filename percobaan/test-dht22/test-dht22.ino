#include <DHT.h>

const uint8_t pinDht = 4;
#define DHTTYPE DHT22

DHT dht(pinDht, DHTTYPE);

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("==========================================");
  Serial.println("     Pengujian Sensor DHT22      ");
  Serial.println("==========================================");

  dht.begin();
}

void loop() {
  float nilaiKelembaban = dht.readHumidity();
  float nilaiSuhu = dht.readTemperature();

  if (isnan(nilaiKelembaban) || isnan(nilaiSuhu)) {
    Serial.println("Gagal membaca sensor DHT22.");
  } else {
    Serial.print("Suhu Udara: ");
    Serial.print(nilaiSuhu);
    Serial.print(" °C | Kelembaban Udara: ");
    Serial.print(nilaiKelembaban);
    Serial.println(" %");
  }

  delay(2000);
}
