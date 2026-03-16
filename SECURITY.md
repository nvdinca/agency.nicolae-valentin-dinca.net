# Security

This document describes the security measures implemented on this static real estate agency portfolio site.

## Implemented measures

### 1. Content Security Policy (CSP)

CSP is applied via **response headers** in production (Vercel/Netlify) so that the Next.js dev server is not affected. The policy restricts resource loading as follows:

- **default-src 'self'** – Only same-origin by default.
- **script-src** – Same origin + inline (required for Next.js hydration).
- **style-src** – Same origin, inline (Tailwind), and Google Fonts.
- **font-src** – Same origin and Google Fonts.
- **img-src** – Same origin, `data:`, and `https:` (e.g. Unsplash).
- **frame-src** – Only `https://www.google.com` (maps embed).
- **form-action 'self'** – Forms can only submit to the same origin.
- **frame-ancestors 'self'** – Site cannot be embedded in iframes on other domains.

### 2. Security-related meta tags and headers

In the HTML `<head>` (and, where applicable, via hosting config):

- **X-Content-Type-Options: nosniff** – Prevents MIME-type sniffing.
- **X-Frame-Options: SAMEORIGIN** – Restricts framing to same origin.
- **Referrer-Policy: strict-origin-when-cross-origin** – Limits referrer sent to third parties.

Vercel and Netlify configs add:

- **X-XSS-Protection: 1; mode=block** – Legacy XSS filter (where supported).
- **Permissions-Policy** – Disables camera, microphone, geolocation.

### 3. External links

- All external links use **rel="noopener noreferrer"** and **target="_blank"** (via `ExternalLink` and the disclaimer banner) to avoid tab-napping and limit referrer leakage.
- Mailto/tel links are same-origin in behaviour; external social links use the component above.

### 4. Contact form

- **Honeypot field** – A hidden field (`website_url`) is present; if it is filled, the form does not “submit” (no success state). Used to reduce bot submissions.
- No data is sent to a server in this demo; in production you would add server-side validation, rate limiting, and CSRF if the form posts to an API.

### 5. Static export and data

- The site is **fully static** (`output: 'export'`). No server-side code runs on your host; no database or secrets are used at build time in this repo.
- Content is read from JSON in `data/`. No user input is persisted; the contact form is client-only for the demo.

### 6. Dependencies

- Run **`npm audit`** regularly and fix reported vulnerabilities.
- Keep Next.js and other dependencies up to date.

## Deployment checklist

When deploying (Vercel, Netlify, or other):

1. **HTTPS only** – Enforce HTTPS and redirect HTTP to HTTPS (usually default on Vercel/Netlify).
2. **Headers** – Use the provided `vercel.json` or `netlify.toml` so security headers are applied.
3. **Environment** – Do not put secrets in client-side code or in `NEXT_PUBLIC_*` unless they are meant to be public.
4. **Domain** – Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://agency.nicolae-valentin-dinca.net`) if you use it for sitemap/OG.

## Reporting a vulnerability

If you find a security issue, please report it responsibly (e.g. to the repository owner or via your preferred channel) rather than opening a public issue.
