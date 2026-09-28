void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("==========================================");
  Serial.println("   Pengujian pada board ESP32");
  Serial.println("==========================================");
}

void loop() {
  String pesanStatus = "ESP32 hidup";
  Serial.println(pesanStatus);
  delay(1000);
}
