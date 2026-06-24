/** @type {import('tailwindcss').Config} */
import fs from 'fs';
import yaml from 'js-yaml';

// Load site config for dynamic theming
let siteConfig = { theme: { colors: {}, fonts: {} } };
try {
  const raw = fs.readFileSync('./content/site.config.yaml', 'utf8');
  siteConfig = yaml.load(raw);
} catch {
  console.warn('⚠ content/site.config.yaml not found — using default theme');
}

const colors = siteConfig.theme?.colors ?? {};
const fonts = siteConfig.theme?.fonts ?? {};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary || '#0F4C45',
        secondary: colors.secondary || '#0A3A34',
        accent: colors.accent || '#C9A24B',
        neutral: colors.neutral || '#1F2A28',
        surface: colors.surface || '#F7F4EF',
      },
      fontFamily: {
        heading: [fonts.heading || 'Fraunces', 'Georgia', 'serif'],
        body: [fonts.body || 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        theme: siteConfig.theme?.borderRadius || '0.75rem',
      },
    },
  },
  plugins: [],
};
