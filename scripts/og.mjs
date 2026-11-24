// Renders the Open Graph images (public/og-en.png, public/og-id.png) with the pre-installed Playwright.
// Run: NODE_USE_ENV_PROXY=1 node scripts/og.mjs
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataUri = (p, type) => `data:${type};base64,${readFileSync(path.join(root, p)).toString('base64')}`;
const portrait = dataUri('src/assets/portrait-studio.jpg', 'image/jpeg');
const logo = dataUri('src/assets/logo-df.png', 'image/png');

const copy = {
  en: { eyebrow: 'Operations Leader · Digital Payment & E-Channel', line: 'I keep digital payment infrastructure running. Payments and supply chain operations since 2006.' },
  id: { eyebrow: 'Operations Leader · Pembayaran Digital & E-Channel', line: 'Menjaga infrastruktur pembayaran digital tetap berjalan. Di operasional pembayaran dan rantai pasok sejak 2006.' },
};

const html = (c) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,0..100;1,9..144,300..600,0..100&family=IBM+Plex+Mono:wght@500&family=Karla:wght@500&display=block">
<style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;background:#f6f0e4;color:#211c17;font-family:Karla,sans-serif;position:relative;overflow:hidden}
  .pad{position:absolute;inset:56px 64px}
  .top{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d8cab1;padding-bottom:22px}
  .label{font-family:'IBM Plex Mono',monospace;font-size:17px;letter-spacing:.09em;text-transform:uppercase;color:#574e42}
  .top img{width:44px;height:44px}
  h1{font-family:Fraunces,serif;font-weight:400;font-size:168px;line-height:.86;letter-spacing:-.055em;margin-top:44px;font-variation-settings:'opsz' 144,'wght' 380}
  h1 em{display:block;padding-left:.9em;font-style:italic;color:#8f5a1c;font-variation-settings:'opsz' 144,'SOFT' 100,'wght' 340}
  p{position:absolute;left:0;bottom:0;max-width:600px;font-family:Fraunces,serif;font-style:italic;font-size:29px;line-height:1.25;font-variation-settings:'opsz' 72,'SOFT' 100}
  .photo{position:absolute;right:0;top:110px;width:300px;height:375px}
  .photo::after{content:'';position:absolute;inset:14px -14px -14px 14px;border:2px solid #c0812e;border-radius:4px;z-index:-1}
  .photo img{width:100%;height:100%;object-fit:cover;object-position:50% 18%;border-radius:4px}
  .url{position:absolute;right:0;bottom:4px}
</style></head><body><div class="pad">
  <div class="top"><span class="label">${c.eyebrow}</span><img src="${logo}" alt=""></div>
  <h1>Davit<em>Febuan</em></h1>
  <div class="photo"><img src="${portrait}" alt=""></div>
  <p>${c.line}</p>
  <span class="label url">davitfebuan.com</span>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
// Fetch Google Fonts through Node so the session proxy and its CA bundle apply.
await page.route(/fonts\.(googleapis|gstatic)\.com/, async (route) => {
  const r = await fetch(route.request().url(), { headers: { 'user-agent': route.request().headers()['user-agent'] } });
  await route.fulfill({ status: r.status, body: Buffer.from(await r.arrayBuffer()), headers: { 'content-type': r.headers.get('content-type') ?? '', 'access-control-allow-origin': '*' } });
});
for (const [lang, c] of Object.entries(copy)) {
  await page.setContent(html(c), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(root, `public/og-${lang}.png`);
  writeFileSync(out, await page.screenshot({ type: 'png' }));
  console.log('wrote', out);
}
await browser.close();
