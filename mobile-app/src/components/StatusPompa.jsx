import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Text, Button, Switch } from 'react-native-paper';

const StatusPompa = ({
  pompaHidup,
  cooldownAktif,
  waktuSiramTerakhir,
  modeOtomatis,
  overrideManual,
  onToggleOverride,
  onToggleMode,
}) => {
  const animasiPulse = useRef(new Animated.Value(1)).current;
  const animasiRotasi = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (pompaHidup) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(animasiPulse, {
            toValue: 1.15,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animasiPulse, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();

      const rotasi = Animated.loop(
        Animated.timing(animasiRotasi, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      rotasi.start();

      return () => {
        pulse.stop();
        rotasi.stop();
      };
    } else {
      animasiPulse.setValue(1);
      animasiRotasi.setValue(0);
    }
  }, [pompaHidup]);

  const warnaUtama = pompaHidup ? '#22C55E' : '#64748B';
  const warnaLatar = pompaHidup ? '#22C55E15' : '#64748B10';

  return (
    <View style={[styles.wadah, { backgroundColor: warnaLatar, borderColor: warnaUtama }]}>

      <Animated.View
        style={[
          styles.indikatorBesar,
          {
            backgroundColor: warnaUtama,
            transform: [{ scale: animasiPulse }],
            shadowColor: warnaUtama,
          },
        ]}
      >
        <Text style={styles.ikonPompa}>{pompaHidup ? '💧' : '⏸'}</Text>
      </Animated.View>

      <Text style={[styles.statusUtama, { color: warnaUtama }]}>
        {pompaHidup ? 'POMPA AKTIF' : 'POMPA MATI'}
      </Text>

      {cooldownAktif && !pompaHidup && (
        <View style={styles.badgeCooldown}>
          <Text style={styles.teksCooldown}>⏳ Cooldown aktif</Text>
        </View>
      )}

      <Text style={styles.waktuSiram}>
        Terakhir siram: {waktuSiramTerakhir}
      </Text>

      <View style={styles.wadahKontrol}>

        <View style={styles.barisKontrol}>
          <Text style={styles.labelKontrol}>Mode Otomatis</Text>
          <Switch
            value={modeOtomatis}
            onValueChange={onToggleMode}
            color="#22C55E"
          />
        </View>

        {!modeOtomatis && (
          <View style={styles.wadahTombol}>
            <Button
              mode="contained"
              onPress={() => onToggleOverride(!overrideManual)}
              buttonColor={overrideManual ? '#EF4444' : '#22C55E'}
              textColor="#FFFFFF"
              style={styles.tombolOverride}
              labelStyle={styles.labelTombol}
              icon={overrideManual ? 'water-off' : 'water'}
            >
              {overrideManual ? 'Matikan Pompa' : 'Hidupkan Pompa'}
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wadah: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  indikatorBesar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 12,
  },
  ikonPompa: {
    fontSize: 36,
  },
  statusUtama: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 4,
  },
  badgeCooldown: {
    backgroundColor: '#F59E0B20',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
  },
  teksCooldown: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '600',
  },
  waktuSiram: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 8,
  },
  wadahKontrol: {
    width: '100%',
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#334155',
    paddingTop: 16,
  },
  barisKontrol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  labelKontrol: {
    color: '#CBD5E1',
    fontSize: 15,
    fontWeight: '600',
  },
  wadahTombol: {
    marginTop: 12,
    alignItems: 'center',
  },
  tombolOverride: {
    borderRadius: 12,
    width: '100%',
  },
  labelTombol: {
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 4,
  },
});

export default StatusPompa;
