import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Chip, Divider } from 'react-native-paper';

import KartuSensor from '../components/KartuSensor';
import { getWarnaKelembaban } from '../constants/threshold';
import {
  dengarkanSensorTanah,
  dengarkanSetting,
} from '../services/firebaseService';

const SensorScreen = () => {
  const [dataSensor, setDataSensor] = useState(null);
  const [setting, setSetting] = useState({
    batasKeringTanah: 40,
    batasBasahTanah: 65,
  });
  const [zonaAktif, setZonaAktif] = useState('semua');

  useEffect(() => {
    const berhentiSensor = dengarkanSensorTanah((data) => {
      setDataSensor(data);
    });

    const berhentiSetting = dengarkanSetting((data) => {
      setSetting(data);
    });

    return () => {
      berhentiSensor();
      berhentiSetting();
    };
  }, []);

  const getSensorTampil = () => {
    if (!dataSensor) return [];

    switch (zonaAktif) {
      case 'depan':
        return [{ zona: 'Depan', sensor: dataSensor.depan, rataRata: dataSensor.rataRataDepan }];
      case 'tengah':
        return [{ zona: 'Tengah', sensor: dataSensor.tengah, rataRata: dataSensor.rataRataTengah }];
      case 'belakang':
        return [{ zona: 'Belakang', sensor: dataSensor.belakang, rataRata: dataSensor.rataRataBelakang }];
      default:
        return [
          { zona: 'Depan', sensor: dataSensor.depan, rataRata: dataSensor.rataRataDepan },
          { zona: 'Tengah', sensor: dataSensor.tengah, rataRata: dataSensor.rataRataTengah },
          { zona: 'Belakang', sensor: dataSensor.belakang, rataRata: dataSensor.rataRataBelakang },
        ];
    }
  };

  const hitungStatistik = () => {
    if (!dataSensor) return { kering: 0, normal: 0, basah: 0 };

    const semuaSensor = [
      ...dataSensor.depan,
      ...dataSensor.tengah,
      ...dataSensor.belakang,
    ];

    let kering = 0, normal = 0, basah = 0;
    semuaSensor.forEach((s) => {
      if (s.nilai < setting.batasKeringTanah) kering++;
      else if (s.nilai > setting.batasBasahTanah) basah++;
      else normal++;
    });

    return { kering, normal, basah };
  };

  const statistik = hitungStatistik();
  const zonaData = getSensorTampil();

  return (
    <ScrollView style={styles.wadahUtama} contentContainerStyle={styles.kontenScroll}>

      <Text style={styles.judul}>📡 Detail Sensor Tanah</Text>
      <Text style={styles.subjudul}>
        18 sensor kelembaban • 3 zona • {dataSensor?.rataRataTotal?.toFixed(1) || 0}% rata-rata
      </Text>

      <View style={styles.barisStatistik}>
        <Card style={[styles.kartuStat, { borderLeftColor: '#EF4444', borderLeftWidth: 3 }]}>
          <Card.Content style={styles.kontenStat}>
            <Text style={[styles.nilaiStat, { color: '#EF4444' }]}>{statistik.kering}</Text>
            <Text style={styles.labelStat}>Kering</Text>
          </Card.Content>
        </Card>
        <Card style={[styles.kartuStat, { borderLeftColor: '#22C55E', borderLeftWidth: 3 }]}>
          <Card.Content style={styles.kontenStat}>
            <Text style={[styles.nilaiStat, { color: '#22C55E' }]}>{statistik.normal}</Text>
            <Text style={styles.labelStat}>Normal</Text>
          </Card.Content>
        </Card>
        <Card style={[styles.kartuStat, { borderLeftColor: '#3B82F6', borderLeftWidth: 3 }]}>
          <Card.Content style={styles.kontenStat}>
            <Text style={[styles.nilaiStat, { color: '#3B82F6' }]}>{statistik.basah}</Text>
            <Text style={styles.labelStat}>Basah</Text>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.barisFilter}>
        {['semua', 'depan', 'tengah', 'belakang'].map((zona) => (
          <Chip
            key={zona}
            selected={zonaAktif === zona}
            onPress={() => setZonaAktif(zona)}
            style={[
              styles.chipFilter,
              zonaAktif === zona && styles.chipAktif,
            ]}
            textStyle={[
              styles.teksChip,
              zonaAktif === zona && styles.teksChipAktif,
            ]}
            selectedColor="#22C55E"
          >
            {zona.charAt(0).toUpperCase() + zona.slice(1)}
          </Chip>
        ))}
      </View>

      {zonaData.map((zonaItem, idx) => (
        <View key={zonaItem.zona} style={styles.wadahZona}>

          <View style={styles.headerZona}>
            <Text style={styles.namaZona}>
              Zona {zonaItem.zona}
            </Text>
            <Text
              style={[
                styles.rataRataZona,
                { color: getWarnaKelembaban(zonaItem.rataRata || 0, setting.batasKeringTanah, setting.batasBasahTanah) },
              ]}
            >
              {(zonaItem.rataRata || 0).toFixed(1)}%
            </Text>
          </View>

          <View style={styles.gridSensor}>
            {zonaItem.sensor?.map((s) => (
              <View key={s.id} style={styles.itemGrid}>
                <KartuSensor
                  sensorId={s.id}
                  zona={zonaItem.zona}
                  index={s.index}
                  nilai={s.nilai}
                  batasKering={setting.batasKeringTanah}
                  batasBasah={setting.batasBasahTanah}
                />
              </View>
            ))}
          </View>

          {idx < zonaData.length - 1 && <Divider style={styles.pemisahZona} />}
        </View>
      ))}

      <Card style={styles.kartuLegend}>
        <Card.Content>
          <Text style={styles.judulLegend}>Keterangan Warna</Text>
          <View style={styles.barisLegend}>
            <View style={styles.itemLegend}>
              <View style={[styles.dotLegend, { backgroundColor: '#EF4444' }]} />
              <Text style={styles.teksLegend}>Kering (&lt; {setting.batasKeringTanah}%)</Text>
            </View>
            <View style={styles.itemLegend}>
              <View style={[styles.dotLegend, { backgroundColor: '#22C55E' }]} />
              <Text style={styles.teksLegend}>Normal ({setting.batasKeringTanah}–{setting.batasBasahTanah}%)</Text>
            </View>
            <View style={styles.itemLegend}>
              <View style={[styles.dotLegend, { backgroundColor: '#3B82F6' }]} />
              <Text style={styles.teksLegend}>Basah (&gt; {setting.batasBasahTanah}%)</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
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
    marginBottom: 12,
  },

  barisStatistik: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  kartuStat: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    elevation: 2,
  },
  kontenStat: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  nilaiStat: {
    fontSize: 28,
    fontWeight: '900',
  },
  labelStat: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '600',
    marginTop: 2,
  },

  barisFilter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  chipFilter: {
    marginHorizontal: 4,
    marginVertical: 2,
    backgroundColor: '#1E293B',
  },
  chipAktif: {
    backgroundColor: '#22C55E20',
    borderColor: '#22C55E',
    borderWidth: 1,
  },
  teksChip: {
    color: '#94A3B8',
    fontSize: 12,
  },
  teksChipAktif: {
    color: '#22C55E',
    fontWeight: '700',
  },

  wadahZona: {
    marginBottom: 8,
  },
  headerZona: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  namaZona: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F1F5F9',
  },
  rataRataZona: {
    fontSize: 16,
    fontWeight: '800',
  },
  gridSensor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  itemGrid: {
    width: '50%',
    paddingHorizontal: 0,
  },
  pemisahZona: {
    backgroundColor: '#334155',
    marginVertical: 12,
  },

  kartuLegend: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginTop: 8,
  },
  judulLegend: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  barisLegend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLegend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotLegend: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  teksLegend: {
    color: '#CBD5E1',
    fontSize: 11,
  },
});

export default SensorScreen;
