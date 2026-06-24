# 08 — Navigation Rules

> Principle: **simple yet elegant, on every device.** Easy to reach, instantly understandable, smooth (no jump-cut, no laggy reveal). Balanced.

## 1. Global header

- Sticky top header with logo (left) + nav (right). Stays accessible on scroll.
- On scroll down, header may **slim/elevate** subtly (no layout shift, ≤200ms); reappears on scroll up. Never hides the only way to navigate without an easy return.
- Always includes a visible **WhatsApp / Enquire** action (primary conversion).

## 2. Responsive nav pattern

| Device                  | Pattern                                                                        |
| ----------------------- | ------------------------------------------------------------------------------ |
| Phone (<768px)          | Hamburger → full-screen / slide-in drawer menu. Large tap targets, one column. |
| Tablet/Desktop (≥768px) | Inline horizontal nav links + CTA button.                                      |

- Hamburger drawer: open/close with a smooth slide+fade (200–300ms), trap focus, close on `Esc`, on backdrop tap, and on link click.
- Drawer must respect iOS **safe areas** and be scrollable if content is tall.

## 3. Items

- Keep top-level nav short: Home · Group Trip · Adventure · Trek · About · Contact (+ Enquire CTA).
- Family/School/Corporate can sit under a "More" / secondary group or footer to avoid overcrowding — keep the primary bar clean.
- Footer repeats key links (About, Contact, categories, social, WhatsApp) for bottom-of-page reach.

## 4. In-page navigation

- **Home story-circles** scroll smoothly to their section (`scroll-behavior: smooth`, with reduced-motion fallback to instant).
- **Trip detail sticky tab nav** (Overview/Itinerary/…): sticky under the header, horizontally scrollable on phone if it overflows, with **scroll-spy** highlighting the active section. Tapping a tab smooth-scrolls to it.
- Provide a **back-to-top** affordance on long pages.

## 5. Touch, mouse & keyboard

- All nav works by tap, click, and keyboard (Tab/Enter/Esc); visible focus rings.
- Tap targets ≥ **44×44px**; adequate spacing so neighbors aren't mis-tapped.
- Active/current page or section is clearly indicated (color/underline using the accent token).

## 6. Performance / smoothness

- Nav is HTML/CSS first; the only JS is the drawer toggle + scroll-spy (tiny vanilla TS).
- Avoid layout shift when the header changes state (reserve height).
- Smooth scroll is eased, not instant-jump, but also not slow — ~300–500ms feel.

## 7. Don'ts

- ❌ Mega-menus or deep nested dropdowns (overkill for this site).
- ❌ Nav that requires hover to reveal (breaks on touch).
- ❌ Hiding the menu with no obvious way back.
- ❌ Janky or >500ms menu transitions.
