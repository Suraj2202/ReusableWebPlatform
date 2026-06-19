# Contributing Guide

## Rules — Non-Negotiable

1. **Never push directly to `main`** — always use a PR
2. **Every commit must follow the format** — `type(scope): description` (enforced by commitlint)
3. **Every PR must pass CI** — build + lint checks must be green before merge
4. **No hardcoded content in components** — all text comes from `site.yaml` or content collections
5. **No inline styles** — use Tailwind classes or CSS custom properties
6. **All images must have alt text** — accessibility is mandatory
7. **Don't modify `content/` and `src/` in the same PR** — separate content changes from code changes

---

## Branching Strategy

```
main            ← Production (auto-deploys)
  └── develop   ← Integration branch
       ├── feature/xyz   ← New features
       ├── fix/xyz       ← Bug fixes
       └── client/xyz    ← Client-specific customization
```

### When to use which branch

| Situation | Branch from | Branch name | Merge into |
|---|---|---|---|
| New feature | `develop` | `feature/gallery-zoom` | `develop` |
| Bug fix | `develop` | `fix/mobile-menu` | `develop` |
| Emergency fix | `main` | `hotfix/broken-hero` | `main` + `develop` |
| Client site | `main` | `client/wanderlust` | Never (stays separate) |
| Release prep | `develop` | `release/v1.1.0` | `main` + `develop` |

---

## Development Workflow

### 1. Start work

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature
```

### 2. Make changes

- Edit code in `src/` for template changes
- Edit `content/site.yaml` for content changes
- Add images to `public/assets/`

### 3. Commit

```bash
git add .
git commit -m "feat(hero): add video background support"
```

Commit will be **automatically validated** by Husky:
- **pre-commit**: Runs Prettier on staged files
- **commit-msg**: Validates commit message format

### 4. Push & PR

```bash
git push origin feature/your-feature
```

Open a PR to `develop`. CI will run automatically:
- Build check
- Lint check
- (On PR to `main`) Lighthouse audit

### 5. Review & Merge

- At least 1 approval required for `main`
- All CI checks must pass
- Squash merge preferred (clean history)

---

## Coding Standards

### File Naming

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `HeroSection.astro` |
| Pages | lowercase | `about.astro` |
| Utilities | camelCase | `seoHelpers.ts` |
| Config files | kebab-case | `site.yaml` |
| Images | kebab-case-WxH | `hero-banner-1920x1080.jpg` |

### Component Rules

- One component per file
- Props interface defined in frontmatter
- All text from config — never hardcode
- Use semantic HTML (`section`, `nav`, `article`, `main`)
- Accessibility: proper headings, alt text, ARIA labels, focus styles
- Mobile-first: smallest screen first, scale up with `md:`, `lg:`

### CSS Rules

- Use Tailwind utility classes first
- Custom CSS only in `src/styles/global.css`
- Use CSS custom properties for theme values
- Use `@layer base` for resets, `@layer components` for reusable classes
- Never use `!important`

### Image Rules

| Type | Max Size | Format | Dimensions |
|---|---|---|---|
| Hero | 300KB | JPG/WebP | 1920×1080 |
| Service | 150KB | JPG/WebP | 800×600 |
| Gallery | 200KB | JPG/WebP | 1200×800 |
| Avatar | 50KB | JPG/WebP | 200×200 |
| Logo | 50KB | SVG/PNG | 200×60 |
| OG Image | 200KB | JPG | 1200×630 |

---

## Adding a New Section

1. Create component in `src/components/NewSection.astro`
2. Add configuration to `content/site.yaml`
3. Add visibility toggle in `sections:` block
4. Import and conditionally render in `src/pages/index.astro`
5. Add CMS fields in `public/admin/config.yml`
6. Test build: `npm run build`

---

## Client Onboarding (New Site)

1. Fork/clone this repo
2. Edit `content/site.yaml` with client details
3. Replace images in `public/assets/`
4. Update `public/admin/config.yml` → repo name
5. Connect to Cloudflare Pages
6. Set custom domain
7. Share CMS access

---

## CI/CD Pipelines

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | Push to main/develop, PRs | Build + lint |
| `deploy.yml` | Push to main | Deploy to Cloudflare Pages |
| `lighthouse.yml` | PR to main | Performance audit + PR comment |
| `security.yml` | Weekly + PR (package changes) | Dependency vulnerability scan |

---

## Updating the Tech Stack

When adding new tools or updating patterns:

1. Update this `CONTRIBUTING.md`
2. Update `.github/BRANCH_RULES.md` if branching changes
3. Update `commitlint.config.mjs` if new commit types needed
4. Update CI workflows if new checks needed
5. Commit as `chore: update contributing guidelines for XYZ`
