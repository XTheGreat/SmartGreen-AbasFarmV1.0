import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const LEBAR_LAYAR = Dimensions.get('window').width;
const MAKS_DATA_POIN = 10;

const GrafikKelembaban = ({ rataRataDepan, rataRataTengah, rataRataBelakang }) => {
  const [riwayatDepan, setRiwayatDepan] = useState([0]);
  const [riwayatTengah, setRiwayatTengah] = useState([0]);
  const [riwayatBelakang, setRiwayatBelakang] = useState([0]);
  const [labelWaktu, setLabelWaktu] = useState(['']);
  const hitungUpdate = useRef(0);

  useEffect(() => {
    hitungUpdate.current += 1;

    setRiwayatDepan((prev) => {
      const baru = [...prev, rataRataDepan || 0];
      return baru.length > MAKS_DATA_POIN ? baru.slice(-MAKS_DATA_POIN) : baru;
    });

    setRiwayatTengah((prev) => {
      const baru = [...prev, rataRataTengah || 0];
      return baru.length > MAKS_DATA_POIN ? baru.slice(-MAKS_DATA_POIN) : baru;
    });

    setRiwayatBelakang((prev) => {
      const baru = [...prev, rataRataBelakang || 0];
      return baru.length > MAKS_DATA_POIN ? baru.slice(-MAKS_DATA_POIN) : baru;
    });

    setLabelWaktu((prev) => {
      const waktuSekarang = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      });
      const baru = [...prev, waktuSekarang];
      return baru.length > MAKS_DATA_POIN ? baru.slice(-MAKS_DATA_POIN) : baru;
    });
  }, [rataRataDepan, rataRataTengah, rataRataBelakang]);

  const dataGrafik = {
    labels: labelWaktu.filter((_, i) => i % 2 === 0),
    datasets: [
      {
        data: riwayatDepan,
        color: (opacity = 1) => `rgba(239, 68, 68, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: riwayatTengah,
        color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: riwayatBelakang,
        color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Depan', 'Tengah', 'Belakang'],
  };

  const konfigurasiGrafik = {
    backgroundColor: '#0F172A',
    backgroundGradientFrom: '#1E293B',
    backgroundGradientTo: '#0F172A',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(148, 163, 184, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(148, 163, 184, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '3',
      strokeWidth: '1',
    },
    propsForBackgroundLines: {
      strokeDasharray: '4',
      stroke: '#334155',
    },
  };

  return (
    <Card style={styles.kartuGrafik}>
      <Card.Content>
        <Text style={styles.judulGrafik}>📊 Kelembaban Real-time</Text>

        <LineChart
          data={dataGrafik}
          width={LEBAR_LAYAR - 56}
          height={200}
          chartConfig={konfigurasiGrafik}
          bezier
          style={styles.grafik}
          withInnerLines={true}
          withOuterLines={false}
          yAxisSuffix="%"
          fromZero
          segments={4}
        />

        <View style={styles.wadahLegend}>
          <View style={styles.itemLegend}>
            <View style={[styles.dotLegend, { backgroundColor: '#EF4444' }]} />
            <Text style={styles.teksLegend}>Depan: {(rataRataDepan || 0).toFixed(1)}%</Text>
          </View>
          <View style={styles.itemLegend}>
            <View style={[styles.dotLegend, { backgroundColor: '#22C55E' }]} />
            <Text style={styles.teksLegend}>Tengah: {(rataRataTengah || 0).toFixed(1)}%</Text>
          </View>
          <View style={styles.itemLegend}>
            <View style={[styles.dotLegend, { backgroundColor: '#3B82F6' }]} />
            <Text style={styles.teksLegend}>Belakang: {(rataRataBelakang || 0).toFixed(1)}%</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  kartuGrafik: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#1E293B',
    elevation: 3,
  },
  judulGrafik: {
    color: '#F1F5F9',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  grafik: {
    borderRadius: 12,
    marginLeft: -16,
  },
  wadahLegend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  itemLegend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotLegend: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  teksLegend: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default GrafikKelembaban;
