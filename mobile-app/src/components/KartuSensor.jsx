import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, ProgressBar } from 'react-native-paper';
import { getWarnaKelembaban, getLabelKelembaban } from '../constants/threshold';

const KartuSensor = ({ sensorId, zona, index, nilai, batasKering, batasBasah }) => {
  const warnaIndikator = getWarnaKelembaban(nilai, batasKering, batasBasah);
  const labelStatus = getLabelKelembaban(nilai, batasKering, batasBasah);
  const persentaseBar = Math.min(Math.max(nilai / 100, 0), 1);

  return (
    <Card style={[styles.kartu, { borderLeftColor: warnaIndikator, borderLeftWidth: 4 }]}>
      <Card.Content style={styles.kontenKartu}>

        <View style={styles.headerKartu}>
          <Text style={styles.idSensor}>
            {zona} #{index + 1}
          </Text>
          <View style={[styles.badgeStatus, { backgroundColor: warnaIndikator + '20' }]}>
            <Text style={[styles.teksStatus, { color: warnaIndikator }]}>
              {labelStatus}
            </Text>
          </View>
        </View>

        <Text style={[styles.nilaiKelembaban, { color: warnaIndikator }]}>
          {nilai.toFixed(1)}%
        </Text>

        <ProgressBar
          progress={persentaseBar}
          color={warnaIndikator}
          style={styles.progressBar}
        />

        <Text style={styles.idTeknis}>{sensorId}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  kartu: {
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#1E293B',
    flex: 1,
    minWidth: 150,
  },
  kontenKartu: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  headerKartu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  idSensor: {
    fontSize: 13,
    fontWeight: '600',
    color: '#CBD5E1',
  },
  badgeStatus: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  teksStatus: {
    fontSize: 10,
    fontWeight: '700',
  },
  nilaiKelembaban: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 4,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#334155',
    marginTop: 4,
  },
  idTeknis: {
    fontSize: 9,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default KartuSensor;
