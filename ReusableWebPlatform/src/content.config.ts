import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Content lives at the repo root under content/ (see docs/rules/11-content-data.md),
// not inside src/. The glob loader points at those root folders.

const categoryEnum = z.enum(['group-trip', 'adventure', 'trek']);

const categories = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './content/categories' }),
  schema: z.object({
    title: z.string(),
    slug: categoryEnum,
    blurb: z.string(),
    cover: z.string(), // path under public/assets/ (see docs/rules/02-images.md)
    order: z.number().int(),
  }),
});

const trips = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './content/trips' }),
  schema: z.object({
    slug: z.string(), // kebab-case, stable (it's the URL)
    title: z.string(),
    category: categoryEnum,
    durationNights: z.number().int().nonnegative(),
    durationDays: z.number().int().positive(),
    pickup: z.string(),
    drop: z.string(),
    priceFrom: z.number().int().positive(), // INR, plain number — symbol comes from site.config
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    overview: z.string(),
    highlights: z.array(z.string()).default([]),
    itinerary: z
      .array(
        z.object({
          day: z.number().int().positive(),
          title: z.string(),
          points: z.array(z.string()).default([]),
        }),
      )
      .default([]),
    inclusions: z.array(z.string()).default([]),
    exclusions: z.array(z.string()).default([]),
    otherInfo: z
      .object({
        mustCarry: z.array(z.string()).default([]),
      })
      .default({ mustCarry: [] }),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
  }),
});

export const collections = { categories, trips };
