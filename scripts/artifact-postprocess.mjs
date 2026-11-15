// Makes an Astro build publishable as a claude.ai Artifact (used only for the review preview):
// - rewrites root-absolute URLs (/_astro/..., /id/) to relative ones, because the artifact is not served from "/"
// - strips the document skeleton from the root page, which the Artifact host wraps itself
// Usage: node scripts/artifact-postprocess.mjs dist-artifact
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2] ?? 'dist-artifact');

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = path.join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

for (const file of walk(dir).filter((f) => f.endsWith('.html'))) {
  const rel = path.relative(dir, file);
  const depth = rel.split(path.sep).length - 1;
  const prefix = depth ? '../'.repeat(depth) : './';
  let s = readFileSync(file, 'utf8');

  // Page links between the two language versions (keep any #section).
  s = s.replace(/href="\/id\/(#[^"]*)?"/g, (_, h = '') => `href="${prefix}id/index.html${h}"`);
  s = s.replace(/href="\/(#[^"]*)?"/g, (_, h = '') => `href="${prefix}index.html${h}"`);
  // Assets referenced from the site root (src, href, srcset entries).
  s = s.replace(/(["'\s,])\/(_astro\/|assets\/|favicon\.png|apple-touch-icon\.png|og-[a-z]+\.png)/g, `$1${prefix}$2`);

  // Shorter artifact name for the gallery; the real site keeps its SEO title.
  s = s.replace(/<title>[^<]*<\/title>/, '<title>davitfebuan.com</title>');

  if (rel === 'index.html') {
    const lang = (s.match(/<html[^>]*\blang="([^"]+)"/) ?? [])[1] ?? 'en';
    s = s
      .replace(/<!DOCTYPE html>/i, '')
      .replace(/<html[^>]*>/i, '')
      .replace(/<\/html>/i, '')
      .replace(/<head>/i, '')
      .replace(/<\/head>/i, `<script>document.documentElement.lang=${JSON.stringify(lang)}</script>`)
      .replace(/<body[^>]*>/i, '')
      .replace(/<\/body>/i, '');
    // Title first, so the Artifact host finds it in the first 8KB.
    const title = s.match(/<title>[^<]*<\/title>/)[0];
    s = title + '\n' + s.replace(title, '').trimStart();
  }
  writeFileSync(file, s);
  console.log('processed', rel);
}
