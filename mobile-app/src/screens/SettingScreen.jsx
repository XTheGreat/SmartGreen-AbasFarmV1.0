import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import {
  Text,
  Card,
  Button,
  TextInput,
  Divider,
  Snackbar,
} from 'react-native-paper';
import Slider from '@react-native-community/slider';

import { THRESHOLD, getWarnaKelembaban } from '../constants/threshold';
import { dengarkanSetting, simpanSetting } from '../services/firebaseService';

const SettingScreen = () => {
  const [batasKeringTanah, setBatasKeringTanah] = useState(THRESHOLD.batasKeringTanah);
  const [batasBasahTanah, setBatasBasahTanah] = useState(THRESHOLD.batasBasahTanah);
  const [waktuSiramMaksimal, setWaktuSiramMaksimal] = useState(
    String(THRESHOLD.waktuSiramMaksimal)
  );
  const [sedangSimpan, setSedangSimpan] = useState(false);
  const [pesanSnackbar, setPesanSnackbar] = useState('');
  const [tampilSnackbar, setTampilSnackbar] = useState(false);
  const [adaPerubahan, setAdaPerubahan] = useState(false);

  useEffect(() => {
    const berhentiDengarkan = dengarkanSetting((data) => {
      setBatasKeringTanah(data.batasKeringTanah);
      setBatasBasahTanah(data.batasBasahTanah);
      setWaktuSiramMaksimal(String(data.waktuSiramMaksimal));
      setAdaPerubahan(false);
    });

    return () => berhentiDengarkan();
  }, []);

  const handleSimpan = async () => {
    if (batasKeringTanah >= batasBasahTanah) {
      Alert.alert(
        '⚠ Validasi Gagal',
        'Batas kering harus lebih kecil dari batas basah!',
        [{ text: 'OK' }]
      );
      return;
    }

    const waktuMaks = parseInt(waktuSiramMaksimal, 10);
    if (isNaN(waktuMaks) || waktuMaks < 1 || waktuMaks > 60) {
      Alert.alert(
        '⚠ Validasi Gagal',
        'Waktu siram maksimal harus antara 1–60 menit!',
        [{ text: 'OK' }]
      );
      return;
    }

    setSedangSimpan(true);
    try {
      await simpanSetting({
        batasKeringTanah: Math.round(batasKeringTanah),
        batasBasahTanah: Math.round(batasBasahTanah),
        waktuSiramMaksimal: waktuMaks,
      });
      setAdaPerubahan(false);
      setPesanSnackbar('Setting berhasil disimpan ke Firebase!');
      setTampilSnackbar(true);
    } catch (error) {
      setPesanSnackbar('Gagal menyimpan: ' + error.message);
      setTampilSnackbar(true);
    } finally {
      setSedangSimpan(false);
    }
  };

  const handleReset = () => {
    Alert.alert(
      'Reset ke Default',
      'Kembalikan semua setting ke nilai default?',
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setBatasKeringTanah(THRESHOLD.batasKeringTanah);
            setBatasBasahTanah(THRESHOLD.batasBasahTanah);
            setWaktuSiramMaksimal(String(THRESHOLD.waktuSiramMaksimal));
            setAdaPerubahan(true);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.wadahUtama}>
      <ScrollView contentContainerStyle={styles.kontenScroll}>

        <Text style={styles.judul}>Pengaturan</Text>
        <Text style={styles.subjudul}>
          Konfigurasi threshold penyiraman otomatis
        </Text>

        <Card style={styles.kartuSetting}>
          <Card.Content>
            <View style={styles.headerSetting}>
              <Text style={styles.labelSetting}>Batas Kering Tanah</Text>
              <Text
                style={[
                  styles.nilaiSetting,
                  { color: getWarnaKelembaban(batasKeringTanah - 1) },
                ]}
              >
                {Math.round(batasKeringTanah)}%
              </Text>
            </View>

            <Text style={styles.deskripsiSetting}>
              Pompa akan menyala otomatis ketika rata-rata kelembaban{' '}
              <Text style={{ color: '#EF4444', fontWeight: '700' }}>
                di bawah {Math.round(batasKeringTanah)}%
              </Text>
            </Text>

            <Slider
              style={styles.slider}
              minimumValue={10}
              maximumValue={60}
              step={1}
              value={batasKeringTanah}
              onValueChange={(val) => {
                setBatasKeringTanah(val);
                setAdaPerubahan(true);
              }}
              minimumTrackTintColor="#EF4444"
              maximumTrackTintColor="#334155"
              thumbTintColor="#EF4444"
            />

            <View style={styles.barisRange}>
              <Text style={styles.teksRange}>10%</Text>
              <Text style={styles.teksRange}>60%</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.kartuSetting}>
          <Card.Content>
            <View style={styles.headerSetting}>
              <Text style={styles.labelSetting}>Batas Basah Tanah</Text>
              <Text
                style={[
                  styles.nilaiSetting,
                  { color: getWarnaKelembaban(batasBasahTanah + 1) },
                ]}
              >
                {Math.round(batasBasahTanah)}%
              </Text>
            </View>

            <Text style={styles.deskripsiSetting}>
              Pompa akan mati otomatis ketika rata-rata kelembaban{' '}
              <Text style={{ color: '#3B82F6', fontWeight: '700' }}>
                di atas {Math.round(batasBasahTanah)}%
              </Text>
            </Text>

            <Slider
              style={styles.slider}
              minimumValue={50}
              maximumValue={90}
              step={1}
              value={batasBasahTanah}
              onValueChange={(val) => {
                setBatasBasahTanah(val);
                setAdaPerubahan(true);
              }}
              minimumTrackTintColor="#3B82F6"
              maximumTrackTintColor="#334155"
              thumbTintColor="#3B82F6"
            />

            <View style={styles.barisRange}>
              <Text style={styles.teksRange}>50%</Text>
              <Text style={styles.teksRange}>90%</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.kartuVisual}>
          <Card.Content>
            <Text style={styles.labelSetting}>Visualisasi Threshold</Text>
            <View style={styles.barVisual}>
              <View
                style={[
                  styles.segmenBar,
                  {
                    flex: batasKeringTanah,
                    backgroundColor: '#EF444440',
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  },
                ]}
              >
                <Text style={[styles.teksSegmen, { color: '#EF4444' }]}>Kering</Text>
              </View>
              <View
                style={[
                  styles.segmenBar,
                  {
                    flex: batasBasahTanah - batasKeringTanah,
                    backgroundColor: '#22C55E40',
                  },
                ]}
              >
                <Text style={[styles.teksSegmen, { color: '#22C55E' }]}>Normal</Text>
              </View>
              <View
                style={[
                  styles.segmenBar,
                  {
                    flex: 100 - batasBasahTanah,
                    backgroundColor: '#3B82F640',
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  },
                ]}
              >
                <Text style={[styles.teksSegmen, { color: '#3B82F6' }]}>Basah</Text>
              </View>
            </View>
            <View style={styles.barisMarker}>
              <Text style={styles.teksMarker}>0%</Text>
              <Text style={[styles.teksMarker, { color: '#EF4444' }]}>
                {Math.round(batasKeringTanah)}%
              </Text>
              <Text style={[styles.teksMarker, { color: '#3B82F6' }]}>
                {Math.round(batasBasahTanah)}%
              </Text>
              <Text style={styles.teksMarker}>100%</Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.kartuSetting}>
          <Card.Content>
            <Text style={styles.labelSetting}>Waktu Siram Maksimal</Text>
            <Text style={styles.deskripsiSetting}>
              Pompa akan mati otomatis setelah berjalan selama waktu ini (safety timer)
            </Text>

            <View style={styles.barisInput}>
              <TextInput
                mode="outlined"
                value={waktuSiramMaksimal}
                onChangeText={(val) => {
                  setWaktuSiramMaksimal(val);
                  setAdaPerubahan(true);
                }}
                keyboardType="numeric"
                style={styles.input}
                outlineColor="#334155"
                activeOutlineColor="#22C55E"
                textColor="#F1F5F9"
                theme={{ colors: { background: '#1E293B' } }}
              />
              <Text style={styles.satuanInput}>menit</Text>
            </View>

            <Text style={styles.petunjukInput}>Rentang: 1 – 60 menit</Text>
          </Card.Content>
        </Card>

        <View style={styles.barisAksi}>
          <Button
            mode="outlined"
            onPress={handleReset}
            textColor="#94A3B8"
            style={styles.tombolReset}
            icon="refresh"
          >
            Reset Default
          </Button>

          <Button
            mode="contained"
            onPress={handleSimpan}
            loading={sedangSimpan}
            disabled={!adaPerubahan || sedangSimpan}
            buttonColor="#22C55E"
            textColor="#FFFFFF"
            style={styles.tombolSimpan}
            labelStyle={styles.labelTombol}
            icon="content-save"
          >
            Simpan
          </Button>
        </View>

        <Card style={styles.kartuInfo}>
          <Card.Content>
            <Text style={styles.judulInfo}>ℹCara Kerja</Text>
            <Text style={styles.teksInfo}>
              • Kelembaban &lt; {Math.round(batasKeringTanah)}% → Pompa nyala otomatis{'\n'}
              • Kelembaban {Math.round(batasKeringTanah)}–{Math.round(batasBasahTanah)}% → Pertahankan status{'\n'}
              • Kelembaban &gt; {Math.round(batasBasahTanah)}% → Pompa mati otomatis{'\n'}
              • Cooldown 5 menit antar sesi siram{'\n'}
              • Safety timer: pompa mati setelah {waktuSiramMaksimal} menit
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>

      <Snackbar
        visible={tampilSnackbar}
        onDismiss={() => setTampilSnackbar(false)}
        duration={3000}
        style={styles.snackbar}
      >
        {pesanSnackbar}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  wadahUtama: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  kontenScroll: {
    padding: 16,
    paddingBottom: 32,
  },
  judul: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F1F5F9',
    marginTop: 8,
  },
  subjudul: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    marginBottom: 16,
  },

  kartuSetting: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },
  headerSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  labelSetting: {
    color: '#F1F5F9',
    fontSize: 15,
    fontWeight: '700',
  },
  nilaiSetting: {
    fontSize: 28,
    fontWeight: '900',
  },
  deskripsiSetting: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 18,
  },

  slider: {
    width: '100%',
    height: 40,
  },
  barisRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teksRange: {
    color: '#64748B',
    fontSize: 11,
  },

  kartuVisual: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },
  barVisual: {
    flexDirection: 'row',
    height: 36,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
  },
  segmenBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  teksSegmen: {
    fontSize: 10,
    fontWeight: '700',
  },
  barisMarker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  teksMarker: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '600',
  },

  barisInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#1E293B',
    fontSize: 18,
  },
  satuanInput: {
    color: '#94A3B8',
    fontSize: 15,
    marginLeft: 12,
    fontWeight: '600',
  },
  petunjukInput: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 4,
  },

  barisAksi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  tombolReset: {
    flex: 1,
    marginRight: 8,
    borderColor: '#334155',
    borderRadius: 12,
  },
  tombolSimpan: {
    flex: 1,
    marginLeft: 8,
    borderRadius: 12,
  },
  labelTombol: {
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 4,
  },

  kartuInfo: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#3B82F6',
  },
  judulInfo: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  teksInfo: {
    color: '#94A3B8',
    fontSize: 12,
    lineHeight: 22,
  },

  snackbar: {
    backgroundColor: '#1E293B',
  },
});

export default SettingScreen;
