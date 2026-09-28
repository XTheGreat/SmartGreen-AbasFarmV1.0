import React, { useState, useEffect, useRef } from 'react';
import aliraImg from './assets/alira.jpg';
import { db, setModeOtomatisFB, setOverrideManualFB, simpanSettingFB, ref, onValue, tambahLogRiwayatFB, hapusSemuaLogFB, onLogRiwayatChange } from './firebase';
import {
  LayoutDashboard,
  Radio,
  Settings,
  Droplets,
  Thermometer,
  Wind,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Power,
  Sliders,
  Activity,
  ChevronRight,
  Leaf,
  Cpu,
  Layers,
  Wifi,
  WifiOff,
  Sparkles,
  History,
  Clock,
  Trash2
} from 'lucide-react';

const C = {
  linen: '#F7F1E8',

  cardBg: '#D5BDAF',

  bannerBg: '#C4A48E',

  dark: '#2E241E',
  muted: '#6E5E54',

  darkAlmond: '#8C6853',
  darkSage: '#5C7359',
  darkSlate: '#4D6B7C',
  toastBg: '#2E241E',

  textLight: '#FFF8F0'
};

const CardShine = ({ top = '7px', right = '10px', opacity = 0.55 }) => (
  <svg
    width="28"
    height="12"
    viewBox="0 0 28 12"
    style={{
      position: 'absolute',
      top,
      right,
      pointerEvents: 'none',
      zIndex: 10
    }}
  >
    <circle cx="5" cy="5" r="1.5" fill="#FFF8F0" opacity={opacity} />
    <line x1="10" y1="5" x2="24" y2="5" stroke="#FFF8F0" strokeWidth="2.5" strokeLinecap="round" opacity={opacity} />
  </svg>
);

const CuteBackgroundDoodles = () => (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: '100%',
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 0
  }}>

    <svg
      width="110"
      height="110"
      viewBox="0 0 100 100"
      style={{
        position: 'absolute',
        top: '6px',
        right: '-18px',
        opacity: 1
      }}
    >

      {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => {
        const rad = (ang * Math.PI) / 180;
        const x1 = 50 + 33 * Math.cos(rad);
        const y1 = 50 + 33 * Math.sin(rad);
        const x2 = 50 + 43 * Math.cos(rad);
        const y2 = 50 + 43 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={C.dark}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}

      <circle
        cx="50"
        cy="50"
        r="28"
        fill="#FFE89E"
        stroke={C.dark}
        strokeWidth="2.5"
      />

      <path d="M 40 48 Q 43 44 46 48" fill="none" stroke={C.dark} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 54 48 Q 57 44 60 48" fill="none" stroke={C.dark} strokeWidth="2.2" strokeLinecap="round" />

      <path d="M 47 53 Q 50 58 53 53" fill="none" stroke={C.dark} strokeWidth="2" strokeLinecap="round" />

      <ellipse cx="37" cy="53" rx="3" ry="2" fill="#E8A388" opacity={1} />
      <ellipse cx="63" cy="53" rx="3" ry="2" fill="#E8A388" opacity={1} />
    </svg>

    <svg
      width="90"
      height="50"
      viewBox="0 0 90 50"
      style={{
        position: 'absolute',
        top: '170px',
        left: '-18px',
        opacity: 1
      }}
    >
      <path
        d="M 20 40 Q 10 40 10 30 Q 10 20 22 18 Q 28 8 44 8 Q 60 8 66 18 Q 78 18 80 28 Q 82 40 70 40 Z"
        fill="#FAF3EB"
        stroke={C.dark}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>

    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      style={{
        position: 'absolute',
        top: '115px',
        left: '26px',
        opacity: 1
      }}
    >
      <path
        d="M 12 2 Q 12 12 2 12 Q 12 12 12 22 Q 12 12 22 12 Q 12 12 12 2 Z"
        fill="#FFE89E"
        stroke={C.dark}
        strokeWidth="1.5"
      />
    </svg>

    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      style={{
        position: 'absolute',
        top: '320px',
        right: '16px',
        opacity: 1
      }}
    >
      <path
        d="M 10 2 Q 10 10 2 10 Q 10 10 10 18 Q 10 10 18 10 Q 10 10 10 2 Z"
        fill="#FAF3EB"
        stroke={C.dark}
        strokeWidth="1.5"
      />
    </svg>

    <svg
      width="82"
      height="46"
      viewBox="0 0 80 45"
      style={{
        position: 'absolute',
        top: '490px',
        right: '-24px',
        opacity: 1
      }}
    >
      <path
        d="M 18 36 Q 8 36 8 26 Q 8 18 20 16 Q 26 8 40 8 Q 54 8 60 16 Q 72 16 74 25 Q 74 36 62 36 Z"
        fill="#FAF3EB"
        stroke={C.dark}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>

    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      style={{
        position: 'absolute',
        top: '780px',
        right: '24px',
        opacity: 1
      }}
    >
      <path
        d="M 11 2 Q 11 11 2 11 Q 11 11 11 20 Q 11 11 20 11 Q 11 11 11 2 Z"
        fill="#FFE89E"
        stroke={C.dark}
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

export default function App() {
  const [tabAktif, setTabAktif] = useState('dashboard');
  const [catatanTerbuka, setCatatanTerbuka] = useState(false);

  const [modeOtomatis, setModeOtomatis] = useState(true);
  const [overrideManual, setOverrideManual] = useState(false);
  const [pompaHidup, setPompaHidup] = useState(false);
  const [cooldownAktif, setCooldownAktif] = useState(false);
  const [waktuSiramTerakhir, setWaktuSiramTerakhir] = useState('-');

  const [batasKering, setBatasKering] = useState(40);
  const [batasBasah, setBatasBasah] = useState(65);
  const [waktuMaksimal, setWaktuMaksimal] = useState(15);
  const [zonaFilter, setZonaFilter] = useState('semua');

  const [suhuUdara, setSuhuUdara] = useState(0);
  const [kelembabanUdara, setKelembabanUdara] = useState(0);
  const [suhuTanah, setSuhuTanah] = useState(0);
  const [isOnline, setIsOnline] = useState(false);
  const [uptime, setUptime] = useState(0);
  const [jumlahSensorAktif, setJumlahSensorAktif] = useState(18);
  const [notifikasi, setNotifikasi] = useState('');

  const [sensorValues, setSensorValues] = useState({
    depan: [0, 0, 0, 0, 0, 0],
    tengah: [0, 0, 0, 0, 0, 0],
    belakang: [0, 0, 0, 0, 0, 0]
  });

  const lastDataReceivedRef = useRef(0);

  useEffect(() => {
    const unsub = onValue(ref(db, 'greenhouse'), (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setIsOnline(false);
        return;
      }

      lastDataReceivedRef.current = Date.now();

      if (data.sistem) {
        if (data.sistem.online === false) {
          setIsOnline(false);
        } else {
          setIsOnline(true);
        }
        if (data.sistem.uptime !== undefined) setUptime(Number(data.sistem.uptime));
        if (data.sistem.jumlahSensorAktif !== undefined) setJumlahSensorAktif(Number(data.sistem.jumlahSensorAktif));
      } else {
        setIsOnline(true);
      }

      if (data.udara) {
        if (data.udara.suhuUdara !== undefined) setSuhuUdara(Number(data.udara.suhuUdara));
        if (data.udara.kelembabanUdara !== undefined) setKelembabanUdara(Number(data.udara.kelembabanUdara));
      }

      if (data.tanah && data.tanah.suhuTanah !== undefined) {
        setSuhuTanah(Number(data.tanah.suhuTanah));
      }

      if (data.pompa) {
        if (data.pompa.statusPompa !== undefined) setPompaHidup(Boolean(data.pompa.statusPompa));
        if (data.pompa.cooldownAktif !== undefined) setCooldownAktif(Boolean(data.pompa.cooldownAktif));
        if (data.pompa.waktuSiramTerakhir) setWaktuSiramTerakhir(String(data.pompa.waktuSiramTerakhir));
      }

      if (data.sensor) {
        const d = [];
        const t = [];
        const b = [];
        for (let i = 0; i < 6; i++) {
          d.push(data.sensor[`depan${i}`] !== undefined ? Math.round(data.sensor[`depan${i}`]) : 0);
          t.push(data.sensor[`tengah${i}`] !== undefined ? Math.round(data.sensor[`tengah${i}`]) : 0);
          b.push(data.sensor[`belakang${i}`] !== undefined ? Math.round(data.sensor[`belakang${i}`]) : 0);
        }
        setSensorValues({ depan: d, tengah: t, belakang: b });
      }

      if (data.setting) {
        if (data.setting.batasKeringTanah !== undefined) setBatasKering(Number(data.setting.batasKeringTanah));
        if (data.setting.batasBasahTanah !== undefined) setBatasBasah(Number(data.setting.batasBasahTanah));
        if (data.setting.waktuSiramMaksimal !== undefined) setWaktuMaksimal(Number(data.setting.waktuSiramMaksimal));
      }

      if (data.kontrol) {
        if (data.kontrol.modeOtomatis !== undefined) setModeOtomatis(Boolean(data.kontrol.modeOtomatis));
        if (data.kontrol.overrideManual !== undefined) setOverrideManual(Boolean(data.kontrol.overrideManual));
      }
    });

    const heartbeatChecker = setInterval(() => {
      if (lastDataReceivedRef.current > 0 && Date.now() - lastDataReceivedRef.current > 12000) {
        setIsOnline(false);
      }
    }, 3000);

    const handleBrowserOnline = () => {
      if (lastDataReceivedRef.current > 0 && Date.now() - lastDataReceivedRef.current < 12000) {
        setIsOnline(true);
      }
    };
    const handleBrowserOffline = () => setIsOnline(false);

    window.addEventListener('online', handleBrowserOnline);
    window.addEventListener('offline', handleBrowserOffline);

    return () => {
      unsub();
      clearInterval(heartbeatChecker);
      window.removeEventListener('online', handleBrowserOnline);
      window.removeEventListener('offline', handleBrowserOffline);
    };
  }, []);

  const formatUptime = (detik) => {
    if (!detik) return '0d';
    const jam = Math.floor(detik / 3600);
    const menit = Math.floor((detik % 3600) / 60);
    const d = detik % 60;
    if (jam > 0) return `${jam}j ${menit}m ${d}d`;
    if (menit > 0) return `${menit}m ${d}d`;
    return `${d}d`;
  };

  const avgDepan = sensorValues.depan.reduce((a, b) => a + b, 0) / 6;
  const avgTengah = sensorValues.tengah.reduce((a, b) => a + b, 0) / 6;
  const avgBelakang = sensorValues.belakang.reduce((a, b) => a + b, 0) / 6;
  const avgTotal = (avgDepan + avgTengah + avgBelakang) / 3;

  const isPompaAktif = Boolean(modeOtomatis ? pompaHidup : overrideManual);

  const initialLogs = [
    {
      id: 1,
      tipe: 'off',
      waktu: '10:45:15',
      tanggal: 'Hari ini',
      keterangan: 'Penyiraman Selesai',
      mode: 'Otomatis',
      kelembaban: 66.2,
      durasi: '18 dtk'
    },
    {
      id: 2,
      tipe: 'on',
      waktu: '10:44:57',
      tanggal: 'Hari ini',
      keterangan: 'Pompa Menyala (Penyiraman Dimulai)',
      mode: 'Otomatis',
      kelembaban: 37.8,
      durasi: '-'
    },
    {
      id: 3,
      tipe: 'off',
      waktu: '08:30:10',
      tanggal: 'Hari ini',
      keterangan: 'Penyiraman Selesai',
      mode: 'Manual',
      kelembaban: 65.0,
      durasi: '12 dtk'
    },
    {
      id: 4,
      tipe: 'on',
      waktu: '08:29:58',
      tanggal: 'Hari ini',
      keterangan: 'Pompa Menyala (Siram Manual)',
      mode: 'Manual',
      kelembaban: 39.1,
      durasi: '-'
    }
  ];

  const [logHistory, setLogHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('greenhouse_pump_logs');
      return saved !== null ? JSON.parse(saved) : initialLogs;
    } catch {
      return initialLogs;
    }
  });

  useEffect(() => {
    const unsubRiwayat = onLogRiwayatChange((remoteLogs) => {
      if (remoteLogs && Array.isArray(remoteLogs) && remoteLogs.length > 0) {
        setLogHistory(remoteLogs);
        try { localStorage.setItem('greenhouse_pump_logs', JSON.stringify(remoteLogs)); } catch { }
      }
    });
    return () => {
      if (typeof unsubRiwayat === 'function') unsubRiwayat();
    };
  }, []);

  const prevPompaRef = useRef(isPompaAktif);
  const pumpStartTimeRef = useRef(null);

  useEffect(() => {
    if (prevPompaRef.current === isPompaAktif) return;

    const now = new Date();
    const waktuStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    if (isPompaAktif) {
      pumpStartTimeRef.current = Date.now();
      const newEntry = {
        id: Date.now(),
        tipe: 'on',
        waktu: waktuStr,
        tanggal: 'Hari ini',
        keterangan: modeOtomatis ? 'Pompa Menyala (Penyiraman Otomatis)' : 'Pompa Menyala (Penyiraman Manual)',
        mode: modeOtomatis ? 'Otomatis' : 'Manual',
        kelembaban: Number(avgTotal.toFixed(1)),
        durasi: '-'
      };
      setLogHistory((prev) => {
        const updated = [newEntry, ...prev.filter((p) => p.id !== newEntry.id)].slice(0, 50);
        try { localStorage.setItem('greenhouse_pump_logs', JSON.stringify(updated)); } catch { }
        return updated;
      });
      tambahLogRiwayatFB(newEntry).catch(() => { });
    } else {
      let durasiStr = '-';
      if (pumpStartTimeRef.current) {
        const sec = Math.max(1, Math.round((Date.now() - pumpStartTimeRef.current) / 1000));
        durasiStr = `${sec} dtk`;
        pumpStartTimeRef.current = null;
      }
      const newEntry = {
        id: Date.now(),
        tipe: 'off',
        waktu: waktuStr,
        tanggal: 'Hari ini',
        keterangan: 'Pompa Dimatikan (Penyiraman Selesai)',
        mode: modeOtomatis ? 'Otomatis' : 'Manual',
        kelembaban: Number(avgTotal.toFixed(1)),
        durasi: durasiStr
      };
      setLogHistory((prev) => {
        const updated = [newEntry, ...prev.filter((p) => p.id !== newEntry.id)].slice(0, 50);
        try { localStorage.setItem('greenhouse_pump_logs', JSON.stringify(updated)); } catch { }
        return updated;
      });
      tambahLogRiwayatFB(newEntry).catch(() => { });
    }

    prevPompaRef.current = isPompaAktif;
  }, [isPompaAktif, modeOtomatis, avgTotal]);

  const [animPhase, setAnimPhase] = useState('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [gaugeAnimVal, setGaugeAnimVal] = useState(0);

  const animTimerRef = useRef([]);
  const playedTabsRef = useRef(new Set());

  const clearAnimTimers = () => {
    animTimerRef.current.forEach((t) => clearTimeout(t));
    animTimerRef.current = [];
  };

  const triggerPageAnimation = (targetTab) => {
    clearAnimTimers();
    playedTabsRef.current.add(targetTab);
    setIsAnimating(true);
    setAnimPhase('start');
    setGaugeAnimVal(0);

    const t1 = setTimeout(() => {
      setAnimPhase('sweep-up');
    }, 30);
    animTimerRef.current.push(t1);

    const startUpTime = Date.now();
    const countUpInterval = setInterval(() => {
      const elapsed = Date.now() - startUpTime;
      const p = Math.min(elapsed / 520, 1);
      setGaugeAnimVal(Number((p * 100).toFixed(1)));
      if (p >= 1) clearInterval(countUpInterval);
    }, 30);

    const t2 = setTimeout(() => {
      clearInterval(countUpInterval);
      setAnimPhase('sweep-down');

      const targetReal = Number(avgTotal || 0);
      const startDownTime = Date.now();
      const countDownInterval = setInterval(() => {
        const elapsed = Date.now() - startDownTime;
        const p = Math.min(elapsed / 580, 1);
        const current = 100 - p * (100 - targetReal);
        setGaugeAnimVal(Number(current.toFixed(1)));
        if (p >= 1) clearInterval(countDownInterval);
      }, 30);
    }, 580);
    animTimerRef.current.push(t2);

    const t3 = setTimeout(() => {
      setAnimPhase('idle');
      setIsAnimating(false);
    }, 1250);
    animTimerRef.current.push(t3);
  };

  useEffect(() => {
    triggerPageAnimation('dashboard');
    return () => clearAnimTimers();
  }, []);

  const [riwayatGrafik, setRiwayatGrafik] = useState(() =>
    Array.from({ length: 10 }, () => ({
      depan: 0,
      tengah: 0,
      belakang: 0
    }))
  );

  useEffect(() => {
    setRiwayatGrafik((prev) => {
      const titikBaru = {
        depan: Number(avgDepan.toFixed(1)),
        tengah: Number(avgTengah.toFixed(1)),
        belakang: Number(avgBelakang.toFixed(1))
      };
      return [...prev.slice(1), titikBaru];
    });
  }, [avgDepan, avgTengah, avgBelakang]);

  const generatePoints = (key) => {
    return riwayatGrafik
      .map((item, idx) => {
        const x = Math.round((idx / (riwayatGrafik.length - 1)) * 300);
        const val = Math.max(0, Math.min(100, item[key] || 0));
        const y = Math.round(85 - (val / 100) * 70);
        return `${x},${y}`;
      })
      .join(' ');
  };

  const getStatusStyle = (val) => {
    if (val < batasKering) {
      return {
        bg: C.darkAlmond,
        text: C.textLight,
        label: 'Kering'
      };
    }
    if (val > batasBasah) {
      return {
        bg: C.darkSlate,
        text: C.textLight,
        label: 'Basah'
      };
    }
    return {
      bg: C.darkSage,
      text: C.textLight,
      label: 'Normal'
    };
  };

  const allSensors = [...sensorValues.depan, ...sensorValues.tengah, ...sensorValues.belakang];
  const countKering = allSensors.filter(v => v < batasKering).length;
  const countBasah = allSensors.filter(v => v > batasBasah).length;
  const countNormal = allSensors.length - countKering - countBasah;

  const showToast = (msg) => {
    setNotifikasi(msg);
    setTimeout(() => setNotifikasi(''), 3000);
  };

  const handleTabClick = (key) => {
    if (isAnimating || tabAktif === key) return;
    setTabAktif(key);
    if (!playedTabsRef.current.has(key)) {
      triggerPageAnimation(key);
    } else {
      setAnimPhase('idle');
      setIsAnimating(false);
    }
  };

  return (
    <div className="app-screen-container" style={{
      color: C.dark,
      fontFamily: "'Nunito', sans-serif"
    }}>

      {isAnimating && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 9999,
            cursor: 'not-allowed',
            userSelect: 'none'
          }}
        />
      )}

      {notifikasi && (
        <div style={{
          position: 'absolute',
          bottom: '96px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#FAF3EB',
          color: C.dark,
          padding: '8px 18px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '800',
          fontFamily: "'Fredoka', sans-serif",
          boxShadow: '3px 3px 0px #2E241E',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: `2px solid ${C.dark}`,
          whiteSpace: 'nowrap',
          animation: 'toastSlideUp 0.25s cubic-bezier(0.34, 1.25, 0.64, 1)',
          pointerEvents: 'none'
        }}>
          <CheckCircle2 size={16} color={C.darkSage} />
          {notifikasi}
        </div>
      )}

      <div style={{
        flexShrink: 0,
        padding: '20px 24px 14px',
        backgroundColor: C.cardBg,
        borderBottom: `3px solid ${C.dark}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 30
      }}>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px', color: C.dark, fontFamily: "'Fredoka', sans-serif", margin: 0 }}>
            <Leaf size={20} color={C.dark} fill={C.dark} /> Smart Greenhouse
          </h1>
          <p style={{ fontSize: '11px', color: C.muted, marginTop: '2px', fontWeight: '700' }}>AbasFarm v1.0</p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: isOnline ? C.darkSage : C.darkAlmond,
            color: C.textLight,
            padding: '5px 10px',
            borderRadius: '8px',
            cursor: 'default',
            userSelect: 'none',
            border: `2px solid ${C.dark}`,
            boxShadow: '2px 2px 0px #2E241E',
            transition: 'background-color 0.3s ease'
          }}
        >
          {isOnline ? (
            <Wifi size={14} color={C.textLight} />
          ) : (
            <WifiOff size={14} color={C.textLight} />
          )}
          <span style={{ fontSize: '11px', fontWeight: '800' }}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '20px',
        position: 'relative'
      }}>

        <CuteBackgroundDoodles />

        {tabAktif === 'dashboard' && (
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div
              onClick={() => setCatatanTerbuka(!catatanTerbuka)}
              style={{
                position: 'relative',
                backgroundColor: C.cardBg,
                borderRadius: '14px',
                border: `3px solid ${C.dark}`,
                boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E',
                padding: '14px 16px',
                marginTop: '16px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '62px',
                overflow: 'visible',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                userSelect: 'none'
              }}
            >
              <CardShine />
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-8px',
                  width: '52px',
                  height: '52px',
                  borderRadius: '13px',
                  border: `2.5px solid ${C.dark}`,
                  boxShadow: '2.5px 2.5px 0px #2E241E',
                  backgroundColor: '#FAF3EB',
                  overflow: 'hidden',
                  zIndex: 5
                }}
              >
                <img
                  src={aliraImg}
                  alt="ALIRA"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: '4px',
                  width: '16px',
                  height: '5px',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  pointerEvents: 'none'
                }} />
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                paddingLeft: '40px'
              }}>
                <div>
                  <div style={{
                    fontSize: '17px',
                    fontWeight: '800',
                    color: C.dark,
                    fontFamily: "'Fredoka', sans-serif",
                    letterSpacing: '0.3px',
                    lineHeight: '1.2'
                  }}>
                    ALIRA
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: C.muted,
                    marginTop: '2px',
                    lineHeight: '1.3',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>Lihat catatan</span>
                  </div>
                </div>

                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF3EB',
                  border: `1.5px solid ${C.dark}`,
                  boxShadow: '1px 1px 0px #2E241E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.35s cubic-bezier(0.34, 1.25, 0.64, 1)',
                  transform: catatanTerbuka ? 'rotate(90deg)' : 'rotate(0deg)'
                }}>
                  <ChevronRight size={14} color={C.dark} />
                </div>
              </div>

              <div style={{
                maxHeight: catatanTerbuka ? '300px' : '0px',
                opacity: catatanTerbuka ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease',
                marginTop: catatanTerbuka ? '12px' : '0px',
                width: '100%'
              }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: '#FAF3EB',
                  borderRadius: '10px',
                  border: `2px solid ${C.dark}`,
                  boxShadow: '2px 2px 0px #2E241E',
                  fontSize: '11px',
                  lineHeight: '1.6',
                  color: C.dark,
                  fontWeight: '600'
                }}>
                  ALIRA merupakan kepanjangan dari <strong>Aksi Lingkungan Irigasi Ramah Alam</strong>, merupakan kelompok pemuda institusi yang bergerak di bidang pertanian/perkebunan membantu menciptakan sistem irigasi cerdas ramah lingkungan berbasis IoT.
                </div>
              </div>
            </div>

            {(() => {
              const realPct = Math.min(100, Math.max(0, avgTotal)) / 100;
              const pct = animPhase === 'start'
                ? 0
                : animPhase === 'sweep-up'
                  ? 1
                  : realPct;
              const arcLength = 298.5;
              const dashOffset = arcLength * (1 - pct);
              const currentVal = animPhase === 'idle' ? avgTotal : gaugeAnimVal;
              const knobColor = currentVal < batasKering ? C.darkAlmond : currentVal > batasBasah ? C.darkSlate : C.darkSage;
              const statusText = currentVal < batasKering ? 'kering' : currentVal > batasBasah ? 'basah' : 'optimal';

              return (
                <div style={{
                  position: 'relative',
                  backgroundColor: C.cardBg,
                  borderRadius: '10px',
                  padding: '16px',
                  border: `3px solid ${C.dark}`,
                  boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E'
                }}>

                  <CardShine />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '13px', color: C.dark, fontWeight: '800' }}>
                        Kelembaban tanah rata-rata
                      </div>
                      <div style={{ fontSize: '10px', color: C.muted, fontWeight: '700' }}>
                        18 sensor terhubung
                      </div>
                    </div>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: '800',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      border: `2px solid ${C.dark}`,
                      boxShadow: '1px 1px 0px #2E241E',
                      backgroundColor: knobColor,
                      color: C.textLight
                    }}>
                      {statusText}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0 10px' }}>
                    <svg width="280" height="160" viewBox="0 0 280 160" style={{ maxWidth: '100%', overflow: 'visible' }}>
                      <defs>
                        <linearGradient id="moisturePastelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#F6B17A" />
                          <stop offset="28%" stopColor="#F9D976" />
                          <stop offset="60%" stopColor="#80B996" />
                          <stop offset="100%" stopColor="#6C9BCF" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 45 132 A 95 95 0 0 1 235 132"
                        fill="none"
                        stroke={C.dark}
                        strokeWidth="20"
                        strokeLinecap="round"
                      />

                      <path
                        d="M 45 132 A 95 95 0 0 1 235 132"
                        fill="none"
                        stroke="#F5EBE0"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />

                      <path
                        d="M 45 132 A 95 95 0 0 1 235 132"
                        fill="none"
                        stroke="url(#moisturePastelGrad)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={arcLength}
                        strokeDashoffset={dashOffset}
                        style={{ transition: 'stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)' }}
                      />

                      <g
                        style={{
                          transformOrigin: '140px 132px',
                          transformBox: 'view-box',
                          transform: `rotate(${pct * 180}deg)`,
                          transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        <circle
                          cx="45"
                          cy="132"
                          r="11.5"
                          fill={knobColor}
                          stroke={C.dark}
                          strokeWidth="3"
                        />
                        <circle
                          cx="42.2"
                          cy="129.2"
                          r="3.2"
                          fill="#FFF8F0"
                          opacity="0.9"
                        />
                      </g>

                      <text
                        x="140"
                        y="100"
                        textAnchor="middle"
                        fill={C.dark}
                        style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '36px', fontWeight: '700' }}
                      >
                        {(animPhase === 'idle' ? avgTotal : gaugeAnimVal).toFixed(1)}%
                      </text>

                      <text
                        x="140"
                        y="118"
                        textAnchor="middle"
                        fill={C.muted}
                        style={{ fontSize: '11px', fontWeight: '800' }}
                      >
                        kelembaban tanah
                      </text>

                      <text
                        x="42"
                        y="154"
                        textAnchor="middle"
                        fill={C.muted}
                        style={{ fontSize: '10px', fontWeight: '800' }}
                      >
                        0%
                      </text>
                      <text
                        x="238"
                        y="154"
                        textAnchor="middle"
                        fill={C.muted}
                        style={{ fontSize: '10px', fontWeight: '800' }}
                      >
                        100%
                      </text>
                    </svg>
                  </div>

                  <div style={{ marginTop: '8px', paddingTop: '12px', borderTop: `2px dashed ${C.dark}`, display: 'flex', justifyContent: 'center' }}>
                    <svg
                      width="100%"
                      height="54"
                      viewBox="0 0 320 54"
                      style={{
                        maxWidth: '340px',
                        overflow: 'visible',
                        filter: 'drop-shadow(2px 2px 0px #2E241E)'
                      }}
                    >

                      <polygon
                        points="26,4 120,4 98,50 4,50"
                        fill={C.darkAlmond}
                        stroke={C.dark}
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />

                      <polygon
                        points="120,4 214,4 192,50 98,50"
                        fill={C.darkSage}
                        stroke={C.dark}
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />

                      <polygon
                        points="214,4 308,4 286,50 192,50"
                        fill={C.darkSlate}
                        stroke={C.dark}
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />

                      <text x="62" y="22" textAnchor="middle" fill={C.textLight} opacity="0.9" style={{ fontSize: '10px', fontWeight: '800' }}>
                        depan
                      </text>
                      <text x="62" y="41" textAnchor="middle" fill={C.textLight} style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '15px', fontWeight: '700' }}>
                        {avgDepan.toFixed(1)}%
                      </text>

                      <text x="156" y="22" textAnchor="middle" fill={C.textLight} opacity="0.9" style={{ fontSize: '10px', fontWeight: '800' }}>
                        tengah
                      </text>
                      <text x="156" y="41" textAnchor="middle" fill={C.textLight} style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '15px', fontWeight: '700' }}>
                        {avgTengah.toFixed(1)}%
                      </text>

                      <text x="250" y="22" textAnchor="middle" fill={C.textLight} opacity="0.9" style={{ fontSize: '10px', fontWeight: '800' }}>
                        belakang
                      </text>
                      <text x="250" y="41" textAnchor="middle" fill={C.textLight} style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '15px', fontWeight: '700' }}>
                        {avgBelakang.toFixed(1)}%
                      </text>
                    </svg>
                  </div>
                </div>
              );
            })()}

            <div style={{
              position: 'relative',
              backgroundColor: isPompaAktif ? C.bannerBg : C.cardBg,
              borderRadius: '10px',
              padding: '20px',
              border: `3px solid ${C.dark}`,
              boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'background-color 0.25s ease'
            }}>

              <CardShine />
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: isPompaAktif ? C.darkSage : C.dark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `3px solid ${C.dark}`,
                boxShadow: '3px 3px 0px #2E241E',
                marginBottom: '12px',
                transition: 'all 0.25s ease'
              }}>
                <Droplets size={40} color={C.textLight} />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: C.dark, letterSpacing: '0.5px', fontFamily: "'Fredoka', sans-serif", margin: 0, transition: 'color 0.25s ease' }}>
                {isPompaAktif ? 'Pompa Siram Aktif' : (cooldownAktif && modeOtomatis ? 'Pompa Mati (Cooldown)' : 'Pompa Mati')}
              </h2>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
                <p style={{ fontSize: '12px', color: C.muted, margin: 0, fontWeight: '700' }}>
                  Terakhir siram: {waktuSiramTerakhir && waktuSiramTerakhir !== '-' ? waktuSiramTerakhir : (logHistory.length > 0 ? logHistory[0].waktu : '-')}
                </p>
                {cooldownAktif && !isPompaAktif && modeOtomatis && (
                  <span style={{ fontSize: '11px', fontWeight: '800', color: C.darkAlmond, fontFamily: "'Fredoka', sans-serif" }}>
                    Cooldown Aktif
                  </span>
                )}
                {isPompaAktif && (
                  <span style={{ fontSize: '11px', fontWeight: '800', color: C.darkSage, fontFamily: "'Fredoka', sans-serif" }}>
                    Menyiram
                  </span>
                )}
              </div>

              <div style={{ width: '100%', marginTop: '16px', paddingTop: '16px', borderTop: `2px dashed ${C.dark}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: C.dark }}>Mode Otomatis</div>
                    <div style={{ fontSize: '11px', color: C.muted, fontWeight: '700' }}>
                      {modeOtomatis ? 'Menyiram otomatis sesuai sensor' : 'Kontrol manual via tombol'}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const baru = !modeOtomatis;
                      setModeOtomatis(baru);
                      setModeOtomatisFB(baru);
                      showToast(`Mode Otomatis: ${baru ? 'ON' : 'OFF'}`);
                    }}
                    style={{
                      width: '52px',
                      height: '28px',
                      borderRadius: '8px',
                      backgroundColor: modeOtomatis ? C.darkSage : C.darkAlmond,
                      border: `2px solid ${C.dark}`,
                      boxShadow: '2px 2px 0px #2E241E',
                      cursor: 'pointer',
                      position: 'relative',
                      transition: 'background-color 0.2s',
                      flexShrink: 0
                    }}
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: C.textLight,
                      position: 'absolute',
                      top: '2px',
                      left: modeOtomatis ? '26px' : '2px',
                      transition: 'left 0.2s'
                    }} />
                  </button>
                </div>

                {modeOtomatis ? (
                  <p style={{ fontSize: '11px', color: C.muted, marginTop: '10px', textAlign: 'center', fontWeight: '700', lineHeight: '1.4' }}>
                    Pompa menyala otomatis jika kelembaban tanah &lt; {batasKering}%. Ubah switch ke manual jika ingin menyalakan langsung dari web.
                  </p>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      marginTop: '12px',
                      backgroundColor: '#FAF3EB',
                      borderRadius: '10px',
                      border: `2px solid ${C.dark}`,
                      padding: '12px',
                      boxShadow: 'inset 1px 1px 0px rgba(255, 255, 255, 0.6), 2px 2px 0px #2E241E',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', fontWeight: '800', color: C.dark, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Power size={14} color={overrideManual ? C.darkAlmond : C.muted} />
                        Kontrol Pompa Manual
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: '900',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          border: `1.5px solid ${C.dark}`,
                          backgroundColor: overrideManual ? C.darkSage : C.darkAlmond,
                          color: C.textLight
                        }}
                      >
                        {overrideManual ? 'Pompa Nyala' : 'Pompa Mati'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        const baru = !overrideManual;
                        setOverrideManual(baru);
                        setOverrideManualFB(baru);
                        setPompaHidup(baru);
                        showToast(`Pompa Manual: ${baru ? 'ON' : 'OFF'}`);
                      }}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '8px',
                        backgroundColor: overrideManual ? C.darkAlmond : C.darkSage,
                        color: C.textLight,
                        border: `2px solid ${C.dark}`,
                        boxShadow: '0 3px 0px #2E241E',
                        fontWeight: '800',
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        fontFamily: "'Fredoka', sans-serif"
                      }}
                    >
                      <Power size={16} />
                      {overrideManual ? 'Matikan Pompa Manual' : 'Nyalakan Pompa Manual'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div style={{
                position: 'relative',
                backgroundColor: C.cardBg,
                borderRadius: '26px 26px 8px 8px',
                padding: '14px 8px 12px',
                textAlign: 'center',
                border: `2.5px solid ${C.dark}`,
                boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 3px 3px 0px #2E241E'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF3EB',
                  border: `2px solid ${C.dark}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 6px',
                  boxShadow: '1.5px 1.5px 0px #2E241E'
                }}>
                  <Thermometer size={18} color={C.dark} />
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: C.dark, fontFamily: "'Fredoka', sans-serif" }}>
                  {suhuUdara.toFixed(1)}°C
                </div>
                <div style={{ fontSize: '10px', color: C.muted, marginTop: '2px', fontWeight: '800' }}>
                  Suhu Udara
                </div>
              </div>

              <div style={{
                position: 'relative',
                backgroundColor: C.cardBg,
                borderRadius: '26px 8px 26px 8px',
                padding: '14px 8px 12px',
                textAlign: 'center',
                border: `2.5px solid ${C.dark}`,
                boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 3px 3px 0px #2E241E'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '14px 4px 14px 4px',
                  backgroundColor: '#FAF3EB',
                  border: `2px solid ${C.dark}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 6px',
                  boxShadow: '1.5px 1.5px 0px #2E241E'
                }}>
                  <Wind size={18} color={C.dark} />
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: C.dark, fontFamily: "'Fredoka', sans-serif" }}>
                  {kelembabanUdara.toFixed(1)}%
                </div>
                <div style={{ fontSize: '10px', color: C.muted, marginTop: '2px', fontWeight: '800' }}>
                  Kelembaban Air
                </div>
              </div>

              <div style={{
                position: 'relative',
                backgroundColor: C.cardBg,
                borderRadius: '8px 26px 8px 26px',
                padding: '14px 8px 12px',
                textAlign: 'center',
                border: `2.5px solid ${C.dark}`,
                boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 3px 3px 0px #2E241E'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px 14px 4px 14px',
                  backgroundColor: '#FAF3EB',
                  border: `2px solid ${C.dark}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 6px',
                  boxShadow: '1.5px 1.5px 0px #2E241E'
                }}>
                  <Thermometer size={18} color={C.dark} />
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: C.dark, fontFamily: "'Fredoka', sans-serif" }}>
                  {suhuTanah.toFixed(1)}°C
                </div>
                <div style={{ fontSize: '10px', color: C.muted, marginTop: '2px', fontWeight: '800' }}>
                  Suhu Tanah
                </div>
              </div>
            </div>

            <div style={{
              position: 'relative',
              backgroundColor: C.cardBg,
              borderRadius: '10px',
              padding: '16px',
              border: `3px solid ${C.dark}`,
              boxShadow: 'inset 1.5px 1.5px 0px rgba(255, 255, 255, 0.45), 4px 4px 0px #2E241E'
            }}>
              <CardShine />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '700', color: C.dark, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Fredoka', sans-serif" }}>
                  <Activity size={16} color={C.dark} /> Grafik Kelembaban Real-time
                </span>
                <span style={{ fontSize: '11px', color: C.muted, fontWeight: '800' }}>10 titik terakhir</span>
              </div>

              <div style={{
                height: '120px',
                width: '100%',
                position: 'relative',
                backgroundColor: '#FAF3EB',
                borderRadius: '8px',
                border: `2px solid ${C.dark}`,
                padding: '4px',
                boxSizing: 'border-box'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaDepan" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={C.darkAlmond} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={C.darkAlmond} stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="areaTengah" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={C.darkSage} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={C.darkSage} stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="areaBelakang" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={C.darkSlate} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={C.darkSlate} stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="20" x2="300" y2="20" stroke={C.dark} strokeDasharray="4" opacity="0.15" />
                  <line x1="0" y1="50" x2="300" y2="50" stroke={C.dark} strokeDasharray="4" opacity="0.15" />
                  <line x1="0" y1="80" x2="300" y2="80" stroke={C.dark} strokeDasharray="4" opacity="0.15" />

                  <polygon
                    points={`0,85 ${generatePoints('depan')} 300,85`}
                    fill="url(#areaDepan)"
                  />
                  <polygon
                    points={`0,85 ${generatePoints('tengah')} 300,85`}
                    fill="url(#areaTengah)"
                  />
                  <polygon
                    points={`0,85 ${generatePoints('belakang')} 300,85`}
                    fill="url(#areaBelakang)"
                  />

                  <polyline
                    fill="none"
                    stroke={C.darkAlmond}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={generatePoints('depan')}
                    style={{ transition: 'all 0.5s ease' }}
                  />
                  <polyline
                    fill="none"
                    stroke={C.darkSage}
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={generatePoints('tengah')}
                    style={{ transition: 'all 0.5s ease' }}
                  />
                  <polyline
                    fill="none"
                    stroke={C.darkSlate}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={generatePoints('belakang')}
                    style={{ transition: 'all 0.5s ease' }}
                  />

                  {(() => {
                    const last = riwayatGrafik[riwayatGrafik.length - 1];
                    const yD = Math.round(85 - (Math.max(0, Math.min(100, last.depan || 0)) / 100) * 70);
                    const yT = Math.round(85 - (Math.max(0, Math.min(100, last.tengah || 0)) / 100) * 70);
                    const yB = Math.round(85 - (Math.max(0, Math.min(100, last.belakang || 0)) / 100) * 70);
                    return (
                      <>
                        <circle cx="300" cy={yD} r="3.5" fill={C.darkAlmond} stroke={C.dark} strokeWidth="1.5" />
                        <circle cx="300" cy={yT} r="3.5" fill={C.darkSage} stroke={C.dark} strokeWidth="1.5" />
                        <circle cx="300" cy={yB} r="3.5" fill={C.darkSlate} stroke={C.dark} strokeWidth="1.5" />
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '12px' }}>
                <div style={{
                  backgroundColor: C.darkAlmond,
                  color: C.textLight,
                  padding: '7px 4px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontWeight: '800',
                  fontSize: '11px',
                  border: `2px solid ${C.dark}`,
                  boxShadow: '2px 2px 0px #2E241E',
                  fontFamily: "'Fredoka', sans-serif"
                }}>
                  Depan: {avgDepan.toFixed(1)}%
                </div>
                <div style={{
                  backgroundColor: C.darkSage,
                  color: C.textLight,
                  padding: '7px 4px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontWeight: '800',
                  fontSize: '11px',
                  border: `2px solid ${C.dark}`,
                  boxShadow: '2px 2px 0px #2E241E',
                  fontFamily: "'Fredoka', sans-serif"
                }}>
                  Tengah: {avgTengah.toFixed(1)}%
                </div>
                <div style={{
                  backgroundColor: C.darkSlate,
                  color: C.textLight,
                  padding: '7px 4px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontWeight: '800',
                  fontSize: '11px',
                  border: `2px solid ${C.dark}`,
                  boxShadow: '2px 2px 0px #2E241E',
                  fontFamily: "'Fredoka', sans-serif"
                }}>
                  Belakang: {avgBelakang.toFixed(1)}%
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: C.cardBg, borderRadius: '10px', padding: '14px', border: `2px solid ${C.dark}`, boxShadow: '3px 3px 0px #2E241E', fontSize: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', borderBottom: `1px dashed ${C.dark}` }}>
                <span style={{ color: C.muted, fontWeight: '800' }}>Sensor Aktif</span>
                <span style={{ fontWeight: '800', color: C.darkSage }}>{jumlahSensorAktif} / 18 Online</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
                <span style={{ color: C.muted, fontWeight: '800' }}>Uptime ESP32</span>
                <span style={{ fontWeight: '800', color: C.dark }}>{formatUptime(uptime)}</span>
              </div>
            </div>

          </div>
        )}

        {tabAktif === 'sensor' && (
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: C.dark, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Fredoka', sans-serif", margin: 0 }}>
                <Cpu size={22} color={C.dark} /> Detail 18 Sensor Tanah
              </h2>
              <p style={{ fontSize: '11px', color: C.muted, marginTop: '2px', fontWeight: '700' }}>
                Dikelompokkan per zona (Depan, Tengah, Belakang)
              </p>
            </div>

            <div style={{
              backgroundColor: C.cardBg,
              borderRadius: '20px',
              border: `2px solid ${C.dark}`,
              boxShadow: '4px 4px 0px #2E241E',
              padding: '20px 16px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <CardShine top="8px" right="12px" />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                {[
                  { label: 'Kering', count: countKering, color: C.darkAlmond, sub: `<${batasKering}%` },
                  { label: 'Normal', count: countNormal, color: C.darkSage, sub: 'optimal' },
                  { label: 'Basah', count: countBasah, color: C.darkSlate, sub: `>${batasBasah}%` }
                ].map((item, i) => {
                  const realPct = allSensors.length > 0 ? (item.count / allSensors.length) * 100 : 0;
                  const pct = animPhase === 'start' ? 0 : animPhase === 'sweep-up' ? 100 : realPct;
                  const radius = 32;
                  const circumference = 2 * Math.PI * radius;
                  const offset = circumference - (pct / 100) * circumference;
                  return (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                      <div style={{ position: 'relative', width: '78px', height: '78px' }}>
                        <svg width="78" height="78" viewBox="0 0 78 78">
                          <circle cx="39" cy="39" r={radius} fill="none" stroke={C.linen} strokeWidth="7" />
                          <circle
                            cx="39" cy="39" r={radius} fill="none"
                            stroke={item.color} strokeWidth="7"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform="rotate(-90 39 39)"
                            style={{ transition: 'stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)' }}
                          />
                        </svg>
                        <div style={{
                          position: 'absolute', top: '50%', left: '50%',
                          transform: 'translate(-50%, -50%)',
                          textAlign: 'center'
                        }}>
                          <div style={{ fontSize: '20px', fontWeight: '700', color: item.color, fontFamily: "'Fredoka', sans-serif", lineHeight: 1 }}>
                            {animPhase === 'sweep-up' ? allSensors.length : item.count}
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: '800', color: C.dark, marginTop: '6px', fontFamily: "'Fredoka', sans-serif" }}>{item.label}</div>
                      <div style={{ fontSize: '9px', fontWeight: '700', color: C.muted }}>{item.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
              {['semua', 'depan', 'tengah', 'belakang'].map((z) => (
                <button
                  key={z}
                  onClick={() => setZonaFilter(z)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: zonaFilter === z ? C.dark : C.cardBg,
                    color: zonaFilter === z ? C.textLight : C.dark,
                    border: `2px solid ${C.dark}`,
                    boxShadow: zonaFilter === z ? '2px 2px 0px #2E241E' : 'none',
                    fontSize: '12px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    fontFamily: "'Fredoka', sans-serif"
                  }}
                >
                  {z}
                </button>
              ))}
            </div>

            {['depan', 'tengah', 'belakang'].map((zonaKey, zonaIdx) => {
              if (zonaFilter !== 'semua' && zonaFilter !== zonaKey) return null;
              const values = sensorValues[zonaKey];
              const zoneAvg = values.reduce((a, b) => a + b, 0) / 6;
              const zoneLabel = zonaKey.charAt(0).toUpperCase() + zonaKey.slice(1);
              const zoneColor = C.bannerBg;

              const zoneShapes = [
                '28px 10px 28px 10px',
                '10px 28px 10px 28px',
                '28px 28px 10px 10px'
              ];

              const sensorShapeSets = [
                ['20px 6px 20px 6px', '6px 20px 6px 20px', '20px 20px 6px 6px', '6px 6px 20px 20px', '20px 6px 6px 20px', '6px 20px 20px 6px'],
                ['6px 6px 20px 20px', '20px 6px 6px 20px', '6px 20px 20px 6px', '20px 6px 20px 6px', '6px 20px 6px 20px', '20px 20px 6px 6px'],
                ['20px 20px 6px 6px', '6px 20px 20px 6px', '20px 6px 6px 20px', '6px 20px 6px 20px', '6px 6px 20px 20px', '20px 6px 20px 6px']
              ];

              const sensorShapes = sensorShapeSets[zonaIdx % sensorShapeSets.length];

              return (
                <div key={zonaKey} style={{
                  backgroundColor: C.cardBg,
                  borderRadius: zoneShapes[zonaIdx % zoneShapes.length],
                  border: `2px solid ${C.dark}`,
                  boxShadow: '4px 4px 0px #2E241E',
                  overflow: 'hidden',
                  marginBottom: '4px'
                }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${zoneColor}, ${zoneColor}dd)`,
                    padding: '10px 14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: `2px solid ${C.dark}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '10px',
                        backgroundColor: C.linen,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `1.5px solid ${C.dark}`,
                        boxShadow: '1.5px 1.5px 0px #2E241E'
                      }}>
                        <Layers size={16} color={C.dark} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: C.dark, fontFamily: "'Fredoka', sans-serif" }}>
                          Zona {zoneLabel}
                        </div>
                        <div style={{ fontSize: '9px', fontWeight: '700', color: C.muted }}>
                          6 sensor aktif
                        </div>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      backgroundColor: C.dark,
                      padding: '6px 12px', borderRadius: '10px',
                      border: `2px solid ${C.dark}`,
                      boxShadow: '2px 2px 0px #2E241E'
                    }}>
                      <Leaf size={12} color={C.textLight} />
                      <span style={{ fontSize: '14px', fontWeight: '800', color: C.textLight, fontFamily: "'Fredoka', sans-serif" }}>
                        {zoneAvg.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    padding: '10px'
                  }}>
                    {values.map((val, idx) => {
                      const styleInfo = getStatusStyle(val);
                      const realSensorPct = Math.min(100, Math.max(0, val));
                      const sensorPct = animPhase === 'start' ? 0 : animPhase === 'sweep-up' ? 100 : realSensorPct;
                      const arcRadius = 28;
                      const arcCircumference = Math.PI * arcRadius;
                      const arcOffset = arcCircumference - (sensorPct / 100) * arcCircumference;

                      return (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: C.linen,
                            borderRadius: sensorShapes[idx % sensorShapes.length],
                            padding: '12px 8px 10px',
                            border: `1.5px solid ${C.dark}`,
                            boxShadow: '2px 2px 0px #2E241E',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            position: 'relative'
                          }}
                        >
                          <div style={{ position: 'relative', width: '68px', height: '38px' }}>
                            <svg width="68" height="38" viewBox="0 0 62 38">
                              <path
                                d={`M 3 35 A ${arcRadius} ${arcRadius} 0 0 1 59 35`}
                                fill="none" stroke={C.cardBg} strokeWidth="5" strokeLinecap="round"
                              />
                              <path
                                d={`M 3 35 A ${arcRadius} ${arcRadius} 0 0 1 59 35`}
                                fill="none" stroke={zoneColor} strokeWidth="5" strokeLinecap="round"
                                strokeDasharray={arcCircumference}
                                strokeDashoffset={arcOffset}
                                style={{ transition: 'stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1)' }}
                              />
                            </svg>
                            <div style={{
                              position: 'absolute', bottom: '0px', left: '50%',
                              transform: 'translateX(-50%)',
                              fontSize: '15px', fontWeight: '700',
                              color: C.dark, fontFamily: "'Fredoka', sans-serif",
                              lineHeight: 1
                            }}>
                              {animPhase === 'sweep-up' ? 100 : val}%
                            </div>
                          </div>

                          <div style={{
                            fontSize: '9px', fontWeight: '800', color: C.muted,
                            textAlign: 'center', lineHeight: 1.2
                          }}>
                            #{idx + 1}
                          </div>

                          <div style={{
                            fontSize: '8px', fontWeight: '800',
                            backgroundColor: styleInfo.bg, color: styleInfo.text,
                            padding: '2px 6px', borderRadius: '4px',
                            lineHeight: 1.2
                          }}>
                            {styleInfo.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {tabAktif === 'setting' && (() => {
          const dispBatasKering = animPhase === 'start' ? 10 : animPhase === 'sweep-up' ? 60 : batasKering;
          const dispBatasBasah = animPhase === 'start' ? 50 : animPhase === 'sweep-up' ? 90 : batasBasah;

          const keringPct = Math.min(100, Math.max(0, ((dispBatasKering - 10) / 50) * 100));
          const basahPct = Math.min(100, Math.max(0, ((dispBatasBasah - 50) / 40) * 100));

          return (
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: C.dark, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Fredoka', sans-serif", margin: 0 }}>
                  <Sliders size={22} color={C.dark} /> Konfigurasi Threshold
                </h2>
                <p style={{ fontSize: '11px', color: C.muted, marginTop: '2px', fontWeight: '700' }}>
                  Pengaturan batas kelembaban penyiraman otomatis
                </p>
              </div>

              <div style={{ backgroundColor: C.cardBg, borderRadius: '10px', padding: '16px', border: `2px solid ${C.dark}`, boxShadow: '3px 3px 0px #2E241E' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: C.dark }}>Batas Kering Tanah</span>
                  <span style={{ fontSize: '24px', fontWeight: '700', color: C.darkAlmond, fontFamily: "'Fredoka', sans-serif" }}>{dispBatasKering}%</span>
                </div>
                <p style={{ fontSize: '11px', color: C.muted, margin: '4px 0 12px', fontWeight: '700' }}>
                  Pompa menyala otomatis saat kelembaban <span style={{ color: C.darkAlmond, fontWeight: '900' }}>&lt; {dispBatasKering}%</span>
                </p>

                <div style={{ position: 'relative', width: '100%', height: '26px', display: 'flex', alignItems: 'center', margin: '6px 0' }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '10px',
                    backgroundColor: C.linen,
                    borderRadius: '6px',
                    border: `2px solid ${C.dark}`,
                    boxShadow: 'inset 1px 1px 0px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${keringPct}%`,
                      backgroundColor: C.darkAlmond,
                      borderRadius: '4px',
                      transition: 'width 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                  </div>

                  <div style={{
                    position: 'absolute',
                    left: `calc(${keringPct}% - 11px)`,
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: C.dark,
                    border: `2px solid ${C.dark}`,
                    boxShadow: '1.5px 1.5px 0px #2E241E',
                    transition: 'left 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: C.textLight }} />
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={dispBatasKering}
                    disabled={isAnimating}
                    onChange={(e) => setBatasKering(Number(e.target.value))}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: isAnimating ? 'not-allowed' : 'pointer',
                      zIndex: 3,
                      pointerEvents: isAnimating ? 'none' : 'auto'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: C.muted, marginTop: '4px', fontWeight: '800' }}>
                  <span>10%</span>
                  <span>60%</span>
                </div>
              </div>

              <div style={{ backgroundColor: C.cardBg, borderRadius: '10px', padding: '16px', border: `2px solid ${C.dark}`, boxShadow: '3px 3px 0px #2E241E' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: C.dark }}>Batas Basah Tanah</span>
                  <span style={{ fontSize: '24px', fontWeight: '700', color: C.darkSlate, fontFamily: "'Fredoka', sans-serif" }}>{dispBatasBasah}%</span>
                </div>
                <p style={{ fontSize: '11px', color: C.muted, margin: '4px 0 12px', fontWeight: '700' }}>
                  Pompa mati otomatis saat kelembaban <span style={{ color: C.darkSlate, fontWeight: '900' }}>&gt; {dispBatasBasah}%</span>
                </p>

                <div style={{ position: 'relative', width: '100%', height: '26px', display: 'flex', alignItems: 'center', margin: '6px 0' }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '10px',
                    backgroundColor: C.linen,
                    borderRadius: '6px',
                    border: `2px solid ${C.dark}`,
                    boxShadow: 'inset 1px 1px 0px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${basahPct}%`,
                      backgroundColor: C.darkSlate,
                      borderRadius: '4px',
                      transition: 'width 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                  </div>

                  <div style={{
                    position: 'absolute',
                    left: `calc(${basahPct}% - 11px)`,
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: C.dark,
                    border: `2px solid ${C.dark}`,
                    boxShadow: '1.5px 1.5px 0px #2E241E',
                    transition: 'left 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: C.textLight }} />
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="90"
                    value={dispBatasBasah}
                    disabled={isAnimating}
                    onChange={(e) => setBatasBasah(Number(e.target.value))}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      cursor: isAnimating ? 'not-allowed' : 'pointer',
                      zIndex: 3,
                      pointerEvents: isAnimating ? 'none' : 'auto'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: C.muted, marginTop: '4px', fontWeight: '800' }}>
                  <span>50%</span>
                  <span>90%</span>
                </div>
              </div>

              <div style={{ backgroundColor: C.cardBg, borderRadius: '10px', padding: '16px', border: `2px solid ${C.dark}`, boxShadow: '3px 3px 0px #2E241E' }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: C.dark }}>Visualisasi Range Status</span>
                <div style={{ display: 'flex', height: '34px', borderRadius: '6px', overflow: 'hidden', margin: '10px 0 6px', border: `2px solid ${C.dark}` }}>
                  <div style={{ flex: dispBatasKering, backgroundColor: C.darkAlmond, color: C.textLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '900', transition: 'flex 0.55s ease' }}>
                    Kering
                  </div>
                  <div style={{ flex: Math.max(1, dispBatasBasah - dispBatasKering), backgroundColor: C.darkSage, color: C.textLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '900', transition: 'flex 0.55s ease' }}>
                    Normal
                  </div>
                  <div style={{ flex: Math.max(1, 100 - dispBatasBasah), backgroundColor: C.darkSlate, color: C.textLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '900', transition: 'flex 0.55s ease' }}>
                    Basah
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: C.muted, fontWeight: '800' }}>
                  <span>0%</span>
                  <span style={{ color: C.darkAlmond }}>{dispBatasKering}%</span>
                  <span style={{ color: C.darkSlate }}>{dispBatasBasah}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div style={{ backgroundColor: C.cardBg, borderRadius: '18px', padding: '16px', border: `2px solid ${C.dark}`, boxShadow: '3px 3px 0px #2E241E' }}>
                <span style={{ fontSize: '14px', fontWeight: '800', color: C.dark }}>Waktu Siram Maksimal (Safety Timer)</span>
                <p style={{ fontSize: '11px', color: C.muted, margin: '4px 0 10px', fontWeight: '700' }}>
                  Pompa akan mati otomatis jika menyala melebihi durasi ini
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={waktuMaksimal}
                    onChange={(e) => setWaktuMaksimal(Number(e.target.value))}
                    style={{
                      backgroundColor: C.linen,
                      border: `2px solid ${C.dark}`,
                      borderRadius: '8px',
                      padding: '10px 14px',
                      color: C.dark,
                      fontSize: '16px',
                      fontWeight: '900',
                      width: '90px',
                      fontFamily: "'Fredoka', sans-serif"
                    }}
                  />
                  <span style={{ fontSize: '14px', fontWeight: '700', color: C.muted }}>menit</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '6px' }}>
                <button
                  onClick={() => {
                    setBatasKering(40);
                    setBatasBasah(65);
                    setWaktuMaksimal(15);
                    simpanSettingFB(40, 65, 15);
                    showToast('Threshold direset ke Default!');
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: C.cardBg,
                    border: `2px solid ${C.dark}`,
                    boxShadow: '3px 3px 0px #2E241E',
                    color: C.dark,
                    fontSize: '13px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    fontFamily: "'Fredoka', sans-serif"
                  }}
                >
                  Reset Default
                </button>

                <button
                  onClick={() => {
                    simpanSettingFB(batasKering, batasBasah, waktuMaksimal);
                    showToast('Setting berhasil disimpan ke Firebase!');
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: C.dark,
                    border: `2px solid ${C.dark}`,
                    boxShadow: '3px 3px 0px #2E241E',
                    color: C.textLight,
                    fontSize: '13px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontFamily: "'Fredoka', sans-serif"
                  }}
                >
                  <CheckCircle2 size={16} color={C.textLight} />
                  Simpan Setting
                </button>
              </div>

            </div>
          );
        })()}

        {tabAktif === 'history' && (
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: C.dark, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Fredoka', sans-serif", margin: 0 }}>
                <History size={22} color={C.dark} /> Log Riwayat Pompa
              </h2>
              <p style={{ fontSize: '11px', color: C.muted, marginTop: '2px', fontWeight: '700' }}>
                Catatan aktivitas penyiraman otomatis & manual
              </p>
            </div>

            <div style={{
              backgroundColor: C.cardBg,
              borderRadius: '12px',
              padding: '14px 16px',
              border: `2px solid ${C.dark}`,
              boxShadow: '3px 3px 0px #2E241E',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: C.muted, fontWeight: '800' }}>Total Aktivitas</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: C.dark, fontFamily: "'Fredoka', sans-serif", marginTop: '2px' }}>
                  {logHistory.length}
                </div>
              </div>
              <div style={{ width: '2px', height: '28px', backgroundColor: C.dark, opacity: 0.2 }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: C.muted, fontWeight: '800' }}>Status Pompa</div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  color: isPompaAktif ? C.darkSage : C.darkAlmond,
                  marginTop: '4px',
                  fontFamily: "'Fredoka', sans-serif"
                }}>
                  {isPompaAktif ? 'Menyiram' : 'Standby'}
                </div>
              </div>
              <div style={{ width: '2px', height: '28px', backgroundColor: C.dark, opacity: 0.2 }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: C.muted, fontWeight: '800' }}>Terakhir Siram</div>
                <div style={{ fontSize: '11px', fontWeight: '800', color: C.dark, fontFamily: "'Fredoka', sans-serif", marginTop: '4px' }}>
                  {waktuSiramTerakhir && waktuSiramTerakhir !== '-'
                    ? waktuSiramTerakhir
                    : (logHistory.length > 0 ? logHistory[0].waktu : '-')}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', color: C.dark, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color={C.dark} /> Riwayat Terkini ({logHistory.length})
              </span>
              {logHistory.length > 0 && (
                <button
                  onClick={() => {
                    setLogHistory([]);
                    try { localStorage.setItem('greenhouse_pump_logs', '[]'); } catch { }
                    hapusSemuaLogFB().catch(() => { });
                    showToast('Riwayat log berhasil dibersihkan');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: C.linen,
                    border: `1.5px solid ${C.dark}`,
                    borderRadius: '6px',
                    padding: '4px 8px',
                    fontSize: '10.5px',
                    fontWeight: '800',
                    color: C.darkAlmond,
                    cursor: 'pointer',
                    boxShadow: '1px 1px 0px #2E241E',
                    fontFamily: "'Fredoka', sans-serif"
                  }}
                >
                  <Trash2 size={12} color={C.darkAlmond} /> Bersihkan
                </button>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {logHistory.length === 0 ? (
                <div style={{
                  backgroundColor: C.cardBg,
                  borderRadius: '12px',
                  padding: '28px 16px',
                  border: `2px solid ${C.dark}`,
                  boxShadow: '3px 3px 0px #2E241E',
                  textAlign: 'center'
                }}>
                  <Droplets size={32} color={C.muted} style={{ margin: '0 auto 8px', opacity: 0.6 }} />
                  <div style={{ fontSize: '13px', fontWeight: '800', color: C.dark }}>Belum ada catatan aktivitas pompa</div>
                  <div style={{ fontSize: '11px', color: C.muted, marginTop: '2px', fontWeight: '700' }}>
                    Aktivitas penyiraman otomatis atau manual akan tercatat di sini secara otomatis.
                  </div>
                </div>
              ) : (
                logHistory.map((item) => {
                  const isOn = item.tipe === 'on';
                  return (
                    <div
                      key={item.id}
                      style={{
                        backgroundColor: C.cardBg,
                        borderRadius: '12px',
                        padding: '12px 14px',
                        border: `2px solid ${C.dark}`,
                        boxShadow: '2.5px 2.5px 0px #2E241E',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}
                    >
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: isOn ? C.darkSlate : C.darkAlmond,
                        border: `1.5px solid ${C.dark}`,
                        boxShadow: '1.5px 1.5px 0px #2E241E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {isOn ? (
                          <Droplets size={20} color={C.textLight} />
                        ) : (
                          <CheckCircle2 size={20} color={C.textLight} />
                        )}
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '12px', fontWeight: '800', color: C.dark, fontFamily: "'Fredoka', sans-serif" }}>
                            {item.keterangan}
                          </span>
                          <span style={{ fontSize: '10px', fontWeight: '800', color: C.muted }}>
                            {item.waktu}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
                          <span style={{
                            fontSize: '9px',
                            fontWeight: '800',
                            backgroundColor: item.mode === 'Otomatis' ? C.darkSage : C.darkAlmond,
                            color: C.textLight,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            border: `1px solid ${C.dark}`
                          }}>
                            {item.mode}
                          </span>

                          {item.kelembaban !== undefined && (
                            <span style={{ fontSize: '10px', color: C.dark, fontWeight: '700' }}>
                              Kelembaban: <strong>{item.kelembaban}%</strong>
                            </span>
                          )}

                          {item.durasi && item.durasi !== '-' && (
                            <span style={{ fontSize: '10px', color: C.muted, fontWeight: '700' }}>
                              • Durasi: <strong>{item.durasi}</strong>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

      </div>

      <div style={{
        flexShrink: 0,
        height: '82px',
        backgroundColor: C.cardBg,
        borderTop: `3px solid ${C.dark}`,
        padding: '10px 14px 22px',
        zIndex: 30,
        boxSizing: 'border-box'
      }}>
        <div style={{
          position: 'relative',
          display: 'flex',
          gap: '6px',
          width: '100%',
          height: '100%',
          alignItems: 'center'
        }}>
          <div
            style={{
              position: 'absolute',
              top: '0px',
              bottom: '0px',
              left: 0,
              width: 'calc((100% - 18px) / 4)',
              backgroundColor: C.dark,
              border: `2px solid ${C.dark}`,
              boxShadow: '2px 2px 0px #2E241E',
              borderRadius:
                tabAktif === 'dashboard'
                  ? '8px 8px 8px 28px'
                  : tabAktif === 'history'
                    ? '8px 8px 28px 8px'
                    : '8px 8px 8px 8px',
              transform: `translateX(${tabAktif === 'dashboard'
                  ? '0%'
                  : tabAktif === 'sensor'
                    ? 'calc(100% + 6px)'
                    : tabAktif === 'setting'
                      ? 'calc(200% + 12px)'
                      : 'calc(300% + 18px)'
                })`,
              transition: 'transform 0.35s cubic-bezier(0.34, 1.25, 0.64, 1), border-radius 0.3s ease',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {[
            { key: 'dashboard', label: 'dashboard', Icon: LayoutDashboard },
            { key: 'sensor', label: 'sensor', Icon: Radio },
            { key: 'setting', label: 'setting', Icon: Settings },
            { key: 'history', label: 'history', Icon: History }
          ].map(({ key, label, Icon }) => {
            const isActive = tabAktif === key;
            return (
              <button
                key={key}
                disabled={isAnimating}
                onClick={() => handleTabClick(key)}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  flex: 1,
                  height: '100%',
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  padding: '6px 4px',
                  color: isActive ? C.textLight : C.muted,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  fontSize: '10.5px',
                  fontWeight: '800',
                  cursor: isAnimating ? 'not-allowed' : 'pointer',
                  fontFamily: "'Fredoka', sans-serif",
                  transition: 'color 0.25s ease'
                }}
              >
                <Icon
                  size={17}
                  color={isActive ? C.textLight : C.muted}
                  style={{ transition: 'color 0.25s ease' }}
                />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
