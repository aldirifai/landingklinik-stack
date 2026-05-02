# Demo Dental Care Studio

Demo website untuk landingklinik.id — klinik gigi keluarga (general practice vibe: warm, family-oriented).

## Stack

Next.js 14 (App Router), TypeScript strict, Tailwind CSS, Lucide icons.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka http://localhost:3000

## Edit konten

Semua text content (nama klinik, dokter, treatment, testimonial, FAQ, dll) ada di:

```
src/lib/content.ts
```

Edit di sana, save, hot reload akan apply.

## Replace gambar

Sementara hero & about pakai placeholder visual (gradient + initial). Untuk replace dengan foto klinik asli:

1. Letakkan foto di `public/images/`
2. Update komponen di `src/components/sections/Hero.tsx` dan `About.tsx` — ganti placeholder div dengan `<Image src="/images/..." />`

## Deploy

Push ke `main`, Vercel auto-deploy.

```bash
git push origin main
```

## DNS

Domain target: **demo-general.landingklinik.id**

Di Cloudflare DNS landingklinik.id, tambah CNAME:
- Name: `demo-general`
- Target: `cname.vercel-dns.com`
- Proxy: **DNS only** (gray cloud, JANGAN orange — Vercel handle SSL sendiri)

Setelah DNS propagasi (5-30 menit), tambah custom domain di Vercel project Settings → Domains.

## Quality checks

- [x] `npm run dev` — no errors
- [x] `npm run build` — production build sukses
- [x] Mobile responsive (test pakai DevTools)
- [x] Booking form: validasi field required jalan
- [x] Booking form: submit buka WhatsApp dengan template terisi
- [x] Maps embed muncul
- [x] Footer disclaimer demo terpasang
