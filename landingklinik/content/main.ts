import {
  Building2,
  CalendarCheck,
  ClipboardList,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Rocket,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

export const heroContent = {
  headline: "Landing page klinik yang fokus ke booking, bukan brosur",
  subheadline:
    "Untuk klinik gigi yang sudah punya pasien tapi belum punya online presence yang kerja. Project 3 minggu, harga transparan, hasil terukur.",
  primaryCta: {
    label: "Diskusi gratis 15 menit",
  },
  secondaryCta: {
    label: "Lihat portfolio",
  },
};

export const problemContent = {
  heading: "Klinik gigi sukses sering punya 3 masalah ini",
  cards: [
    {
      title: "Pasien banyak chat, resepsionis kewalahan",
      body: "Inquiry WhatsApp masuk terus, tapi gak semua sempat di-reply. Pasien yang menunggu lebih dari 1 jam biasanya cari klinik lain.",
      icon: MessageSquare,
    },
    {
      title: "Website klinik cuma seperti brosur",
      body: "Halaman penuh teks tentang layanan, tapi pasien yang datang malah bingung gimana cara booking. Akhirnya tetap WA langsung.",
      icon: ClipboardList,
    },
    {
      title: "Google Maps ramai, website sepi",
      body: "Pasien ketemu klinik di Maps, tapi sebelum datang cek dulu websitenya. Kalau gak meyakinkan, mereka pindah ke kompetitor.",
      icon: MapPin,
    },
  ],
};

export const solutionContent = {
  heading: "Yang saya bangun untuk klinik Anda",
  features: [
    {
      title: "Landing page yang fokus ke booking",
      body: "Setiap section diarahkan supaya pasien yang datang langsung tahu cara booking, bukan baca-baca brosur.",
      icon: CalendarCheck,
    },
    {
      title: "Integrasi WhatsApp dengan template otomatis",
      body: "Tombol booking buka WA Business klinik dengan pesan pre-filled lengkap (nama, treatment, jadwal). Resepsionis tinggal konfirmasi.",
      icon: MessageSquare,
    },
    {
      title: "Google Business Profile dioptimasi",
      body: "Setup foto, jam buka, layanan, dan post berkala biar klinik muncul lebih sering di pencarian lokal Google Maps.",
      icon: MapPin,
    },
    {
      title: "Dashboard sederhana untuk inquiry",
      body: "Resepsionis lihat semua inquiry yang masuk dalam satu layar. Tandai mana yang sudah di-handle, mana yang pending.",
      icon: LayoutDashboard,
    },
  ],
};

export const processContent = {
  heading: "3 minggu dari kick-off ke launch",
  steps: [
    {
      label: "Minggu 1",
      title: "Discovery",
      body: "Saya kumpulkan info klinik: dokter, treatment, jadwal, tarif, foto. Kalau ada gap, saya bantu siapkan.",
      icon: Search,
    },
    {
      label: "Minggu 2",
      title: "Design dan build",
      body: "Desain landing page custom (bukan template), develop, setup Google Business Profile, integrasikan WhatsApp.",
      icon: Sparkles,
    },
    {
      label: "Minggu 3",
      title: "Review dan revisi",
      body: "Anda review, saya revisi. Maximum 2 round revisi major. Detail kecil unlimited.",
      icon: Wrench,
    },
    {
      label: "Setelah launch",
      title: "Launch dan training",
      body: "Website live, dashboard di-handover, 1 jam training untuk resepsionis cara handle inquiry baru.",
      icon: Rocket,
    },
  ],
};

export const pricingContent = {
  heading: "Investasi yang transparan",
  subheading: "Tanpa biaya tersembunyi, tanpa upsell aneh",
  primary: {
    title: "Klinik Online Starter Pack",
    price: "Rp 5.500.000",
    sub: "sekali bayar, project selesai",
    items: [
      "Landing page custom 1 halaman, mobile-first",
      "Setup Google Business Profile lengkap",
      "Integrasi WhatsApp Business dengan template otomatis",
      "Dashboard inquiry sederhana untuk resepsionis",
      "Google Analytics + Search Console setup",
      "2 round revisi major + unlimited detail tweaks",
      "Domain dan hosting tahun pertama (kalau belum ada)",
      "Training resepsionis 1 jam",
      "Garansi bug fix 30 hari",
    ],
    ctaLabel: "Tanya detail via WhatsApp",
  },
  secondary: {
    title: "Maintenance bulanan (opsional)",
    price: "Rp 500.000 per bulan",
    body: "Update konten kalau ada treatment baru, monitoring performance, monthly report. Bisa dimulai setelah handoff, no commitment minimum.",
  },
};

export const caseStudyPreviewContent = {
  heading: "Hasil nyata dari klien",
  subheading: "Studi kasus singkat dari project yang pernah saya kerjakan",
};

export const aboutContent = {
  heading: "Yang akan kerjakan project Anda",
  paragraphs: [
    "Saya Aldi, full-stack developer berbasis di Surabaya. Selama beberapa tahun terakhir saya bangun aplikasi web dan AI untuk klien di berbagai industri, mulai dari agribisnis sampai personal finance.",
    "Saya fokus ke klinik gigi karena saya lihat pattern yang sama di Surabaya: banyak klinik dengan rating bagus dan pasien loyal, tapi online presence-nya tertinggal jauh dari kualitas layanan mereka. Pasien baru jadi sulit menemukan mereka, padahal kompetitor dengan website biasa-biasa aja malah lebih banyak booking-nya.",
    "Saya kerja solo, bukan agency. Artinya: harga lebih jujur (gak ada markup tim), kualitas konsisten (yang jualan dan yang ngerjakan orangnya sama), dan komunikasi langsung tanpa account manager perantara. Trade-off-nya: saya hanya bisa ambil 2-3 project per bulan.",
  ],
};

export const faqContent = {
  heading: "Pertanyaan yang sering ditanya",
  items: [
    {
      q: "Bagaimana proses kerjanya dari awal sampai akhir?",
      a: "Setelah Anda transfer DP 50%, kita kick-off meeting (online atau offline) untuk discovery. Saya kumpulkan semua materi yang dibutuhkan dalam 3-5 hari. Lalu saya kerjakan design dan development sekitar 7-10 hari. Anda review, kasih feedback, saya revisi. Total 3 minggu sampai launch.",
    },
    {
      q: "Apakah saya butuh hosting sendiri?",
      a: "Tidak perlu. Tahun pertama domain dan hosting saya tanggung dan sudah masuk paket. Untuk tahun kedua, Anda bisa lanjut pakai setup yang ada (sekitar Rp 1 juta per tahun) atau migrate ke hosting sendiri kalau preferensi.",
    },
    {
      q: "Bagaimana kalau saya mau revisi setelah handoff?",
      a: "30 hari pertama setelah launch, bug fix dan adjustment kecil gratis. Setelah itu, ambil paket maintenance Rp 500rb per bulan kalau butuh update rutin, atau bayar per request kalau cuma sesekali.",
    },
    {
      q: "Apakah bisa integrasi dengan sistem klinik existing?",
      a: "Tergantung sistem-nya. Untuk SIMRS umum (klinikku, vmedis, dll), biasanya bisa via webhook atau export CSV. Diskusi dulu di kick-off untuk planning teknis.",
    },
    {
      q: "Bagaimana kalau pasien isi form tapi resepsionis offline?",
      a: "Form akan langsung trigger pesan ke WhatsApp Business klinik. Resepsionis lihat saat online lagi, plus muncul di dashboard inquiry. Tidak ada inquiry yang hilang.",
    },
    {
      q: "Apakah ada garansi?",
      a: "Ya, garansi bug fix 30 hari setelah launch. Kalau ada bug yang dari kode saya, gratis fix. Kalau request fitur baru atau perubahan scope, itu di luar garansi.",
    },
    {
      q: "Pembayaran bagaimana?",
      a: "50% di awal sebagai DP setelah agreement, 50% di handoff setelah Anda confirm semuanya jalan. Transfer bank, e-wallet, atau invoice resmi dengan PPN kalau Anda butuh untuk pajak klinik.",
    },
    {
      q: "Bisa kerja untuk klinik di luar Surabaya?",
      a: "Bisa. Diskusi awal via Google Meet, eksekusi semua remote. Yang offline cuma kalau Anda butuh foto klinik profesional, saya bisa rekomendasi fotografer lokal di kota Anda.",
    },
  ],
};

export const finalCtaContent = {
  headline: "Siap bikin klinik Anda lebih mudah dipesan?",
  subhead:
    "Diskusi 15 menit, gratis, gak ada hard sell. Saya kasih insight terlepas Anda lanjut atau tidak.",
  ctaLabel: "Mulai diskusi via WhatsApp",
};

export const solutionMockup = {
  iconHero: Building2,
  iconBooking: CalendarCheck,
  iconMap: MapPin,
  iconChat: MessageSquare,
};
