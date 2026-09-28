const uint8_t pinRelay = 14;
bool statusRelayNyala = false;

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("==========================================");
  Serial.println("     Pengujian modul relay       ");
  Serial.println("==========================================");

  pinMode(pinRelay, OUTPUT);

  digitalWrite(pinRelay, HIGH);
  Serial.println("Kondisi Awal: Relay mati");
  delay(10000);
}

void loop() {
  if (statusRelayNyala) {
    digitalWrite(pinRelay, HIGH);
    statusRelayNyala = false;
    Serial.println("Relay mati");
  } else {
    digitalWrite(pinRelay, LOW);
    statusRelayNyala = true;
    Serial.println("Relay nyala");
  }

  delay(2000);
}
