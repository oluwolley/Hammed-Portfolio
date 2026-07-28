# Development Roadmap

**Product:** Hammed — Product / UX Design Portfolio  
**Version:** 1.1  
**Status:** Decisions locked — Phase 1 approval pending  
**Process:** One milestone at a time · review & approval between phases · no skipping ahead  
**Last updated:** 28 July 2026

---

## Working Agreement

1. Complete only the current milestone’s tasks.
2. At milestone end: summarise what shipped, suggest improvements, **wait for approval**.
3. Content (real case studies, photos) can lag scaffolding — use placeholders when needed, swap later.
4. No production cutover until Phase 9 is explicitly approved.

---

## Phase 1 — Planning

**Goal:** Align on product, UX, architecture, and delivery plan before any application code.

### Tasks
- [x] Draft Product Requirements Document (PRD)
- [x] Draft UX Strategy
- [x] Draft Technical Architecture
- [x] Draft Development Roadmap
- [ ] Incorporate locked product decisions (name, domain, resume section, 4 projects)
- [ ] Explicit approval to begin Phase 2

### Deliverables
- `docs/01-PRD.md`
- `docs/02-UX-STRATEGY.md`
- `docs/03-TECHNICAL-ARCHITECTURE.md`
- `docs/04-DEVELOPMENT-ROADMAP.md` (this file)
- Approved decisions log (updated in docs or chat)

### Exit criteria
You approve the docs (with any amendments) and green-light Phase 2.

---

## Phase 2 — Project Setup

**Goal:** Bootstrapped Next.js app with tooling, tokens, layout shell, and content types — no polished page design yet.

### Tasks
- [ ] Scaffold Next.js + TypeScript + Tailwind + ESLint
- [ ] Configure path aliases, strict TS, Prettier (optional)
- [ ] Add `globals.css` design tokens (light + dark-ready)
- [ ] Wire `next/font` (Geist or approved pairing)
- [ ] Create folder structure per architecture
- [ ] Define `content/types.ts` + `content/site.ts` placeholders
- [ ] Stub `getAllProjects` / `getProject`
- [ ] Root layout with SkipLink, Header shell, Footer shell
- [ ] Homepage section placeholders with ids
- [ ] Dynamic route stub `/projects/[slug]`
- [ ] `.env.example`, `README` (setup + scripts)
- [ ] Initial git commit **only if you request it**

### Deliverables
- Runnable local app (`pnpm dev` / `npm run dev`)
- Empty-but-structured UI shell
- Typed content contracts

### Exit criteria
App runs locally; structure matches architecture; you approve moving to homepage build.

---

## Phase 3 — Homepage

**Goal:** Ship the full homepage experience (content may still be placeholder).

### Tasks
- [ ] Hero: name, role, intro, social links, CTA
- [ ] About: intro, background, philosophy, tools
- [ ] Selected Work: `ProjectCard` grid — **4** projects
- [ ] Resume: PDF download section (`#resume`)
- [ ] Contact: email + social only
- [ ] Footer
- [ ] Sticky header + smooth scroll nav
- [ ] Responsive layout for all homepage sections
- [ ] Baseline motion (subtle reveals) with reduced-motion support
- [ ] Dark mode: system default + theme toggle (persisted)

### Deliverables
- Production-quality homepage UI
- Placeholder or real project cards linking to stub case study routes

### Exit criteria
Homepage looks and behaves to your satisfaction on mobile + desktop.

---

## Phase 4 — Case Study Pages

**Goal:** Full case study template with all module types, TOC, progress, galleries.

### Tasks
- [ ] Case study hero + meta (role, timeline, reading time)
- [ ] Section renderer for all module types (omit empty)
- [ ] Sticky Table of Contents + active section tracking
- [ ] Reading progress indicator
- [ ] Image gallery + lightbox (keyboard accessible)
- [ ] Prototype embed slot (Figma, lazy)
- [ ] Related projects + back to portfolio
- [ ] `generateStaticParams` + per-project metadata
- [ ] Author **4** projects in `content/projects` (real or placeholder)

### Deliverables
- Complete case study template
- At least one fully wired example project

### Exit criteria
You can navigate Work → Case study → Related / Back without friction; layout approved.

---

## Phase 5 — Animations

**Goal:** Tasteful motion pass only — polish, not a rewrite.

### Tasks
- [ ] Page / route transition (subtle)
- [ ] Scroll reveal consistency across home + case study
- [ ] Card hover micro-interactions
- [ ] Lightbox enter/exit
- [ ] Loading / image fade states
- [ ] Audit against `prefers-reduced-motion`
- [ ] Remove anything that feels distracting

### Deliverables
- Motion guidelines applied consistently
- Short note in README on motion principles

### Exit criteria
Motion feels premium and quiet; you approve restraint level.

---

## Phase 6 — Responsive Design

**Goal:** Dedicated QA pass across breakpoints (even if built mobile-first earlier).

### Tasks
- [x] Audit 320 / 375 / 768 / 1024 / 1280 / 1440
- [x] Fix TOC, galleries, header, typography edge cases
- [x] Touch target and sticky element checks
- [x] Landscape mobile / short viewport checks
- [x] Print stylesheet optional (nice-to-have for case studies)

### Deliverables
- Responsive QA checklist completed
- Fixes merged

### Exit criteria
No broken layouts on target breakpoints.

---

## Phase 7 — SEO

**Goal:** Complete discoverability surface.

### Tasks
- [ ] Metadata API for home + projects
- [ ] Open Graph + Twitter cards
- [ ] JSON-LD (`Person`, `WebSite`, project `CreativeWork`)
- [ ] `sitemap.ts` + `robots.ts`
- [ ] Canonical URLs via `NEXT_PUBLIC_SITE_URL`
- [ ] Favicons / app icons
- [ ] Semantic pass (headings, link text)
- [ ] OG images (static or generated)

### Deliverables
- SEO checklist green on preview URL
- Sample rich-result validation (optional)

### Exit criteria
View-source / social debuggers show correct previews.

---

## Phase 8 — Testing

**Goal:** Quality bar before launch.

### Tasks
- [ ] Lighthouse (mobile + desktop) → target ≥ 95
- [ ] Keyboard-only walkthrough
- [ ] Screen reader spot-check (VoiceOver)
- [ ] axe / accessibility audit fixes
- [ ] Broken link check
- [ ] Lightbox / TOC / nav edge cases
- [ ] Cross-browser smoke (Safari, Chrome, Firefox)
- [ ] Content accuracy review with you

### Deliverables
- Test notes + fixes
- Lighthouse scores recorded

### Exit criteria
Scores and a11y meet PRD bars; content approved for launch.

---

## Phase 9 — Deployment

**Goal:** Live on Vercel with custom domain; Framer retired when ready.

### Tasks
- [ ] Push to GitHub (if not already)
- [ ] Create Vercel project; link repo
- [ ] Add `@vercel/analytics` in root layout (skip if analytics = none)
- [ ] Configure env vars (`NEXT_PUBLIC_SITE_URL=https://hammedshotola.com`)
- [ ] Production deploy from `main`
- [ ] Add custom domain + DNS instructions executed
- [ ] Apex / www redirect strategy
- [ ] Verify HTTPS, sitemap, robots, OG in production
- [ ] Search Console sitemap submit (optional)
- [ ] Cutover checklist; remove old Framer DNS when stable
- [ ] Post-launch monitoring (404s, analytics if enabled)

### Deliverables
- Live URL on custom domain
- Short runbook: update content, deploy, add project
- Domain connection documented in README

### Exit criteria
Site live, fast, indexed-ready; you confirm launch success.

---

## Milestone Dependency Graph

```
Phase 1 Planning
    ↓
Phase 2 Project setup
    ↓
Phase 3 Homepage
    ↓
Phase 4 Case study pages
    ↓
Phase 5 Animations
    ↓
Phase 6 Responsive QA
    ↓
Phase 7 SEO
    ↓
Phase 8 Testing
    ↓
Phase 9 Deployment
```

Phases 5–7 can partially overlap in theory; **we will not overlap** unless you explicitly ask — sequential reviews keep control clear.

---

## Suggested Improvements (optional, not blocking)

1. Discreet **“Available for opportunities”** line in Hero or Contact.
2. **Last updated** date on resume PDF meta for recruiter trust.
3. **Plausible** instead of Vercel Analytics if you want cookie-free analytics later.

---

## Current Status

| Phase | Status |
|-------|--------|
| 1 Planning | Complete |
| 2 Project setup | Complete |
| 3 Homepage | Approved |
| 4 Case study pages | Approved |
| 5 Animations | Approved |
| 6 Responsive QA | **In review** — awaiting approval |
| 7–9 | Blocked until prior phase approved |

**Next action:** Review responsive pass on phone + desktop, then reply **`Approve Phase 6`**.
