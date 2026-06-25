# Hidden Naqsha — Build Tracker (Command Center)

> **This file is the single source of "what now".** Open it at the start of every session, do the one task under **Current Focus**, tick it, move the pointer. Anything that isn't the current task goes in the **Parking Lot** — not done now.
>
> **Last updated:** 2026-06-25 · **Branch:** `Hidden_Naqsha` · **Deploy:** Cloudflare Pages preview

**Map:** Plan/architecture → [docs/Hidden-Naqsha-Plan.md](docs/Hidden-Naqsha-Plan.md) · Rules → [docs/rules/README.md](docs/rules/README.md) · Asset inbox → [uploads/README.md](uploads/README.md)

---

## 🎯 Current Focus

> Exactly **one** task lives here at a time. When done, tick it in the checklist below and copy the next unchecked task up here.

- **Now:** Phase 5 complete — site shipped.
- **Next:** _none (demo ready)._
- **Blocked on:** _nothing._

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
- [x] **0.2 Global layout** — Header (sticky + accessible drawer) + Footer + WhatsApp float button, wired into `BaseLayout`. _(rules: 08, 05)_
- [x] **0.3 Content model** — `src/content.config.ts` collections (categories, trips) with zod; 3 categories + 19 placeholder trips + `social.json` snapshot. _(rules: 11, 05)_

### Phase 1 — Home page

- [x] **1.1** Video banner (placeholder video). _(rules: 03, 07)_ — ✅ done (poster-first, reduced-motion safe, real media in `assets/video/`).
- [x] **1.2** Company overview.
- [x] **1.3** Social proof strip (static snapshot from `social.json`). _(rules: 04)_
- [x] **1.4** Explore story-circle row.
- [x] **1.5** All Tours continuous carousel.
- [x] **1.6** Category blocks (Group Trip · Adventure · Trek) — 3 stacked, each own slider.
- [x] **1.7** "Plan With Us" feature band (Family · School · Corporate).
- [x] **1.8** Reviews carousel.
- [x] **1.9** Footer wiring.

### Phase 2 — Category & Trip pages

- [x] **2.1** Category landing `/explore/[category]`.
- [x] **2.2** Trip detail `/trip/[slug]` — sticky tabs, itinerary accordion, gallery, card-based UX, danger token for exclusions.

### Phase 3 — Blog-style pages

- [x] **3.1** Family / School / Corporate template.
- [x] **3.2** Enquiry form → WhatsApp message builder.

### Phase 4 — Supporting pages

- [x] **4.1** About Us.
- [x] **4.2** Contact.
- [x] **4.3** 404.

### Phase 5 — Polish & ship

- [x] **5.1** Animations pass (lightweight, reduced-motion safe). _(rules: 07)_
- [x] **5.2** SEO meta, sitemap, Lighthouse ≥ 90 mobile. _(rules: 10)_
- [x] **5.3** Cross-device QA — Android Chrome, iOS Safari, desktop @ 320/375/768/1024/1440px. _(rules: 09)_
- [x] **5.4** Cloudflare Pages deploy + demo link. _(rules: 12)_

## 📦 Asset Readiness

Real media is **not** required to build — placeholders unblock every step (G7). Track what's outstanding here:

- Owner checklist (what to upload): [uploads/images/NEEDED.md](uploads/images/NEEDED.md) · [uploads/video/NEEDED.md](uploads/video/NEEDED.md)
- Technical truth (placeholder vs real): [docs/rules/image-registry.md](docs/rules/image-registry.md)

---

## 🅿️ Parking Lot (capture, don't chase)

> Ideas, nice-to-haves, and tangents land here so they don't derail the current task. Review only between phases.

- ✅ ~~Self-host Fraunces + Inter~~ — done (WOFF2 in `public/assets/fonts/`, no Google CDN).
- ✅ ~~Add WebM variant for hero video~~ — MP4 compressed to 1 MB, WebM unnecessary.
- 🅿️ Add `banner`/`categories` to `RESPONSIVE_DIRS` in optimize-images so hero/covers get 640/960/1280 sizes.
- 🅿️ Real hero poster is 1376×768 (under 1920 ideal) — request a higher-res still before ship if needed.
- ✅ ~~Move `.github/` to repo root + connect Cloudflare~~ — deploying via wrangler.

## 🪵 Decisions

Authoritative log lives in [Plan §13](docs/Hidden-Naqsha-Plan.md#13-decisions-log). Add new decisions there, not here.

## 📓 Session Log

| Date       | Did                                                                                                 | Next           |
| ---------- | --------------------------------------------------------------------------------------------------- | -------------- |
| 2026-06-25 | Plan + 13 rule docs + uploads inbox + this tracker created                                          | Start step 0.1 |
| 2026-06-25 | 0.1 Brand done — central config, theme tokens, fonts, logo                                          | Build 1.1      |
| 2026-06-25 | 1.1 Hero done — poster-first video banner + asset restructure                                       | Build 1.2      |
| 2026-06-25 | 0.2 + 0.3 done — content collections + placeholder data, Header/Footer/WhatsApp float               | Build 1.2      |
| 2026-06-25 | 1.2 done — Company overview section + `overview` block in site.config                               | Build 1.3      |
| 2026-06-25 | 1.3–1.9 done — Social proof, story circles, carousels, category blocks, PlanWithUs, reviews, footer | Build 2.1      |
| 2026-06-25 | 2.1–2.2 done — Category landing + trip detail (card UX, danger token, scroll-spy, 5-img gallery)    | Build 3.1      |
| 2026-06-25 | 3.1–3.2 done — Family/School/Corporate pages + WhatsApp enquiry form                                | Build 4.1      |
| 2026-06-25 | 4.1–4.3 done — About Us, Contact, 404 pages (data-driven, placeholder heroes registered)            | Build 5.1      |
| 2026-06-26 | 5.1–5.4 done — Self-host fonts, CSP hash injection, View Transitions, SEO/OG meta, video compress, footer mobile redesign, form dates, nav grouping, Cloudflare deploy | Ship 🎉 |
