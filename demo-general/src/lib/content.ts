import type {
  Clinic,
  Doctor,
  Faq,
  Testimonial,
  TreatmentCategory,
  Usp,
} from "@/types";

export const clinic: Clinic = {
  name: "Dental Care Studio",
  tagline: "Klinik gigi keluarga yang bikin checkup tidak menakutkan",
  yearFounded: 2018,
  address: "Jl. Manyar Kertoarjo No. 45, Surabaya",
  phone: "+62 31-5012345",
  whatsapp: "6289678386070",
  hours: {
    weekday: "Senin-Sabtu: 09:00 - 20:00",
    weekend: "Minggu: Tutup",
  },
  email: "halo@dentalcarestudio.demo",
  mapsCoordinate: { lat: -7.286517, lng: 112.770844 },
};

export const heroCopy = {
  subheading:
    "Sudah 7 tahun melayani keluarga Surabaya dengan pendekatan personal dan harga transparan.",
};

export const aboutCopy = {
  paragraphs: [
    `${clinic.name} berdiri sejak ${clinic.yearFounded} dengan satu visi sederhana: bikin pengalaman ke dokter gigi terasa seperti datang ke rumah teman, bukan seperti masuk ruang inspeksi. Kami percaya pasien yang tenang menghasilkan treatment yang lebih baik.`,
    "Pendekatan kami family-friendly — mulai dari resepsionis yang sabar menjelaskan, ruang tunggu yang nyaman untuk anak, sampai estimasi harga yang dijelaskan di awal. Tidak ada biaya kejutan, tidak ada hard-selling treatment yang tidak perlu.",
  ],
  stats: [
    { label: "Tahun melayani", value: "7+" },
    { label: "Pasien terdaftar", value: "5,000+" },
    { label: "Dokter aktif", value: "3" },
  ],
};

export const doctors: Doctor[] = [
  {
    name: "drg. Anindya Pratiwi",
    specialty: "Dokter gigi umum",
    education: "Lulusan Universitas Airlangga 2014",
    focus: "Preventive care anak dan dewasa",
    experience: "10 tahun praktek",
    bio: "Mengutamakan pendekatan komunikatif, terutama untuk pasien anak yang baru pertama kali ke dokter gigi.",
  },
  {
    name: "drg. Bagas Hartono",
    specialty: "Dokter gigi umum",
    education: "Lulusan Universitas Gadjah Mada 2012",
    focus: "Restorasi gigi dan estetika fungsional",
    experience: "12 tahun praktek",
    bio: "Spesialisasi tambal gigi modern dan crown porcelain dengan teknik minimal invasive.",
  },
  {
    name: "drg. Citra Wulandari",
    specialty: "Dokter gigi umum",
    education: "Lulusan Universitas Airlangga 2017",
    focus: "Konservasi dan perawatan saluran akar",
    experience: "7 tahun praktek",
    bio: "Detail-oriented untuk treatment yang membutuhkan ketelitian tinggi seperti perawatan saraf gigi.",
  },
];

export const treatments: TreatmentCategory[] = [
  {
    category: "Pemeriksaan dasar",
    items: [
      { name: "Konsultasi + pemeriksaan", price: "Rp 100.000" },
      { name: "Scaling (pembersihan karang gigi)", price: "Rp 350.000 - 500.000" },
      { name: "Pembersihan stain merokok", price: "Rp 400.000" },
    ],
  },
  {
    category: "Tambal & restorasi",
    items: [
      { name: "Tambal gigi composite", price: "Rp 250.000 - 400.000 / gigi" },
      { name: "Crown porcelain", price: "Rp 2.500.000 / gigi" },
      { name: "Onlay/inlay", price: "Rp 1.800.000 / gigi" },
    ],
  },
  {
    category: "Pencabutan",
    items: [
      { name: "Cabut gigi sederhana", price: "Rp 250.000" },
      { name: "Cabut gigi bungsu", price: "Rp 800.000 - 1.500.000" },
      { name: "Cabut gigi anak", price: "Rp 200.000" },
    ],
  },
  {
    category: "Perawatan saraf",
    items: [
      { name: "Perawatan saluran akar", price: "Rp 800.000 - 1.500.000" },
    ],
  },
  {
    category: "Ortodonti",
    items: [
      { name: "Behel metal (paket lengkap)", price: "Rp 6.000.000" },
      { name: "Konsultasi ortodonti", price: "Rp 200.000" },
    ],
  },
];

export const usps: Usp[] = [
  {
    icon: "Wallet",
    title: "Harga transparan, tanpa biaya tersembunyi",
    description:
      "Semua estimasi dijelaskan di awal sebelum tindakan. Tidak ada kejutan di akhir.",
  },
  {
    icon: "CreditCard",
    title: "Cicilan 0% untuk treatment besar",
    description:
      "Treatment di atas Rp 2 juta bisa dicicil hingga 6 bulan dengan kartu kredit tertentu.",
  },
  {
    icon: "Baby",
    title: "Ramah anak",
    description:
      "Ruang tunggu khusus anak dengan mainan dan drg yang berpengalaman handle si kecil.",
  },
  {
    icon: "Clock",
    title: "Operasional fleksibel",
    description:
      "Buka sampai jam 8 malam, cocok untuk yang baru pulang kerja.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sari Indrawati",
    title: "Ibu rumah tangga",
    quote:
      "Anak saya yang biasanya nangis kalau ke dokter gigi, di sini malah betah karena ruang tunggunya banyak mainan dan drg-nya sabar.",
    rating: 5,
  },
  {
    name: "Wisnu Pratama",
    title: "Karyawan swasta",
    quote:
      "Harga-nya transparan, dijelaskan di awal sebelum tindakan. Gak ada kejutan di akhir.",
    rating: 5,
  },
  {
    name: "Linda Permata",
    title: "Wirausaha",
    quote:
      "Sudah 3 tahun checkup rutin keluarga di sini. Konsisten kualitasnya, dokter-dokternya juga ramah.",
    rating: 5,
  },
];

export const faqs: Faq[] = [
  {
    q: "Apakah klinik melayani BPJS?",
    a: "Saat ini Dental Care Studio adalah klinik mandiri (cash/kartu kredit). Kami tidak melayani BPJS, namun kami terbuka untuk reimbursement asuransi swasta.",
  },
  {
    q: "Apakah perlu booking dulu?",
    a: "Ya, sangat disarankan booking via WhatsApp untuk memastikan slot dokter pilihan Anda tersedia. Walk-in masih dilayani jika ada slot kosong.",
  },
  {
    q: "Berapa lama waktu pemeriksaan pertama?",
    a: "Sekitar 30-45 menit untuk pemeriksaan menyeluruh + konsultasi rencana perawatan jika diperlukan.",
  },
  {
    q: "Apakah ada parkir?",
    a: "Tersedia parkir mobil dan motor untuk 8 kendaraan.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Layanan" },
  { href: "#doctors", label: "Dokter" },
  { href: "#booking", label: "Booking" },
];

export const timeSlots = [
  { value: "Pagi 09-12", label: "Pagi (09:00 - 12:00)" },
  { value: "Siang 12-15", label: "Siang (12:00 - 15:00)" },
  { value: "Sore 15-18", label: "Sore (15:00 - 18:00)" },
  { value: "Malam 18-20", label: "Malam (18:00 - 20:00)" },
];

export const demoDisclaimer =
  "Website ini adalah demonstrasi karya untuk landingklinik.id. Dental Care Studio adalah klinik fiktif yang dibuat sebagai contoh format. Untuk kebutuhan landing page klinik gigi Anda, kunjungi landingklinik.id";
