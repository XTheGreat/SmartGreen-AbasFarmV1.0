#ifndef TAMPIL_OLED_H
#define TAMPIL_OLED_H

#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "config.h"
#include "sensorTanah.h"
#include "sensorUdara.h"
#include "kontrolRelay.h"
#include "koneksiFirebase.h"

void setupOled();
void tampilkanOled();
void tampilkanSplash();
void tampilkanError(String pesan);

#endif
