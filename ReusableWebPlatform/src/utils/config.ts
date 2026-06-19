import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
    foundedYear: number;
    logo: string;
    favicon: string;
  };
  theme: {
    colors: Record<string, string>;
    fonts: Record<string, string>;
    borderRadius: string;
  };
  navigation: {
    items: Array<{ label: string; href: string }>;
    cta: { label: string; href: string };
  };
  hero: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
    backgroundVideo: string;
    overlay: number;
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  about: {
    title: string;
    description: string;
    image: string;
    stats: Array<{ value: string; label: string }>;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      icon: string;
      description: string;
      image: string;
      href: string;
    }>;
  };
  gallery: {
    title: string;
    subtitle: string;
    images: Array<{ src: string; alt: string; category: string }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      avatar: string;
      rating: number;
      quote: string;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    mapEmbed: string;
    workingHours: string;
    formFields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
    }>;
  };
  social: Record<string, string>;
  footer: {
    copyright: string;
    links: Array<{ label: string; href: string }>;
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
    locale: string;
    siteUrl: string;
    googleVerification: string;
    keywords: string[];
  };
  sections: Record<string, boolean>;
  analytics: Record<string, string>;
}

let cachedConfig: SiteConfig | null = null;

export function getSiteConfig(): SiteConfig {
  if (cachedConfig) return cachedConfig;

  const configPath = path.resolve(process.cwd(), 'content/site.yaml');
  const raw = fs.readFileSync(configPath, 'utf8');
  cachedConfig = yaml.load(raw) as SiteConfig;
  return cachedConfig;
}
