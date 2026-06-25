import site from '../../content/site.config.yaml';

/**
 * Build a wa.me link from the single source of truth (content/site.config.yaml).
 * The number is public business info; no secret is involved (see docs/rules/01-security.md).
 */
export function whatsappHref(message?: string): string {
  const number = site.contact.whatsapp;
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = site;
