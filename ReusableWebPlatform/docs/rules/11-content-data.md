# 11 — Content & Data Structure

> Trips/packages/categories/reviews are **data**, not hardcoded HTML. One template renders many trips by swapping content (plan C7).

## 1. Where content lives

```
content/
  site.config.yaml      brand, WhatsApp number, social handles, currency, theme tokens
  data/
    social.json         Google/Instagram snapshot (see 04-social-sync.md)
  trips/
    <slug>.md|.yaml     one file per trip (package-based categories)
  categories/
    <category>.yaml     category meta (title, blurb, cover, order)
```

> Family/School/Corporate are blog-style pages (no package list) — their copy can live as page content or simple YAML, with an enquiry form.

## 2. Trip data shape (contract — validated with zod)

```yaml
slug: kashmir-great-lakes
title: Kashmir Great Lakes Trek
category: trek # group-trip | adventure | trek
durationNights: 6
durationDays: 7
pickup: Srinagar
drop: Srinagar
priceFrom: 18999 # INR
cover: trips/kashmir-great-lakes/cover.jpg
gallery:
  - trips/kashmir-great-lakes/gallery-01.jpg
overview: >
  Short summary…
highlights:
  - Seven alpine lakes
itinerary:
  - day: 1
    title: Arrival in Srinagar
    points: ['…', '…']
inclusions: ['…']
exclusions: ['…']
otherInfo:
  mustCarry: ['…']
```

## 3. Rules

- **Schema-validated:** define collections with Astro `defineCollection` + `zod`. Build fails on bad data — catch errors early.
- **Slugs** are kebab-case and stable (they're URLs).
- **Prices** are plain numbers; currency symbol (₹) comes from `site.config.yaml`, not baked into the data.
- **Image fields** are paths under `public/assets/` following [02-images.md](02-images.md); register them and use the placeholder rule if the real image is missing.
- **No HTML in content** beyond simple Markdown; structure stays as fields so the template controls presentation.
- Adding a trip = add one data file (+ images). **No new markup.**

## 4. Central config (`site.config.yaml`)

Holds the single-source values: brand name, logo path, `whatsappNumber` (placeholder for now), Instagram handle, currency, and theme tokens (colors/fonts) consumed by Tailwind. Edit here to re-theme or update contact info site-wide.
