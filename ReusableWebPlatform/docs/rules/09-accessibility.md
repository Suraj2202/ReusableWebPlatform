# 09 — Accessibility Rules

> Accessibility is part of "elegant UX". Target: **WCAG 2.1 AA**. Works for keyboard, screen reader, touch, and mouse on all devices.

## 1. Semantics

- Use real elements: `<header> <nav> <main> <section> <footer> <button> <a>`.
- One `<h1>` per page; headings in order (no skipping levels).
- Links navigate; buttons act. Don't fake either with a `<div>`.

## 2. Images & media

- Meaningful `alt` on every informative image; `alt=""` for decorative.
- Banner video is decorative → essential text/CTA is real HTML over it, not baked into the video.
- Captions not required for the muted banner (no speech), but never rely on audio.

## 3. Keyboard

- Everything reachable and operable by keyboard (Tab order logical).
- Visible focus rings (never `outline: none` without a replacement).
- Drawer/menus: trap focus while open, close on `Esc`, return focus to the trigger.

## 4. Touch

- Tap targets ≥ 44×44px with spacing.
- No hover-only information (touch can't hover).

## 5. Color & contrast

- Body text ≥ 4.5:1, large text/icons ≥ 3:1 against background.
- Never use color alone to convey meaning (add icon/text/underline).

## 6. Forms (enquiry)

- Every field has a visible, associated `<label>`.
- Native `<select>` for dropdowns (best assistive + mobile support).
- Clear error/empty states; don't trap the user.

## 7. Motion

- Honor `prefers-reduced-motion` (see [07-animation.md](07-animation.md)).
- No content flashing more than 3×/sec.

## 8. Verification

- Keyboard-only pass on each page.
- Lighthouse Accessibility ≥ 90.
- Check focus order + screen-reader labels on nav, sliders, and forms.
