import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, update, push, remove, query, limitToLast } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDy408fAd5Ux6ZfVwymp2_4KwCBMkCfqqg",
  databaseURL: "https://smart-greenhouse-85a01-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-greenhouse-85a01"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

signInWithEmailAndPassword(auth, "akusayangcyrene@example.com", "AkuSayangCyrene")
  .then(() => console.log("[Firebase] Web terautentikasi"))
  .catch((err) => console.warn("[Firebase] Auth warning:", err.message));

export const setModeOtomatisFB = (aktif) => {
  return set(ref(db, 'greenhouse/kontrol/modeOtomatis'), Boolean(aktif));
};

export const setOverrideManualFB = (aktif) => {
  return update(ref(db, 'greenhouse'), {
    'kontrol/overrideManual': Boolean(aktif),
    'pompa/statusPompa': Boolean(aktif)
  });
};

export const simpanSettingFB = (batasKering, batasBasah, waktuMaksimal) => {
  return update(ref(db, 'greenhouse/setting'), {
    batasKeringTanah: Number(batasKering),
    batasBasahTanah: Number(batasBasah),
    waktuSiramMaksimal: Number(waktuMaksimal)
  });
};

export const tambahLogRiwayatFB = (logEntry) => {
  return push(ref(db, 'greenhouse/riwayat'), logEntry);
};

export const hapusSemuaLogFB = () => {
  return set(ref(db, 'greenhouse/riwayat'), null);
};

export const onLogRiwayatChange = (callback) => {
  const riwayatRef = query(ref(db, 'greenhouse/riwayat'), limitToLast(50));
  return onValue(riwayatRef, (snapshot) => {
    const val = snapshot.val();
    if (!val) {
      callback(null);
      return;
    }
    const items = Object.keys(val).map((k) => ({
      ...val[k],
      firebaseKey: k
    })).sort((a, b) => (b.id || 0) - (a.id || 0));
    callback(items);
  }, (err) => {
    console.warn("[Firebase] Error reading riwayat:", err);
  });
};

export { ref, onValue, set, update, push, remove, query, limitToLast };

