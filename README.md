# Classic American Roads

A nostalgic Americana travel blog — scenic highways, vintage diners, classic motels, and small-town stories across the USA.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Express.js + compression (production server)

## Install
```bash
npm install
```

## Develop
```bash
npm run dev
```
Opens http://localhost:5173

## Build
```bash
npm run build
```
Outputs to `/dist`.

## Run in Production
```bash
npm run build
npm start
```
Starts Express on `PORT` (default 3000), serves `/dist` with gzip compression and SPA fallback.

## Deployment

### Heroku / Render / Railway
- Procfile and app.json are provided.
- Set Node 18+.
- Deploy will run `npm install`, `npm run build`, then `npm start`.

### Static hosts (Netlify, Vercel, Cloudflare Pages)
- Build command: `npm run build`
- Publish directory: `dist`
- Add a SPA redirect: `/*  /index.html  200`

## Project Structure
```
src/
  assets/images/    Local downloaded images (hero, highways, diners, motels, smalltowns, blog, community)
  components/       Reusable UI (Navbar, Footer, ExpandableCard, Accordion, Layout, CookieBanner, SectionHeader)
  pages/            Route-level pages
  utils/            analytics.js + data.js
  App.jsx           Routes
  main.jsx          Entry
  index.css         Tailwind + base styles
```

## SEO
- Meta title/description, Open Graph, Twitter Cards, and JSON-LD Organization schema in `index.html`.
- Semantic HTML, alt text on every image, lazy loading enabled.
- Google Analytics (G-4J046JXWVC) included via gtag.

## Notes
- All "Read More / Explore / View Story" interactions expand **inline** — no modals, no new pages.
- All images are stored locally in `src/assets/images/`.
- Cookie consent banner included for Google Ads / GDPR compliance.

## Contact
- Email: classicamericanroads@gmail.com
- Phone: (615) 555-8240
- Address: 455 Country Route Blvd, Nashville, TN 37203
