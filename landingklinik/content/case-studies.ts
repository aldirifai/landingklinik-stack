export type CaseStudy = {
  slug: string;
  name: string;
  location: string;
  year: string;
  duration: string;
  category: "general" | "aesthetic" | "pediatric" | "dashboard";
  categoryLabel: string;
  oneLineResult: string;
  thumbnailGradient: string;
  isHypothetical: boolean;
  /** Link ke demo live — kalau ada, tampilkan tombol "Lihat demo" */
  demoUrl?: string;
  profile: string;
  challenges: string[];
  solutions: string[];
  results: {
    label: string;
    value: string;
    delta?: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dental-care-studio-surabaya",
    name: "Dental Care Studio Surabaya",
    location: "Surabaya Pusat",
    year: "2025",
    duration: "3 minggu",
    category: "general",
    categoryLabel: "Klinik gigi keluarga",
    oneLineResult: "Booking masuk per bulan naik 12 → 28 dalam 2 bulan pertama",
    thumbnailGradient: "from-cyan-400 via-sky-500 to-blue-600",
    isHypothetical: true,
    demoUrl: "https://demo-general.landingklinik.id",
    profile:
      "Klinik gigi general dengan target pasien keluarga, beroperasi sejak 2018 di area Surabaya Pusat. Treatment utama: scaling, tambal, cabut, perawatan saluran akar. Punya 2 dokter umum tetap dan 2 resepsionis yang handle inquiry harian.",
    challenges: [
      "WhatsApp resepsionis sering overload sampai inquiry tertinggal lebih dari 2 jam",
      "Belum punya website sama sekali, traffic organik 100% dari word of mouth",
      "Google Business Profile belum diklaim, jadi pencarian Google Maps menampilkan info yang tidak akurat",
      "Tidak ada cara untuk track berapa banyak pasien baru yang sebetulnya nyari klinik secara online",
    ],
    solutions: [
      "Landing page single-page dengan booking-first structure: hero langsung mengarah ke CTA WhatsApp dengan template treatment",
      "Setup dan optimisasi Google Business Profile: foto klinik, jam buka, layanan, posting mingguan untuk 8 minggu pertama",
      "Integrasi WhatsApp Business dengan template otomatis sesuai treatment yang dipilih pasien",
      "Dashboard inquiry sederhana untuk 2 resepsionis: status pending / handled / booked, dengan filter harian",
      "Setup Google Analytics dan Search Console biar tim klinik bisa lihat tren traffic tanpa saya",
    ],
    results: [
      {
        label: "Booking masuk per bulan",
        value: "12 → 28",
        delta: "+133%",
      },
      {
        label: "Average response time WA",
        value: "4 jam → 30 menit",
        delta: "-87%",
      },
      {
        label: "Google Maps ranking 'klinik gigi area'",
        value: "#8 → #3",
        delta: "naik 5 posisi",
      },
      {
        label: "Patient return rate",
        value: "35% → 58%",
        delta: "+23 pp",
      },
    ],
    testimonial: {
      quote:
        "Sebelumnya inquiry WA sering hilang karena resepsionis fokus handle pasien on-site. Sekarang semua masuk dashboard, no inquiry left behind.",
      name: "drg. Putri (hypothetical)",
      role: "Pemilik Dental Care Studio Surabaya",
    },
  },
  {
    slug: "smile-aesthetic-dental",
    name: "Smile Aesthetic Dental",
    location: "Surabaya Selatan",
    year: "2025",
    duration: "3 minggu",
    category: "aesthetic",
    categoryLabel: "Klinik gigi aesthetic premium",
    oneLineResult: "Conversion rate landing page 1.2% → 4.8%, CAC Google Ads turun 40%",
    thumbnailGradient: "from-emerald-400 via-teal-500 to-cyan-600",
    isHypothetical: true,
    demoUrl: "https://demo-aesthetic.landingklinik.id",
    profile:
      "Klinik gigi aesthetic dengan positioning premium, fokus pada veneer, whitening profesional, dan smile makeover. Pasien tipikal melakukan riset panjang sebelum booking, dan klinik mengalokasikan budget Google Ads bulanan untuk akuisisi pasien baru.",
    challenges: [
      "Pasien aesthetic melakukan pre-purchase research yang panjang, tapi website lama tidak menjawab pertanyaan-pertanyaan kunci",
      "Website Wordpress lama lambat di mobile, conversion rate hanya 1.2%",
      "Cost-per-acquisition dari Google Ads naik terus karena landing page tidak optimal",
      "Tidak ada cara meyakinkan pasien tentang kredensial dokter dan kualitas hasil sebelum mereka memutuskan untuk chat",
    ],
    solutions: [
      "Landing page premium aesthetic-focused: typography elegan, hero image large, pacing scroll yang sengaja lebih lambat",
      "Before-after gallery dengan filter per treatment, dilengkapi disclaimer dan timeline pengerjaan",
      "Doctor credential highlight section: pendidikan, asosiasi, jam terbang, sertifikasi",
      "Treatment estimator interaktif: pasien pilih kondisi, dapat range harga + estimasi durasi sebelum chat",
      "Re-arsitektur Google Ads landing page biar match-type kata kunci sesuai dengan section yang dituju",
    ],
    results: [
      {
        label: "Conversion rate landing page",
        value: "1.2% → 4.8%",
        delta: "+300%",
      },
      {
        label: "Google Ads CAC",
        value: "turun 40%",
        delta: "-40%",
      },
      {
        label: "Average session duration",
        value: "47s → 2m 18s",
        delta: "+193%",
      },
      {
        label: "Qualified inquiry rate",
        value: "31% → 64%",
        delta: "+33 pp",
      },
    ],
    testimonial: {
      quote:
        "Pasien aesthetic itu researcher. Landing page baru jawab semua pertanyaan mereka sebelum chat, jadi yang chat emang yang sudah serius mau treatment.",
      name: "drg. Andre (hypothetical)",
      role: "Founder Smile Aesthetic Dental",
    },
  },
  {
    slug: "si-senyum-pediatric-dental",
    name: "Si Senyum Pediatric Dental",
    location: "Surabaya Barat",
    year: "2025",
    duration: "3 minggu",
    category: "pediatric",
    categoryLabel: "Klinik gigi anak",
    oneLineResult: "Visit baru anak naik 18 → 42 per bulan, 90% lanjut treatment kedua",
    thumbnailGradient: "from-pink-400 via-rose-400 to-orange-300",
    isHypothetical: true,
    demoUrl: "https://demo-pediatric.landingklinik.id",
    profile:
      "Klinik gigi khusus anak yang dijalankan oleh 2 dokter spesialis Sp.KGA. Target market: orangtua yang mencari pengalaman pertama yang menyenangkan untuk anaknya. Klinik buka weekend penuh untuk akomodasi orangtua bekerja, dan punya pengalaman handle anak special needs (autism, ADHD).",
    challenges: [
      "Orangtua butuh banyak reassurance sebelum bawa anak ke dokter gigi pertama kali, tapi website tidak menjelaskan pendekatan klinik secara detail",
      "Banyak yang tanya 'apa beda pediatric dentist dengan dokter gigi umum?' tapi tidak ada konten yang menjawab",
      "Visit pertama sering jadi trauma karena pasien kira mau langsung treatment — padahal klinik punya program 'introduction visit' untuk kenalan dulu",
      "Tidak ada cara screening apakah anak punya special needs yang butuh approach berbeda sebelum datang",
    ],
    solutions: [
      "Landing page playful tapi tetap informative untuk orangtua: tone parent-focused, copy yang reassuring",
      "Section khusus 'Methodology kami' yang jelaskan Tell-Show-Do, reward system, parent-present treatment, gradual desensitization",
      "Booking form yang minta info anak (usia, pengalaman ke dokter gigi sebelumnya, special needs) supaya tim bisa siap",
      "Mini blog parent education: kapan visit pertama, beda spesialis vs dokter umum, tips persiapan",
      "Highlight bahwa weekend full operation supaya tidak ganggu jadwal sekolah anak",
    ],
    results: [
      {
        label: "Visit baru per bulan",
        value: "18 → 42",
        delta: "+133%",
      },
      {
        label: "Conversion ke treatment kedua",
        value: "60% → 90%",
        delta: "+30 pp",
      },
      {
        label: "Inquiry weekend",
        value: "+220%",
        delta: "naik 3x lipat",
      },
      {
        label: "Average rating Google",
        value: "4.6 → 4.9",
        delta: "+0.3",
      },
    ],
    testimonial: {
      quote:
        "Setelah pakai landing page baru, parent yang chat sudah teredukasi tentang approach kami. Diskusi pertama jadi lebih ringan, mereka tinggal tanya jadwal saja.",
      name: "drg. Nanda (hypothetical)",
      role: "Founder Si Senyum Pediatric Dental",
    },
  },
  {
    slug: "dashboard-resepsionis-klinik",
    name: "Dashboard Resepsionis Klinik",
    location: "Internal tool",
    year: "2025",
    duration: "Termasuk dalam paket",
    category: "dashboard",
    categoryLabel: "Internal admin tool",
    oneLineResult: "Tracking inquiry, booking, dan reports — diakses 8 jam sehari oleh resepsionis",
    thumbnailGradient: "from-slate-600 via-blue-700 to-indigo-800",
    isHypothetical: true,
    demoUrl: "https://demo-dashboard.landingklinik.id",
    profile:
      "Dashboard internal yang sudah include di setiap paket landing page. Resepsionis pakai untuk handle inquiry yang masuk dari WhatsApp, web form, dan telepon — dengan flow yang sama. Semua status (baru, dihubungi, sudah booking, no-show, archived) bisa di-update real-time. Built-in analytics untuk owner klinik.",
    challenges: [
      "Resepsionis biasa pegang WhatsApp, telepon, dan walk-in pasien sekaligus — sering ada inquiry yang lupa di-follow up",
      "Owner klinik tidak punya visibility tentang berapa banyak inquiry yang masuk vs berapa yang convert ke booking",
      "Tidak ada track record komunikasi dengan pasien — kalau resepsionis ganti, knowledge hilang",
      "Booking conflict antara dokter sering terjadi karena tidak ada single source of truth",
    ],
    solutions: [
      "Inbox terpusat: semua inquiry dari WA / form / telepon masuk satu screen, filterable by status",
      "Side panel detail per inquiry dengan history komunikasi + internal notes yang persist",
      "Booking timeline view per hari dengan color-coded status (confirmed, arrived, in-treatment, done, no-show)",
      "Patient database 50+ kolom: last visit, total visits, total spent, last treatment — searchable",
      "Reports dashboard: inquiry per hari, conversion rate, treatment breakdown, booking trend 30 hari, top performing treatment",
    ],
    results: [
      {
        label: "Inquiry yang lupa di-follow up",
        value: "20% → 2%",
        delta: "-18 pp",
      },
      {
        label: "Average response time",
        value: "4 jam → 23 menit",
        delta: "-90%",
      },
      {
        label: "Booking conflict per minggu",
        value: "5-7 → 0-1",
        delta: "-95%",
      },
      {
        label: "Owner check dashboard",
        value: "1x/minggu → 3x/hari",
        delta: "habit baru",
      },
    ],
    testimonial: {
      quote:
        "Saya gak perlu nelepon resepsionis lagi tiap hari buat tanya jumlah inquiry. Buka dashboard 30 detik, kelihatan semuanya.",
      name: "drg. Putri (hypothetical)",
      role: "Owner Dental Care Studio Surabaya",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((c) => c.slug);
}
