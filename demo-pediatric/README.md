# Demo Si Senyum Pediatric Dental

Demo website untuk landingklinik.id — pediatric dentistry (vibe: playful coral/mint, friendly fonts, parent-focused).

## Stack

Next.js 14 (App Router), TypeScript strict, Tailwind CSS, Lucide icons.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka http://localhost:3002 (port 3002 supaya tidak bentrok dengan demo lain).

## Edit konten

Semua text content ada di `src/lib/content.ts`:
- `clinic`, `doctors` (2 Sp.KGA), `treatments` (4 kategori)
- `methodology` (Tell-Show-Do, Reward, Parent-present, Gradual desensitization)
- `articles` (3 parent education preview)
- `eduCards`, `usps`, `testimonials`, `faqs`

## Deploy

Push ke `main`, Vercel auto-deploy.

## DNS

Domain target: **demo-pediatric.landingklinik.id**

Cloudflare DNS:
- Name: `demo-pediatric`
- Target: `cname.vercel-dns.com`
- Proxy: **DNS only** (gray cloud)
