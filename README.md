# Hammed Shotola — Portfolio

Custom Product Design portfolio (Next.js, TypeScript, Tailwind). Planning docs live in [`docs/`](./docs/). Implementation phases are in [`docs/04-DEVELOPMENT-ROADMAP.md`](./docs/04-DEVELOPMENT-ROADMAP.md).

## Setup

```bash
cd "/Users/oluwolley/Desktop/Hammed - Portfolio"
npm install
cp .env.example .env.local   # optional for local canonical URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resume PDF

Add your file at `public/resume.pdf` (placeholder OK until final résumé is ready).

## Deploy (Vercel)

1. Import the GitHub repo in [Vercel](https://vercel.com/new).
2. Set `NEXT_PUBLIC_SITE_URL=https://hammedshotola.com`.
3. Connect domain **hammedshotola.com** in project settings → Domains.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Content

- Site config: `content/site.ts`
- Projects: `content/projects/`
