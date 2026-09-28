#include "kontrolRelay.h"

StatusPompa statusPompa;

const int LEVEL_RELAY_ON  = relayActiveLow ? LOW : HIGH;
const int LEVEL_RELAY_OFF = relayActiveLow ? HIGH : LOW;

void setupRelay() {
  pinMode(PIN_RELAY, OUTPUT);
  digitalWrite(PIN_RELAY, LEVEL_RELAY_OFF);

  statusPompa.pompaHidup = false;
  statusPompa.modeOtomatis = true;
  statusPompa.overrideManual = false;
  statusPompa.waktuMulaiSiram = 0;
  statusPompa.waktuSiramTerakhir = 0;
  statusPompa.durasiSiramSaatIni = 0;
  statusPompa.batasKeringTanah = BATAS_KERING_DEFAULT;
  statusPompa.batasBasahTanah = BATAS_BASAH_DEFAULT;
  statusPompa.waktuSiramMaksimal = 15;
  statusPompa.cooldownAktif = false;

  Serial.println("[KontrolRelay] Setup selesai - Relay pada GPIO " + String(PIN_RELAY));
  Serial.printf("[KontrolRelay] Mode Trigger: %s (Sinyal ON=%s, OFF=%s)\n",
    relayActiveLow ? "Active LOW" : "Active HIGH",
    LEVEL_RELAY_ON == HIGH ? "HIGH" : "LOW",
    LEVEL_RELAY_OFF == HIGH ? "HIGH" : "LOW");

  if (modeTestingCepat) {
    Serial.println("[KontrolRelay] Mode Testing Cepat AktifF: Cooldown dinonaktifkan (respon instan)");
    Serial.println("[KontrolRelay] Ingat: Ubah modeTestingCepat = false pada config.h sebelum dipakai di greenhouse"); //skipTest
  } else {
    Serial.printf("[KontrolRelay] Threshold: Kering=%d%%, Basah=%d%%, Cooldown=%d detik\n",
      statusPompa.batasKeringTanah, statusPompa.batasBasahTanah,
      COOLDOWN_POMPA / 1000);
  }
}

void hidupkanPompa() {
  if (!statusPompa.pompaHidup) {
    digitalWrite(PIN_RELAY, LEVEL_RELAY_ON);
    statusPompa.pompaHidup = true;
    statusPompa.waktuMulaiSiram = millis();
    statusPompa.durasiSiramSaatIni = 0;

    Serial.println("[KontrolRelay] Pompa hidup - penyiraman dimulai");
  }
}

void matikanPompa() {
  if (statusPompa.pompaHidup) {
    digitalWrite(PIN_RELAY, LEVEL_RELAY_OFF);
    statusPompa.pompaHidup = false;
    statusPompa.waktuSiramTerakhir = millis();

    if (modeTestingCepat) {
      statusPompa.cooldownAktif = false;
      Serial.println("[KontrolRelay] Pompa mati - [TESTING CEPAT] Cooldown dilewati, siap siram instan");
    } else {
      statusPompa.cooldownAktif = true;
      Serial.println("[KontrolRelay] Pompa mati - cooldown dimulai");
    }
  }
}

bool cekCooldown() {
  if (modeTestingCepat) return false;

  if (!statusPompa.cooldownAktif) return false;

  unsigned long selisih = millis() - statusPompa.waktuSiramTerakhir;
  if (selisih >= COOLDOWN_POMPA) {
    statusPompa.cooldownAktif = false;
    Serial.println("[KontrolRelay] Cooldown selesai - siram lagi");
    return false;
  }

  return true;
}

void cekKondisiSiram(float rataRataKelembaban) {
  if (!statusPompa.modeOtomatis) {
    if (statusPompa.overrideManual && !statusPompa.pompaHidup) {
      hidupkanPompa();
    } else if (!statusPompa.overrideManual && statusPompa.pompaHidup) {
      matikanPompa();
    }
    return;
  }

  if (statusPompa.pompaHidup) {
    statusPompa.durasiSiramSaatIni = millis() - statusPompa.waktuMulaiSiram;

    unsigned long batasMaksMs = (unsigned long)statusPompa.waktuSiramMaksimal * 60000UL;
    if (statusPompa.durasiSiramSaatIni >= batasMaksMs) {
      Serial.println("[KontrolRelay] SAFETY: Batas waktu siram tercapai!");
      matikanPompa();
      return;
    }
  }

  if (!modeTestingCepat) {
    if (cekCooldown()) {
      unsigned long sisaCooldown = COOLDOWN_POMPA - (millis() - statusPompa.waktuSiramTerakhir);
      Serial.printf("[KontrolRelay] Cooldown aktif, sisa %lu detik\n", sisaCooldown / 1000);
      return;
    }
  }

  if (rataRataKelembaban < (float)statusPompa.batasKeringTanah) {
    if (!statusPompa.pompaHidup) {
      Serial.printf("[KontrolRelay] Kelembaban %.1f%% < %d%% -> SIRAM!\n",
        rataRataKelembaban, statusPompa.batasKeringTanah);
      hidupkanPompa();
    }
  } else if (rataRataKelembaban > (float)statusPompa.batasBasahTanah) {
    if (statusPompa.pompaHidup) {
      Serial.printf("[KontrolRelay] Kelembaban %.1f%% > %d%% -> STOP!\n",
        rataRataKelembaban, statusPompa.batasBasahTanah);
      matikanPompa();
    }
  }
}

String getStatusPompaText() {
  if (statusPompa.pompaHidup) {
    return "POMPA: ON";
  } else if (!modeTestingCepat && statusPompa.cooldownAktif) {
    unsigned long berlalu = millis() - statusPompa.waktuSiramTerakhir;
    if (berlalu >= COOLDOWN_POMPA) {
      return "POMPA: OFF";
    }
    unsigned long sisa = COOLDOWN_POMPA - berlalu;
    return "CD:" + String(sisa / 1000) + "s";
  } else {
    return "POMPA: OFF";
  }
}

String getWaktuSiramTerakhirText() {
  if (statusPompa.waktuSiramTerakhir == 0) {
    return "Belum pernah";
  }
  unsigned long selisih = (millis() - statusPompa.waktuSiramTerakhir) / 1000;
  if (selisih < 60) {
    return String(selisih) + " dtk lalu";
  } else if (selisih < 3600) {
    return String(selisih / 60) + " mnt lalu";
  } else {
    return String(selisih / 3600) + " jam lalu";
  }
}
