# Product Requirements Document (PRD)

**Product:** Hammed Shotola — Product Design Portfolio  
**Version:** 1.1  
**Status:** Decisions locked — Phase 1 approval pending  
**Owner:** Hammed Shotola (Product Designer)  
**Site URL:** https://hammedshotola.com/  
**Last updated:** 28 July 2026

---

## 1. Project Vision

Build a custom, owned, and freely hosted portfolio that positions Hammed Shotola as a premium Product Designer. The site should feel like a high-end SaaS product (Linear, Stripe, Vercel, Notion, Figma, Apple, Arc) — not a typical designer portfolio template.

It replaces the current Framer site with a codebase we fully control, optimised for recruiters and hiring managers who skim first and deep-read second.

---

## 2. Goals

| Goal | Success signal |
|------|----------------|
| Own the stack | Full Next.js codebase in Git; no Framer dependency |
| Free hosting | Deployed on Vercel Hobby (or equivalent free tier) |
| Custom domain | Existing domain connected via DNS to Vercel |
| Stand out | Premium, minimal aesthetic; strong case study depth |
| Recruiter-optimised | Clear role, impact, and projects within ~10 seconds |
| Maintainable | Content editable via typed data files; easy to add projects |
| Performant | Lighthouse Performance / Accessibility / Best Practices / SEO ≥ 95 |
| Accessible | WCAG 2.2 AA compliance |

---

## 3. Site Objectives

### Primary
1. Convert visiting recruiters / hiring managers into interview conversations.
2. Demonstrate product thinking and craft through deep case studies.
3. Communicate who Hammed is, what he designs, and the impact of his work — fast.

### Secondary
4. Serve as a living showcase that can grow (more projects, blog/notes later).
5. Establish a credible personal brand online for inbound opportunities.

### Non-objectives (v1)
- Blog / writing platform
- CMS admin UI
- Multi-language support
- Client login / password-protected case studies (unless requested later)
- E-commerce or booking
- Heavy animation / WebGL showcase

---

## 4. Target Users

| Persona | Needs | Behaviour |
|---------|--------|-----------|
| Recruiter | Role, seniority, location/availability, portfolio proof | 30–90s skim; shares link internally |
| Hiring manager | Process, impact, collaboration with eng/PM | Opens 1–2 case studies |
| Design peer | Craft, systems thinking, taste | Browses visual work deeply |
| Hammed (self) | Easy updates, reliable deploy | Adds projects occasionally |

---

## 5. Functional Requirements

### 5.1 Site structure
- **FR-01** Single homepage with in-page sections; no separate About/Contact/Work pages.
- **FR-02** Individual case study routes at `/projects/[slug]`.
- **FR-03** Navigation links scroll to homepage sections (`#hero`, `#about`, `#work`, `#resume`, `#contact`).
- **FR-04** Footer with essential links and copyright.

### 5.2 Homepage — Hero
- **FR-05** Display name (**Hammed Shotola**), title (**Product Designer**), short intro, social links.
- **FR-06** Primary CTA to Selected Work; secondary CTA to Contact (optional).

### 5.3 Homepage — About
- **FR-07** Professional introduction, background, design philosophy, tools list.

### 5.4 Homepage — Selected Work
- **FR-08** Featured case study cards: image, title, role, impact.
- **FR-09** Card click / keyboard activation navigates to `/projects/[slug]`.
- **FR-10** Cards ordered by featured priority (configurable in content data).
- **FR-10a** **Four** featured case studies at launch (content-driven; placeholders OK until final copy/assets).

### 5.5 Homepage — Resume
- **FR-11** Dedicated **Resume** section on the homepage (`#resume`), placed after Selected Work and before Contact.
- **FR-12** Prominent **Download resume (PDF)** control linking to `public/resume.pdf` (or configured URL); accessible label and optional “last updated” meta.
- **FR-13** Resume download also available from footer (and optional secondary hero CTA).

### 5.6 Homepage — Contact
- **FR-14** Email + social links only (no contact form in v1).
- **FR-15** Clear primary email and configured social profiles (LinkedIn, etc.).

### 5.7 Case study pages

- **FR-16** Dedicated URL per project with full narrative sections (see §5.8).
- **FR-17** Sticky table of contents (desktop); collapsible / jump list on mobile.
- **FR-18** Reading progress indicator.
- **FR-19** Estimated reading time based on content length.
- **FR-20** Image lightbox for galleries and key visuals.
- **FR-21** Responsive image galleries.
- **FR-22** Related projects and “Back to portfolio” control.
- **FR-23** Sections that lack content for a given project are omitted (no empty headings).

### 5.8 Case study content modules (optional per project)
Hero · Overview · Problem · Business Goals · Research · Insights · User Personas · Journey Mapping · Pain Points · Competitive Analysis · Design Process · Wireframes · Iterations · Design Decisions · Final UI · Prototype · Accessibility · Developer Handoff · Outcome · Metrics · Lessons Learned · Next Steps · Related Projects

### 5.9 Global UX
- **FR-24** Homepage section order: **Hero → About → Work → Resume → Contact**.
- **FR-25** Smooth scroll for in-page anchors.
- **FR-26** Keyboard-accessible navigation, cards, TOC, lightbox.
- **FR-27** **Dark mode:** follows `prefers-color-scheme` by default, with a **manual theme toggle** (persist preference in `localStorage`; “system” option optional).
- **FR-28** Tasteful motion: fade/slide reveal, hover, page transition, loading — no distraction.

---

## 6. Non-Functional Requirements

| ID | Requirement |
|----|-------------|
| NFR-01 | Lighthouse scores ≥ 95 across categories on desktop & mobile (production build) |
| NFR-02 | LCP < 2.5s, INP < 200ms, CLS < 0.1 on mid-tier mobile |
| NFR-03 | WCAG 2.2 Level AA |
| NFR-04 | Works on modern evergreen browsers (last 2 versions of Chrome, Safari, Firefox, Edge) |
| NFR-05 | Fully responsive: 320px → 1440px+ |
| NFR-06 | Content updates without redesigning layout (data-driven projects) |
| NFR-07 | Zero runtime CMS cost for v1 |
| NFR-08 | TypeScript strict mode; no `any` without justification |
| NFR-09 | Deploy preview URLs on every PR (Vercel) |

---

## 7. Technical Requirements

| ID | Requirement |
|----|-------------|
| TR-01 | Next.js (App Router) + React + TypeScript + Tailwind CSS |
| TR-02 | Hosted on Vercel; Git-based continuous deployment |
| TR-03 | Static / SSG where possible; dynamic only if needed later |
| TR-04 | `next/image` for images; modern formats (AVIF/WebP) |
| TR-05 | `next/font` for self-hosted fonts (no layout shift) |
| TR-06 | SEO: metadata API, OG, Twitter cards, JSON-LD, sitemap, robots, canonicals |
| TR-07 | Content stored as typed TypeScript / MDX modules in-repo for v1 |
| TR-08 | Environment variables documented for analytics / form endpoints if added |
| TR-09 | Architecture ready for optional headless CMS later (content shape isolated) |

---

## 8. Accessibility Requirements (WCAG 2.2 AA)

- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Logical heading hierarchy (one `h1` per page)
- Visible focus states meeting contrast requirements
- Colour contrast ≥ 4.5:1 (text), ≥ 3:1 (large text / UI)
- Keyboard: Tab, Shift+Tab, Enter/Space, Escape (lightbox/menus)
- Skip link to main content
- Prefer reduced motion respected (`prefers-reduced-motion`)
- Meaningful `alt` text for content images; decorative images empty `alt`
- ARIA only where semantics are insufficient (lightbox, progress, TOC current section)
- Form labels associated if contact form ships

---

## 9. SEO Requirements

- Unique title + meta description per page
- Open Graph + Twitter Card images and copy
- Canonical URLs on all pages
- `robots.txt` allowing crawl; sitemap.xml listing home + all projects
- JSON-LD: `Person` (home) and `CreativeWork` / `Article` (case studies)
- Clean, readable slugs (`/projects/fintech-onboarding`)
- Semantic structure that supports rich results where applicable
- Fast Core Web Vitals (ranking and UX signal)

---

## 10. Performance Requirements

- Bundle: minimise client JS; prefer Server Components
- Images: sized, lazy-loaded below fold, priority on hero
- Fonts: subset + `display: swap` / optional size-adjust
- CSS: Tailwind purge; avoid large unused libraries
- Animations: CSS / Framer Motion sparingly; no continuous heavy loops
- Target: Lighthouse ≥ 95; no blocking third-party scripts in critical path

---

## 11. Future Scalability

| Phase | Capability |
|-------|------------|
| Near-term | More case studies via content files; dark mode polish |
| Mid-term | MDX for richer narrative; password-gated projects |
| Later | Headless CMS (e.g. Contentful, Sanity, Notion API) |
| Optional | Notes / writing section |
| Ops | Vercel Analytics (v1); Plausible later if desired; error monitoring |

Content layer must remain swappable without rewriting page UI.

---

## 12. Stack Recommendation

**Recommended (confirmed): Next.js + React + TypeScript + Tailwind CSS + Vercel**

### Why this stack
- Free, excellent hosting with custom domains and preview deploys
- App Router + SSG fits a content-light portfolio perfectly
- First-class image, font, and metadata APIs for performance & SEO
- Huge ecosystem; easy for you (or a future collaborator) to maintain
- Matches your stated preference; no strong reason to diverge for v1

### Alternatives considered (not chosen for v1)
| Stack | Why not |
|-------|---------|
| Astro | Excellent for content sites, but Next.js is stronger if you later add interactive product demos / app-like pages |
| Remix / Vite SPA | Weaker zero-config SSG + SEO defaults for this use case |
| Framer / Webflow | Violates “own the codebase” goal |

---

## 13. Constraints & Assumptions

- Workspace starts empty (greenfield); no Framer export required.
- Case study copy and assets will be supplied by Hammed (or placeholders until ready).
- Custom domain DNS access is available for Vercel connection.
- Primary social: LinkedIn (URL locked). Additional socials optional later.
- v1 contact = email + social only (confirmed).
- No NDA / private case studies for v1 (confirmed).
- Resume PDF supplied by Hammed and placed at `public/resume.pdf` (or external URL in site config).

---

## 14. Locked Product Decisions

| Topic | Decision |
|-------|----------|
| Display name | **Hammed Shotola** |
| Title | **Product Designer** |
| Canonical domain | **https://hammedshotola.com/** |
| Homepage order | Hero → About → Work → **Resume** → Contact |
| Visual accent | **Near-black monochrome** (minimal colour; contrast-led UI) |
| Typography | **Sans + serif** pairing (see UX Strategy) |
| Dark mode | **System default + manual toggle** |
| Contact | **Email + social only** (no form) |
| Case studies at launch | **4** featured projects |
| Private / NDA work | **None** |
| Resume | **Dedicated section** + PDF download |
| Analytics (v1) | **Vercel Analytics** (`@vercel/analytics`) |
| Contact email | **shotolahammed01@gmail.com** |
| LinkedIn | **https://www.linkedin.com/in/shotola/** |
| Resume PDF | Placeholder at `public/resume.pdf` until final file is supplied |

---

## 15. Approval Gate

**Do not begin implementation until this PRD and companion docs (UX Strategy, Technical Architecture, Roadmap) are approved.**

After approval, execute **one milestone at a time**, with review between phases.
