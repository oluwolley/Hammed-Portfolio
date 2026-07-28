# UX Strategy

**Product:** Hammed Shotola — Product Design Portfolio  
**Version:** 1.1  
**Status:** Decisions locked — Phase 1 approval pending  
**Site URL:** https://hammedshotola.com/  
**Last updated:** 28 July 2026

---

## 1. Design Intent

The site should feel like a **premium SaaS product surface**, not a moodboard or Dribbble gallery.

Emotional targets: premium · minimal · modern · clean · elegant · professional · confident · timeless.

Inspiration filters (steal principles, not clones): Linear, Stripe, Vercel, Notion, Figma, Apple, Arc.

**Recruiter mental model (first 10 seconds)**
1. Who is this? → Name + role  
2. Are they strong? → One-line impact + craft signal  
3. What’s the proof? → Selected Work cards  

**Hiring manager mental model (next 5 minutes)**
1. Pick one case study  
2. Scan Problem → Process → Outcome / Metrics  
3. Decide: interview or pass  

---

## 2. Information Architecture

```
/
├── #hero          Name, role, intro, social
├── #about         Bio, philosophy, tools
├── #work          Featured case study cards (4 at launch)
├── #resume        Download resume (PDF)
├── #contact       Email + social
└── footer

/projects/[slug]
├── Case study hero
├── Narrative sections (conditional)
├── Related projects
└── Back to portfolio (#work)
```

**Rules**
- No standalone About / Work / Contact routes in v1.
- Everything secondary lives on the homepage.
- Depth lives only in `/projects/[slug]`.
- Max cognitive load: one job per section.

---

## 3. Navigation Strategy

### Global header (sticky / translucent)
- Left: wordmark / name (links to `/` or `#hero`)
- Right: About · Work · Resume · Contact (smooth-scroll anchors)
- On case study pages: same links resolve to `/#about`, `/#work`, `/#contact`
- Optional: theme toggle (if approved)

### Mobile
- Compact header; links either inline (if space) or a simple accessible menu
- Prefer minimal chrome — avoid heavy hamburger if 3 links fit

### Case study in-page nav
- Sticky TOC (desktop, right or left rail)
- Mobile: sticky “On this page” disclosure or horizontal jump chips (subtle)
- Active section highlighted via Intersection Observer
- Reading progress bar at top of viewport

### Escape hatches
- Skip to content
- Back to portfolio (always visible near top or sticky with TOC)
- Related projects at end

---

## 4. Content Hierarchy

### Homepage priority (top → bottom)
**Locked order:** Hero → About → Work → Resume → Contact

1. **Identity** — Hammed Shotola + Product Designer  
2. **Positioning** — short intro  
3. **Context** — About (philosophy, tools)  
4. **Proof** — Selected Work (4 cards)  
5. **Recruiter utility** — Resume PDF download  
6. **Action** — Contact (email + social)

### Case study reading order
Lead with **context and outcome**, then process depth:

1. Hero (title, role, timeline, one-line impact)  
2. Overview + Outcome/Metrics teaser  
3. Problem → Business Goals  
4. Research → Insights → Personas / Journey / Pain Points  
5. Competitive Analysis (if relevant)  
6. Design Process → Wireframes → Iterations → Decisions  
7. Final UI → Prototype  
8. Accessibility → Developer Handoff  
9. Outcome → Metrics → Lessons → Next Steps  
10. Related → Back  

Empty modules are hidden — never show placeholder section titles.

---

## 5. Visual Hierarchy

| Level | Use |
|-------|-----|
| Display | Name in hero; case study titles |
| H1 | Page title (one per page) |
| H2 | Section titles |
| H3 | Subsections within case studies |
| Body | 18–20px equivalent comfortable reading |
| Meta / labels | Role, tags, reading time — quieter |

**Whitespace is a feature.** Prefer breathing room over density. One composition per viewport on the homepage hero — brand + headline + short line + CTAs/social; no stat strips or badge clutter.

---

## 6. Design Principles

1. **Clarity over cleverness** — recruiters don’t decode cryptic portfolios.
2. **One job per section** — one headline, one supporting sentence, one primary action.
3. **Proof over personality fluff** — personality lives in About; Work carries evidence.
4. **Product UI, not gallery UI** — no card-heavy hero; cards only where interaction needs a container (work grid, related projects).
5. **Restraint in motion** — presence and hierarchy, never noise.
6. **Systems first** — tokens for colour, type, space; components over one-offs.
7. **Accessible by default** — contrast, focus, semantics before polish.
8. **Timeless over trendy** — avoid purple-glow AI aesthetic, cream-terracotta cliché, broadsheet density.

---

## 7. Mobile-First Approach

- Design and build from **320px** upward.
- Touch targets ≥ 44×44px.
- Case study TOC collapses; content stays single column.
- Galleries become swipeable or stacked; lightbox still available.
- Hero typography scales fluidly (`clamp`).
- Sticky header height kept small to preserve content.

---

## 8. Responsive Strategy

| Breakpoint | Width | Behaviour |
|------------|-------|-----------|
| `sm` | 640px | Slightly larger type; 2-col tool chips if needed |
| `md` | 768px | Work cards 2-column; header fully inline |
| `lg` | 1024px | Case study TOC sticky rail; wider measure |
| `xl` | 1280px | Max content width ~1120–1200px; generous margins |
| `2xl` | 1536px | Do not stretch prose; keep optimal reading measure |

**Prose measure:** ~65–75 characters for long case study text.  
**Full-bleed:** hero atmospheres and key final-UI frames may break out of the content column.

---

## 9. Typography

### Direction
**Sans + serif** hybrid — editorial clarity for long case-study prose, geometric sans for UI and headings.

**Locked pairing (v1):**
- **Sans (UI + headings):** **Geist Sans** via `next/font` — Linear/Vercel-adjacent, crisp at small sizes
- **Serif (body / long-form):** **Newsreader** or **Source Serif 4** via `next/font` — readable, calm, premium

Usage:
- Homepage hero name and nav: sans  
- About + case study narrative paragraphs: serif (or sans for About short blocks — prefer serif for philosophy paragraphs only if contrast feels right; default **serif for case study body**, **sans for homepage About** to keep home product-like)

**Refined default:**
- **Homepage:** sans-led (hero, About, Work, Resume, Contact)
- **Case studies:** sans headings + **serif body** for reading comfort

### Scale (approx.)
| Token | Size | Weight | Use |
|-------|------|--------|-----|
| `display` | clamp(2.5rem → 4.5rem) | 500–600 | Hero name |
| `h1` | clamp(2rem → 3rem) | 550 | Page titles |
| `h2` | clamp(1.5rem → 2rem) | 550 | Sections |
| `h3` | 1.25rem | 500 | Subsections |
| `body` | 1.125rem | 400 | Paragraphs |
| `small` | 0.875rem | 400–500 | Meta, labels |
| `mono` | 0.8125rem | 400 | Metrics, tags |

Line height: body ~1.6; display ~1.05–1.15.  
Letter-spacing: slightly tight on display; normal on body.

---

## 10. Colour System

### Direction
Neutral-first, high-contrast text. **Near-black monochrome** — no colourful accent; CTAs use filled near-black / inverted surfaces in light mode and near-white in dark mode.

**Light theme (locked direction)**
| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#FAFAFA` | Page background |
| `--bg-elevated` | `#FFFFFF` | Elevated surfaces |
| `--fg` | `#0A0A0A` | Primary text |
| `--fg-muted` | `#525252` | Secondary text |
| `--border` | `#E5E5E5` | Hairlines |
| `--accent` | `#0A0A0A` | Primary buttons / emphasis |
| `--accent-fg` | `#FFFFFF` | Text on accent |
| `--focus` | `#0A0A0A` ring at 2–3px | Focus visible |

**Proposed dark theme (ready)**
| Token | Value (draft) |
|-------|----------------|
| `--bg` | `#0A0A0A` |
| `--bg-elevated` | `#141414` |
| `--fg` | `#FAFAFA` |
| `--fg-muted` | `#A3A3A3` |
| `--border` | `#262626` |
| `--accent` | Lightened counterpart |

Atmosphere: subtle gradient mesh or soft radial wash behind hero — not flat pure white only — while keeping overall calm. Real project imagery is the visual anchor in Work and case studies; abstract gradients are secondary.

**Avoid:** purple-indigo AI gradients, warm cream + terracotta cliché, neon glow, emoji decoration.

---

## 11. Spacing System

Base unit: **4px**. Use Tailwind spacing scale consistently.

| Token | Value | Use |
|-------|-------|-----|
| `1–2` | 4–8px | Tight inline gaps |
| `3–4` | 12–16px | Component internal |
| `6–8` | 24–32px | Related groups |
| `12–16` | 48–64px | Section padding (mobile) |
| `20–32` | 80–128px | Section padding (desktop) |

Section vertical rhythm: generous. Prefer `py-24`–`py-32` on desktop.

---

## 12. Grid System

- Homepage content: CSS grid / flex inside `max-w-6xl` (or `max-w-7xl`) container with `px-4 sm:px-6 lg:px-8`
- Work cards: 1 col → 2 col (`md`); **4 projects** → 2×2 grid at `md+` (avoid cramped 3-col)
- Case study: content column + TOC column (`lg:` `grid-cols-[1fr_220px]` or similar)
- 12-column mental model only where complex galleries need it; otherwise simple auto-fit grids

---

## 13. Components

### Core UI
- `Button` (primary / ghost / link)
- `Container` / `Section` / `SectionHeading`
- `Nav` / `MobileNav`
- `Footer`
- `SocialLinks`
- `ThemeToggle` (system + manual override, persisted)
- `SkipLink`
- `ResumeDownload` / `Resume` section block
- `Tag` / `MetaRow`

### Home
- `Hero.tsx` · `About.tsx` · `SelectedWork.tsx` · `Resume.tsx` · `Contact.tsx`

### Work
- `ProjectCard`
- `ProjectGrid`
- `RelatedProjects`

### Case study
- `CaseStudyHero`
- `CaseStudySection` (typed by section kind)
- `TableOfContents`
- `ReadingProgress`
- `ReadingTime`
- `ImageGallery` + `Lightbox`
- `Metric` / `Callout` (sparingly)
- `PrototypeEmbed` (Figma — lazy iframe)

### Motion wrappers
- `FadeIn` / `Reveal` (respect `prefers-reduced-motion`)

**Card rule:** Work cards and related-project cards are interactive containers — justified. Do not card-ify About paragraphs or Contact.

---

## 14. Motion Strategy

| Moment | Behaviour |
|--------|-----------|
| Page load / route | Soft fade or short content fade-in |
| Scroll | Reveal sections once (subtle translate-Y + opacity) |
| Hover (cards, links) | Slight lift or border/contrast shift; image scale ≤ 1.03 |
| Lightbox | Fade backdrop; scale image gently |
| Progress bar | Width tied to scroll |
| Reduced motion | Disable transforms; keep opacity instant or minimal |

No parallax storms, no endless loop Lottie heroes, no cursor trails.

---

## 15. Content UX Guidelines (for writing)

- Hero intro: ≤ 2 sentences.
- Card impact: outcome-oriented (“+32% activation”, “Cut onboarding from 8 → 3 steps”).
- Case study Overview: 3–5 sentences max before deep sections.
- Prefer specific metrics over vague “improved UX”.
- Images: annotated where they teach; alt text describes the learning, not “image1”.

---

## 16. Locked Design Decisions

| Topic | Decision |
|-------|----------|
| Section order | Hero → About → Work → Resume → Contact |
| Accent | Near-black monochrome |
| Typography | Geist Sans + Newsreader (or Source Serif 4) |
| Dark mode | System default + manual toggle (persisted) |
| Work grid | 2 columns at `md+` for 4 projects |
| Contact | Email + social only |
| Contact email | shotolahammed01@gmail.com |
| LinkedIn | https://www.linkedin.com/in/shotola/ |
| Resume | Dedicated `#resume` section + PDF download (placeholder PDF OK for v1) |

---

## 17. Approval Gate

UX Strategy must be approved (or amended) before visual implementation of Phase 3+. Phase 2 (project setup) can proceed after PRD + Architecture + Roadmap approval even if fine accent/type choices are still being finalised — those tokens are easy to swap early.
