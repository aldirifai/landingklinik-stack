export type CaseStudy = {
  slug: string;
  name: string;
  location: string;
  year: string;
  duration: string;
  category: "general" | "aesthetic" | "pediatric";
  categoryLabel: string;
  oneLineResult: string;
  thumbnailGradient: string;
  isHypothetical: boolean;
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
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((c) => c.slug);
}
