import type {
  Article,
  Clinic,
  Doctor,
  Faq,
  Methodology,
  Testimonial,
  TreatmentCategory,
  Usp,
} from "@/types";

export const clinic: Clinic = {
  name: "Si Senyum Pediatric Dental",
  tagline:
    "Pengalaman gigi pertama yang menyenangkan untuk si kecil",
  yearFounded: 2021,
  address: "Jl. Raya Darmo Permai III No. 88, Surabaya Barat",
  phone: "+62 31-8123456",
  whatsapp: "6285856981160",
  hours: {
    weekday: "Senin - Jumat: 13:00 - 20:00",
    weekend: "Sabtu - Minggu: 09:00 - 17:00",
    note: "Weekend lebih luas untuk akomodasi orangtua bekerja",
  },
  email: "halo@sisenyum.demo",
  mapsCoordinate: { lat: -7.288611, lng: 112.69833 },
};

export const heroCopy = {
  subheading:
    "Klinik gigi khusus anak dengan dokter spesialis. Karena pengalaman pertama menentukan hubungan anak dengan kesehatan gigi seumur hidup.",
};

export const aboutCopy = {
  paragraphs: [
    "Si Senyum berdiri tahun 2021 dari pengalaman pribadi founder — anaknya trauma setelah pengalaman buruk di klinik umum. Visi kami sederhana: bikin klinik di mana anak-anak benar-benar excited untuk visit, bukan takut.",
    "Setiap detail klinik dirancang untuk anak: ceiling dengan glow-in-the-dark stars, ruang tunggu dengan reading corner, dan TV di setiap ruang treatment untuk distraksi. Tapi yang paling penting bukan dekorasi — pendekatan dokter yang sabar dan terlatih psychology pediatric.",
  ],
  stats: [
    { label: "Tahun melayani", value: "3+" },
    { label: "Anak terdaftar", value: "1,000+" },
    { label: "Komplain serius", value: "0" },
  ],
};

export const eduCards = [
  { title: "Spesialis trained untuk anak", description: "Dokter pediatric jalani 2-3 tahun training tambahan setelah dokter gigi umum, fokus pada perkembangan rahang anak dan psychology behavioral.", icon: "GraduationCap" },
  { title: "Equipment ukuran anak", description: "Semua alat — kursi, suction, instrumen — disesuaikan dengan ukuran mulut dan postur anak. Bukan adaptasi alat dewasa.", icon: "Wrench" },
  { title: "Pendekatan psychology-based", description: "Tell-Show-Do, reward system, gradual desensitization. Metode terbukti untuk membangun trust anak terhadap perawatan gigi.", icon: "Heart" },
];

export const methodology: Methodology[] = [
  {
    icon: "MessageCircle",
    title: "Tell-Show-Do",
    description:
      "Anak diajak kenalan dengan setiap alat sebelum dipakai. Kami tunjukkan cara kerjanya, biarkan dia pegang, baru kemudian dipakai. Demystifikasi mengurangi anxiety drastis.",
  },
  {
    icon: "Star",
    title: "Reward system",
    description:
      "Sticker, small toys, dan certificate diberikan setelah setiap visit yang sukses. Anak pulang dengan perasaan accomplished, bukan trauma — dan jadi excited untuk visit berikutnya.",
  },
  {
    icon: "Users",
    title: "Parent-present treatment",
    description:
      "Untuk anak di bawah 7 tahun atau yang butuh comfort extra, parent boleh masuk ruang treatment. Kehadiran orangtua sering jadi faktor kunci ketenangan anak.",
  },
  {
    icon: "Clock",
    title: "Gradual desensitization",
    description:
      "Untuk anak yang sangat takut, visit pertama bisa hanya tour klinik tanpa treatment apapun. Build trust dulu, treatment menyusul setelah anak nyaman.",
  },
];

export const doctors: Doctor[] = [
  {
    name: "drg. Nanda Permata, Sp.KGA",
    specialty: "Spesialis Kedokteran Gigi Anak",
    education: "Lulusan Universitas Padjadjaran 2018",
    certification: "Sertifikasi behavioral management for children",
    experience: "6 tahun fokus pediatric",
    bio: "Percaya bahwa pengalaman pertama anak ke dokter gigi menentukan attitude mereka terhadap kesehatan gigi seumur hidup. Pendekatan: gentle, patient, fun. Punya koleksi lebih dari 50 finger puppet untuk komunikasi dengan anak.",
  },
  {
    name: "drg. Indra Wijaya, Sp.KGA",
    specialty: "Spesialis Kedokteran Gigi Anak",
    education: "Lulusan Universitas Indonesia 2017",
    certification: "Training behavioral techniques di Singapore",
    experience: "7 tahun, fokus special needs dentistry",
    bio: "Spesialisasi handle anak dengan special needs (autism, ADHD, sensory processing) yang membutuhkan approach individual. Setiap treatment plan disesuaikan dengan profile sensory tiap anak.",
  },
];

export const treatments: TreatmentCategory[] = [
  {
    category: "Pemeriksaan & preventive",
    items: [
      { name: "Konsultasi pertama (introduction visit)", price: "Rp 150.000", note: "Termasuk tour klinik" },
      { name: "Pemeriksaan rutin anak", price: "Rp 200.000" },
      { name: "Aplikasi fluoride", price: "Rp 250.000" },
      { name: "Sealant gigi (per gigi)", price: "Rp 350.000" },
      { name: "Pembersihan rutin", price: "Rp 250.000" },
    ],
  },
  {
    category: "Treatment dasar",
    items: [
      { name: "Tambal gigi anak", price: "Rp 300.000 - 500.000" },
      { name: "Cabut gigi susu", price: "Rp 200.000" },
      { name: "Cabut gigi anak (kompleks)", price: "Rp 450.000" },
      { name: "Stainless steel crown anak", price: "Rp 1.200.000" },
    ],
  },
  {
    category: "Ortodonti early intervention",
    items: [
      { name: "Konsultasi ortodonti anak", price: "Rp 250.000" },
      { name: "Space maintainer", price: "Rp 1.500.000" },
      { name: "Behel anak (early intervention)", price: "Mulai Rp 8.000.000" },
    ],
  },
  {
    category: "Sedation & anesthesia",
    items: [
      { name: "Treatment dengan nitrous oxide", price: "Tambahan Rp 800.000" },
      { name: "Treatment under general anesthesia", price: "Konsultasi", note: "Dilakukan di hospital partner" },
    ],
  },
];

export const articles: Article[] = [
  {
    slug: "kapan-checkup-pertama",
    title: "Kapan anak harus checkup gigi pertama?",
    preview:
      "Rekomendasi pediatric dentist Indonesia: 6 bulan setelah gigi pertama tumbuh atau di ulang tahun pertama, mana yang lebih dulu. Visit awal bukan untuk treatment, tapi untuk membangun trust.",
    readTime: "4 menit",
  },
  {
    slug: "beda-pediatric-vs-umum",
    title: "Apa bedanya pediatric dentist dengan dokter gigi umum?",
    preview:
      "Spesialis pediatric menjalani 2-3 tahun training tambahan setelah dokter gigi umum, fokus pada perkembangan rahang anak, behavioral psychology, dan teknik handling untuk pasien muda.",
    readTime: "5 menit",
  },
  {
    slug: "tips-persiapan-visit-pertama",
    title: "Tips menyiapkan si kecil ke dokter gigi pertama kali",
    preview:
      "Hindari kata-kata trigger seperti 'sakit', 'bor', 'cabut'. Gunakan bahasa positif. Bawa boneka favorit. Roleplay di rumah sebelum visit. Datang 15 menit lebih awal supaya anak punya waktu adaptasi.",
    readTime: "6 menit",
  },
];

export const usps: Usp[] = [
  {
    icon: "Award",
    title: "Spesialis bersertifikat",
    description:
      "Semua dokter adalah Sp.KGA — bukan dokter gigi umum yang juga melayani anak.",
  },
  {
    icon: "Palette",
    title: "Ruang treatment kid-friendly",
    description:
      "Theme dinding warna-warni, ceiling dengan sticker bintang, TV untuk distraksi selama treatment.",
  },
  {
    icon: "HeartHandshake",
    title: "Special needs welcomed",
    description:
      "Pengalaman handle autism, ADHD, sensory processing. Tidak dikenakan biaya tambahan.",
  },
  {
    icon: "CalendarDays",
    title: "Weekend full operation",
    description:
      "Buka Sabtu-Minggu agar treatment tidak ganggu jadwal sekolah anak.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Devi Anggraini",
    context: "Ibu dari Akira (5 tahun)",
    quote:
      "Anak saya dulu trauma ke dokter gigi setelah pengalaman buruk di klinik umum. Di Si Senyum, dia malah minta balik untuk checkup berikutnya. Sebuah keajaiban kecil.",
  },
  {
    name: "Hendra Cahyadi",
    context: "Ayah dari Bima (8 tahun, autism)",
    quote:
      "drg. Indra sangat patient handle anak saya yang autis. Approach-nya beda banget dari klinik biasa, ada accommodate sensory needs Bima. Akhirnya gigi Bima bisa dirawat tanpa drama.",
  },
  {
    name: "Sari Mulyani",
    context: "Ibu dari Citra (3 tahun)",
    quote:
      "Visit pertama Citra, dokter cuma ngajak kenalan kursi treatment dan main puppet, gak ada periksa apa-apa. Kebijakan ini bikin Citra trust. Visit kedua sudah mau dibuka mulutnya.",
  },
];

export const faqs: Faq[] = [
  {
    q: "Anak saya takut banget, gimana?",
    a: "Kami punya program gradual desensitization. Visit pertama bisa hanya tour klinik tanpa treatment apapun — kenalan dengan dokter, kursi, dan alat. Build trust dulu, treatment menyusul setelah anak nyaman. Tidak ada paksaan.",
  },
  {
    q: "Kapan harus pertama kali ke dokter gigi anak?",
    a: "Rekomendasi pediatric dentist Indonesia: 6 bulan setelah gigi pertama tumbuh atau di ulang tahun pertama, mana yang lebih dulu. Visit awal bukan untuk treatment serius, tapi untuk skrining, edukasi parent, dan membangun trust.",
  },
  {
    q: "Bedanya pediatric dentist dengan dokter gigi umum?",
    a: "Spesialis pediatric (Sp.KGA) menjalani 2-3 tahun training tambahan setelah dokter gigi umum. Fokus: perkembangan rahang anak, psychology behavioral, teknik handling untuk pasien muda, dan management khusus untuk anak special needs.",
  },
  {
    q: "Apakah aman pakai sedation untuk anak?",
    a: "Nitrous oxide (gas tertawa) aman dan reversible — efek hilang dalam menit setelah selesai. Kami pakai hanya untuk kasus spesifik (treatment panjang, anak dengan anxiety berat). General anesthesia dilakukan di hospital partner dengan supervisi anestesiolog.",
  },
  {
    q: "Bisa untuk anak special needs?",
    a: "Ya. drg. Indra spesialisasi handle anak dengan autism, ADHD, dan sensory processing disorders. Kami tidak charge biaya tambahan untuk extra time atau accommodate sensory needs.",
  },
  {
    q: "Berapa lama untuk treatment pertama?",
    a: "Introduction visit sekitar 30 menit. Treatment actual variabel tergantung kondisi — umumnya 30-60 menit per visit. Untuk anak yang masih membangun trust, kami sengaja keep visit short supaya tidak overwhelming.",
  },
];

export const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#methodology", label: "Pendekatan" },
  { href: "#treatments", label: "Layanan" },
  { href: "#doctors", label: "Dokter" },
  { href: "#articles", label: "Artikel" },
  { href: "#booking", label: "Booking" },
];

export const treatmentReasons = [
  { value: "Introduction visit", label: "Introduction visit (kunjungan kenalan)" },
  { value: "Rutin checkup", label: "Rutin checkup" },
  { value: "Ada keluhan", label: "Ada keluhan (sakit, gigi goyang, dll)" },
  { value: "Konsultasi ortodonti", label: "Konsultasi ortodonti" },
];

export const previousExperience = [
  { value: "Belum pernah", label: "Belum pernah ke dokter gigi" },
  { value: "Pernah, baik", label: "Pernah, pengalaman baik" },
  { value: "Pernah, trauma", label: "Pernah, ada trauma / takut" },
];

export const demoDisclaimer =
  "Website ini adalah demonstrasi karya untuk landingklinik.id. Si Senyum Pediatric Dental adalah klinik fiktif yang dibuat sebagai contoh format. Untuk kebutuhan landing page klinik gigi Anda, kunjungi landingklinik.id";
