# Phase 8 — Test Notes

**Date:** 28 July 2026  
**Environment:** Production build (`npm run build` + `npm start`) on Node 22  
**Base URL:** http://127.0.0.1:3000

---

## Lighthouse scores (target ≥ 95)

| Page | Form factor | Performance | Accessibility | Best Practices | SEO |
|------|-------------|-------------|---------------|----------------|-----|
| Home `/` | Mobile | **96** | **100** | **100** | **100** |
| Home `/` | Desktop | **100** | **100** | **100** | **100** |
| Dash `/projects/dash` | Mobile | **98** | **100** | **100** | **100** |

### Fixes that improved scores
- Gate `@vercel/analytics` on `process.env.VERCEL` so local production does not 404 `/_vercel/insights/script.js` (was dragging Best Practices to 96).
- Resume CTA no longer links to a missing `/resume.pdf` (was a broken link).

---

## Broken link / asset check

- All project images referenced in `content/projects/*` resolve under `public/`.
- **Fixed:** `/resume.pdf` was missing. Resume section + footer now use **Request resume by email** until `public/resume.pdf` is added and `siteConfig.resume.available` is set to `true`.

---

## Accessibility / keyboard

### Automated
- Lighthouse Accessibility **100** on home + Dash.

### Code fixes this phase
- Mobile nav: Escape closes menu; returns focus to button; clearer `aria-label` / Open–Close label.
- Lightbox: focuses Close on open; basic Tab focus trap; Escape / arrows unchanged.
- Mobile TOC summary: visible focus ring.

### Manual (please confirm on your machine)
- [ ] Keyboard-only walkthrough (Tab / Enter / Escape) on home + one case study
- [ ] VoiceOver spot-check: skip link, nav, project card, lightbox
- [ ] Safari + Firefox smoke (Chrome covered via Lighthouse + local prod)

---

## Functional smoke

| Check | Result |
|-------|--------|
| Production build | Pass |
| Home / 4 case studies / sitemap / robots / icon / OG image | Pass (HTTP 200) |
| Resume CTA without PDF | Pass (mailto fallback) |
| TOC / pager / galleries present in case study markup | Pass |

---

## Content accuracy (owner review)

Please confirm before launch:
- [ ] Name, title, quote, LinkedIn, email
- [ ] Four case study titles / taglines / metrics
- [ ] Add real `public/resume.pdf` and set `resume.available: true` in `content/site.ts`

---

## Remaining for Phase 9

- Push latest work from `~/Developer/Hammed-Portfolio` to GitHub
- Vercel project + domain `hammedshotola.com`
- Re-check Lighthouse on the live URL
