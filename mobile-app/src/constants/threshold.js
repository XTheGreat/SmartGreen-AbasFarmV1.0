export const THRESHOLD = {
  batasKeringTanah: 40,
  batasBasahTanah: 65,

  waktuSiramMaksimal: 15,

  warnaKering: '#EF4444',
  warnaNormal: '#22C55E',
  warnaBasah: '#3B82F6',

  suhuUdaraMin: 25,
  suhuUdaraMaks: 35,

  kelembabanUdaraMin: 60,
  kelembabanUdaraMaks: 80,
};

export const getWarnaKelembaban = (nilai, batasKering = THRESHOLD.batasKeringTanah, batasBasah = THRESHOLD.batasBasahTanah) => {
  if (nilai < batasKering) return THRESHOLD.warnaKering;
  if (nilai > batasBasah) return THRESHOLD.warnaBasah;
  return THRESHOLD.warnaNormal;
};

export const getLabelKelembaban = (nilai, batasKering = THRESHOLD.batasKeringTanah, batasBasah = THRESHOLD.batasBasahTanah) => {
  if (nilai < batasKering) return 'Kering';
  if (nilai > batasBasah) return 'Basah';
  return 'Normal';
};

export default THRESHOLD;
