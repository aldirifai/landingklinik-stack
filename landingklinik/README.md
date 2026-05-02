# landingklinik.id

Landing page service untuk spesialis web klinik gigi di Indonesia. Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui.

## Quick start

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Main landing page (Hero → Problem → Solution → Process → Pricing → Case Study Preview → About → FAQ → Final CTA)
- `/portfolio` — Daftar semua case study
- `/case-study/[slug]` — Detail case study (statis, di-generate dari `content/case-studies.ts`)
- `/privacy`, `/terms` — Halaman legal
- `/sitemap.xml`, `/robots.txt` — Auto-generated dari `app/sitemap.ts` dan `app/robots.ts`
- 404 page custom di `app/not-found.tsx`

## Struktur folder

```
app/                # Routes (App Router)
  case-study/[slug]/  Dynamic case study detail
  portfolio/          Portfolio list
  privacy/, terms/    Legal pages
  layout.tsx          Root layout (Header + Footer + JSON-LD)
  page.tsx            Main landing
  sitemap.ts          Sitemap generator
  robots.ts           robots.txt generator
  not-found.tsx       Custom 404
  globals.css         Tailwind + design tokens
components/
  ui/                 shadcn primitives (Button, Card, Accordion)
  sections/           Section components untuk landing page
  layout/             Header, Footer
  Container.tsx, SectionHeading.tsx, Reveal.tsx
  HeroMockup.tsx, SolutionMockup.tsx, BrowserMockup.tsx
  CaseStudyCard.tsx
  ThumbnailPlaceholder.tsx, PortraitPlaceholder.tsx
  Logo.tsx
content/
  main.ts             Copy untuk landing page (per section)
  case-studies.ts     Data semua case study
lib/
  site.ts             Site metadata (domain, kontak, social)
  seo.ts              Metadata + JSON-LD helpers
  whatsapp.ts         wa.me link builder + template messages
  utils.ts            cn() classnames helper
public/
  (taruh og-default.png, foto profil, favicon di sini)
```

## Cara update konten

### Mengubah copy di landing page

Semua copy untuk section A–J ada di `content/main.ts`. Setiap section punya satu object exported (mis. `heroContent`, `problemContent`, `pricingContent`). Edit langsung di file tersebut—section component akan otomatis re-render saat dev server jalan.

Contoh untuk update headline hero:

```ts
// content/main.ts
export const heroContent = {
  headline: "Headline baru di sini",
  // ...
};
```

### Update kontak / metadata global

Edit `lib/site.ts`:

```ts
export const siteConfig = {
  name: "landingklinik.id",
  url: "https://landingklinik.id",
  email: "hello@landingklinik.id",
  whatsapp: { raw: "6285856981160", display: "+62 858-5698-1160" },
  social: {
    instagram: "https://instagram.com/<handle>",
    linkedin: "https://linkedin.com/in/<handle>",
    github: "https://github.com/<handle>",
  },
  // ...
};
```

Field ini dipakai di Header, Footer, JSON-LD, dan semua `wa.me` link.

### Mengubah template pesan WhatsApp

Edit `lib/whatsapp.ts`. Tiap CTA bisa pakai template berbeda (default inquiry, pricing inquiry, case study follow-up).

## Cara menambah case study baru

1. Buka `content/case-studies.ts`.
2. Tambah object baru di array `caseStudies`. Pastikan `slug` unik (kebab-case, akan jadi URL `/case-study/<slug>`).
3. Lengkapi semua field: `name`, `location`, `year`, `duration`, `category`, `categoryLabel`, `oneLineResult`, `thumbnailGradient` (Tailwind gradient classes, mis. `"from-cyan-400 via-sky-500 to-blue-600"`), `profile`, `challenges` (array string), `solutions` (array string), `results` (4 metric object), `testimonial`.
4. Set `isHypothetical: false` setelah klien asli.

Tidak perlu jalankan apa pun—Next.js akan generate static page baru pada build berikut. Sitemap juga otomatis ter-update.

## SEO & Schema

- Title + meta description per page via `buildMetadata()` di `lib/seo.ts`. Setiap page format `[Page name] | landingklinik.id`.
- OpenGraph + Twitter Card auto-generated dari `buildMetadata`. Image default mengarah ke `/og-default.png` — silakan replace dengan asset actual.
- Schema.org:
  - `Organization` → di-inject di root layout (`app/layout.tsx`)
  - `Service` → di main landing page
  - `Article` → di case study detail
- Sitemap di `/sitemap.xml`, robots di `/robots.txt`.
- Canonical URL di-set otomatis untuk setiap page.

## Deploy ke Vercel

### Cara cepat (CLI)

```bash
npm i -g vercel
vercel       # follow prompts; pilih default settings
vercel --prod
```

### Cara via dashboard

1. Push repo ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new), import repo.
3. Framework Preset: **Next.js** (auto-detect). Build & Output settings: default.
4. Klik **Deploy**.

### Setup custom domain landingklinik.id

1. Di Vercel dashboard project, buka tab **Settings → Domains**.
2. Add domain: `landingklinik.id`. Vercel akan kasih instruksi DNS:
   - **A record** untuk apex `@`: `76.76.21.21`
   - **CNAME** untuk `www`: `cname.vercel-dns.com`
3. Login ke registrar domain (mis. Niagahoster/IDwebhost), set DNS sesuai instruksi Vercel.
4. Tunggu propagasi DNS (biasanya 5–60 menit). SSL auto-generated oleh Vercel.
5. (Opsional) Set redirect dari `www` ke apex (atau sebaliknya) di Vercel.

### Email forwarding hello@landingklinik.id

Vercel tidak provide MX/email hosting. Pilihan termurah:

- **ImprovMX** (gratis untuk 1 domain): `improvmx.com` — set MX records ke domain mereka, forward `hello@landingklinik.id` ke Gmail Anda.
- **Cloudflare Email Routing** (gratis): pindah DNS ke Cloudflare, lalu enable email routing.
- **Google Workspace** (Rp 80rb/bulan): kalau perlu inbox sendiri.

## Environment variables

Saat ini project tidak butuh env var — semuanya statis. Kalau nanti tambah analytics/integrasi:

```bash
# .env.local (jangan di-commit)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Lalu tambahkan `<Script>` GA di `app/layout.tsx` di-gate dengan env var tersebut.

## Checklist yang perlu Anda lengkapi sebelum production

Setelah build, item ini perlu di-replace dari placeholder ke asset/data asli:

- [ ] **Foto profil** untuk section About — taruh sebagai `/public/about-portrait.jpg` lalu update `components/sections/About.tsx` mengganti `<PortraitPlaceholder />` dengan `<Image src="/about-portrait.jpg" ... />`
- [ ] **Logo** — sekarang pakai SVG inline di `components/Logo.tsx`. Replace dengan logo asli kalau sudah ada.
- [ ] **Favicon set** — taruh `favicon.ico`, `apple-touch-icon.png` di `/public`. SVG icon sudah ada di `app/icon.svg`.
- [ ] **OG default image** — buat 1200×630 PNG, simpan sebagai `/public/og-default.png`.
- [ ] **Social links** — update Instagram, LinkedIn, GitHub URL di `lib/site.ts`.
- [ ] **Email forwarding** — setup `hello@landingklinik.id` ke Gmail (lihat section di atas).
- [ ] **Google Analytics ID** — daftar GA4, tambahkan ID ke env var, inject script di layout.
- [ ] **Search Console** — claim domain, submit sitemap di `landingklinik.id/sitemap.xml`.
- [ ] **Case study asli** — replace 2 case study hypothetical di `content/case-studies.ts` dengan project nyata, lalu set `isHypothetical: false`.
- [ ] **Privacy Policy & Terms** — review draft di `/privacy` dan `/terms`, update sesuai kondisi aktual (PIC, alamat klinik, dsb).
- [ ] **Service Agreement template** — siapkan dokumen Service Agreement terpisah untuk klien (PDF/Doc).

## Maintenance & extension hint

- **Tambah section baru di landing**: bikin component di `components/sections/`, tambah object copy-nya di `content/main.ts`, import & pasang di `app/page.tsx`.
- **Ganti color brand**: edit token CSS di `app/globals.css` (`--primary`, `--accent`, dst). Semua component pakai token ini, jadi sekali edit langsung kena seluruh UI.
- **Subtle animation on scroll**: pakai component `<Reveal>` (di `components/Reveal.tsx`)—tinggal wrap konten yang mau di-fade-in.

## Tech stack ringkas

- Next.js 14.2 (App Router), TypeScript strict mode
- Tailwind CSS 3.4 + tailwindcss-animate
- shadcn/ui primitives (Button, Card, Accordion via Radix)
- lucide-react untuk icon
- Inter (body) + Manrope (display) via `next/font`
- No backend, full static — siap deploy ke Vercel free tier
