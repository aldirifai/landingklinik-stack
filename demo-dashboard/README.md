# Demo Dental Dashboard

Demo internal admin dashboard untuk landingklinik.id — tool resepsionis untuk handle inquiry, booking, dan reports.

## Stack

Next.js 14 (App Router), TypeScript strict, Tailwind CSS, Lucide icons, Recharts.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka http://localhost:3003 → klik "Demo Login" → masuk ke `/inbox`.

## Pages

- `/` — Login screen (pre-filled, klik tombol langsung route ke /inbox)
- `/inbox` — Inquiry management (15 dummy data, filter by status, click row → detail panel)
- `/bookings` — Today's bookings dalam timeline view
- `/patients` — Database 50 pasien dengan search & range filter
- `/reports` — Stat cards + 3 charts (recharts) + top treatment table
- `/settings` — Placeholder "coming soon" panel

## Data

Semua data dummy ada di `src/lib/data.ts`:
- `inquiries` (15 — 6 new, 4 contacted, 3 booked, 1 noshow, 1 archived)
- `todayBookings` (8)
- `patients` (50)
- `inquiriesPerDay`, `treatmentBreakdown`, `bookingTrend30d`, `topTreatments` (analytics)

State tidak persist — refresh page reset action ke initial state. Cocok untuk demo.

## Deploy

Push ke `main`, Vercel auto-deploy.

## DNS

Domain target: **demo-dashboard.landingklinik.id**

Cloudflare DNS:
- Name: `demo-dashboard`
- Target: `cname.vercel-dns.com`
- Proxy: **DNS only** (gray cloud)
