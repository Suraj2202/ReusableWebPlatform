# 03 — Video Rules

> Currently used for the **home top banner**. Same discipline as images: known path, known name, never block on a missing file.

## 1. Folder structure

```
public/assets/video/
  home-banner.mp4        primary (H.264/AAC) — broadest support
  home-banner.webm       optional smaller alternative (VP9/AV1)
```

Poster image lives with banners: `public/assets/banner/home-poster.jpg` (see image registry).

## 2. Naming convention

- kebab-case, descriptive: `home-banner.mp4`.
- Keep the poster filename matched to the video: `home-banner` → `home-poster.jpg`.

## 3. Formats & encoding

- **MP4 (H.264 + AAC)** is mandatory — required for iOS Safari and universal support.
- WebM (VP9/AV1) optional as a smaller `<source>` listed first; browser picks best.
- Provide both via `<video>` multiple `<source>` elements; MP4 last as fallback.

## 4. Banner playback rules (all devices)

The banner video **must**:

- Be `muted` + `autoplay` + `loop` + `playsinline` — iOS will not autoplay otherwise.
- Show the **poster image first** (`poster=`) so users never see a blank box while loading.
- `preload="metadata"` (not `auto`) to avoid heavy downloads on mobile data.
- `object-fit: cover`; cap height on mobile (~70–80vh) and respect iOS safe areas for any overlay CTA.
- **Pause when offscreen** (IntersectionObserver) to save battery/CPU.
- Never carry essential text _inside_ the video — overlay real HTML text/CTA on top (accessibility + SEO).

## 5. Size budget

- Target **≤ 5 MB** for the MP4 (demo). Compress; short loop (8–15s) is enough.
- If a source is larger, compress before committing. Large media hurts mobile UX and Cloudflare build.
- Use `prefers-reduced-motion` / save-data awareness: if reduced motion is requested, show the **poster image only** (no autoplay video).

## 6. Placeholder rule (current phase)

- No banner video exists yet → the banner uses the **poster image only** until a real video is supplied.
- Add a `NEEDED` entry: a real AI-generated banner video (16:9, ≤5MB, muted-friendly).
- When the real video arrives, drop it at `public/assets/video/home-banner.mp4` (+ poster) — components already point at that path, so it's a one-file swap.

## 7. Asking the user for video

Request with: **purpose, target path, aspect (16:9), max size (≤5MB), duration (8–15s loop), and that it must work muted** (no reliance on audio).
