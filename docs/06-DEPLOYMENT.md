# Phase 9 — Deployment Runbook

**Date:** 28 July 2026  
**Repo:** https://github.com/oluwolley/Hammed-Portfolio  
**Vercel project:** `hammed-portfolio` (team: hammed-shotolas-projects)

---

## Live preview (ready now)

- **Production:** https://hammed-portfolio-cyan.vercel.app  
- GitHub connected — pushes to `main` auto-deploy  
- Env: `NEXT_PUBLIC_SITE_URL=https://hammedshotola.com`

Verified on preview URL: home `200`, `/sitemap.xml` `200`, `/robots.txt` `200`.

---

## Custom domain (action required)

Domains attached in Vercel:
- `hammedshotola.com`
- `www.hammedshotola.com`

Registrar currently uses **GoDaddy** nameservers (`ns15/ns16.domaincontrol.com`).

### Recommended DNS (keep GoDaddy nameservers)

In GoDaddy DNS for `hammedshotola.com`:

| Type | Name | Value | Notes |
|------|------|-------|-------|
| **A** | `@` | `76.76.21.21` | Apex → Vercel |
| **CNAME** | `www` | `0defbc22a96e0b5.vercel-dns-017.com` | Exact value from Vercel Domains panel |

> Use the **exact** CNAME / A values shown in your Vercel Domains UI — they can change as Vercel expands IPs.

If GoDaddy already has an A/`@` or CNAME/`www` for Framer (or parking), **replace** those records.

### Optional: Vercel nameservers

Instead of the records above, you can point nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

### After DNS propagates

1. Open https://vercel.com/hammed-shotolas-projects/hammed-portfolio/settings/domains  
2. Confirm both domains show **Valid**  
3. Prefer apex as primary: redirect `www` → `hammedshotola.com`  
4. Visit https://hammedshotola.com and https://www.hammedshotola.com  
5. Check `/sitemap.xml` and `/robots.txt`  
6. When stable, remove old Framer DNS / hosting  

SSL is automatic on Vercel once DNS is correct.

---

## Content / deploy workflow

```bash
cd ~/Developer/Hammed-Portfolio
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"

# Edit content in content/site.ts or content/projects/*
git add -A && git commit -m "Update content" && git push
# Vercel builds production from main automatically
```

Manual deploy:

```bash
npx vercel deploy --prod
```

### Add a new case study

1. Add images under `public/images/projects/<slug>/`  
2. Create `content/projects/<slug>.ts`  
3. Register it in `content/projects/index.ts`  
4. Push to `main`

### Resume PDF

File: `public/resume.pdf`  
Toggle: `content/site.ts` → `resume.available: true`

---

## Post-launch checklist

- [ ] DNS Valid in Vercel for apex + www  
- [ ] HTTPS works on custom domain  
- [ ] www → apex redirect  
- [ ] Sitemap loads on custom domain  
- [ ] Optional: Google Search Console → submit `https://hammedshotola.com/sitemap.xml`  
- [ ] Retire Framer DNS when traffic is stable  
- [ ] Spot-check Analytics in Vercel (enabled on Vercel deploys)
