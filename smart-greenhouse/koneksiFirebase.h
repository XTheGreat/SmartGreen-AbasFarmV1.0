#ifndef KONEKSI_FIREBASE_H
#define KONEKSI_FIREBASE_H

#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "config.h"
#include "sensorTanah.h"
#include "sensorUdara.h"
#include "kontrolRelay.h"

void setupFirebase();
void kirimDataFirebase();
void bacaKontrolFirebase();
bool cekKoneksiWiFi();
void sambungWiFi();
String getStatusWiFiText();

extern bool firebaseTerhubung;
extern unsigned long waktuKirimTerakhir;

#endif
