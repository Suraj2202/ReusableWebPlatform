# 02 — Image Rules

> Goal: every image has a **known path, known name, and known purpose**. We never block on a missing image — we copy an existing one as a placeholder and ask the user for the real asset later.

## 1. Folder structure (under `public/assets/`)

Images live in `public/assets/`, organized by domain:

```
public/assets/
  brand/                 logo, favicon, og-image
  banner/                home video poster + hero stills
  categories/            one cover per category (group-trip, adventure, trek, family, school, corporate)
  trips/<trip-slug>/     all images for a specific trip (cover + gallery)
  reviews/               reviewer avatars
  misc/                  anything not fitting above
```

> Existing legacy folders (`gallery/`, `services/`, `testimonials/`) may be reused as placeholder sources for now. New work uses the structure above.

## 2. Naming convention

- **kebab-case**, descriptive, no spaces, no capitals: `kashmir-great-lakes-cover.jpg`.
- Trip images are prefixed by context inside their trip folder: `trips/kashmir-great-lakes/cover.jpg`, `trips/kashmir-great-lakes/gallery-01.jpg`.
- Category covers: `categories/<category>.jpg` (e.g. `categories/trek.jpg`).
- Source images are `.jpg` (or `.png` if transparency needed). **Do not hand-create `.webp` or responsive sizes** — the build script generates them.

## 3. Formats & responsive sizes (automated)

- Author one source `.jpg`/`.png` per image.
- `scripts/optimize-images.mjs` auto-generates `.webp` + responsive widths (640 / 960 / 1280) at build time. Do not commit generated variants by hand; let the script own them.
- Always render images with explicit `width`/`height` (or aspect-ratio) to prevent layout shift, and `loading="lazy"` for offscreen images.

## 4. Recommended dimensions / aspect ratios

| Use                       | Aspect        | Source min width |
| ------------------------- | ------------- | ---------------- |
| Video poster / hero still | 16:9          | 1920px           |
| Category cover            | 4:3           | 1280px           |
| Trip cover card           | 3:2           | 1280px           |
| Trip gallery              | 4:3 or 3:2    | 1280px           |
| Reviewer avatar           | 1:1           | 256px            |
| Logo                      | SVG preferred | —                |
| OG share image            | 1200×630      | 1200px           |

## 5. The Image Registry (single source of "what images exist / are needed")

Maintain a registry table in [image-registry.md](image-registry.md). Every image the site uses must have a row: **path · purpose · aspect · status**.

- `status` = `REAL` (final asset), `PLACEHOLDER` (copied stand-in), or `NEEDED` (must be requested from user).
- When you build a component that needs an image:
  1. Check the registry.
  2. If a real asset exists → use it.
  3. If not → **copy an existing image** to the correct new path/name, add a `PLACEHOLDER` row, and continue. Never leave a broken image or block work.
  4. Add the item to the "Needed from user" list so we can request the real asset.

## 6. Placeholder rule (current phase)

- For now, reuse whatever exists in `public/assets/` (legacy `gallery/`, `services/`, `testimonials/`).
- **Copy** the file to the new structured path with the correct name (do not reference the legacy path directly from new components). This keeps components pointing at final paths so swapping real assets later is a one-file replace.

## 7. Accessibility & SEO

- Every `<img>` has meaningful `alt` text (empty `alt=""` only for purely decorative images).
- Descriptive filenames help SEO — avoid `img1.jpg`.

## 8. Asking the user for images

When a real image is required, request it with: **purpose, target path/name, aspect ratio, and min width** (from §4) so the user can supply a correctly-sized asset in one go.
