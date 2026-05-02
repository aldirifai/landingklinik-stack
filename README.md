# landingklinik-stack

Monorepo untuk **5 website [landingklinik.id](https://landingklinik.id)** — portfolio + 4 demo klinik gigi — dengan setup deploy all-in-one ke single VPS pakai Docker + Nginx native + Certbot.

## Isi repo

| Folder | Site | Deskripsi |
|---|---|---|
| `landingklinik/` | `landingklinik.id` | Portfolio utama (jasa landing page klinik gigi) |
| `demo-general/` | `demo-general.landingklinik.id` | Demo klinik general — Dental Care Studio (warm/family vibe) |
| `demo-aesthetic/` | `demo-aesthetic.landingklinik.id` | Demo klinik premium — Smile Aesthetic Dental (navy/gold) |
| `demo-pediatric/` | `demo-pediatric.landingklinik.id` | Demo klinik anak — Si Senyum Pediatric Dental (playful coral/mint) |
| `demo-dashboard/` | `demo-dashboard.landingklinik.id` | Internal admin dashboard untuk resepsionis (clean blue) |

## Stack per project

Semua 5 project pakai stack yang sama:

- **Next.js 14** App Router + TypeScript strict
- **Tailwind CSS** + Lucide icons
- **shadcn-style components** (custom, no library dependency)
- **Static generation** (no backend, content-driven dari `src/lib/content.ts`)
- **Output standalone** (untuk Docker)
- Mobile-first responsive, Bahasa Indonesia

Tambahan untuk `demo-dashboard`:
- **Recharts** untuk analytics charts

## Deploy stack

Single command deploy 5 site di satu VPS:

```bash
cd ~/landingklinik-stack
docker compose up -d --build
```

Komposisi:
- 5 container Next.js standalone (bind ke `127.0.0.1:47050-47054`, tidak terexpose publik)
- Nginx native di host = reverse proxy + TLS termination
- Certbot native di host = auto-issue Let's Encrypt cert per domain

Detail lengkap step-by-step di **[DEPLOY.md](./DEPLOY.md)**.

## Development local

Setiap project bisa dijalankan independen:

```bash
cd demo-general
npm install
npm run dev          # http://localhost:3000

cd ../demo-aesthetic
npm install
npm run dev          # http://localhost:3001

cd ../demo-pediatric
npm install
npm run dev          # http://localhost:3002

cd ../demo-dashboard
npm install
npm run dev          # http://localhost:3003

cd ../landingklinik
npm install
npm run dev          # http://localhost:3000
```

Port dev sengaja beda biar bisa run paralel.

## Edit konten demo

Semua text content (nama klinik, dokter, treatment, testimonial, FAQ, dll) terpusat di `src/lib/content.ts` masing-masing project. Edit di sana, hot reload apply otomatis. Tidak ada hardcoded text di komponen `.tsx`.

## Struktur folder per demo

```
demo-xxx/
├── src/
│   ├── app/          # layout, page, globals.css, not-found
│   ├── components/
│   │   ├── sections/ # Hero, About, Treatments, Doctors, Booking, dll
│   │   └── ui/       # Button, Card, Input, Accordion
│   ├── lib/
│   │   ├── content.ts  # SEMUA copy ada di sini
│   │   ├── booking.ts  # WhatsApp deep link helper
│   │   └── cn.ts
│   └── types/
├── public/
├── Dockerfile        # multi-stage Next standalone build
├── .dockerignore
├── next.config.js    # output: "standalone"
└── package.json
```

## License

Proprietary — © landingklinik.id
