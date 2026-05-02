import type {
  Clinic,
  Doctor,
  EstimatorOption,
  Faq,
  GalleryItem,
  ProcessStep,
  ShowcaseTreatment,
  Testimonial,
  TreatmentCategory,
  Usp,
} from "@/types";

export const clinic: Clinic = {
  name: "Smile Aesthetic Dental",
  tagline: "Senyum yang dirancang khusus untuk Anda",
  yearFounded: 2020,
  address:
    "Lenmarc Mall Lt. 2 Unit 15, Jl. Mayjen Yono Suwoyo, Surabaya",
  phone: "+62 31-7345678",
  whatsapp: "6289678386070",
  hours: {
    weekday: "Senin - Sabtu: 10:00 - 21:00",
    weekend: "Minggu: By appointment only",
  },
  email: "concierge@smileaesthetic.demo",
  mapsCoordinate: { lat: -7.295614, lng: 112.671236 },
};

export const heroCopy = {
  eyebrow: "Premium aesthetic dentistry — Surabaya Barat",
  subheading:
    "Kombinasi presisi spesialis konservasi dengan sensibilitas estetika untuk smile design yang natural dan personal.",
};

export const aboutCopy = {
  heading: "Filosofi Kami",
  paragraphs: [
    "Setiap senyum punya karakter. Kami tidak percaya pada formula seragam yang membuat semua pasien terlihat sama. Smile design di klinik kami selalu dimulai dari analisis bentuk wajah, struktur bibir, dan kepribadian — bukan template katalog.",
    "Pendekatan minimal-invasive kami mengutamakan preservasi struktur gigi alami. Material yang kami gunakan berasal dari Jerman, Amerika Serikat, dan Jepang — pilihan yang mahal di awal, namun terbukti tahan lebih dari satu dekade.",
    "Tim kami terdiri dari spesialis konservasi gigi dan ortodonti, dengan training internasional di New York University dan certification Invisalign Diamond level. Setiap pasien mendapat treatment plan yang ditandatangani dua dokter sebelum eksekusi.",
  ],
};

export const trustSignals = [
  { name: "NYU Fellowship", note: "Aesthetic Dentistry 2019" },
  { name: "AACD Member", note: "American Academy of Cosmetic Dentistry" },
  { name: "Invisalign Diamond", note: "Top-tier provider" },
  { name: "MOH Certified", note: "Kementerian Kesehatan RI" },
];

export const doctors: Doctor[] = [
  {
    name: "drg. Reza Mahendra, Sp.KG",
    title: "Spesialis Konservasi Gigi",
    credentials: [
      "Lulusan Universitas Indonesia, 2015",
      "Fellowship Aesthetic Dentistry — New York University, 2019",
      "Member of American Academy of Cosmetic Dentistry",
    ],
    experience:
      "9 tahun praktek, sebelumnya di klinik premium Jakarta CBD",
    bio: "Menggabungkan presisi teknis dengan sensibilitas estetika untuk menciptakan smile design yang natural dan sesuai karakter wajah pasien. Spesialisasi veneer porcelain dan smile makeover komprehensif.",
    certifications: ["NYU Fellow", "AACD", "ICOI"],
  },
  {
    name: "drg. Maya Anggraini, Sp.Ort",
    title: "Spesialis Ortodonti",
    credentials: [
      "Lulusan Universitas Indonesia, 2016",
      "Certified Invisalign Provider — Diamond Level",
      "Continuing Education — Damon Self-Ligating System",
    ],
    experience:
      "8 tahun di klinik premium Jakarta sebelum membuka praktik di Surabaya",
    bio: "Spesialisasi clear aligner dan behel sapphire dengan pendekatan minimal-disruption untuk profesional yang membutuhkan estetika selama treatment ortodonti berlangsung.",
    certifications: ["Invisalign Diamond", "Damon System", "WFO"],
  },
];

export const treatments: TreatmentCategory[] = [
  {
    category: "Konsultasi & smile design",
    items: [
      { name: "Konsultasi awal", price: "Gratis" },
      {
        name: "Smile design consultation",
        price: "Rp 500.000",
        note: "Dikreditkan jika lanjut treatment",
      },
      { name: "Digital smile preview (3D rendering)", price: "Rp 1.500.000" },
    ],
  },
  {
    category: "Veneer",
    items: [
      { name: "Veneer composite per gigi", price: "Rp 1.500.000 - 2.500.000" },
      { name: "Veneer porcelain per gigi", price: "Rp 4.500.000 - 6.500.000" },
      { name: "Veneer paket 8 gigi atas", price: "Rp 32.000.000", note: "Special package" },
    ],
  },
  {
    category: "Bleaching",
    items: [
      { name: "In-office bleaching (1 sesi)", price: "Rp 2.500.000" },
      { name: "Take-home bleaching kit", price: "Rp 1.200.000" },
      { name: "Combination treatment", price: "Rp 3.000.000" },
    ],
  },
  {
    category: "Ortodonti premium",
    items: [
      { name: "Invisalign (clear aligner)", price: "Rp 35.000.000 - 65.000.000" },
      { name: "Behel sapphire (transparan)", price: "Rp 12.000.000" },
      { name: "Behel self-ligating", price: "Rp 9.500.000" },
    ],
  },
  {
    category: "Implant & restorasi",
    items: [
      { name: "Implant gigi (per gigi)", price: "Rp 15.000.000 - 25.000.000" },
      { name: "All-on-four (full mouth)", price: "Mulai Rp 80.000.000" },
      { name: "Implant + crown lengkap", price: "Konsultasi" },
    ],
  },
];

export const showcase: ShowcaseTreatment[] = [
  {
    id: "veneer",
    name: "Veneer porcelain",
    description:
      "Lapisan tipis porcelain custom-made untuk transformasi bentuk dan warna gigi. Hasil natural, tahan 10-15 tahun.",
    highlight: "Mulai Rp 4.5jt / gigi",
  },
  {
    id: "bleaching",
    name: "In-office bleaching",
    description:
      "Pemutihan gigi profesional dalam 1 sesi dengan teknologi LED. Hingga 8 shade lebih cerah.",
    highlight: "Rp 2.5jt — 90 menit",
  },
  {
    id: "invisalign",
    name: "Invisalign",
    description:
      "Clear aligner transparan untuk profesional yang butuh diskresi. Removable, comfortable, predictable.",
    highlight: "Diamond provider",
  },
  {
    id: "implant",
    name: "Dental implant",
    description:
      "Solusi permanen pengganti gigi hilang. Material titanium grade-4 dari Jerman dan Swiss.",
    highlight: "Mulai Rp 15jt / gigi",
  },
  {
    id: "smile-design",
    name: "Smile design",
    description:
      "Perencanaan menyeluruh berdasarkan analisis wajah, bibir, dan kepribadian. Termasuk 3D preview.",
    highlight: "Personalized",
  },
  {
    id: "behel",
    name: "Behel sapphire",
    description:
      "Behel transparan dari kristal sapphire. Estetik selama treatment, hasil presisi tinggi.",
    highlight: "Rp 12jt paket",
  },
];

export const gallery: GalleryItem[] = [
  { caption: "Veneer porcelain — 4 gigi atas, 2 sesi", treatment: "Veneer porcelain" },
  { caption: "Smile makeover lengkap — 8 gigi atas, 3 sesi", treatment: "Smile makeover" },
  { caption: "In-office bleaching — 1 sesi 90 menit", treatment: "Bleaching" },
  { caption: "Invisalign — durasi 14 bulan", treatment: "Invisalign" },
  { caption: "Veneer composite — 2 gigi depan", treatment: "Veneer composite" },
  { caption: "Behel sapphire — durasi 18 bulan", treatment: "Behel sapphire" },
  { caption: "Implant + crown porcelain — 1 gigi", treatment: "Implant" },
  { caption: "Diastema closure dengan composite", treatment: "Cosmetic bonding" },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Konsultasi & assessment",
    duration: "60 menit",
    description:
      "Analisis menyeluruh struktur gigi, bentuk wajah, dan diskusi tujuan estetika Anda.",
  },
  {
    number: "02",
    title: "Digital smile preview",
    duration: "1-2 hari",
    description:
      "Rendering 3D hasil akhir sebelum eksekusi. Anda lihat hasilnya dulu, baru memutuskan.",
  },
  {
    number: "03",
    title: "Treatment plan & approval",
    duration: "1 sesi",
    description:
      "Plan tertulis lengkap dengan timeline, biaya, dan opsi material. Ditandatangani dua dokter.",
  },
  {
    number: "04",
    title: "Eksekusi & follow-up",
    duration: "Variabel",
    description:
      "Treatment dijalankan sesuai plan. Follow-up berkala selama 1 tahun pertama, garansi material lanjut.",
  },
];

export const usps: Usp[] = [
  {
    icon: "Sparkles",
    title: "Digital smile preview",
    description:
      "Lihat hasil 3D smile design Anda sebelum treatment dimulai. Tidak ada kejutan.",
  },
  {
    icon: "CreditCard",
    title: "Cicilan hingga 24 bulan",
    description:
      "Treatment Rp 10jt+ bisa dicicil melalui partner bank dan fintech kami.",
  },
  {
    icon: "ShieldCheck",
    title: "Confidentiality guaranteed",
    description:
      "Privacy untuk pasien profesional. Ruang konsultasi private, no waiting room shared.",
  },
  {
    icon: "Award",
    title: "Premium materials only",
    description:
      "Material veneer, implant, dan ortodonti dari Jerman, USA, dan Jepang. Garansi 5-10 tahun.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Andini Pratiwi",
    role: "Presenter televisi",
    quote:
      "Sebagai presenter, senyum adalah modal utama. Setelah veneer porcelain di Smile Aesthetic, confidence saya naik level. Hasilnya natural, bukan plastic.",
  },
  {
    name: "Budi Santoso",
    role: "Direktur PT",
    quote:
      "drg. Reza sangat detail menjelaskan setiap step. Saya merasa diperlakukan sebagai partner dalam smile design, bukan sekadar pasien yang diberi resep.",
  },
  {
    name: "Karina Susanto",
    role: "Lawyer",
    quote:
      "Pakai Invisalign 18 bulan tanpa ada yang notice saya sedang treatment. Perfect untuk profesional yang daily meeting client.",
  },
];

export const faqs: Faq[] = [
  {
    q: "Apakah hasil veneer terlihat natural?",
    a: "Ya, dengan smile design yang tepat dan material premium, hasil tidak terlihat 'palsu'. Kami menyesuaikan bentuk, warna, dan translusensi dengan karakter wajah Anda — bukan template seragam.",
  },
  {
    q: "Berapa lama veneer porcelain bertahan?",
    a: "10-15 tahun dengan perawatan tepat. Material dari Jerman dan Amerika kami garansi 5-10 tahun, dan dengan kebiasaan oral hygiene yang baik banyak pasien yang veneer-nya tetap intact lebih dari 15 tahun.",
  },
  {
    q: "Apakah Invisalign bisa untuk kasus saya?",
    a: "Mayoritas kasus malposisi gigi bisa ditangani dengan Invisalign, termasuk crowding moderate, gap, dan crossbite ringan. Kasus kompleks perlu assessment awal — konsultasi gratis untuk menentukan apakah Invisalign cocok.",
  },
  {
    q: "Bagaimana skema cicilan diatur?",
    a: "Kami bekerjasama dengan beberapa bank dan fintech untuk paylater hingga 24 bulan. Treatment Rp 10jt+ eligible untuk cicilan 0% (3-12 bulan) dan cicilan dengan bunga ringan (12-24 bulan).",
  },
  {
    q: "Apakah ada garansi treatment?",
    a: "Ya. Veneer porcelain garansi material 5-10 tahun (tergantung brand). Implant garansi material seumur hidup dari manufacturer. Bleaching ada free touch-up dalam 6 bulan jika hasilnya tidak sesuai ekspektasi.",
  },
];

export const navLinks = [
  { href: "#about", label: "Filosofi" },
  { href: "#showcase", label: "Layanan" },
  { href: "#gallery", label: "Hasil" },
  { href: "#estimator", label: "Estimator" },
  { href: "#doctors", label: "Spesialis" },
  { href: "#booking", label: "Konsultasi" },
];

export const estimatorOptions: EstimatorOption[] = [
  {
    id: "veneer-porcelain",
    label: "Veneer porcelain",
    unitLow: 4500000,
    unitHigh: 6500000,
    unit: "gigi",
    defaultQty: 4,
    maxQty: 12,
  },
  {
    id: "veneer-composite",
    label: "Veneer composite",
    unitLow: 1500000,
    unitHigh: 2500000,
    unit: "gigi",
    defaultQty: 4,
    maxQty: 12,
  },
  {
    id: "invisalign",
    label: "Invisalign",
    unitLow: 35000000,
    unitHigh: 65000000,
    unit: "paket",
    defaultQty: 1,
    maxQty: 1,
  },
  {
    id: "bleaching",
    label: "In-office bleaching",
    unitLow: 2500000,
    unitHigh: 3000000,
    unit: "set",
    defaultQty: 1,
    maxQty: 3,
  },
  {
    id: "smile-makeover",
    label: "Smile makeover (veneer 8 gigi)",
    unitLow: 32000000,
    unitHigh: 50000000,
    unit: "paket",
    defaultQty: 1,
    maxQty: 1,
  },
];

export const consultationSchedule = [
  { value: "Weekday morning", label: "Hari kerja — pagi (10:00 - 13:00)" },
  { value: "Weekday evening", label: "Hari kerja — sore/malam (17:00 - 21:00)" },
  { value: "Weekend", label: "Weekend — by appointment" },
];

export const demoDisclaimer =
  "Website ini adalah demonstrasi karya untuk landingklinik.id. Smile Aesthetic Dental adalah klinik fiktif yang dibuat sebagai contoh format. Untuk kebutuhan landing page klinik gigi Anda, kunjungi landingklinik.id";
