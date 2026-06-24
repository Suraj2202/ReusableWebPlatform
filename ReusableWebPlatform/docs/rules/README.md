# Hidden Naqsha — Project Rules

> These are the binding rules for building and maintaining the Hidden Naqsha website. Anyone (human or AI assistant) working on this repo must follow them. The planning/architecture lives in [Hidden-Naqsha-Plan.md](../Hidden-Naqsha-Plan.md); this folder holds the **how-we-do-things** rules.

## Rule Index

| #   | Rule Doc                                         | Covers                                                                      |
| --- | ------------------------------------------------ | --------------------------------------------------------------------------- |
| 01  | [01-security.md](01-security.md)                 | Secrets, `.env`, what is/ isn't public, dependencies, CSP/headers           |
| 02  | [02-images.md](02-images.md)                     | Image folder structure, naming, sizes, **image registry**, placeholder rule |
| 03  | [03-video.md](03-video.md)                       | Video folder structure, formats, poster, size budget, banner rules          |
| 04  | [04-social-sync.md](04-social-sync.md)           | Google Reviews + Instagram fetch-once-and-commit workflow                   |
| 05  | [05-coding-practices.md](05-coding-practices.md) | Astro/TS/Tailwind conventions, structure, data-driven content               |
| 06  | [06-color-typography.md](06-color-typography.md) | Color tokens, fonts, single-source theming                                  |
| 07  | [07-animation.md](07-animation.md)               | Lightweight, all-device animation rules + timing balance                    |
| 08  | [08-navigation.md](08-navigation.md)             | Header/nav patterns across phone/tablet/desktop                             |
| 09  | [09-accessibility.md](09-accessibility.md)       | WCAG AA, keyboard, touch, reduced-motion                                    |
| 10  | [10-performance-seo.md](10-performance-seo.md)   | Perf budget, Lighthouse, meta/SEO, sitemap                                  |
| 11  | [11-content-data.md](11-content-data.md)         | Content collections, trip/package data shape                                |
| 12  | [12-git-deploy.md](12-git-deploy.md)             | Branching, commits, Cloudflare deploy                                       |
| 13  | [13-user-uploads.md](13-user-uploads.md)         | Owner **uploads inbox** (`uploads/`) + dev processing flow                  |

## Golden Rules (the short version)

1. **Free & static only.** No paid services, no server, no runtime API calls. (Plan C1–C2)
2. **No secrets in the repo or browser.** Keys live only in local `.env`. (§01)
3. **Never block on a missing asset.** Reuse an existing file by copying it to the correct path/name, mark it `PLACEHOLDER` in the registry, and ask the user for the real one. (§02/§03)
4. **One source of truth.** Theme tokens, WhatsApp number, and social data each live in exactly one file. (§06, plan §9.3)
5. **Mobile-first, all devices.** Every change must look elegant on Android, iOS, and desktop. (Plan §10A)
6. **Lightweight motion.** Smooth but never janky, never blocking — balanced timing. (§07)
7. **Data-driven.** Trips/packages are content, not hardcoded HTML. (§11)
8. **Owner uploads via `uploads/` only.** Non-devs drop named files there; devs move them into `public/assets/`. (§13)
