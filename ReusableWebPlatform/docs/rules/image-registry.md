# Image Registry

> Single source of truth for **every image the site uses**. One row per logical image.
> `status`: `REAL` = final asset · `PLACEHOLDER` = copied stand-in, needs real asset · `NEEDED` = not yet created.
> Rules in [02-images.md](02-images.md).

## Registry

| Path (under `public/assets/`) | Purpose            | Aspect   | Min width | Status      | Source if placeholder         |
| ----------------------------- | ------------------ | -------- | --------- | ----------- | ----------------------------- |
| `brand/logo.svg`              | Site logo          | SVG      | —         | PLACEHOLDER | generated wordmark (temp)     |
| `brand/og-image.jpg`          | Social share image | 1200×630 | 1200px    | PLACEHOLDER | from `assets/og-image.jpg`    |
| `banner/home-poster.jpg`      | Home video poster  | 16:9     | 1920px    | REAL        | user-provided (1376×768)      |
| `categories/group-trip.jpg`   | Group Trip cover   | 4:3      | 1280px    | PLACEHOLDER | from `services/mountain.jpg`  |
| `categories/adventure.jpg`    | Adventure cover    | 4:3      | 1280px    | PLACEHOLDER | from `services/safari.jpg`    |
| `categories/trek.jpg`         | Trek cover         | 4:3      | 1280px    | PLACEHOLDER | from `services/mountain.jpg`  |
| `categories/family.jpg`       | Family cover       | 4:3      | 1280px    | PLACEHOLDER | from `services/beach.jpg`     |
| `categories/school.jpg`       | School cover       | 4:3      | 1280px    | PLACEHOLDER | from `services/culture.jpg`   |
| `categories/corporate.jpg`    | Corporate cover    | 4:3      | 1280px    | PLACEHOLDER | from `services/city.jpg`      |
| `reviews/avatar-01.jpg`       | Reviewer avatar    | 1:1      | 256px     | PLACEHOLDER | from `testimonials/priya.jpg` |
| `reviews/avatar-02.jpg`       | Reviewer avatar    | 1:1      | 256px     | PLACEHOLDER | from `testimonials/rahul.jpg` |
| `reviews/avatar-03.jpg`       | Reviewer avatar    | 1:1      | 256px     | PLACEHOLDER | from `testimonials/sarah.jpg` |

### Trip covers (4:3, min 1280px) — all PLACEHOLDER until real assets arrive

| Path (under `public/assets/`)                   | Trip                            | Source if placeholder         |
| ----------------------------------------------- | ------------------------------- | ----------------------------- |
| `trips/ladakh-leh-circuit/cover.jpg`            | Ladakh Leh Circuit              | from `services/mountain.jpg`  |
| `trips/ladakh-pangong-nubra/cover.jpg`          | Ladakh Pangong & Nubra          | from `gallery/gallery-01.jpg` |
| `trips/kashmir-valley-escape/cover.jpg`         | Kashmir Valley Escape           | from `gallery/gallery-02.jpg` |
| `trips/kashmir-gulmarg-getaway/cover.jpg`       | Kashmir Gulmarg Getaway         | from `gallery/gallery-03.jpg` |
| `trips/zanskar-srinagar-manali/cover.jpg`       | Zanskar Srinagar–Manali         | from `gallery/gallery-04.jpg` |
| `trips/kargil-zanskar-expedition/cover.jpg`     | Kargil Zanskar Expedition       | from `services/safari.jpg`    |
| `trips/autumn-kashmir-chinar/cover.jpg`         | Autumn in Kashmir — Chinar      | from `gallery/gallery-05.jpg` |
| `trips/meghalaya-living-roots/cover.jpg`        | Meghalaya Living Roots          | from `services/culture.jpg`   |
| `trips/gulmarg-skiing-beginner/cover.jpg`       | Gulmarg Skiing — Beginner       | from `gallery/gallery-06.jpg` |
| `trips/gulmarg-skiing-advanced/cover.jpg`       | Gulmarg Skiing — Advanced       | from `services/mountain.jpg`  |
| `trips/gulmarg-snowboarding-intro/cover.jpg`    | Gulmarg Snowboarding — Intro    | from `gallery/gallery-01.jpg` |
| `trips/gulmarg-snowboarding-freeride/cover.jpg` | Gulmarg Snowboarding — Freeride | from `gallery/gallery-02.jpg` |
| `trips/kashmir-great-lakes/cover.jpg`           | Kashmir Great Lakes             | from `gallery/gallery-03.jpg` |
| `trips/kalapari-lake/cover.jpg`                 | Kalapari Lake                   | from `gallery/gallery-04.jpg` |
| `trips/tarsar-marsar/cover.jpg`                 | Tarsar Marsar                   | from `gallery/gallery-05.jpg` |
| `trips/valley-of-flowers/cover.jpg`             | Valley of Flowers               | from `services/culture.jpg`   |
| `trips/hirpora-wildlife/cover.jpg`              | Hirpora Wildlife                | from `services/safari.jpg`    |
| `trips/kausernag-lake/cover.jpg`                | Kausernag Lake                  | from `gallery/gallery-06.jpg` |
| `trips/taulian-meadow/cover.jpg`                | Taulian Meadow                  | from `services/mountain.jpg`  |

> Add a row whenever a new image path is introduced. Trip images go under `trips/<slug>/` and get their own rows as trips are built.

## Needed from user (request list)

These should be replaced with real AI-generated/final assets before the live demo:

- [ ] Brand logo (`brand/logo.svg`)
- [ ] Home banner **video** + poster (see [03-video.md](03-video.md))
- [ ] 6 category covers (group-trip, adventure, trek, family, school, corporate)
- [ ] Per-trip cover + gallery images (added as each trip is created)
- [ ] Reviewer avatars (or use initials/monogram fallback)
