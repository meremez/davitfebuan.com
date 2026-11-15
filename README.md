# davitfebuan.com

Website personal Davit Febuan. Dibangun dengan [Astro](https://astro.build), [GSAP](https://gsap.com) (ScrollTrigger, SplitText) dan [Lenis](https://lenis.darkroom.engineering).

## Tiga lingkungan

| Lingkungan | Tempat | Sumber | Cara update |
|---|---|---|---|
| Review | Artifact di claude.ai (privat) | working copy | Komentar di artifact, Claude edit lalu publish ulang |
| Staging | Vercel: https://davitfebuancom-git-staging-davitfebuan.vercel.app | branch `staging` | `git push origin staging` |
| Production | DomaiNesia (FTPS) | branch `main` | `git push origin staging:main` (fast-forward), GitHub Actions upload |

Production selalu menjalankan commit yang sama persis dengan staging, karena `main` hanya bergerak dengan fast-forward ke `staging`.

## Perintah

```bash
npm install
npm run dev               # http://localhost:4321
npm run build             # build production ke dist/
npm run build:artifact    # build untuk preview artifact ke dist-artifact/
npm run og                # render ulang gambar Open Graph di public/
```

`DEPLOY_TARGET` (`artifact` | `staging` | `production`) menentukan:
- `production`: tanpa `noindex`, form kontak aktif.
- `staging`: `noindex`, subjek email form diberi awalan `[staging]`.
- `artifact`: `noindex`, form tidak mengirim apa pun, path relatif, folder aset `assets/`.

## Setup satu kali

### 1. GitHub
- Pasang Claude GitHub App untuk repo ini supaya Claude bisa push.
- Settings → Secrets and variables → Actions → **Secrets**:
  - `FTP_SERVER`: hostname FTP dari DomaiNesia (lihat cPanel → FTP Accounts, atau email aktivasi hosting)
  - `FTP_USERNAME`
  - `FTP_PASSWORD`
- Opsional, di tab **Variables**:
  - `FTP_SERVER_DIR` (default `public_html/`). Akhiri dengan `/`.
  - `FTP_PROTOCOL` (default `ftps`; pakai `ftp` hanya kalau FTPS ditolak server)
  - `FTP_PORT` (default `21`)

### 2. Vercel (staging)
- Import repo ini di Vercel.
- Project Settings → Environments → Production → Branch Tracking: ganti ke `staging`.
  Dengan begitu `staging` tampil di URL `*.vercel.app` yang stabil dan publik.
- `vercel.json` sudah mematikan deploy dari `main` dan menambahkan header `noindex`.

## File penting

- `src/i18n/content.ts`: semua teks EN/ID. Hanya fakta dari website lama.
- `src/components/*.astro`: section halaman.
- `src/scripts/main.ts`: smooth scroll, animasi, tab, form.
- `src/styles/global.css`: token warna, tipografi, layout.
- `public/.htaccess`: HTTPS, cache, security header, matikan directory listing (khusus DomaiNesia).
- `.github/workflows/production.yml`: deploy production.
