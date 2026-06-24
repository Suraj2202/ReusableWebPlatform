# 05 — Coding Practices

> Stack: Astro 5 · Tailwind CSS · TypeScript · vanilla JS for interactivity. Goal: clean, consistent, data-driven, ~zero client JS.

## 1. Project structure

```
src/
  components/      reusable .astro components (PascalCase: TourCard.astro)
  layouts/         page shells (BaseLayout.astro, PageLayout.astro)
  pages/           routes (Astro file-based routing)
  styles/          global.css (Tailwind layers only)
  utils/           pure TS helpers (camelCase files)
content/
  site.config.yaml config (one source of truth)
  data/            committed data (social.json, etc.)
  trips/           trip content collection (see 11-content-data.md)
public/assets/     images & video (see 02 / 03)
```

## 2. Components

- One component = one responsibility. Compose pages from small components (see plan §8 catalog).
- File names: components `PascalCase.astro`; utils `camelCase.ts`.
- Props are typed via an `interface Props` in the component frontmatter.
- No business logic in pages — pages wire data → components.
- Reuse over duplication: one template per page type (plan C7). A new trip = new data, not new markup.

## 3. Styling

- **Tailwind utility classes** in markup. No inline `style=` except truly dynamic values.
- Use theme tokens (`primary`, `accent`, etc.) — never hardcode hex in components (see [06-color-typography.md](06-color-typography.md)).
- `global.css` holds only `@tailwind` layers + minimal base resets. No page-specific CSS dumped there.
- Mobile-first: write base styles for phone, add `sm:`/`md:`/`lg:` upward (plan §10A).

## 4. JavaScript / interactivity

- Default to **CSS-only** (scroll-snap sliders, `<details>` accordions, `:target`).
- When JS is needed (scroll-spy, carousel arrows), use small **vanilla TS** in a `<script>` island — no framework unless justified.
- Keep scripts tiny, lazy, and guarded (`prefers-reduced-motion`, feature detection).
- No global mutable state; query within the component's root.

## 5. Data-driven content

- Trips/packages/categories/reviews are **content/data**, not hardcoded HTML.
- Read via Astro Content Collections / imported YAML/JSON. Components receive typed data as props.

## 6. TypeScript

- `astro/tsconfigs/strict` is on — keep it. No `any` unless unavoidable (comment why).
- Validate content collection schemas with `zod` (Astro's `defineCollection`).

## 7. Formatting & linting

- Prettier (with `prettier-plugin-astro`) is the formatter — run `npm run lint:fix`.
- `astro check` must pass (no type errors) before commit.
- `husky` + `lint-staged` already format staged files; do not bypass with `--no-verify`.

## 8. Accessibility & semantics (always)

- Use semantic elements (`<nav> <main> <section> <button> <a>`). A clickable thing that navigates is `<a>`; an action is `<button>`.
- See [09-accessibility.md](09-accessibility.md).

## 9. Commits & quality gates

- `npm run validate` (lint + build) must pass before pushing.
- Conventional commit messages (commitlint is configured): `feat:`, `fix:`, `chore:`, `docs:`.
- Small, focused commits — one logical change each.

## 10. Don'ts

- ❌ No hardcoded secrets, hex colors, or asset paths to legacy folders.
- ❌ No heavy dependencies or paid services.
- ❌ No copy-pasted page markup — extract a component.
- ❌ No blocking on missing assets — use the placeholder rule.
