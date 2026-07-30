# Websites Tab — Implementation Plan

**Status:** Phase A complete (gallery + nav) — ready for Phase B / first live site  
**Repo:** Hammed-Portfolio (`~/Developer/Hammed-Portfolio`)  
**Live site:** https://hammedshotola.com  
**Related:** Work case studies stay under `/projects/[slug]`. Websites are a separate gallery.

---

## 1. Goal

Add a **Websites** nav tab that opens a dedicated page (`/websites`) with mockup snapshots. Clicking a live item opens that website in a new tab.

| Layer | Lives in | Purpose |
|-------|----------|---------|
| Gallery + nav | This portfolio | Showcase mockups and link out |
| Each live website | Its **own** repo + Vercel project | Design/build/deploy independently |
| Mockup images | `public/images/websites/` | Card thumbnails (not iframes) |

**Click behaviour:** external URL, `target="_blank"`, `rel="noopener noreferrer"`.

---

## 2. Architecture

```text
Header nav "Websites"
        │
        ▼
   /websites page
        │
        ▼
  WebsiteCard grid (mockup + title + short description)
        │
        ├── status: live        → opens https://that-site.com
        └── status: comingSoon  → no link (label: Coming soon)
```

Keep Websites **out of** the case-study `Project` model. Mirror the Work pattern lightly (content registry + card + page), not full case-study sections.

---

## 3. Files to create / change

### Create

| Path | Role |
|------|------|
| `content/websites/index.ts` | Website list + getters |
| `components/websites/WebsiteCard.tsx` | Mockup card (external link) |
| `components/websites/WebsitesGrid.tsx` | Optional grid wrapper (or inline in page) |
| `app/websites/page.tsx` | Dedicated route |
| `public/images/websites/<slug>/mockup.webp` | Snapshot assets |

### Update

| Path | Change |
|------|--------|
| `content/types.ts` | Add `Website` type |
| `content/site.ts` | Nav: `{ label: "Websites", href: "/websites" }` |
| `app/sitemap.ts` | Include `/websites` |
| `lib/seo.ts` | Optional helper for websites page metadata (or inline in page) |

### Leave alone

- `Header.tsx` / `MobileNav.tsx` — already map `siteConfig.nav`
- `content/projects/*` — case studies stay separate

---

## 4. Content model

Add to `content/types.ts`:

```ts
export type WebsiteStatus = "live" | "comingSoon";

export type Website = {
  slug: string;
  title: string;
  description: string;
  mockup: ImageRef;
  /** Live URL when status is "live" */
  url: string;
  status: WebsiteStatus;
};
```

Example entry in `content/websites/index.ts`:

```ts
import type { Website } from "../types";

export const websites: Website[] = [
  {
    slug: "example-site",
    title: "Example Site",
    description: "One-line what this site is for.",
    mockup: {
      src: "/images/websites/example-site/mockup.webp",
      alt: "Homepage mockup of Example Site",
      width: 1600,
      height: 1000,
    },
    url: "https://example.com",
    status: "comingSoon", // flip to "live" when deployed
  },
];

export function getAllWebsites() {
  return websites;
}
```

---

## 5. UI spec (portfolio page)

- **Route:** `/websites`
- **Layout:** Reuse existing `Header` / `Footer` via root layout
- **Page:** Short heading + one supporting sentence + responsive grid (1 col mobile, 2 col desktop)
- **Card:** Image-forward mockup (≈16:9), title, description, hover affordance (similar to `ProjectCard`)
- **Live:** whole card is an `<a>` to `website.url`
- **Coming soon:** render as non-link block with muted overlay / “Coming soon” label — never `href="#"`
- **Motion:** reuse `Reveal` / `FadeImage` like Selected Work
- **SEO:** page `title` / `description` via `generateMetadata` or exported `metadata`

---

## 6. Step-by-step — Phase A: Portfolio gallery

Do these in order in **this** repo. Check off as you go.

### A1. Content type

- [ ] Open `content/types.ts`
- [ ] Add `WebsiteStatus` and `Website` types (see §4)
- [ ] Save

### A2. Content registry

- [ ] Create folder `content/websites/`
- [ ] Create `content/websites/index.ts` with `websites` array + `getAllWebsites()`
- [ ] Add **one** placeholder entry with `status: "comingSoon"` (URL can be empty string or placeholder; card must not link)

### A3. Mockup asset folder

- [ ] Create `public/images/websites/<slug>/`
- [ ] Export a desktop homepage snapshot from Figma (or a temporary placeholder image)
- [ ] Prefer WebP/JPG, max long edge ~1600–2000px (keep Mobile Safari happy)
- [ ] Point `mockup.src` at that file

### A4. WebsiteCard component

- [ ] Create `components/websites/WebsiteCard.tsx`
- [ ] Base structure on `components/projects/ProjectCard.tsx`
- [ ] If `status === "live"`: wrap in `<a href={url} target="_blank" rel="noopener noreferrer">`
- [ ] If `status === "comingSoon"`: use a `<div>` (or `<article>`) with “Coming soon” — no navigation
- [ ] Use `FadeImage` for the mockup; `sizes` like ProjectCard

### A5. Dedicated page

- [ ] Create `app/websites/page.tsx`
- [ ] Export metadata (title e.g. `Websites`, description one sentence)
- [ ] Use `Container` + `Section` + `SectionHeading` (“Selected websites” or “Websites”)
- [ ] Map `getAllWebsites()` into a grid of `WebsiteCard`s
- [ ] Wrap items in `Reveal` for consistency with homepage Work

### A6. Navigation

- [ ] In `content/site.ts`, add to `nav` (suggested order):

```ts
nav: [
  { label: "Work", href: "/#work" },
  { label: "Websites", href: "/websites" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
],
```

- [ ] Verify desktop header and mobile menu show the new item

### A7. Sitemap

- [ ] In `app/sitemap.ts`, add `{ url: `${base}/websites`, ... }` alongside home and projects

### A8. Local verify

- [ ] Run `npm run dev`
- [ ] Open `/websites` — layout, images, typography OK on mobile + desktop
- [ ] Nav → Websites works from home and from a case study page
- [ ] Coming-soon card does not navigate
- [ ] (When you have a live URL) live card opens in a new tab

### A9. Ship portfolio gallery

- [ ] Commit (e.g. `Add Websites gallery page and nav tab.`)
- [ ] Push `main` → Vercel production
- [ ] Confirm https://hammedshotola.com/websites

**You can ship Phase A with only coming-soon cards.** Live URLs can come later.

---

## 7. Step-by-step — Phase B: Build one live website

Repeat this recipe for **each** site. Finish one end-to-end before starting the next.

### B1. Brief (30–60 min)

Write down:

- [ ] Site name / domain intent
- [ ] Audience (who visits)
- [ ] One primary CTA (e.g. book, buy, contact)
- [ ] 3–5 sections for v1 only (e.g. Hero, About, Services, Work, Contact)

### B2. Design (Figma)

- [ ] Desktop frame + mobile frame
- [ ] Brand: name as hero-level signal; one headline; one short line; one CTA group
- [ ] Full-bleed or strong visual for hero (match your design rules)
- [ ] Export a clean homepage snapshot for the portfolio mockup

### B3. Scaffold project (separate from portfolio)

```bash
cd ~/Developer
npx create-next-app@latest <site-name> --typescript --tailwind --app --src-dir=false
cd <site-name>
```

- [ ] New folder under `~/Developer/<site-name>` — **not** inside Hammed-Portfolio
- [ ] Init git + GitHub repo when ready

### B4. Build v1

- [ ] Implement sections from the brief
- [ ] Responsive pass (phone + desktop)
- [ ] Metadata: `title`, `description`, favicon, OG image
- [ ] Contact / CTA wired (email link or form)

### B5. Deploy

- [ ] Import repo into Vercel (new project)
- [ ] Production URL works (`*.vercel.app` is fine for v1)
- [ ] Optional: attach custom domain later (same DNS pattern as portfolio)

### B6. Wire into portfolio

In Hammed-Portfolio:

- [ ] Update the website entry: `url`, `status: "live"`
- [ ] Replace/update mockup image if design changed
- [ ] Local check: card opens live site
- [ ] Commit + push portfolio

---

## 8. Step-by-step — Phase C: Add more sites later

For each additional site:

1. [ ] Repeat Phase B (brief → design → build → deploy)
2. [ ] Add a new object to `websites` in `content/websites/index.ts`
3. [ ] Add mockup under `public/images/websites/<slug>/`
4. [ ] Push portfolio

No new routes or components needed after Phase A — content-only updates.

---

## 9. Suggested build order (first session)

| Order | Task | Outcome |
|------:|------|---------|
| 1 | A1–A2 types + registry | Data shape exists |
| 2 | A3 placeholder image | Something to render |
| 3 | A4–A5 card + page | `/websites` works locally |
| 4 | A6–A7 nav + sitemap | Discoverable |
| 5 | A8–A9 verify + push | Live gallery |
| 6 | B1–B6 first real site | First clickable live card |

---

## 10. Out of scope for v1

- Homepage teaser section linking to `/websites` (nice later)
- Lightbox / iframe preview of the live site
- Full case-study write-ups for websites (use Work / projects if needed)
- Putting all client sites as routes inside this portfolio app

---

## 11. Success checklist

- [ ] Nav shows **Websites** and opens `/websites`
- [ ] Mockup grid looks good on mobile and desktop
- [ ] Live cards open the real site in a new tab
- [ ] Coming-soon cards do not use broken links
- [ ] `/websites` is in `sitemap.xml`
- [ ] First live site has its own Vercel deploy and is wired in content

---

## 12. Quick reference — commands

```bash
# Portfolio (gallery)
cd ~/Developer/Hammed-Portfolio
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
npm run dev
# then open http://localhost:3000/websites

# After gallery is ready
git add -A && git commit -m "Add Websites gallery page and nav tab." && git push
```

When ready to implement in Cursor: say **“execute the Websites plan”** or **“start Phase A”** and build A1→A9 in this repo first.
