import type { SiteConfig } from './config';

export function generateStructuredData(config: SiteConfig): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.brand.name,
    description: config.brand.description,
    url: config.seo.siteUrl,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address,
    },
    foundingDate: String(config.brand.foundedYear),
    sameAs: Object.values(config.social).filter(Boolean),
  };
  return JSON.stringify(data);
}

export function getPageTitle(pageTitle: string, template: string): string {
  if (!pageTitle) return template.replace('%s | ', '');
  return template.replace('%s', pageTitle);
}
