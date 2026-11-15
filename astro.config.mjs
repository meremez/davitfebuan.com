// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const target = process.env.DEPLOY_TARGET ?? 'production';

export default defineConfig({
  site: 'https://davitfebuan.com',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: target === 'artifact' ? [] : [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } },
    }),
  ],
  build: {
    // One stylesheet inlined per page keeps the artifact preview and FTP upload simple.
    inlineStylesheets: 'always',
    // The artifact host reserves paths starting with "_".
    assets: target === 'artifact' ? 'assets' : '_astro',
  },
  vite: {
    define: {
      __DEPLOY_TARGET__: JSON.stringify(target),
    },
  },
});
