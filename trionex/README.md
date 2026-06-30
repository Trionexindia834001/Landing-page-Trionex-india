# Trionex India — Landing Page

Premium, conversion-focused landing page for **Trionex India Private Limited**, a digital marketing agency serving real estate developers, builders and interior design firms. Built with Next.js 15, React 19, TypeScript and Tailwind CSS, ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in your Meta Pixel ID:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_META_PIXEL_ID=1125853995644671
```

The pixel only fires in production builds (`npm run build && npm run start`), per the project requirements.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Trionex India landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository.
2. Vercel auto-detects Next.js — no build configuration needed.
3. Add the environment variable `NEXT_PUBLIC_META_PIXEL_ID` in **Project Settings → Environment Variables**.
4. Click **Deploy**.

## Project structure

```
app/                 Routes, layout, metadata, sitemap/robots
components/           Navbar, Footer, shared UI
components/sections/  Hero, Stats, Services, Contact, etc.
constants/             All site copy and data in one place
lib/                   Utilities (cn, Meta Pixel helpers)
public/                Static assets (add your logo, og-image.jpg)
```

## Before going live

- Replace `/public/og-image.jpg` and add a `/public/logo.png` (referenced in metadata and schema).
- Update `SITE.url` in `constants/site.ts` to your final production domain.
- Wire the contact form in `components/sections/Contact.tsx` to a real email/CRM endpoint (currently logs to console and shows a success state — swap in an API route, Formspree, or your CRM webhook).
- Swap Clash Display in for headings if you purchase/license it — it isn't on Google Fonts, so the project currently uses Manrope ExtraBold as specified as the fallback in the brief. Self-host it via `next/font/local` if you obtain the font files.
