#ifndef SENSOR_TANAH_H
#define SENSOR_TANAH_H

#include <Arduino.h>
#include "config.h"

struct DataSensorTanah {
  float nilaiDepan[JUMLAH_SENSOR_PER_ZONA];
  float nilaiTengah[JUMLAH_SENSOR_PER_ZONA];
  float nilaibelakang[JUMLAH_SENSOR_PER_ZONA];
  float rataRataDepan;
  float rataRataTengah;
  float rataRataBelakang;
  float rataRataTotal;
  int jumlahSensorAktif;
};

void setupSensorTanah();
int bacaSensorMux(int pinSig, int channel);
int bacaSensorLangsung(int pinSig = PIN_MUX_SIG_DEPAN);
float konversiKePersentase(int nilaiMentah);
void bacaSemuaSensor(DataSensorTanah &data);
float hitungRataRata(float nilai[], int jumlah);

extern DataSensorTanah dataTanah;

#endif
