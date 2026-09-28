#ifndef SENSOR_UDARA_H
#define SENSOR_UDARA_H

#include <Arduino.h>
#include <DHT.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include "config.h"

struct DataSensorUdara {
  float suhuUdara;
  float kelembabanUdara;
  float suhuTanah;
  float suhuTanahProbe[2];
  bool dhtValid;
  bool ds18b20Valid;
};

void setupSensorUdara();
void bacaSensorUdara(DataSensorUdara &data);

extern DataSensorUdara dataUdara;

#endif
