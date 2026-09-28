#ifndef CONFIG_H
#define CONFIG_H

#define WIFI_SSID           "Kaoruko"
#define WIFI_PASSWORD        "Kaoruko1174"

#define FIREBASE_HOST       "smart-greenhouse-85a01-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_API_KEY    "AIzaSyDy408fAd5Ux6ZfVwymp2_4KwCBMkCfqqg"
#define FIREBASE_USER_EMAIL "akusayangcyrene@example.com"
#define FIREBASE_USER_PASS  "AkuSayangCyrene"

const bool modeTanpaMux = true;

const bool modeTestingCepat = false;

#define PIN_MUX_SIG_DEPAN   32
#define PIN_MUX_SIG_TENGAH  33
#define PIN_MUX_SIG_BELAKANG 34

#define PIN_MUX_S0          25
#define PIN_MUX_S1          26
#define PIN_MUX_S2          27

#define PIN_DHT22           4
#define PIN_DS18B20         5

#define PIN_RELAY           14

const bool relayActiveLow = false;

#define PIN_SDA_OLED        21
#define PIN_SCL_OLED        22

#define LEBAR_LAYAR         128
#define TINGGI_LAYAR        64
#define ALAMAT_OLED         0x3C

#define JUMLAH_SENSOR_PER_ZONA  6
#define JUMLAH_ZONA             3
#define TOTAL_SENSOR            18
#define JUMLAH_CHANNEL_MUX      8

#define BATAS_KERING_DEFAULT    40
#define BATAS_BASAH_DEFAULT     65

#define INTERVAL_BACA_SENSOR    2000
#define INTERVAL_KIRIM_FIREBASE 5000
#define INTERVAL_UPDATE_OLED    1000
#define COOLDOWN_POMPA          300000

#define ADC_KERING              4095
#define ADC_BASAH               1500

#endif
