# 07 — Animation Rules

> Principle: **simple yet elegant, on every device.** Smooth and intentional — never a jarring jump-cut, never a slow laggy load. A perfect balance.

## 1. Goals

- Motion should **guide and delight**, not distract or block content.
- Must run at **60fps on a mid-range Android phone**, not just a desktop.
- Works on Android, iOS, and desktop — no effect that breaks or janks on touch devices.

## 2. The balance rule (timing)

- **Not a jump-cut:** elements ease in (opacity + small translate), they don't pop instantly.
- **Not too late:** content must never be _hidden waiting_ for an animation. If JS/animation fails, content is fully visible by default (progressive enhancement).
- Recommended timing:
  - Micro-interactions (hover, button press): **120–200ms**.
  - Entrance/reveal (fade-up on scroll): **300–500ms**.
  - Carousel/scroll easing: smooth, ~**300ms** snap.
- Easing: use a natural curve (`cubic-bezier(0.16, 1, 0.3, 1)` or Tailwind `ease-out`). Avoid linear for UI.
- **Stagger** lists subtly (≤80ms between items); never long cascades that delay reading.

## 3. Performance constraints (all devices)

- Animate **only `transform` and `opacity`** (GPU-friendly). Never animate `width`, `height`, `top`, `left`, `box-shadow` in loops (causes layout/paint jank).
- Use `will-change` sparingly and remove it after the animation.
- Scroll reveals use **IntersectionObserver**, not scroll-event listeners.
- No heavy animation libraries. CSS transitions/animations + tiny vanilla JS only. (Lottie/large JS only if explicitly approved and lazy-loaded.)
- Pause/skip offscreen animations (and the banner video) to save battery.

## 4. Critical: content is never gated by animation

- Default state of any element = **visible**. Reveal animations _enhance_ from there.
- ❌ Do not set `body`/sections to `opacity: 0` waiting for JS to reveal them (this caused a blank-page bug earlier). If a reveal needs a hidden start, scope it to small elements and ensure a no-JS / reduced-motion fallback shows them.

## 5. `prefers-reduced-motion`

- Always honor it. When set:
  - Disable parallax, auto-scroll, large entrance moves, and banner video autoplay (show poster).
  - Keep instant, non-moving transitions (or none). Content fully visible.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

## 6. Where we use motion (and how)

| Area            | Effect                           | Notes                                  |
| --------------- | -------------------------------- | -------------------------------------- |
| Hero            | gentle fade/zoom of overlay text | subtle, once                           |
| Section reveals | fade-up on scroll                | IntersectionObserver, 300–500ms        |
| Sliders         | smooth scroll-snap               | native momentum on iOS                 |
| Cards           | hover lift + image zoom          | desktop hover only; touch shows static |
| Buttons         | press scale + color              | 120–200ms                              |
| Sticky nav      | fade/elevate on scroll           | no layout shift                        |

## 7. Don'ts

- ❌ Auto-playing motion that loops forever in the user's face (except the muted banner, which pauses offscreen).
- ❌ Animations longer than ~600ms for UI.
- ❌ Effects that only work with a mouse and leave touch users stuck.
- ❌ Animating expensive properties.
