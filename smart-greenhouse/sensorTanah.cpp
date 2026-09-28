#include "sensorTanah.h"

DataSensorTanah dataTanah;

void setupSensorTanah() {
  if (modeTanpaMux) {
    Serial.println("[SensorTanah] Setup selesai - [MODE TESTING AKTIF] (Tanpa CD4051, 1 sensor di GPIO 32)"); //Without CD4051
  } else {
    pinMode(PIN_MUX_S0, OUTPUT);
    pinMode(PIN_MUX_S1, OUTPUT);
    pinMode(PIN_MUX_S2, OUTPUT);
    Serial.println("[SensorTanah] Setup selesai - 3x CD4051 MUX siap");
  }

  for (int i = 0; i < JUMLAH_SENSOR_PER_ZONA; i++) {
    dataTanah.nilaiDepan[i] = 0.0;
    dataTanah.nilaiTengah[i] = 0.0;
    dataTanah.nilaibelakang[i] = 0.0;
  }
  dataTanah.rataRataDepan = 0.0;
  dataTanah.rataRataTengah = 0.0;
  dataTanah.rataRataBelakang = 0.0;
  dataTanah.rataRataTotal = 0.0;
  dataTanah.jumlahSensorAktif = 0;
}

int bacaSensorLangsung(int pinSig) {
  int totalBaca = 0;
  for (int i = 0; i < 3; i++) {
    totalBaca += analogRead(pinSig);
    delayMicroseconds(100);
  }
  return totalBaca / 3;
}

int bacaSensorMux(int pinSig, int channel) {
  digitalWrite(PIN_MUX_S0, (channel >> 0) & 0x01);
  digitalWrite(PIN_MUX_S1, (channel >> 1) & 0x01);
  digitalWrite(PIN_MUX_S2, (channel >> 2) & 0x01);

  delayMicroseconds(50);

  int totalBaca = 0;
  for (int i = 0; i < 3; i++) {
    totalBaca += analogRead(pinSig);
    delayMicroseconds(100);
  }

  return totalBaca / 3;
}

float konversiKePersentase(int nilaiMentah) {
  float persen = (float)(ADC_KERING - nilaiMentah) / (float)(ADC_KERING - ADC_BASAH) * 100.0;

  if (persen < 0.0) persen = 0.0;
  if (persen > 100.0) persen = 100.0;

  return persen;
}

void bacaSemuaSensor(DataSensorTanah &data) {
  if (modeTanpaMux) {
    int nilaiMentah = bacaSensorLangsung(PIN_MUX_SIG_DEPAN);
    float persen = konversiKePersentase(nilaiMentah);

    data.jumlahSensorAktif = 0;

    bool sensorValid = (nilaiMentah > 0);

    for (int ch = 0; ch < JUMLAH_SENSOR_PER_ZONA; ch++) {
      data.nilaiDepan[ch] = persen;
      data.nilaiTengah[ch] = persen;
      data.nilaibelakang[ch] = persen;
    }

    if (sensorValid) {
      data.jumlahSensorAktif = TOTAL_SENSOR;
    }

    data.rataRataDepan = persen;
    data.rataRataTengah = persen;
    data.rataRataBelakang = persen;
    data.rataRataTotal = persen;

    Serial.printf("[SensorTanah][MODE TESTING] 1 Sensor di GPIO %d: ADC=%d (%.1f%%) | Disalin ke 18 slot | Aktif=%d/%d\n",
      PIN_MUX_SIG_DEPAN, nilaiMentah, persen, data.jumlahSensorAktif, TOTAL_SENSOR);

  } else {
    int pinZona[] = {PIN_MUX_SIG_DEPAN, PIN_MUX_SIG_TENGAH, PIN_MUX_SIG_BELAKANG};
    float* nilaiZona[] = {data.nilaiDepan, data.nilaiTengah, data.nilaibelakang};

    data.jumlahSensorAktif = 0;

    for (int zona = 0; zona < JUMLAH_ZONA; zona++) {
      for (int ch = 0; ch < JUMLAH_SENSOR_PER_ZONA; ch++) {
        int nilaiMentah = bacaSensorMux(pinZona[zona], ch);
        float persen = konversiKePersentase(nilaiMentah);

        nilaiZona[zona][ch] = persen;

        if (nilaiMentah > 0) {
          data.jumlahSensorAktif++;
        }
      }
    }

    data.rataRataDepan = hitungRataRata(data.nilaiDepan, JUMLAH_SENSOR_PER_ZONA);
    data.rataRataTengah = hitungRataRata(data.nilaiTengah, JUMLAH_SENSOR_PER_ZONA);
    data.rataRataBelakang = hitungRataRata(data.nilaibelakang, JUMLAH_SENSOR_PER_ZONA);

    float semuaRata[] = {data.rataRataDepan, data.rataRataTengah, data.rataRataBelakang};
    data.rataRataTotal = hitungRataRata(semuaRata, JUMLAH_ZONA);

    Serial.printf("[SensorTanah] Rata-rata: D=%.1f%% T=%.1f%% B=%.1f%% | Total=%.1f%% | Aktif=%d/%d\n",
      data.rataRataDepan, data.rataRataTengah, data.rataRataBelakang,
      data.rataRataTotal, data.jumlahSensorAktif, TOTAL_SENSOR);
  }
}

float hitungRataRata(float nilai[], int jumlah) {
  if (jumlah == 0) return 0.0;

  float total = 0.0;
  for (int i = 0; i < jumlah; i++) {
    total += nilai[i];
  }

  return total / (float)jumlah;
}
