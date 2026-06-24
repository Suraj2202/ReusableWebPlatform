# 13 — User Uploads (Inbox) Workflow

> A simple **inbox** folder lets the non-technical owner add assets to the repo without touching code. Devs then process them into the site. Pairs with the placeholder rule in [02-images.md](02-images.md).

## 1. The inbox

```
uploads/
  README.md            plain-English instructions for the owner
  images/
    NEEDED.md          checklist of images still needed (exact filenames)
    <dropped files>    owner places images here
  video/
    NEEDED.md          checklist of videos still needed
    <dropped files>    owner places the banner video here
```

- This is the **only** place the owner needs to touch. Everything is named so a dev can place it without guessing.
- Files here are **raw originals** — not yet optimized, not yet wired into the site.

## 2. Owner flow (no code needed)

1. Read `uploads/README.md` / the `NEEDED.md` checklists.
2. Save each file with the **exact name** specified.
3. Upload to the repo (commit/push, or GitHub web "Upload files").

## 3. Developer flow (processing)

When new files land in `uploads/`:

1. Move each file to its real path in `public/assets/` per [02-images.md](02-images.md) / [03-video.md](03-video.md):
   - `uploads/images/group-trip.jpg` → `public/assets/categories/group-trip.jpg`
   - `uploads/images/home-poster.jpg` → `public/assets/banner/home-poster.jpg`
   - `uploads/images/trip-<name>-cover.jpg` → `public/assets/trips/<name>/cover.jpg`
   - `uploads/video/home-banner.mp4` → `public/assets/video/home-banner.mp4`
2. The build's `optimize-images.mjs` generates WebP/responsive sizes — don't do it by hand.
3. Update **status to `REAL`** in [image-registry.md](image-registry.md) (replacing the `PLACEHOLDER`/`NEEDED` row).
4. Tick the item in the relevant `uploads/.../NEEDED.md` (⬜ → ✅) and delete the raw file from `uploads/` (it now lives in `public/assets/`).
5. Commit: `chore: process uploaded assets`.

## 4. Keeping the "what's needed" list correct

- The `NEEDED.md` checklists are the **single owner-facing source** of outstanding assets. Whenever a new asset becomes required (e.g. a new trip), the dev adds a row to the matching `NEEDED.md` with the exact target filename and size.
- This mirrors the developer-facing [image-registry.md](image-registry.md): registry = full technical truth; `NEEDED.md` = simple owner checklist.

## 5. Rules

- ✅ Owner only ever edits `uploads/`. Never asked to edit code or `public/assets/`.
- ✅ Exact filenames in `NEEDED.md` so dev mapping is mechanical.
- ✅ Never block the build waiting on uploads — use the placeholder rule until the real file arrives.
- ❌ Don't reference files in `uploads/` from site components — always move to `public/assets/` first (uploads is staging only).
- ❌ Don't commit secrets or unrelated files into `uploads/`.
