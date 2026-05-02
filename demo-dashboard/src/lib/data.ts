import type { Booking, Inquiry, Patient } from "@/types";

export const clinicName = "Dental Care Studio";
export const userName = "drg. Anindya Pratiwi";
export const userRole = "Resepsionis";

export const doctors = ["drg. Anindya", "drg. Bagas", "drg. Citra"];

export const treatments = [
  "Konsultasi + pemeriksaan",
  "Scaling",
  "Tambal gigi composite",
  "Cabut gigi sederhana",
  "Cabut gigi bungsu",
  "Crown porcelain",
  "Perawatan saluran akar",
  "Konsultasi ortodonti",
  "Behel metal",
  "Pemeriksaan anak",
  "Aplikasi fluoride",
];

const todayBase = new Date();
todayBase.setHours(0, 0, 0, 0);
const isoToday = todayBase.toISOString();

const minutesAgo = (mins: number) =>
  new Date(Date.now() - mins * 60_000).toISOString();
const hoursAgo = (h: number) => minutesAgo(h * 60);
const daysAgo = (d: number) => minutesAgo(d * 60 * 24);

export const inquiries: Inquiry[] = [
  // 6 new
  { id: "INQ-101", patientName: "Reza Pradipta", phone: "0812-3456-7891", treatment: "Scaling", doctor: "Tidak ada preferensi", preferredDate: "2026-05-04", preferredTime: "Sore 15-18", notes: "Sudah lama tidak scaling, ada sedikit darah saat sikat gigi.", source: "wa", status: "new", createdAt: minutesAgo(30) },
  { id: "INQ-102", patientName: "Maya Kusumawati", phone: "0813-2233-4455", treatment: "Konsultasi ortodonti", doctor: "drg. Bagas", preferredDate: "2026-05-05", preferredTime: "Pagi 09-12", notes: "Mau konsultasi behel untuk gigi depan agak maju.", source: "form", status: "new", createdAt: hoursAgo(2) },
  { id: "INQ-103", patientName: "Bambang Sutrisno", phone: "0856-7788-9900", treatment: "Cabut gigi bungsu", doctor: "drg. Bagas", preferredDate: "2026-05-06", preferredTime: "Pagi 09-12", notes: "Gigi bungsu bawah kanan sudah seminggu sakit.", source: "wa", status: "new", createdAt: hoursAgo(4) },
  { id: "INQ-104", patientName: "Linda Hartono", phone: "0878-9911-2233", treatment: "Pemeriksaan anak", doctor: "drg. Anindya", preferredDate: "2026-05-04", preferredTime: "Sore 15-18", notes: "Anak 6 tahun, belum pernah ke dokter gigi sama sekali.", source: "form", status: "new", createdAt: hoursAgo(7) },
  { id: "INQ-105", patientName: "Rahmat Hidayat", phone: "0821-3344-5566", treatment: "Tambal gigi composite", doctor: "Tidak ada preferensi", preferredDate: "2026-05-05", preferredTime: "Malam 18-20", notes: "Ada lubang di gigi geraham bawah, sudah terasa ngilu.", source: "wa", status: "new", createdAt: hoursAgo(12) },
  { id: "INQ-106", patientName: "Putri Anggraini", phone: "0813-5566-7788", treatment: "Konsultasi + pemeriksaan", doctor: "drg. Citra", preferredDate: "2026-05-07", preferredTime: "Pagi 09-12", notes: "Checkup tahunan rutin.", source: "phone", status: "new", createdAt: hoursAgo(18) },

  // 4 contacted
  { id: "INQ-091", patientName: "Doddy Pranata", phone: "0856-1122-3344", treatment: "Crown porcelain", doctor: "drg. Bagas", preferredDate: "2026-05-08", preferredTime: "Siang 12-15", notes: "Estimasi biaya untuk 2 crown gigi belakang.", source: "wa", status: "contacted", createdAt: daysAgo(1) },
  { id: "INQ-092", patientName: "Sari Indrawati", phone: "0812-9876-5432", treatment: "Scaling", doctor: "drg. Anindya", preferredDate: "2026-05-04", preferredTime: "Sore 15-18", notes: "Sudah konfirmasi via WA, menunggu pasien commit slot.", source: "form", status: "contacted", createdAt: daysAgo(1) },
  { id: "INQ-093", patientName: "Wisnu Pratama", phone: "0813-1010-2020", treatment: "Behel metal", doctor: "drg. Bagas", preferredDate: "2026-05-10", preferredTime: "Pagi 09-12", notes: "Konsultasi awal sudah dijadwalkan, menunggu konfirmasi keputusan.", source: "wa", status: "contacted", createdAt: daysAgo(2) },
  { id: "INQ-094", patientName: "Anisa Fitriani", phone: "0878-3344-5566", treatment: "Konsultasi + pemeriksaan", doctor: "Tidak ada preferensi", preferredDate: "2026-05-06", preferredTime: "Malam 18-20", notes: "Punya keluhan gigi sensitif terhadap dingin.", source: "phone", status: "contacted", createdAt: daysAgo(2) },

  // 3 booked
  { id: "INQ-081", patientName: "Citra Larasati", phone: "0821-7777-8888", treatment: "Tambal gigi composite", doctor: "drg. Citra", preferredDate: "2026-05-04", preferredTime: "Pagi 09-12", notes: "Sudah dibook untuk hari Senin pagi.", source: "wa", status: "booked", createdAt: daysAgo(3) },
  { id: "INQ-082", patientName: "Hendra Wijaya", phone: "0813-4567-8901", treatment: "Perawatan saluran akar", doctor: "drg. Citra", preferredDate: "2026-05-05", preferredTime: "Siang 12-15", notes: "Treatment lanjutan, sesi ke-2.", source: "form", status: "booked", createdAt: daysAgo(3) },
  { id: "INQ-083", patientName: "Ratih Permatasari", phone: "0878-9999-0000", treatment: "Aplikasi fluoride", doctor: "drg. Anindya", preferredDate: "2026-05-04", preferredTime: "Sore 15-18", notes: "Untuk anak Diandra, 7 tahun.", source: "wa", status: "booked", createdAt: daysAgo(3) },

  // 1 noshow
  { id: "INQ-071", patientName: "Edward Saputra", phone: "0821-1111-2222", treatment: "Scaling", doctor: "drg. Bagas", preferredDate: "2026-05-02", preferredTime: "Sore 15-18", notes: "Sudah dihubungi tapi tidak datang di slot kemarin.", source: "form", status: "noshow", createdAt: daysAgo(4) },

  // 1 archived
  { id: "INQ-061", patientName: "Yuli Anggraeni", phone: "0813-3333-4444", treatment: "Konsultasi ortodonti", doctor: "drg. Bagas", preferredDate: "-", preferredTime: "-", notes: "Sudah konsultasi, memutuskan tidak lanjut treatment.", source: "wa", status: "archived", createdAt: daysAgo(5) },
];

export const todayBookings: Booking[] = [
  { id: "B-001", patientName: "Citra Larasati", treatment: "Tambal gigi composite", doctor: "drg. Citra", startTime: "09:00", durationMin: 45, status: "done" },
  { id: "B-002", patientName: "Andi Wibowo", treatment: "Scaling", doctor: "drg. Anindya", startTime: "09:30", durationMin: 60, status: "done" },
  { id: "B-003", patientName: "Reni Pertiwi", treatment: "Konsultasi + pemeriksaan", doctor: "drg. Bagas", startTime: "11:00", durationMin: 30, status: "done" },
  { id: "B-004", patientName: "Toni Setiawan", treatment: "Crown porcelain (sesi 1)", doctor: "drg. Bagas", startTime: "13:00", durationMin: 90, status: "in-treatment" },
  { id: "B-005", patientName: "Mega Lestari", treatment: "Aplikasi fluoride anak", doctor: "drg. Anindya", startTime: "14:00", durationMin: 30, status: "in-treatment" },
  { id: "B-006", patientName: "Dani Pratama", treatment: "Cabut gigi sederhana", doctor: "drg. Citra", startTime: "15:30", durationMin: 45, status: "confirmed" },
  { id: "B-007", patientName: "Sari Wulandari", treatment: "Tambal gigi composite", doctor: "drg. Bagas", startTime: "17:00", durationMin: 45, status: "confirmed" },
  { id: "B-008", patientName: "Eka Cahyono", treatment: "Scaling", doctor: "drg. Anindya", startTime: "18:30", durationMin: 60, status: "noshow" },
];

const patientNames = [
  "Sari Indrawati", "Wisnu Pratama", "Linda Permata", "Reza Pradipta", "Maya Kusumawati",
  "Bambang Sutrisno", "Linda Hartono", "Rahmat Hidayat", "Putri Anggraini", "Doddy Pranata",
  "Anisa Fitriani", "Citra Larasati", "Hendra Wijaya", "Ratih Permatasari", "Edward Saputra",
  "Yuli Anggraeni", "Andi Wibowo", "Reni Pertiwi", "Toni Setiawan", "Mega Lestari",
  "Dani Pratama", "Sari Wulandari", "Eka Cahyono", "Hadi Susanto", "Indah Permata",
  "Joko Suryanto", "Kartika Dewi", "Lestari Wahyuni", "Made Suarjana", "Nia Ramadhani",
  "Oki Setiawan", "Puji Astuti", "Qori Lestari", "Rosa Damayanti", "Sigit Hartono",
  "Tini Suryani", "Udin Wahyudi", "Vivi Anggraeni", "Wahyu Santoso", "Xenia Putri",
  "Yusuf Mahendra", "Zahra Aulia", "Bayu Pradana", "Candra Kirana", "Dewi Sartika",
  "Erwin Hartoyo", "Fitri Handayani", "Gilang Ramadhan", "Hesti Pratiwi", "Iwan Setiabudi",
];

const lastTreatments = [
  "Scaling",
  "Tambal gigi composite",
  "Konsultasi + pemeriksaan",
  "Crown porcelain",
  "Cabut gigi bungsu",
  "Perawatan saluran akar",
  "Aplikasi fluoride",
  "Pemeriksaan anak",
  "Behel metal (kontrol)",
  "Konsultasi ortodonti",
];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function dateNDaysAgo(n: number): string {
  const d = new Date(todayBase);
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

export const patients: Patient[] = patientNames.map((name, idx) => {
  const visits = Math.floor(pseudoRandom(idx + 1) * 14) + 1;
  const lastVisitDays = Math.floor(pseudoRandom(idx + 13) * 220);
  const treatmentIdx = Math.floor(pseudoRandom(idx + 27) * lastTreatments.length);
  const totalSpent =
    visits * (350_000 + Math.floor(pseudoRandom(idx + 41) * 850_000));
  return {
    id: `P-${(1000 + idx).toString()}`,
    name,
    phone: `0812-${(3000 + idx * 7) % 10000}-${(2000 + idx * 13) % 10000}`,
    lastVisit: dateNDaysAgo(lastVisitDays),
    totalVisits: visits,
    lastTreatment: lastTreatments[treatmentIdx]!,
    totalSpent,
  };
});

// Reports analytics
export const inquiriesPerDay = [
  { day: "Sen", inquiries: 12 },
  { day: "Sel", inquiries: 18 },
  { day: "Rab", inquiries: 14 },
  { day: "Kam", inquiries: 21 },
  { day: "Jum", inquiries: 25 },
  { day: "Sab", inquiries: 28 },
  { day: "Min", inquiries: 8 },
];

export const treatmentBreakdown = [
  { name: "Scaling", value: 32 },
  { name: "Tambal", value: 24 },
  { name: "Konsultasi", value: 18 },
  { name: "Pemeriksaan anak", value: 12 },
  { name: "Cabut gigi", value: 8 },
  { name: "Lainnya", value: 6 },
];

export const bookingTrend30d = Array.from({ length: 30 }, (_, i) => {
  const base = 8 + Math.sin(i / 3) * 3 + (i % 7 < 2 ? -3 : 1);
  return {
    day: i + 1,
    bookings: Math.max(2, Math.round(base + pseudoRandom(i + 100) * 4)),
  };
});

export const topTreatments = [
  { name: "Scaling", count: 89, revenue: 35_600_000, growth: 12 },
  { name: "Tambal gigi composite", count: 67, revenue: 24_200_000, growth: 8 },
  { name: "Konsultasi + pemeriksaan", count: 54, revenue: 5_400_000, growth: -3 },
  { name: "Pemeriksaan anak", count: 38, revenue: 7_600_000, growth: 18 },
  { name: "Crown porcelain", count: 12, revenue: 30_000_000, growth: 25 },
];
