# davitfebuan.com — working agreement

Personal site for Davit Febuan (operations leader, digital payment & e-channel, Bank Mega). Astro 7 static site, GSAP + Lenis motion. The owner communicates in Indonesian.

## Review artifact
- URL: https://claude.ai/artifact/N3EB6kVdV4iyWK921giwfo (republish to this URL; from a new session pass it as `url` after reading it).
- The owner leaves comments there. For each comment: edit the source, run `npm run build:artifact`, publish `dist-artifact/index.html` with `files` from `node scripts/artifact-files.mjs`, reply on the thread, resolve it.
- Paths starting with `_` are reserved by the artifact host, hence the `assets/` folder for that target.

## Staging
- Vercel project `davitfebuan.com` (team `davitfebuan`, id prj_SDsD2a5MpPa1uTYYIeU1d3jy7dSx), linked to GitHub `meremez/davitfebuan.com`.
- Stable staging URL (branch alias): https://davitfebuancom-git-staging-davitfebuan.vercel.app
- Vercel's production branch is still `main`, but `vercel.json` disables deploys from `main`, so every `staging` push is a preview deployment served at the branch alias above. Behind Vercel Authentication (owner must be logged in).

## Commands the owner uses
- "edit ..." / a comment on the artifact → change source, republish the artifact. Do not push.
- "push to staging" → commit, then `git push origin staging`. Vercel builds it (production branch in Vercel = `staging`).
- "push to production" → `git push origin staging:main` (fast-forward only, never force). GitHub Actions uploads `dist/` to DomaiNesia over FTPS.

## Project skills
- `.claude/skills/` holds 12 vendored, pinned skills (GSAP, Vercel UI/writing guidelines, copy/SEO/schema/AI-SEO). Sources, commits and local changes are in `.claude/skills/SOURCES.md`. Never update them from the network without review.

## Photos
- `src/assets/portrait-studio.jpg` (hero) and `src/assets/portrait-batik.jpg` (contact card) are the owner's real photos, warm-graded to the brand palette. `public/davit-febuan.jpg` is the stable copy used in JSON-LD.
- Do not use AI-generated portraits of the owner (decided 2026-11-24: they read as fake and undermine credibility).

## Rules
- Copy lives in `src/i18n/content.ts`. Fact sources: the original site, the owner's CV (received 2026-11-24) and the owner's own statements. Ask before adding any other claim (numbers, employers, dates).
- Persona (agreed 2026-11-24): the operator who keeps digital payment infrastructure running (ATM, EDC, QRIS), applying supply chain discipline to it. Avoid "machines behind digital payments" phrasing; say infrastructure, or name ATM/EDC directly. Full-circle story: Bank Mega merchant ops 2007–2011, back as E-Channel Services Head in 2024.
- Current Bank Mega figures: only the >99.8% monthly availability is public. Never publish ATM, EDC, QRIS or vendor counts (owner, 2026-11-24).
- CT Corp Digital: describe the businesses by type (retail & grocery delivery, digital bank, beauty platform), not by brand name, on the public site.
- Positioning is discreet: no "open to work" / "new role" language (owner is currently employed).
- Motion stays refined: no WebGL, custom cursors or preloaders. Respect `prefers-reduced-motion`.
- Single light theme by brand choice. Colors only via tokens in `src/styles/global.css`.
- Never put FTP or Vercel credentials in the repo or chat; they live in GitHub Secrets / Vercel.
