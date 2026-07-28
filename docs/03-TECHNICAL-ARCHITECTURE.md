# Technical Architecture

**Product:** Hammed Shotola — Product Design Portfolio  
**Version:** 1.1  
**Status:** Decisions locked — Phase 1 approval pending  
**Site URL:** https://hammedshotola.com/  
**Last updated:** 28 July 2026

---

## 1. Overview

A statically oriented **Next.js App Router** site with typed in-repo content, Tailwind design tokens, and Vercel deployment. Server Components by default; Client Components only for interactivity (TOC spy, lightbox, theme toggle, motion).

```
GitHub repo → Vercel build → CDN edge
     ↑
Content (TS/MDX) + public assets
```

---

## 2. Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| UI | React 19 |
| Styling | Tailwind CSS v4 (or v3 if tooling prefers) + CSS variables |
| Motion | CSS + Framer Motion (or `motion`) — sparse |
| Images | `next/image` |
| Fonts | `next/font`: Geist Sans + serif (Newsreader / Source Serif 4) |
| Content (v1) | Typed modules in `content/` (+ optional MDX later) |
| Hosting | Vercel |
| Analytics (v1) | **Vercel Analytics** (`@vercel/analytics`) |
| Package manager | pnpm (preferred) or npm |

---

## 3. Folder Structure

```
/
├── app/
│   ├── layout.tsx                 # Root layout: fonts, theme, nav shell
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Tokens + base styles
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── opengraph-image.tsx        # Optional generated OG
│   ├── not-found.tsx
│   └── projects/
│       └── [slug]/
│           ├── page.tsx           # Case study
│           └── opengraph-image.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SkipLink.tsx
│   │   └── MobileNav.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── SelectedWork.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── CaseStudyHero.tsx
│   │   ├── CaseStudySection.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── ReadingProgress.tsx
│   │   ├── RelatedProjects.tsx
│   │   ├── ImageGallery.tsx
│   │   └── Lightbox.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Tag.tsx
│   │   └── SocialLinks.tsx
│   └── motion/
│       └── Reveal.tsx
├── content/
│   ├── site.ts                    # Name, bio, socials, nav, resume URL, SEO defaults
│   ├── projects/
│   │   ├── index.ts               # Registry + helpers
│   │   ├── example-project.ts
│   │   └── ...
│   └── types.ts                   # Project, Section, SiteConfig types
├── lib/
│   ├── utils.ts                   # cn(), readingTime(), etc.
│   ├── seo.ts                     # Metadata helpers, JSON-LD builders
│   └── constants.ts
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── og/
│   ├── favicon.ico
│   └── resume.pdf                 # Optional
├── docs/                          # Planning docs (this folder)
├── .env.example
├── next.config.ts
├── tailwind.config.ts             # If applicable
├── tsconfig.json
├── package.json
└── README.md
```

---

## 4. Component Structure

### Principles
- **Server Components by default**
- Push `"use client"` to leaf interactivity (Lightbox, TOC, ThemeToggle, Reveal if needed)
- Presentational UI in `components/ui`
- Domain UI in `components/home` and `components/projects`
- No business logic duplication — content access via `content/projects` helpers

### Content-driven rendering
```ts
// Pseudo
const project = getProject(slug)
project.sections
  .filter(s => s.enabled !== false && hasContent(s))
  .map(s => <CaseStudySection key={s.id} section={s} />)
```

---

## 5. Routing

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage sections |
| `/projects/[slug]` | Static (`generateStaticParams`) | Case study |
| `/404` | Static | Not found |
| `/sitemap.xml` | Generated | `app/sitemap.ts` |
| `/robots.txt` | Generated | `app/robots.ts` |

In-page anchors: `/#about`, `/#work`, `/#resume`, `/#contact`.

No route groups required for v1; optional `(marketing)` later if blog added.

---

## 6. Reusable UI Components

| Component | Responsibility |
|-----------|----------------|
| `Container` | Max-width + horizontal padding |
| `Section` | Section landmark + id + vertical rhythm |
| `Button` | Variants, sizes, asChild/link support |
| `Tag` | Role / meta chips (subtle, not pill-spam) |
| `SocialLinks` | Accessible external links |
| `ProjectCard` | Featured work preview |
| `Lightbox` | Focus trap, Esc, aria-modal |
| `Reveal` | Scroll/entrance motion wrapper |

Shared utilities: `cn()` (clsx + tailwind-merge).

---

## 7. Styling Architecture

1. **Design tokens** as CSS variables in `globals.css` (`:root` and `.dark`)
2. **Tailwind** maps to tokens (`bg-background`, `text-foreground`, `border-border`, `text-accent`)
3. **No inline style sprawl** — exceptions for progress width / dynamic TOC
4. **Component variants** via simple CVA (`class-variance-authority`) if useful
5. **Global base:** typography defaults, focus-visible rings, smooth scroll (`scroll-behavior: smooth` + reduced-motion override)

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

---

## 8. Image Optimisation

- Store sources in `public/images/projects/[slug]/...`
- Use `next/image` with explicit `width`/`height` or `fill` + aspect ratio
- `priority` only for LCP candidates (home hero atmosphere / first work card if applicable)
- Formats: AVIF/WebP via Next defaults
- Provide descriptive `alt`; empty `alt` for pure decoration
- Lightbox uses same optimised sources where possible
- Avoid huge PNG screenshots; compress before commit (or use a build-time pipeline later)

---

## 9. Fonts

- Load sans + serif via `next/font` in root layout (`--font-sans`, `--font-serif`, `--font-mono` optional)
- Subset Latin; avoid multiple unused families
- Prevent FOIT/FOUT layout shift with next/font metrics

---

## 10. SEO Strategy

| Concern | Implementation |
|---------|----------------|
| Titles / descriptions | `generateMetadata` per route |
| Canonical | `alternates.canonical` from site URL |
| Open Graph | `openGraph` fields + dedicated images |
| Twitter | `twitter: { card: 'summary_large_image' }` |
| Structured data | JSON-LD script in layout / pages |
| Sitemap | All static routes + projects |
| Robots | Allow all; sitemap URL referenced |
| Semantic HTML | Landmarks, headings, link names |

Site URL from `NEXT_PUBLIC_SITE_URL=https://hammedshotola.com` (no trailing slash in env; normalize in code).

---

## 11. Metadata

### Homepage
- Title: `Hammed Shotola — Product Designer`
- Description: one-sentence positioning
- OG image: personal / brand frame

### Case study
- Title: `{Project} — Case Study | Hammed Shotola`
- Description: from project overview
- OG image: project cover

### JSON-LD (examples)
- Home: `Person` + `WebSite`
- Project: `CreativeWork` or `Article` with `author`

---

## 12. Performance Optimisation

- Static generation for all pages
- Minimal client JS
- Dynamic import lightbox / heavy motion if needed
- No client-side routing waterfalls for content (content imported at build)
- Avoid full Framer Motion on every node — use CSS where enough
- Analyse bundle with `@next/bundle-analyzer` if budgets slip
- Prefer Vercel Analytics (deferred script; minimal CWV impact)

---

## 13. Deployment Plan

1. Push repo to GitHub
2. Import project in Vercel → Framework Preset: Next.js
3. Set env vars (see §14)
4. Deploy production from `main`
5. Connect custom domain in Vercel → Domains
6. Update DNS at registrar:
   - **Apex:** A record to Vercel IP (or ALIAS/ANAME if supported)
   - **www:** CNAME to `cname.vercel-dns.com`
   - Follow Vercel’s exact DNS instructions shown in the dashboard
7. Enable HTTPS (automatic)
8. Set `NEXT_PUBLIC_SITE_URL` to the canonical domain
9. Verify sitemap at `https://yourdomain/sitemap.xml`
10. Optional: submit sitemap in Google Search Console

### Custom domain checklist
- [ ] Domain added in Vercel project settings
- [ ] DNS records propagated
- [ ] SSL valid
- [ ] Redirect `www` ↔ apex (choose one canonical)
- [ ] Canonical metadata matches chosen host
- [ ] Old Framer DNS / hosting removed after cutover

---

## 14. Environment Variables

`.env.example`:

```bash
# Canonical site URL (production)
NEXT_PUBLIC_SITE_URL=https://hammedshotola.com

# Resume PDF path (default /resume.pdf in public/)
# NEXT_PUBLIC_RESUME_PATH=/resume.pdf
```

Vercel Analytics: enable in Vercel project dashboard + `@vercel/analytics` in root layout (confirmed for v1).

Contact email lives in `content/site.ts` (not an env var). Replace `public/resume.pdf` with your final résumé when ready; a minimal placeholder PDF is fine for early phases.

Secrets never committed. Vercel project settings hold production values.

---

## 15. Future CMS Integration

### v1 content contract
```ts
type SiteConfig = {
  name: "Hammed Shotola"
  title: "Product Designer"
  email: "shotolahammed01@gmail.com"
  url: "https://hammedshotola.com"
  social: { linkedin: "https://www.linkedin.com/in/shotola/" }
  resume: { href: "/resume.pdf"; label?: string; updatedAt?: string }
}

type Project = {
  slug: string
  title: string
  role: string
  impact: string
  cover: ImageRef
  readingSections: CaseStudySection[]
  related?: string[] // slugs
  featured?: boolean
  order?: number
  seo?: { title?: string; description?: string }
}
```

### Migration path later
1. Keep `content/types.ts` as the contract
2. Replace `getAllProjects()` implementation to fetch CMS
3. Use `revalidate` / webhooks if content becomes dynamic
4. UI components unchanged

Candidates: Sanity, Contentful, Notion API, Hygraph. Not required for launch.

---

## 16. Quality Gates

- TypeScript strict, ESLint (Next config), Prettier
- Optional: Husky + lint-staged later
- Manual Lighthouse on preview deploy before production cutover
- Keyboard pass: nav, cards, TOC, lightbox
- axe DevTools / eslint-plugin-jsx-a11y

---

## 17. Security & Privacy (lightweight)

- External links `rel="noopener noreferrer"`
- No unnecessary cookies in v1
- If forms added: rate-limit via provider; no PII stored in repo
- CSP headers can be added in `next.config` once third parties known

---

## 18. Approval Gate

Architecture approved before Phase 2 (project setup). Folder names may be adjusted slightly during scaffolding but the principles above stand.
