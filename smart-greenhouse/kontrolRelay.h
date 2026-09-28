#ifndef KONTROL_RELAY_H
#define KONTROL_RELAY_H

#include <Arduino.h>
#include "config.h"

struct StatusPompa {
  bool pompaHidup;
  bool modeOtomatis;
  bool overrideManual;
  unsigned long waktuMulaiSiram;
  unsigned long waktuSiramTerakhir;
  unsigned long durasiSiramSaatIni;
  int batasKeringTanah;
  int batasBasahTanah;
  int waktuSiramMaksimal;
  bool cooldownAktif;
};

void setupRelay();
void hidupkanPompa();
void matikanPompa();
void cekKondisiSiram(float rataRataKelembaban);
bool cekCooldown();
String getStatusPompaText();
String getWaktuSiramTerakhirText();

extern StatusPompa statusPompa;

#endif
