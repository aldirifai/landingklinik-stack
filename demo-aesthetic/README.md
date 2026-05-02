# Demo Smile Aesthetic Dental

Demo website untuk landingklinik.id — premium aesthetic dentistry (vibe: navy/gold, serif headings, sophisticated).

## Stack

Next.js 14 (App Router), TypeScript strict, Tailwind CSS, Lucide icons.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka http://localhost:3001 (port 3001 supaya tidak bentrok dengan demo-general).

## Edit konten

Semua text content ada di `src/lib/content.ts`. Termasuk:
- `clinic`, `doctors`, `treatments`, `showcase`, `gallery` (8 case studies)
- `processSteps`, `estimatorOptions`, `testimonials`, `faqs`, `usps`

## Estimator

Logic ada di `src/components/sections/Estimator.tsx` + `estimatorOptions` di content.ts.
Untuk tambah/edit treatment di estimator, edit array `estimatorOptions` (id, label, unitLow, unitHigh, unit, defaultQty, maxQty).

## Replace gambar

- Hero pakai gradient + grid pattern (no image dependency, looks premium tetap)
- About pakai placeholder div
- Doctors pakai initial avatar
- Gallery 8 placeholder before/after slot dengan label

Untuk ganti dengan foto asli, drop file ke `public/images/` lalu update komponen masing-masing.

## Deploy

Push ke `main`, Vercel auto-deploy.

## DNS

Domain target: **demo-aesthetic.landingklinik.id**

Cloudflare DNS:
- Name: `demo-aesthetic`
- Target: `cname.vercel-dns.com`
- Proxy: **DNS only** (gray cloud)

Lalu add custom domain di Vercel project Settings.
