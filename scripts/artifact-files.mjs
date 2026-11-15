// Prints the `files` map for publishing dist-artifact/ with the Artifact tool
// (every file except the root page itself, which is passed as file_path).
// Usage: node scripts/artifact-files.mjs
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const dir = path.resolve('dist-artifact');
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = path.join(d, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});
const skip = new Set(['index.html', '404.html', 'robots.txt', '.htaccess']);
const map = {};
for (const file of walk(dir)) {
  const rel = path.relative(dir, file).split(path.sep).join('/');
  if (skip.has(rel) || rel.endsWith('/.htaccess') || rel.startsWith('_')) continue;
  map[rel] = file;
}
console.log(JSON.stringify(map));
