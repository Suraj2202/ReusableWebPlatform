# 06 — Color & Typography

> One source of truth. Change the config → the whole site re-themes. Never hardcode colors or fonts in components.

## 1. Single source of truth

- Theme tokens are defined in **`content/site.config.yaml`** and consumed by **`tailwind.config.mjs`** (which already falls back to defaults if the file is missing).
- Components reference **Tailwind token classes** (`bg-primary`, `text-accent`, `font-heading`) — never raw hex.
- To preview an alternate palette for the user: edit the config, rebuild — no component changes.

## 2. Color palette (approved)

| Token                       | Hex       | Use                                                                                        |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------ |
| `primary` (deep pine/teal)  | `#0F4C45` | headers, primary buttons, key accents                                                      |
| `secondary` (darker pine)   | `#0A3A34` | hovers, depth                                                                              |
| `accent` (warm gold)        | `#C9A24B` | CTAs, highlights, stars                                                                    |
| `neutral` (charcoal)        | `#1F2A28` | body text                                                                                  |
| `surface` (warm off-white)  | `#F7F4EF` | section backgrounds                                                                        |
| `danger` (muted terracotta) | `#B3454A` | semantic "not included / avoid" state only (e.g. exclusions) — **not** a decorative accent |

### Usage rules

- **One accent.** Gold is the single attention color (CTAs, stars, active states). Don't introduce competing brights.
- Primary for structure/brand; surface for alternating section backgrounds; neutral for text.
- Maintain **WCAG AA contrast** (≥4.5:1 body text, ≥3:1 large text). Gold-on-white needs care — use gold for fills/icons, not small text on light backgrounds.
- Define hover/active as darken/lighten of the base token, not a new random color.

## 3. Typography

| Role      | Font                 | Notes                |
| --------- | -------------------- | -------------------- |
| Headings  | **Fraunces** (serif) | character + elegance |
| Body / UI | **Inter** (sans)     | high legibility      |

### Rules

- Only **two** font families. No third font.
- **Self-host** the fonts (download into `public/assets/fonts/` or use `@fontsource`) — avoids a render-blocking Google Fonts request and keeps us independent. `font-display: swap`.
- Preload only the weights actually used (e.g. Inter 400/600, Fraunces 500/700). Don't ship the whole family.
- **Fluid sizing** with `clamp()` so type scales smoothly phone→desktop.
- Body text **≥16px** on mobile (prevents iOS input auto-zoom).
- Sensible line-height (~1.5 body, ~1.2 headings) and max line length (~70ch) for readability.

## 4. Spacing & radius

- Use Tailwind's spacing scale consistently; favor generous whitespace (the "elegant" feel).
- One border-radius token (`rounded-theme`) for cards/buttons — keep it consistent.

## 5. Don'ts

- ❌ Hardcoded hex in components.
- ❌ More than 2 font families or 1 accent color.
- ❌ Render-blocking external font CSS.
