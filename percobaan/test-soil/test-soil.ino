const uint8_t pinSoilMoisture = 32;

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("==========================================");
  Serial.println("  Pengujian Soil Mosture");
  Serial.println("==========================================");
}

void loop() {
  int nilaiSoilMentah = analogRead(pinSoilMoisture);

  Serial.print("Nilai ubah ke status dari Soil Moisture: ");
  Serial.print(nilaiSoilMentah);

  if (nilaiSoilMentah > 3200) {
    Serial.println(" ->  Status: Kering");
  } else if (nilaiSoilMentah > 1800) {
    Serial.println(" -> Status: Lembab");
  } else {
    Serial.println(" -> Status: Basah");
  }

  delay(1000);
}
