import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { Text, Card, Divider, IconButton } from 'react-native-paper';

import StatusPompa from '../components/StatusPompa';
import GrafikKelembaban from '../components/GrafikKelembaban';
import { getWarnaKelembaban } from '../constants/threshold';
import {
  dengarkanSemuaData,
  setOverrideManual,
  setModeOtomatis,
} from '../services/firebaseService';

const DashboardScreen = () => {
  const [dataGreenhouse, setDataGreenhouse] = useState(null);
  const [sedangRefresh, setSedangRefresh] = useState(false);
  const [terakhirUpdate, setTerakhirUpdate] = useState('');

  useEffect(() => {
    const berhentiDengarkan = dengarkanSemuaData((data) => {
      setDataGreenhouse(data);
      setTerakhirUpdate(
        new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    });

    return () => berhentiDengarkan();
  }, []);

  const handleToggleOverride = async (aktif) => {
    try {
      await setOverrideManual(aktif);
    } catch (error) {
      console.error('Gagal toggle override:', error);
    }
  };

  const handleToggleMode = async (aktif) => {
    try {
      await setModeOtomatis(aktif);
    } catch (error) {
      console.error('Gagal toggle mode:', error);
    }
  };

  const onRefresh = () => {
    setSedangRefresh(true);
    setTimeout(() => setSedangRefresh(false), 1000);
  };

  const sensor = dataGreenhouse?.sensor || {};
  const pompa = dataGreenhouse?.pompa || {};
  const udara = dataGreenhouse?.udara || {};
  const tanah = dataGreenhouse?.tanah || {};
  const kontrol = dataGreenhouse?.kontrol || {};
  const sistem = dataGreenhouse?.sistem || {};

  const rataRataTotal = sensor.rataRataTotal || 0;
  const warnaRataRata = getWarnaKelembaban(rataRataTotal);

  return (
    <ScrollView
      style={styles.wadahUtama}
      contentContainerStyle={styles.kontenScroll}
      refreshControl={
        <RefreshControl refreshing={sedangRefresh} onRefresh={onRefresh} tintColor="#22C55E" />
      }
    >

      <View style={styles.header}>
        <View>
          <Text style={styles.judulApp}>🌿 Smart Greenhouse</Text>
          <Text style={styles.subjudul}>Abasfarm</Text>
        </View>
        <View style={styles.statusOnline}>
          <View
            style={[
              styles.dotOnline,
              { backgroundColor: sistem.online ? '#22C55E' : '#EF4444' },
            ]}
          />
          <Text style={styles.teksOnline}>
            {sistem.online ? 'Online' : 'Offline'}
          </Text>
        </View>
      </View>

      <Card style={styles.kartuRataRata}>
        <Card.Content style={styles.kontenRataRata}>
          <Text style={styles.labelRataRata}>Kelembaban Rata-rata</Text>
          <Text style={[styles.nilaiRataRata, { color: warnaRataRata }]}>
            {rataRataTotal.toFixed(1)}%
          </Text>
          <View style={styles.barisZona}>
            <View style={styles.itemZona}>
              <Text style={styles.labelZona}>Depan</Text>
              <Text style={[styles.nilaiZona, { color: getWarnaKelembaban(sensor.rataRataDepan || 0) }]}>
                {(sensor.rataRataDepan || 0).toFixed(1)}%
              </Text>
            </View>
            <View style={styles.pemisahVertikal} />
            <View style={styles.itemZona}>
              <Text style={styles.labelZona}>Tengah</Text>
              <Text style={[styles.nilaiZona, { color: getWarnaKelembaban(sensor.rataRataTengah || 0) }]}>
                {(sensor.rataRataTengah || 0).toFixed(1)}%
              </Text>
            </View>
            <View style={styles.pemisahVertikal} />
            <View style={styles.itemZona}>
              <Text style={styles.labelZona}>Belakang</Text>
              <Text style={[styles.nilaiZona, { color: getWarnaKelembaban(sensor.rataRataBelakang || 0) }]}>
                {(sensor.rataRataBelakang || 0).toFixed(1)}%
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <StatusPompa
        pompaHidup={pompa.statusPompa || false}
        cooldownAktif={pompa.cooldownAktif || false}
        waktuSiramTerakhir={pompa.waktuSiramTerakhir || 'Belum pernah'}
        modeOtomatis={kontrol.modeOtomatis !== undefined ? kontrol.modeOtomatis : true}
        overrideManual={kontrol.overrideManual || false}
        onToggleOverride={handleToggleOverride}
        onToggleMode={handleToggleMode}
      />

      <View style={styles.barisKartuKecil}>

        <Card style={styles.kartuKecil}>
          <Card.Content style={styles.kontenKartuKecil}>
            <Text style={styles.ikonKartuKecil}>🌡️</Text>
            <Text style={styles.nilaiKartuKecil}>
              {(udara.suhuUdara || 0).toFixed(1)}°C
            </Text>
            <Text style={styles.labelKartuKecil}>Suhu Udara</Text>
          </Card.Content>
        </Card>

        <Card style={styles.kartuKecil}>
          <Card.Content style={styles.kontenKartuKecil}>
            <Text style={styles.ikonKartuKecil}>💨</Text>
            <Text style={styles.nilaiKartuKecil}>
              {(udara.kelembabanUdara || 0).toFixed(1)}%
            </Text>
            <Text style={styles.labelKartuKecil}>Kelembaban Udara</Text>
          </Card.Content>
        </Card>

        <Card style={styles.kartuKecil}>
          <Card.Content style={styles.kontenKartuKecil}>
            <Text style={styles.ikonKartuKecil}>🌱</Text>
            <Text style={styles.nilaiKartuKecil}>
              {(tanah.suhuTanah || 0).toFixed(1)}°C
            </Text>
            <Text style={styles.labelKartuKecil}>Suhu Tanah</Text>
          </Card.Content>
        </Card>
      </View>

      <GrafikKelembaban
        rataRataDepan={sensor.rataRataDepan}
        rataRataTengah={sensor.rataRataTengah}
        rataRataBelakang={sensor.rataRataBelakang}
      />

      <Card style={styles.kartuSistem}>
        <Card.Content>
          <View style={styles.barisSistem}>
            <Text style={styles.labelSistem}>Sensor Aktif</Text>
            <Text style={styles.nilaiSistem}>
              {sistem.jumlahSensorAktif || 0}/18
            </Text>
          </View>
          <Divider style={styles.pemisah} />
          <View style={styles.barisSistem}>
            <Text style={styles.labelSistem}>Uptime ESP32</Text>
            <Text style={styles.nilaiSistem}>
              {sistem.uptime ? formatUptime(sistem.uptime) : '—'}
            </Text>
          </View>
          <Divider style={styles.pemisah} />
          <View style={styles.barisSistem}>
            <Text style={styles.labelSistem}>Terakhir Update</Text>
            <Text style={styles.nilaiSistem}>{terakhirUpdate || '—'}</Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const formatUptime = (detik) => {
  const jam = Math.floor(detik / 3600);
  const menit = Math.floor((detik % 3600) / 60);
  const det = detik % 60;
  return `${jam}j ${menit}m ${det}d`;
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 8,
  },
  judulApp: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F1F5F9',
  },
  subjudul: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  statusOnline: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  dotOnline: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  teksOnline: {
    color: '#CBD5E1',
    fontSize: 12,
    fontWeight: '600',
  },

  kartuRataRata: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    marginBottom: 8,
    elevation: 3,
  },
  kontenRataRata: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  labelRataRata: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  nilaiRataRata: {
    fontSize: 48,
    fontWeight: '900',
  },
  barisZona: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 12,
  },
  itemZona: {
    alignItems: 'center',
    flex: 1,
  },
  labelZona: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '600',
  },
  nilaiZona: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 2,
  },
  pemisahVertikal: {
    width: 1,
    backgroundColor: '#334155',
    height: '100%',
  },

  barisKartuKecil: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  kartuKecil: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#1E293B',
    borderRadius: 14,
    elevation: 2,
  },
  kontenKartuKecil: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  ikonKartuKecil: {
    fontSize: 24,
    marginBottom: 4,
  },
  nilaiKartuKecil: {
    color: '#F1F5F9',
    fontSize: 18,
    fontWeight: '800',
  },
  labelKartuKecil: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },

  kartuSistem: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    marginTop: 8,
    elevation: 2,
  },
  barisSistem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  labelSistem: {
    color: '#94A3B8',
    fontSize: 13,
  },
  nilaiSistem: {
    color: '#F1F5F9',
    fontSize: 13,
    fontWeight: '600',
  },
  pemisah: {
    backgroundColor: '#334155',
  },
});

export default DashboardScreen;
