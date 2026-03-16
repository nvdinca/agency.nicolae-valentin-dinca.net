# Real Estate Agency Portfolio Site – Plan (Global Market, English)

## 1. Scop și public țintă

- **Scop:** Prezentarea agenției, a echipei, a serviciilor și a proprietăților, plus generare de lead-uri (contact, newsletter).
- **Public:** Investitori internaționali, cumpărători/închirietori expați, parteneri (agenții, dezvoltatori), în limba engleză.

---

## 2. Banner disclaimer (sus de tot pe site)

**Poziție:** Primul element vizibil pe toate paginile, deasupra header-ului.

**Text exact:**
> This is a fictional agency & portfolio project. No real transactions or personal data are involved. — Portfolio of Nicolae-Valentin Dinca

- Afișat mereu vizibil (sau colapsabil, dar deschis implicit) în partea de sus a layout-ului.
- Stil discret dar lizibil (fundal neutru, text închis; ex. bandă subțire).

---

## 3. Structură de pagini (sitemap)

| Pagină | Conținut principal |
|--------|--------------------|
| **Home** | Hero (tagline, CTA), featured listings (3–6), servicii scurte, cifre/statistici, testimonial, CTA final |
| **About** | Povestea agenției, misiune/viziune, echipă (foto + bio), valori, poate un timeline |
| **Services** | Ce oferiți: vânzare, închiriere, management, investiții, consultanță; prețuri sau „Request a quote” |
| **Listings / Properties** | Listă filtrabilă (tip, locație, preț, camere), carduri cu imagine, preț, titlu, link la detaliu |
| **Property detail** | Galerie, descriere, caracteristici, hartă, formular de contact pentru acel imobil |
| **Areas / Locations** | Zone deservite (orașe/regiuni) cu scurtă descriere și link la listings per zonă |
| **Testimonials / Reviews** | Citate clienți, poate și rating / recenzii externe (Google etc.) |
| **Contact** | Formular, email, telefon, adresă, hartă (embed), poate calendar pentru meeting |
| **Blog / Insights** (opțional) | Articole despre piață, sfaturi, știri locale – bun pentru SEO și autoritate |

---

## 4. Elemente esențiale pentru „global market”

- **Limbă:** Site 100% în engleză (titluri, meniuri, formulare, mesaje de eroare).
- **Monedă:** Alegi una principală (EUR/USD/GBP) și o menționezi clar (e.g. „All prices in EUR”).
- **Fuse orare:** La „Book a call” sau „Contact” poți menționa timezone (e.g. „We reply within 24h, CET”).
- **Locație:** Clar unde acționați (țară, orașe) – pagina **Areas** e utilă pentru asta.
- **Trust:** Licențe, asociații (FIABCI, RICS etc.), ani de experiență, număr de tranzacții.
- **GDPR / Privacy:** Link la Privacy Policy și, dacă folosești cookie-uri, banner + Cookie Policy (important pentru vizitatori UE).

---

## 5. Funcționalități tehnice

- **Date (implementat):** Doar fișiere și foldere, fără CMS și fără bază de date externă. Listings, echipă, testimoniale, servicii și zone sunt în `data/*.json`. Site 100% static (Next.js `output: 'export'`), potrivit pentru prezentare la clienți.
- **CMS pentru proprietăți (alternativ, nefolosit aici):**
  - Variantă simplă: JSON/Markdown + build (Next/Astro etc.) ✓ folosit.
  - Variantă scalabilă: headless CMS (Strapi, Sanity, Contentful) sau Supabase pentru „listings”.
- **Căutare/filtrare:** Filtre pe tip (apartment, house, commercial), preț min–max, camere, locație; rezultate fără reload (SPA) sau cu URL-uri shareable (query params).
- **Formulare:** Contact + „Request viewing” / „Get more info” pe fiecare listing; validare + mesaj de succes/eroare; opțional: trimitere email (API route, Resend, SendGrid) sau salvare în DB.
- **SEO:** Meta title/description per pagină și per listing; URL-uri clare (e.g. `/listings/[slug]`); sitemap.xml; Open Graph pentru share pe social.
- **Performanță:** Imagini optimizate (WebP, dimensiuni responsive), lazy load; core web vitals bune.

---

## 6. Design și UX

- **Stil:** Profesional, curat; mult spațiu alb; fonturi lizibile; culori care inspiră încredere (albastru închis, gri, accente discrete).
- **Imagini:** Fotografii de calitate pentru proprietăți și pentru echipă; hero pe homepage puternic.
- **Mobile-first:** Meniu adaptat pe mobil, butoane mari, formulare ușor de completat pe telefon.
- **CTA clare:** „Contact us”, „View property”, „Schedule a viewing”, „Subscribe to new listings”.

---

## 7. Stack tehnologic (sugestii)

- **Frontend:** Next.js (App Router) sau Astro – ambele bune pentru SEO și performanță.
- **Stiluri:** Tailwind CSS pentru viteză; componente reutilizabile (card listing, formular, header/footer).
- **Date:** Listings din CMS/API sau fișiere locale; contact form cu server actions sau API routes.
- **Hosting:** Vercel, Netlify sau similar; domeniu dedicat (e.g. `agency.nicolae-valentin-dinca.net` sau domeniu de brand).

---

## 8. Conținut de pregătit

- Texte pentru: Home, About, Services, Areas (în engleză).
- 5–10 liste de proprietăți (titlu, descriere, preț, caracteristici, 3–5 imagini fiecare).
- Foto echipă + bio scurte.
- 3–5 testimoniale (nume, poziție/țară, text, poate poză).
- Logo, favicon, culori de brand.
- Texte legale: Privacy Policy, Cookie Policy (poți folosi generator + adaptare).

---

## 9. Pași de implementare (ordine logică)

1. Setup proiect (Next.js/Astro + Tailwind + structură foldere).
2. Layout global: **banner disclaimer** (sus de tot, text din secțiunea 2), apoi header (logo, meniu, CTA), footer (link-uri, contact, social).
3. Homepage: secțiuni în ordine (hero, featured listings, services, testimonials, CTA).
4. Pagini statice: About, Services, Areas, Contact (cu formular funcțional).
5. Listings: listă + filtre + pagină de detaliu pentru fiecare proprietate.
6. Integrare CMS sau sursă de date pentru listings (dacă nu folosești doar fișiere).
7. SEO (meta, sitemap), performanță (imagini, lazy load).
8. Testare pe dispozitive și browser-uri; publicare.

---

## English version (summary)

### 1. Purpose and target audience

- **Purpose:** Present the agency, team, services, and properties, and generate leads (contact, newsletter).
- **Audience:** International investors, expats buying/renting, and agency/developer partners. Language: English.

### 2. Disclaimer banner (top of the site)

- **Position:** First visible element on every page, above the header.
- **Exact text:**  
  > This is a fictional agency & portfolio project. No real transactions or personal data are involved. — Portfolio of Nicolae-Valentin Dinca
- Always visible (or collapsible but open by default), subtle but readable strip.

### 3. Page structure (sitemap)

| Page | Main content |
|------|--------------|
| **Home** | Hero (tagline, CTA), featured listings (3–6), short services, KPIs/stats, testimonial, final CTA |
| **About** | Agency story, mission/vision, team (photo + bio), values, optional timeline |
| **Services** | Offer: sales, lettings, management, investments, consultancy; pricing or “Request a quote” |
| **Listings / Properties** | Filterable list (type, location, price, beds), cards with image, price, title, link to detail |
| **Property detail** | Gallery, description, features, map, contact form for that property |
| **Areas / Locations** | Covered areas (cities/regions) with short description and link to listings per area |
| **Testimonials / Reviews** | Client quotes, optional ratings / external reviews |
| **Contact** | Form, email, phone, address, map embed, optional calendar |
| **Blog / Insights** (optional) | Market articles, tips, local news – good for SEO and authority |

### 4. Global market essentials

- **Language:** 100% English (titles, menus, forms, error messages).
- **Currency:** Choose one main currency (EUR/USD/GBP), clearly mentioned (e.g. “All prices in EUR”).
- **Time zones:** On “Book a call” or “Contact”, mention response time and timezone.
- **Location:** Make it clear which countries/cities you cover – the **Areas** page helps.
- **Trust:** Licences, memberships (FIABCI, RICS, etc.), years of experience, number of transactions.
- **GDPR / Privacy:** Privacy Policy link and Cookie banner/Policy for EU visitors.

### 5. Technical features

- **Data (implemented):** Pure files/folders, no CMS or external DB. Listings, team, testimonials, services, and areas live in `data/*.json`. Site is fully static (Next.js `output: 'export'`), ideal as a portfolio/presentation piece.
- **CMS (alternative, not used here):**  
  - Simple: JSON/Markdown + build (Next/Astro) ✓ used here.  
  - Scalable: headless CMS (Strapi, Sanity, Contentful) or Supabase for listings.
- **Search/filter:** Filters by type (apartment, house, commercial), min–max price, bedrooms, location; no reload or shareable filter URLs.
- **Forms:** Contact + “Request viewing” / “Get more info” per listing; validation and success/error states; optionally emails via API route (Resend, SendGrid) or DB storage.
- **SEO:** Meta title/description per page and per listing; clean URLs (e.g. `/listings/[slug]`); `sitemap.xml`; Open Graph for social sharing.
- **Performance:** Optimised images (WebP/remote), responsive sizes, lazy load; good Core Web Vitals.

### 6. Design & UX

- **Style:** Professional, clean; generous white space; readable fonts; trust-building colours (dark blue, greys, subtle accents).
- **Imagery:** High-quality photos for properties and team; strong hero image on the homepage.
- **Mobile-first:** Responsive menu, large tap targets, easy-to-fill forms on mobile.
- **CTAs:** Clear CTAs such as “Contact us”, “View property”, “Schedule a viewing”, “Subscribe to new listings”.

### 7. Tech stack

- **Frontend:** Next.js (App Router) – good SEO and performance.
- **Styling:** Tailwind CSS; reusable components (listing card, form, header/footer).
- **Data:** JSON files (`data/*.json`) or future CMS/API; contact form could use server actions or API routes.
- **Hosting:** Vercel/Netlify or similar; custom domain (e.g. `agency.nicolae-valentin-dinca.net`).

### 8. Content to prepare

- Copy for: Home, About, Services, Areas (in English).
- 5–10 property listings (title, description, price, features, 3–5 images each).
- Team photos + short bios.
- 3–5 testimonials (name, role/country, quote, optional photo).
- Brand assets: logo, favicon, colour palette.
- Legal text: Privacy Policy, Cookie Policy.

### 9. Implementation steps (English)

1. Project setup (Next.js + Tailwind + folder structure).
2. Global layout: disclaimer banner (top, text from section 2), then header (logo, nav, CTA) and footer (links, contact, social).
3. Homepage: sections in order (hero, featured listings, services, testimonials, CTA).
4. Static pages: About, Services, Areas, Contact (with working form).
5. Listings: listing grid with filters + detail page per property.
6. Data source or CMS integration for listings (if moving beyond JSON files).
7. SEO (meta, sitemap), performance (images, lazy load).
8. Cross-device and cross-browser testing; deploy.
