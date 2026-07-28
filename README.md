# Hammed Shotola — Portfolio

Custom Product Design portfolio (Next.js, TypeScript, Tailwind). Planning docs live in [`docs/`](./docs/). Implementation phases are in [`docs/04-DEVELOPMENT-ROADMAP.md`](./docs/04-DEVELOPMENT-ROADMAP.md).

## Setup

**Node.js:** use **v22 LTS** (or v20). Next.js dev currently breaks on **Node 26** (`getCurrentDirectory` / `fileExists` errors). This repo includes `.nvmrc` set to `22`.

```bash
cd ~/Developer/Hammed-Portfolio

# Homebrew (if you use Node 26 globally):
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
node -v   # should be v22.x

# Or with nvm:
# nvm install
# nvm use

npm install
cp .env.example .env.local   # optional for local canonical URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) only after the terminal shows **`✓ Ready`**.

`npm run dev` uses **webpack** (more reliable here). Optional: `npm run dev:turbo` for Turbopack.

### If startup is very slow

Keep the repo outside iCloud Desktop (this copy lives in `~/Developer`). Free disk space if your Mac is nearly full.

```bash
# Stop stale servers, reinstall deps locally, restart on Node 22
kill $(lsof -t -i:3000 -i:3001) 2>/dev/null
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
rm -rf node_modules .next
npm install
npm run dev
```

## Resume PDF

Add your file at `public/resume.pdf`, then set `resume.available: true` in `content/site.ts`. Until then the site shows an email request CTA (no broken PDF link).

## Test notes

See [`docs/05-TEST-NOTES.md`](./docs/05-TEST-NOTES.md) for Phase 8 Lighthouse scores and QA checklist.

## Deploy (Vercel)

**Live preview:** https://hammed-portfolio-cyan.vercel.app  

Full cutover steps (DNS for `hammedshotola.com`): see [`docs/06-DEPLOYMENT.md`](./docs/06-DEPLOYMENT.md).

1. Repo is linked to Vercel project `hammed-portfolio` (auto-deploys from `main`).
2. Env: `NEXT_PUBLIC_SITE_URL=https://hammedshotola.com`.
3. At GoDaddy, set:
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
4. In Vercel → Domains, wait until both show **Valid**, then redirect www → apex.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development (webpack) |
| `npm run dev:turbo` | Local development (Turbopack — optional) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## SEO

- Metadata + Open Graph / Twitter: `lib/seo.ts`, `app/layout.tsx`, `app/page.tsx`, project routes
- JSON-LD: Person + WebSite on home; CreativeWork on case studies
- `https://hammedshotola.com/sitemap.xml` and `/robots.txt` (via `app/sitemap.ts`, `app/robots.ts`)
- Icons: `app/icon.svg`, `app/apple-icon.tsx`; home OG image: `app/opengraph-image.tsx`

## Content

- Site config: `content/site.ts`
- Projects: `content/projects/`

## Motion principles

Motion is quiet and purposeful — presence and hierarchy, not decoration.

- **Route changes:** soft fade + slight rise (`app/template.tsx`)
- **Scroll:** one-time reveal via `Reveal` (home + case study sections)
- **Hover:** light lift / image scale ≤ 1.02 on cards and galleries
- **Lightbox:** fade + scale enter/exit
- **Images:** opacity fade-in when loaded (`FadeImage`)
- **Reduced motion:** animations and transforms are disabled or instant when `prefers-reduced-motion: reduce` is set
