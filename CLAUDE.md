# davitfebuan.com — working agreement

Personal site for Davit Febuan (operations leader, digital payment & e-channel, Bank Mega). Astro 7 static site, GSAP + Lenis motion. The owner communicates in Indonesian.

## Review artifact
- URL: https://claude.ai/artifact/N3EB6kVdV4iyWK921giwfo (republish to this URL; from a new session pass it as `url` after reading it).
- The owner leaves comments there. For each comment: edit the source, run `npm run build:artifact`, publish `dist-artifact/index.html` with `files` from `node scripts/artifact-files.mjs`, reply on the thread, resolve it.
- Paths starting with `_` are reserved by the artifact host, hence the `assets/` folder for that target.

## Commands the owner uses
- "edit ..." / a comment on the artifact → change source, republish the artifact. Do not push.
- "push to staging" → commit, then `git push origin staging`. Vercel builds it (production branch in Vercel = `staging`).
- "push to production" → `git push origin staging:main` (fast-forward only, never force). GitHub Actions uploads `dist/` to DomaiNesia over FTPS.

## Rules
- Copy lives in `src/i18n/content.ts`. Use only facts from the original site; ask before adding new claims (numbers, employers, dates).
- Positioning is discreet: no "open to work" / "new role" language (owner is currently employed).
- Motion stays refined: no WebGL, custom cursors or preloaders. Respect `prefers-reduced-motion`.
- Single light theme by brand choice. Colors only via tokens in `src/styles/global.css`.
- Never put FTP or Vercel credentials in the repo or chat; they live in GitHub Secrets / Vercel.
