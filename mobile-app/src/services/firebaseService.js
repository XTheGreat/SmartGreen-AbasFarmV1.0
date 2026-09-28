import database from '@react-native-firebase/database';

const refGreenhouse = database().ref('/greenhouse');
const refSensor = database().ref('/greenhouse/sensor');
const refPompa = database().ref('/greenhouse/pompa');
const refUdara = database().ref('/greenhouse/udara');
const refTanah = database().ref('/greenhouse/tanah');
const refKontrol = database().ref('/greenhouse/kontrol');
const refSetting = database().ref('/greenhouse/setting');
const refSistem = database().ref('/greenhouse/sistem');

export const dengarkanSemuaData = (callback) => {
  const onValueChange = refGreenhouse.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback(data);
    }
  });

  return () => refGreenhouse.off('value', onValueChange);
};

export const dengarkanSensorTanah = (callback) => {
  const onValueChange = refSensor.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const sensorTerformat = {
        depan: [],
        tengah: [],
        belakang: [],
        rataRataDepan: data.rataRataDepan || 0,
        rataRataTengah: data.rataRataTengah || 0,
        rataRataBelakang: data.rataRataBelakang || 0,
        rataRataTotal: data.rataRataTotal || 0,
      };

      for (let i = 0; i < 6; i++) {
        sensorTerformat.depan.push({
          id: `depan${i}`,
          zona: 'Depan',
          index: i,
          nilai: data[`depan${i}`] || 0,
        });
        sensorTerformat.tengah.push({
          id: `tengah${i}`,
          zona: 'Tengah',
          index: i,
          nilai: data[`tengah${i}`] || 0,
        });
        sensorTerformat.belakang.push({
          id: `belakang${i}`,
          zona: 'Belakang',
          index: i,
          nilai: data[`belakang${i}`] || 0,
        });
      }

      callback(sensorTerformat);
    }
  });

  return () => refSensor.off('value', onValueChange);
};

export const dengarkanStatusPompa = (callback) => {
  const onValueChange = refPompa.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback({
        statusPompa: data.statusPompa || false,
        waktuSiramTerakhir: data.waktuSiramTerakhir || 'Belum pernah',
        cooldownAktif: data.cooldownAktif || false,
      });
    }
  });

  return () => refPompa.off('value', onValueChange);
};

export const dengarkanDataUdara = (callback) => {
  const onValueChange = refUdara.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback({
        suhuUdara: data.suhuUdara || 0,
        kelembabanUdara: data.kelembabanUdara || 0,
      });
    }
  });

  return () => refUdara.off('value', onValueChange);
};

export const dengarkanSuhuTanah = (callback) => {
  const onValueChange = refTanah.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback({
        suhuTanah: data.suhuTanah || 0,
      });
    }
  });

  return () => refTanah.off('value', onValueChange);
};

export const dengarkanKontrol = (callback) => {
  const onValueChange = refKontrol.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback({
        modeOtomatis: data.modeOtomatis !== undefined ? data.modeOtomatis : true,
        overrideManual: data.overrideManual || false,
      });
    }
  });

  return () => refKontrol.off('value', onValueChange);
};

export const dengarkanSetting = (callback) => {
  const onValueChange = refSetting.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback({
        batasKeringTanah: data.batasKeringTanah || 40,
        batasBasahTanah: data.batasBasahTanah || 65,
        waktuSiramMaksimal: data.waktuSiramMaksimal || 15,
      });
    }
  });

  return () => refSetting.off('value', onValueChange);
};

export const dengarkanSistem = (callback) => {
  const onValueChange = refSistem.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      callback({
        jumlahSensorAktif: data.jumlahSensorAktif || 0,
        uptime: data.uptime || 0,
        online: data.online || false,
      });
    }
  });

  return () => refSistem.off('value', onValueChange);
};

export const setOverrideManual = async (aktif) => {
  try {
    await refKontrol.update({ overrideManual: aktif });
    console.log(`[Firebase] Override manual: ${aktif ? 'ON' : 'OFF'}`);
  } catch (error) {
    console.error('[Firebase] Gagal set override:', error);
    throw error;
  }
};

export const setModeOtomatis = async (aktif) => {
  try {
    await refKontrol.update({ modeOtomatis: aktif });
    console.log(`[Firebase] Mode otomatis: ${aktif ? 'ON' : 'OFF'}`);
  } catch (error) {
    console.error('[Firebase] Gagal set mode:', error);
    throw error;
  }
};

export const simpanSetting = async (setting) => {
  try {
    await refSetting.update({
      batasKeringTanah: setting.batasKeringTanah,
      batasBasahTanah: setting.batasBasahTanah,
      waktuSiramMaksimal: setting.waktuSiramMaksimal,
    });
    console.log('[Firebase] Setting tersimpan:', setting);
  } catch (error) {
    console.error('[Firebase] Gagal simpan setting:', error);
    throw error;
  }
};

export const ambilSettingSaatIni = async () => {
  try {
    const snapshot = await refSetting.once('value');
    return snapshot.val() || {
      batasKeringTanah: 40,
      batasBasahTanah: 65,
      waktuSiramMaksimal: 15,
    };
  } catch (error) {
    console.error('[Firebase] Gagal ambil setting:', error);
    throw error;
  }
};

export default {
  dengarkanSemuaData,
  dengarkanSensorTanah,
  dengarkanStatusPompa,
  dengarkanDataUdara,
  dengarkanSuhuTanah,
  dengarkanKontrol,
  dengarkanSetting,
  dengarkanSistem,
  setOverrideManual,
  setModeOtomatis,
  simpanSetting,
  ambilSettingSaatIni,
};
