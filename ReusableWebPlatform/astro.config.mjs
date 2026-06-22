import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // Overridden per client
  site: 'https://example.com',

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

  adapter: cloudflare()
});