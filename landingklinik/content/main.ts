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
  headline: "Landing page klinik gigi yang bikin pasien langsung booking, bukan cuma baca-baca",
  subheadline:
    "Untuk klinik gigi yang sudah punya pasien loyal tapi website-nya belum bantu jadwal terisi. Saya bangun landing page, integrasi WhatsApp booking, dan dashboard inquiry dalam 3 minggu.",
  primaryCta: {
    label: "Diskusi gratis 15 menit",
  },
  secondaryCta: {
    label: "Lihat portfolio",
  },
};

export const problemContent = {
  heading: "3 masalah yang sering bikin booking klinik gigi nyangkut",
  cards: [
    {
      title: "Chat WhatsApp masuk terus, resepsionis kewalahan",
      body: "Inquiry numpuk di satu nomor, balasan telat sejam saja pasien sudah pindah ke klinik lain. Tidak ada catatan mana yang sudah di-handle.",
      icon: MessageSquare,
    },
    {
      title: "Website klinik cuma jadi brosur online",
      body: "Halaman penuh teks layanan, tarif, dan profil dokter. Tapi pasien yang mau booking tetap bingung harus mulai dari mana, akhirnya WA langsung tanpa konteks.",
      icon: ClipboardList,
    },
    {
      title: "Ramai di Google Maps, sepi di website",
      body: "Calon pasien nemu klinik dari pencarian Google atau Maps, lalu mampir cek website. Kalau tampilannya kurang meyakinkan, mereka langsung scroll ke kompetitor.",
      icon: MapPin,
    },
  ],
};

export const solutionContent = {
  heading: "Yang saya bangun untuk klinik gigi Anda",
  features: [
    {
      title: "Landing page klinik gigi yang fokus ke booking",
      body: "Setiap section punya satu tujuan: dorong pasien ambil jadwal. Mobile-first, loading cepat, copy yang ngomong langsung ke calon pasien, bukan ke kompetitor.",
      icon: CalendarCheck,
    },
    {
      title: "WhatsApp booking dengan pesan otomatis",
      body: "Tombol booking buka WA Business klinik dengan pesan pre-filled (nama, treatment, jadwal). Resepsionis tinggal konfirmasi, tidak perlu tanya ulang dari nol.",
      icon: MessageSquare,
    },
    {
      title: "Google Business Profile klinik dioptimasi",
      body: "Setup foto, jam buka, daftar layanan, dan posting berkala supaya klinik muncul lebih sering di pencarian lokal Google Maps area sekitar.",
      icon: MapPin,
    },
    {
      title: "Dashboard inquiry untuk resepsionis",
      body: "Semua booking dan tanya-tanya masuk ke satu layar. Tandai mana yang sudah di-follow up, mana yang masih pending, tidak ada yang terlewat.",
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
      body: "Saya kumpulkan info klinik: profil dokter, daftar treatment, jam praktik, tarif, foto. Kalau ada yang belum siap, saya bantu siapkan supaya tidak menghambat.",
      icon: Search,
    },
    {
      label: "Minggu 2",
      title: "Desain dan build",
      body: "Desain landing page custom (bukan template), develop halaman, setup Google Business Profile, dan integrasi WhatsApp Business klinik.",
      icon: Sparkles,
    },
    {
      label: "Minggu 3",
      title: "Review dan revisi",
      body: "Anda review, saya revisi. Maksimal 2 putaran revisi major, plus penyesuaian detail kecil tanpa batas selama masih dalam scope.",
      icon: Wrench,
    },
    {
      label: "Setelah launch",
      title: "Launch dan training",
      body: "Website klinik live, dashboard di-handover, plus 1 jam training untuk resepsionis cara handle inquiry baru dari WhatsApp dan dashboard.",
      icon: Rocket,
    },
  ],
};

export const pricingContent = {
  heading: "Harga transparan, tidak ada biaya kejutan",
  subheading: "Satu paket lengkap, sekali bayar. Maintenance bulanan opsional.",
  primary: {
    title: "Klinik Online Starter Pack",
    price: "Rp 5.500.000",
    sub: "sekali bayar, project selesai dalam 3 minggu",
    items: [
      "Landing page klinik gigi 1 halaman, custom design, mobile-first",
      "Setup Google Business Profile lengkap (foto, jam, layanan, post awal)",
      "Integrasi WhatsApp Business booking dengan pesan otomatis pre-filled",
      "Dashboard inquiry sederhana untuk resepsionis pantau booking masuk",
      "Setup Google Analytics dan Search Console untuk tracking trafik",
      "2 putaran revisi major plus penyesuaian detail tanpa batas",
      "Domain .com/.id dan hosting tahun pertama (kalau belum punya)",
      "Training 1 jam untuk resepsionis dan tim klinik",
      "Garansi bug fix 30 hari setelah launch",
    ],
    ctaLabel: "Tanya detail via WhatsApp",
  },
  secondary: {
    title: "Maintenance bulanan (opsional)",
    price: "Rp 500.000 per bulan",
    body: "Update konten kalau ada treatment baru atau ganti dokter, monitoring uptime dan performance, plus laporan bulanan singkat. Bisa mulai kapan saja setelah handoff, tanpa minimum kontrak.",
  },
};

export const caseStudyPreviewContent = {
  heading: "Hasil nyata dari klinik yang sudah jalan",
  subheading: "Studi kasus singkat dari project landing page klinik gigi yang pernah saya kerjakan",
};

export const aboutContent = {
  heading: "Yang akan kerjakan project Anda",
  paragraphs: [
    "Saya Aldi, full-stack developer berbasis di Surabaya. Beberapa tahun terakhir saya bangun aplikasi web dan AI untuk klien di berbagai industri, mulai dari agribisnis sampai personal finance.",
    "Sekarang saya fokus ke jasa pembuatan website klinik gigi karena melihat pola yang sama di Surabaya dan kota lain: banyak klinik dengan rating bagus dan pasien loyal, tapi online presence-nya tertinggal jauh dari kualitas layanan. Pasien baru jadi sulit menemukan, sementara kompetitor dengan website ala kadarnya justru lebih ramai booking-nya.",
    "Saya kerja solo, bukan agency. Artinya: harga lebih jujur (tidak ada markup tim), kualitas konsisten (yang jualan dan yang ngerjakan orangnya sama), komunikasi langsung tanpa perantara account manager. Trade-off-nya, saya hanya ambil 2-3 project klinik per bulan supaya tetap fokus.",
  ],
};

export const faqContent = {
  heading: "Pertanyaan yang sering masuk",
  items: [
    {
      q: "Bagaimana proses kerjanya dari awal sampai launch?",
      a: "Setelah DP 50% masuk, kita kick-off meeting (online atau offline kalau Anda di Surabaya) untuk discovery. Saya kumpulkan materi dalam 3-5 hari, lanjut desain dan development sekitar 7-10 hari. Anda review, kasih feedback, saya revisi. Total 3 minggu sampai landing page klinik live.",
    },
    {
      q: "Apakah saya perlu siapkan hosting sendiri?",
      a: "Tidak perlu. Domain dan hosting tahun pertama sudah masuk paket. Tahun kedua Anda bisa lanjut pakai setup yang sama (sekitar Rp 1 juta per tahun) atau migrate ke hosting sendiri kalau lebih nyaman.",
    },
    {
      q: "Kalau ada yang mau diubah setelah handoff bagaimana?",
      a: "30 hari pertama setelah launch, bug fix dan penyesuaian kecil gratis. Setelah itu, ambil paket maintenance Rp 500rb per bulan untuk update rutin, atau bayar per request kalau cuma sesekali.",
    },
    {
      q: "Bisa integrasi dengan SIMRS atau sistem klinik yang sudah ada?",
      a: "Tergantung sistemnya. Untuk SIMRS umum (Klinikku, Vmedis, Assist.id, dll) biasanya bisa lewat webhook atau export CSV. Kita bahas detail teknisnya di kick-off meeting supaya planning-nya rapi.",
    },
    {
      q: "Kalau pasien isi form tapi resepsionis sedang offline?",
      a: "Form langsung trigger pesan ke WhatsApp Business klinik dan masuk ke dashboard inquiry. Resepsionis lihat saat online, lengkap dengan timestamp dan data pasien. Tidak ada inquiry yang hilang.",
    },
    {
      q: "Ada garansi setelah project selesai?",
      a: "Ya, garansi bug fix 30 hari setelah launch. Bug yang berasal dari kode saya, gratis fix. Kalau request fitur baru atau perubahan scope di luar kesepakatan awal, itu masuk hitungan terpisah.",
    },
    {
      q: "Cara pembayarannya bagaimana?",
      a: "DP 50% di awal setelah agreement, pelunasan 50% di handoff setelah Anda konfirmasi semua jalan. Bisa transfer bank atau e-wallet, dan saya keluarkan invoice resmi dengan PPN kalau klinik butuh untuk pembukuan.",
    },
    {
      q: "Bisa kerja untuk klinik di luar Surabaya?",
      a: "Bisa. Diskusi awal via Google Meet atau WhatsApp call, eksekusi sepenuhnya remote. Kalau butuh foto klinik profesional, saya bantu rekomendasikan fotografer lokal di kota Anda.",
    },
  ],
};

export const finalCtaContent = {
  headline: "Siap bikin klinik gigi Anda lebih mudah dipesan?",
  subhead:
    "Diskusi 15 menit, gratis, tanpa hard sell. Saya kasih insight soal landing page dan booking klinik Anda, terlepas mau lanjut kerja sama atau tidak.",
  ctaLabel: "Mulai diskusi via WhatsApp",
};

export const solutionMockup = {
  iconHero: Building2,
  iconBooking: CalendarCheck,
  iconMap: MapPin,
  iconChat: MessageSquare,
};
