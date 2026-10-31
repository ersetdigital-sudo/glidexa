# GlideXAVPN Website

Landing page, Privacy Policy, dan Terms & Conditions GlideXAVPN, dibangun pakai **Astro** + **Tailwind CSS v4**, 1:1 dari desain Figma (section "REVISI - Website").

## Jalanin di komputer

Butuh Node.js 22 atau lebih baru.

```bash
npm install
npm run dev      # buka http://localhost:4321
npm run build    # hasil siap upload ada di folder dist/
```

## Struktur

```
src/
  data/site.ts        <- SEMUA teks, harga, FAQ, dan link ada di sini
  components/         <- tiap section 1 file (Hero, Pricing, Faq, Footer, dst)
  layouts/Base.astro  <- head, navbar, footer
  pages/              <- index (landing) & privacy-policy
  styles/global.css   <- token warna & font dari Figma
public/images/        <- semua gambar & icon dari Figma
```

Ganti copywriting, harga, atau link cukup di `src/data/site.ts`, layout gak perlu disentuh.

## Yang masih perlu diisi

- `LINKS.playStore` di `src/data/site.ts`: link Google Play asli
- Teks Privacy Policy & Terms (`src/data/legal.ts`) masih draft umum, nanti diganti versi tim legal
- Strip "partner" sementara pakai label genre game (MOBA, FPS, dll)

## Deploy

Folder `dist/` hasil `npm run build` adalah web statis, bisa di-upload ke hosting mana aja
(Vercel, Netlify, Cloudflare Pages, cPanel). Di Vercel/Netlify pilih framework **Astro**,
build command `npm run build`, output `dist`.
