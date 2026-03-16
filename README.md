# Real Estate Agency Portfolio Site

A **static** real estate agency portfolio site for the global market (English). Built to showcase what you can deliver for agency clients—no CMS, no database, only files and folders.

**License:** All rights reserved © 2026 Nicolae-Valentin Dinca. See [LICENSE](./LICENSE).

## Features

- **Disclaimer banner** at the top (fictional project notice)
- **Home:** Hero, featured properties, services, stats, testimonials, CTA
- **About:** Story, mission, values, team
- **Services:** Sales, lettings, management, investment, consultancy
- **Properties:** Filterable list (type, area, price, bedrooms) and detail pages
- **Areas:** Covered regions with links to listings
- **Testimonials:** Client quotes
- **Contact:** Form (demo), address, map embed

Data lives in `data/*.json` (listings, team, testimonials, services, areas, site config). Edit these files and rebuild to update content.

## Tech stack

- **Next.js 15** (App Router) with **static export** (`output: 'export'`)
- **Tailwind CSS**
- **TypeScript**

## Commands

```bash
npm install
npm run dev    # Development at http://localhost:3000
npm run build  # Static export → `out/` folder
```

## Deploy on Vercel

1. Push the project to **GitHub** (create a repo, then `git init`, `git add .`, `git commit -m "Initial commit"`, `git remote add origin <url>`, `git push -u origin main`).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import** your GitHub repo.
3. Leave **Build Command** as `npm run build` and **Output Directory** empty (Vercel detects Next.js static export).
4. (Optional) In **Environment Variables** add `NEXT_PUBLIC_SITE_URL` = `https://agency.nicolae-valentin-dinca.net` so the sitemap and Open Graph use the correct URL. If you use this custom domain in Vercel, set it there.
5. Deploy. Security headers are applied via `vercel.json`.

## Project plan

See [REAL-ESTATE-AGENCY-PORTFOLIO-PLAN.md](./REAL-ESTATE-AGENCY-PORTFOLIO-PLAN.md) for the full plan and implementation notes.
