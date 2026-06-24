# Hidden Naqsha — Build Tracker (Command Center)

> **This file is the single source of "what now".** Open it at the start of every session, do the one task under **Current Focus**, tick it, move the pointer. Anything that isn't the current task goes in the **Parking Lot** — not done now.
>
> **Last updated:** 2026-06-25 · **Branch:** `Hidden_Naqsha` · **Deploy:** Cloudflare Pages preview

**Map:** Plan/architecture → [docs/Hidden-Naqsha-Plan.md](docs/Hidden-Naqsha-Plan.md) · Rules → [docs/rules/README.md](docs/rules/README.md) · Asset inbox → [uploads/README.md](uploads/README.md)

---

## 🎯 Current Focus

> Exactly **one** task lives here at a time. When done, tick it in the checklist below and copy the next unchecked task up here.

- **Now:** `1.1 Video banner` — poster-first hero (placeholder poster + video), muted/looped/playsinline, pause offscreen, reduced-motion safe.
- **Next:** `1.2 Company overview`.
- **Blocked on:** _nothing (real `home-banner.mp4` + `home-poster.jpg` will be swapped in when uploaded)._

---

## 🧭 Scope Guard (read before adding anything)

A task is **in scope only if** it serves the demo site. If it fails any of these, it goes to the Parking Lot, not the build:

| #   | Guard rail                                                                  |
| --- | --------------------------------------------------------------------------- |
| G1  | Free & static only — no paid APIs, no server, no runtime API calls.         |
| G2  | No CMS / admin page in this phase.                                          |
| G3  | Mobile-first, must look elegant on Android + iOS + desktop.                 |
| G4  | Lightweight motion only — never janky, never blocking.                      |
| G5  | Content is data-driven (collections), not hardcoded HTML.                   |
| G6  | One source of truth for theme, WhatsApp number, social data.                |
| G7  | Never block a step on a missing asset — use a placeholder, log it, move on. |

> Full constraints: Plan §2. Full rules: [docs/rules/](docs/rules/README.md).

## 📊 Status Legend

`⬜ todo` · `🔄 in progress` · `✅ done` · `🅿️ parked` · `⛔ blocked`

---

## ✅ Definition of Done (applies to every task)

Before ticking any task, all of these must be true:

1. **Builds clean** — `npm run build` passes, no errors/warnings.
2. **Responsive** — verified at 375 / 768 / 1280px (phone / tablet / desktop).
3. **Rules-compliant** — follows the relevant rule doc(s) for that area.
4. **No placeholder left undocumented** — any stand-in asset is logged in [docs/rules/image-registry.md](docs/rules/image-registry.md).
5. **Committed** — conventional commit, preview deploy green.

## 🏗️ Build Checklist (small, shippable steps)

> Mirrors Plan §11. Keep these in order; each step ends with a working preview.

### Phase 0 — Foundations

- [x] **0.1 Brand** — tokens (colors/fonts/radius) in `content/site.config.yaml` → `tailwind.config.mjs`; logo placeholder. _(rules: 06, 01)_
- [ ] **0.2 Global layout** — Header + Footer + WhatsApp float button. _(rules: 08, 05)_
- [ ] **0.3 Content model** — Astro collections: trips, packages, categories, reviews, site config. _(rules: 11, 05)_

### Phase 1 — Home page

- [ ] **1.1** Video banner (placeholder video). _(rules: 03, 07)_
- [ ] **1.2** Company overview.
- [ ] **1.3** Social proof strip (static snapshot from `social.json`). _(rules: 04)_
- [ ] **1.4** Explore story-circle row.
- [ ] **1.5** All Tours continuous carousel.
- [ ] **1.6** Category blocks (Group Trip · Adventure · Trek) — 3 stacked, each own slider.
- [ ] **1.7** "Plan With Us" feature band (Family · School · Corporate).
- [ ] **1.8** Reviews carousel.
- [ ] **1.9** Footer wiring.

### Phase 2 — Category & Trip pages

- [ ] **2.1** Category landing `/explore/[category]`.
- [ ] **2.2** Trip detail `/trip/[slug]` — sticky tabs, itinerary accordion, gallery.

### Phase 3 — Blog-style pages

- [ ] **3.1** Family / School / Corporate template.
- [ ] **3.2** Enquiry form → WhatsApp message builder.

### Phase 4 — Supporting pages

- [ ] **4.1** About Us.
- [ ] **4.2** Contact.
- [ ] **4.3** 404.

### Phase 5 — Polish & ship

- [ ] **5.1** Animations pass (lightweight, reduced-motion safe). _(rules: 07)_
- [ ] **5.2** SEO meta, sitemap, Lighthouse ≥ 90 mobile. _(rules: 10)_
- [ ] **5.3** Cross-device QA — Android Chrome, iOS Safari, desktop @ 320/375/768/1024/1440px. _(rules: 09)_
- [ ] **5.4** Cloudflare Pages deploy + demo link. _(rules: 12)_

## 📦 Asset Readiness

Real media is **not** required to build — placeholders unblock every step (G7). Track what's outstanding here:

- Owner checklist (what to upload): [uploads/images/NEEDED.md](uploads/images/NEEDED.md) · [uploads/video/NEEDED.md](uploads/video/NEEDED.md)
- Technical truth (placeholder vs real): [docs/rules/image-registry.md](docs/rules/image-registry.md)

---

## 🅿️ Parking Lot (capture, don't chase)

> Ideas, nice-to-haves, and tangents land here so they don't derail the current task. Review only between phases.

- _(empty — add items as `🅿️ <idea> — why deferred`)_

## 🪵 Decisions

Authoritative log lives in [Plan §13](docs/Hidden-Naqsha-Plan.md#13-decisions-log). Add new decisions there, not here.

## 📓 Session Log

| Date       | Did                                                        | Next           |
| ---------- | ---------------------------------------------------------- | -------------- |
| 2026-06-25 | Plan + 13 rule docs + uploads inbox + this tracker created | Start step 0.1 |
| 2026-06-25 | 0.1 Brand done — central config, theme tokens, fonts, logo | Build 1.1      |
