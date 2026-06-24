# Hidden Naqsha — Project Plan

> Living planning doc. We update this as decisions are made. Nothing here is final code — it is the map so we don't miss anything.

---

## 1. Project Summary

**Hidden Naqsha** is a static marketing website for a travel agency that plans trips, treks, ski/snowboard trips, and group/family/corporate/school journeys. Goal of this phase: a **demo site hosted free on Cloudflare Pages** with AI-generated placeholder media, no CMS, no admin, no paid services.

**Audience devices:** Android, iOS, Desktop (mobile-first, fully responsive).

**Brand feel:** Simple yet elegant. Lightweight, smooth, device-safe animations only.

---

## 2. Goals & Hard Constraints

| #   | Constraint                                                                            |
| --- | ------------------------------------------------------------------------------------- |
| C1  | 100% free & open-source. No paid APIs, no licensing/legal cost, no billing accounts.  |
| C2  | Fully static (no server, no database, no CMS, no admin page).                         |
| C3  | Hosted on Cloudflare Pages (preview from `Hidden_Naqsha`, prod from `main`).          |
| C4  | All images/video are AI-generated placeholders now; real assets swapped later.        |
| C5  | Lightweight animations only — skip anything heavy or device-incompatible.             |
| C6  | Primary conversion = **WhatsApp** (pre-filled enquiry message).                       |
| C7  | Reuse one template per page type; content is data-driven (swap content, same layout). |

---

## 3. Tech Stack

- **Framework:** Astro 5 (already set up) — ships ~zero JS, perfect for static + fast.
- **Styling:** Tailwind CSS (already configured).
- **Content:** Astro Content Collections (YAML/Markdown) so trips/packages are data, not hardcoded HTML.
- **Interactivity:** Vanilla JS + CSS only (carousels, accordions, tabs). No heavy framework islands unless truly needed.
- **Media:** Self-hosted MP4/WebM video + WebP images in `public/assets/` (built-in image optimization script already present).
- **Hosting:** Cloudflare Pages (free tier).

---

## 4. Information Architecture (Site Map)

```
/                         Home (single long page, mostly horizontal scrollers)
/explore/[category]       Category landing — category ∈ group-trip | adventure | trek
/trip/[slug]              Trip detail page (top-to-bottom, wanderon-style)
/family                   Blog-style page + enquiry → WhatsApp
/corporate               Blog-style page + enquiry → WhatsApp
/school                  Blog-style page + enquiry → WhatsApp
/about                    About Us
/contact                  Contact
404                       Not found
```

> **Category taxonomy (confirmed):**
>
> - **Package-based** (defined trips, shown as sliders + have detail pages):
>   - **Group Trip** — Ladakh (×2), Kashmir (×2), Zanskar (Srinagar→Manali), Kargil–Zanskar, Autumn, Meghalaya.
>   - **Adventure** — Skiing (×2), Snowboarding (×2).
>   - **Trek** — Kashmir Great Lakes, Kalapari Lake, Tarsar Marsar, Valley of Flowers, Hirpora, Kausernag, Taulian.
> - **Blog-based** (no fixed packages → "what we do" + custom enquiry form):
>   - **Family · School · Corporate.**

---

## 5. Home Page — Section Flow (top to bottom)

All scrollers are **horizontal / right-swipe, continuous** unless marked otherwise.

1. **Top Banner** — full-width autoplay **video** (muted, looped, `playsinline`, poster image fallback). Headline + CTA overlay. WhatsApp CTA.
2. **Company Overview** — short who-we-are block (top-to-bottom, simple).
3. **Social Proof Strip** — Google Review count + star rating, Instagram follower count + handle. _(feasibility notes in §9)_
4. **Explore (Story-Circle Row)** — Instagram-highlight-style circles: Group Trip, Adventure, Trek, Family, School, Corporate. Tapping a circle scrolls to / reveals that section.
5. **All Tours** — continuous horizontal carousel of all tour cards (not one-at-a-time; smooth multi-card scroll). _(correct as-is)_
6. **Category Blocks (3 stacked, each with its own slider)** — three vertically-stacked blocks; within each block a **horizontal package slider**:
   - **6a. Group Trip** — Ladakh (×2), Kashmir (×2), Zanskar (Srinagar→Manali), Kargil–Zanskar, Autumn Trip, Meghalaya.
   - **6b. Adventure** — Skiing (×2), Snowboarding (×2).
   - **6c. Trek** — Kashmir Great Lakes, Kalapari Lake, Tarsar Marsar, Valley of Flowers, Hirpora, Kausernag, Taulian.
     > Each block: section title + its own right-swipe slider of package cards. Cards open the relevant Trip Detail page.
7. **Plan With Us (Family / School / Corporate)** — a 3-card feature band (full-bleed image + title + one-line pitch + "Plan With Us" CTA). These have **no fixed packages**, so each card links to its own blog-style page with an enquiry → WhatsApp form. _(layout decided by us; distinct from sliders since these are bespoke.)_
8. **Google Reviews** — top reviews with reviewer image, content, stars (horizontal carousel).
9. **Footer** — About Us, Contact, social links, WhatsApp.

---

## 6. Trip Detail Page — Section Flow (top to bottom)

Modeled on the reference (wanderon), content different. **Vertical scroll** with a sticky in-page tab nav.

1. **Hero** — image/gallery, trip title, pickup & drop, duration.
2. **Sticky Tab Nav** — Overview · Itinerary · Inclusions · Exclusions · Other Info.
3. **Overview & Highlights** — summary + highlight chips.
4. **Itinerary** — day-by-day accordion (expand/collapse).
5. **Inclusions** — checkmark list.
6. **Exclusions** — cross-mark list.
7. **Other Info** — Must Carry / Travel Essentials.
8. **Reviews** — traveller testimonials.
9. **Journey in Frames** — photo gallery grid.
10. **Sticky Price / Enquire bar** — "Starting from ₹X" + **Enquire on WhatsApp** (replaces "Book Now"; no payments).

---

## 7. Family / School / Corporate Page — Flow (top to bottom)

1. **Hero** — theme banner + tagline.
2. **What We Do** — blog-style narrative blocks (how we craft the experience, what we provide).
3. **Highlights / Why Us** — icon + text rows.
4. **Enquiry Form → WhatsApp** — simple fields, single-select dropdowns:
   - Number of people, Location/destination, Trip type, Dates (approx), Name, Phone — all assembled into a pre-filled WhatsApp message and redirected to `wa.me`.

---

## 8. Reusable Components Catalog

| Component                                     | Used by                                |
| --------------------------------------------- | -------------------------------------- |
| `VideoBanner`                                 | Home hero                              |
| `HorizontalScroller` (continuous, multi-card) | All Tours, Category sliders, Reviews   |
| `CategoryBlock` (title + own slider)          | Group Trip, Adventure, Trek            |
| `StoryCircleRow`                              | Explore section                        |
| `TourCard` / `PackageCard`                    | scrollers                              |
| `FeatureBandCard` (image + pitch + CTA)       | Plan With Us (Family/School/Corporate) |
| `ReviewCard` (image, stars, text)             | reviews                                |
| `SocialProofStat` (count + stars)             | social strip                           |
| `Accordion`                                   | itinerary, FAQ                         |
| `StickyTabNav`                                | trip detail                            |
| `EnquiryForm` (→ WhatsApp builder)            | family/school/corporate, contact       |
| `WhatsAppFloatButton`                         | global                                 |
| `Header` / `Footer`                           | global                                 |

---

## 9. Third-Party Integrations — Feasibility (important)

| Feature                                          | Free & static-friendly? | Approach                                                                                                                                     |
| ------------------------------------------------ | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **WhatsApp contact**                             | ✅ Yes                  | `https://wa.me/<number>?text=<prefilled>` — pure link, no cost.                                                                              |
| **Instagram followers**                          | ⚠️ Partial              | No reliably-free live API. **Approach:** dev fetches once, writes to data file, commits & pushes.                                            |
| **Google Reviews (count + stars + top reviews)** | ⚠️ Needs API key        | Google Places API free tier needs a billing account. **Approach:** dev fetches once with a local key, writes to data file, commits & pushes. |

### 9.1 Data Sync Model — "fetch once, commit, push" (Q1, Q2 — CONFIRMED)

We do **not** call any API from the live site. Instead:

1. A developer runs a local sync script (e.g. `npm run sync:social`).
2. The script uses an API key/token read **only** from the developer's local `.env` (gitignored — never committed, never shipped).
3. The script writes the fetched results (review count, avg stars, top reviews, IG follower count) into a **committed data file** (e.g. `content/data/social.json`).
4. Developer commits & pushes → Cloudflare rebuilds → site shows refreshed numbers.
5. The live site only reads the static data file. Zero runtime API calls, zero cost, no key in the browser.

### 9.2 Security Reality (important — read this)

- **Static sites ship everything to the browser.** Any value _rendered on the page_ (WhatsApp number, review text, follower count) is **visible to end users**. This cannot be hidden — the `wa.me` link must contain the number to function. That's acceptable: this is public business info.
- **What we actually protect = API keys/tokens.** Those live only in a developer's local `.env` (gitignored) and are used at sync time, never shipped. No secret ever reaches the repo or the client bundle.
- **Centralization (the real ask):** keep the WhatsApp number + social snapshot in **one config file** so developers edit one place and push, rather than values scattered across components. "Not visible to users" isn't achievable for rendered data; "single source, no leaked keys" is what we deliver.

### 9.3 Config & Data Files

| File                       | Committed?    | Holds                                            | Edited by                  |
| -------------------------- | ------------- | ------------------------------------------------ | -------------------------- |
| `content/site.config.yaml` | ✅ Yes        | WhatsApp number, brand, social handles, currency | Devs (one source of truth) |
| `content/data/social.json` | ✅ Yes        | Review count/stars/top reviews, IG followers     | Generated by sync script   |
| `.env` (local only)        | ❌ Gitignored | API keys/tokens for sync script                  | Each dev locally           |

---

## 10. Design Language (Q3 — PROPOSED)

- **Style:** clean, elegant, generous whitespace, large imagery, soft rounded cards.
- **Proposed palette** ("Naqsha" = map/design → earthy, premium travel feel):

| Token                    | Hex       | Use                                   |
| ------------------------ | --------- | ------------------------------------- |
| primary (deep pine/teal) | `#0F4C45` | headers, primary buttons, key accents |
| secondary (darker pine)  | `#0A3A34` | hovers, depth                         |
| accent (warm gold)       | `#C9A24B` | CTAs, highlights, stars               |
| neutral (charcoal)       | `#1F2A28` | body text                             |
| surface (warm off-white) | `#F7F4EF` | section backgrounds                   |

- **Typography:** Heading = **Fraunces** (elegant modern serif) · Body = **Inter** (clean, highly legible). Self-hosted Google Fonts. _(Alt heading: Playfair Display if a more classic look is preferred.)_
- **Motion:** fade-up on scroll, smooth carousel scroll, subtle hover lift. Respect `prefers-reduced-motion`.

> **Single source of truth:** all theme tokens (colors, fonts, radius) live in **one place** — `tailwind.config.mjs` driven by `content/site.config.yaml`. Change one file → whole site re-themes. Lets us quickly preview alternate palettes for the user.

---

## 10A. Responsive & UX Standards (all devices)

Target devices: **Android, iOS, Desktop**. Approach: **mobile-first**, scale up. Every component must look elegant and work with touch, mouse, and keyboard.

### Breakpoints (Tailwind defaults)

| Name  | Width   | Typical device                           |
| ----- | ------- | ---------------------------------------- |
| base  | <640px  | phones (Android/iOS) — design here first |
| `sm`  | ≥640px  | large phones / small tablets             |
| `md`  | ≥768px  | tablets / iPad portrait                  |
| `lg`  | ≥1024px | iPad landscape / small laptops           |
| `xl`  | ≥1280px | desktops                                 |
| `2xl` | ≥1536px | large desktops                           |

### Layout rules per section

- **Video banner:** full-viewport on desktop; on mobile cap height (~70–80vh), `object-fit: cover`, always show poster first, `playsinline` + `muted` + `autoplay loop` (required for iOS autoplay). Provide a lightweight poster image; lazy-load the video; pause when offscreen to save battery.
- **Horizontal sliders (All Tours, Category blocks, Reviews):** native touch swipe via CSS `scroll-snap` + `overflow-x:auto`; show ~1.2 cards on phone (peek hint), 2–3 on tablet, 4+ on desktop. Hide scrollbar but keep accessible; add prev/next arrows on `md+` (mouse users) and a progress indicator. Momentum scroll on iOS (`-webkit-overflow-scrolling: touch`).
- **Story-circle row:** horizontally scrollable on phone; centered/wrapped on desktop. Min 44×44px tap targets.
- **Trip detail sticky tab nav:** sticky under header; horizontally scrollable on phone if tabs overflow; scroll-spy highlights active section.
- **Sticky price/enquire bar:** bottom-fixed full-width bar on mobile (thumb-reachable); inline sidebar card on desktop.
- **Enquiry form:** single column on mobile; native `<select>` dropdowns (best mobile UX); large tap targets; labels always visible.

### Touch / interaction

- Minimum tap target **44×44px** (Apple HIG / Material).
- Hover effects are **enhancements only** — never hide essential info behind hover (touch devices can't hover).
- Respect **safe areas** on iOS (notch / home indicator) via `env(safe-area-inset-*)` for fixed bars.
- All carousels usable by swipe (touch), arrows (mouse), and keyboard (focus + arrow keys).

### Typography & spacing

- Fluid type with `clamp()` so headings scale smoothly between phone and desktop (no awkward mid-sizes).
- Body text min 16px on mobile (prevents iOS auto-zoom on input focus).
- Consistent spacing scale; generous whitespace for the "elegant" feel.

### Accessibility (part of good UX)

- Semantic HTML, alt text on all images, visible focus rings, color contrast ≥ WCAG AA.
- `prefers-reduced-motion`: disable parallax/auto-scroll, keep content fully visible.

### Performance (UX on real devices/networks)

- Responsive images (`srcset`/WebP, already in the optimize script); explicit width/height to avoid layout shift (CLS).
- Lazy-load offscreen images/video; preload only the hero poster + fonts.
- Ship ~zero JS (Astro); sliders/accordions use CSS + tiny vanilla JS.
- Budget: Lighthouse ≥ 90 on mobile for Performance/Accessibility/Best-Practices/SEO.

> **Verification step (added to Phase 5):** test on real Android Chrome, iOS Safari, and desktop widths (320 / 375 / 768 / 1024 / 1440px) before demo.

---

## 11. Phased Build Plan (small steps)

We build in small, shippable increments. Each step ends with a working preview deploy.

**Phase 0 — Foundations**

- [ ] 0.1 Define brand: name styling, colors, fonts, logo placeholder.
- [ ] 0.2 Global layout: Header + Footer + WhatsApp float button.
- [ ] 0.3 Content model: define Astro collections (trips, packages, categories, reviews, site config).

**Phase 1 — Home page skeleton**

- [ ] 1.1 Video banner (placeholder video).
- [ ] 1.2 Company overview.
- [ ] 1.3 Social proof strip (static snapshot).
- [ ] 1.4 Explore story-circle row.
- [ ] 1.5 All Tours continuous carousel.
- [ ] 1.6 Category blocks (Group Trip, Adventure, Trek) — 3 stacked, each own slider.
- [ ] 1.7 "Plan With Us" feature band (Family / School / Corporate).
- [ ] 1.8 Reviews carousel.
- [ ] 1.9 Footer.

**Phase 2 — Category & Trip pages**

- [ ] 2.1 Explore category landing (`/explore/[category]`).
- [ ] 2.2 Trip detail template (`/trip/[slug]`) with sticky tabs, itinerary accordion, gallery.

**Phase 3 — Blog-style pages**

- [ ] 3.1 Family / School / Corporate template.
- [ ] 3.2 Enquiry form → WhatsApp message builder.

**Phase 4 — Supporting pages**

- [ ] 4.1 About Us.
- [ ] 4.2 Contact.
- [ ] 4.3 404.

**Phase 5 — Polish & ship**

- [ ] 5.1 Animations pass (lightweight, reduced-motion safe).
- [ ] 5.2 SEO meta, sitemap, performance check (Lighthouse).
- [ ] 5.3 Cross-device QA — Android Chrome, iOS Safari, desktop @ 320/375/768/1024/1440px (per §10A).
- [ ] 5.4 Cloudflare Pages deploy + demo link.

---

## 12. Open Questions (still need your input)

_None blocking — ready to plan the build. Future detail (per-trip content, real copy/images) comes during implementation._

---

## 13. Decisions Log

- **Q1 (Google Reviews):** Fetch-once via local sync script → commit data file → push. No live API on the site. _(2026-06-24)_
- **Q2 (Instagram):** Same fetch-once-and-commit model for follower count. _(2026-06-24)_
- **Q4 (WhatsApp number):** Use a **placeholder** number for now, stored in central config. _(2026-06-24)_
- **Security:** API keys live only in local gitignored `.env`; rendered data (number, reviews) is unavoidably public on a static site; we centralize it in one config file. _(2026-06-24)_
- **Q3 (Design):** APPROVED — pine/teal + warm gold palette, Fraunces (heading) + Inter (body). All theme tokens centralized in one config for easy swapping/preview. _(2026-06-24)_
- **Q6 (Currency):** ₹ INR (Rupees). _(2026-06-24)_
- **Q7 (Language):** English only for demo. _(2026-06-24)_
- **Home §5 (All Tours):** Confirmed as continuous multi-card scroller. _(2026-06-25)_
- **Home §6 (Category Blocks):** 3 stacked blocks — Group Trip, Adventure, Trek — each with its own horizontal package slider. _(2026-06-25)_
- **Home §7 (Plan With Us):** Family/School/Corporate shown as a 3-card feature band linking to blog-style enquiry pages (layout our call). _(2026-06-25)_
- **Categories:** Final taxonomy = Group Trip, Adventure, Trek (package-based) + Family, School, Corporate (blog-based). _(2026-06-25)_
