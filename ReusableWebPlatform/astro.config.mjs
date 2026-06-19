import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://example.com', // Overridden per client
  trailingSlash: 'ignore',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    plugins: [yaml()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
});
