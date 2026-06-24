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

> Add a row whenever a new image path is introduced. Trip images go under `trips/<slug>/` and get their own rows as trips are built.

## Needed from user (request list)

These should be replaced with real AI-generated/final assets before the live demo:

- [ ] Brand logo (`brand/logo.svg`)
- [ ] Home banner **video** + poster (see [03-video.md](03-video.md))
- [ ] 6 category covers (group-trip, adventure, trek, family, school, corporate)
- [ ] Per-trip cover + gallery images (added as each trip is created)
- [ ] Reviewer avatars (or use initials/monogram fallback)
