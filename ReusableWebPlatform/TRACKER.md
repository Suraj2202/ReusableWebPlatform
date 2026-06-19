# Project Tracker — Reusable Web Platform
# Last Updated: 2026-06-20 (Session 2)
# ============================================================

# ============================================================
# PHASE 0: DISCOVERY & ARCHITECTURE
# Status: ✅ COMPLETE
# ============================================================

- [x] PRD / TDD / Architecture document
- [x] Asset specifications (image sizes, naming, AI prompt guide)
- [x] Technology evaluation (Astro vs Angular)
- [x] CMS evaluation (Decap vs Tina vs File-based)
- [x] Hosting evaluation (Cloudflare Pages selected)
- [x] Folder structure design
- [x] Configuration schema design (site.yaml)
- [x] Multi-client architecture (fork & configure)

# ============================================================
# PHASE 1: PROJECT SETUP & TOOLING
# Status: ✅ COMPLETE
# ============================================================

## Repository & Build
- [x] GitHub repo created (Suraj2202/ReusableWebPlatform)
- [x] Astro 5 initialized with TypeScript strict
- [x] Tailwind CSS configured with dynamic theming
- [x] Sharp image optimization configured
- [x] YAML config loader (site.yaml → components)
- [x] Build passes (npm run build)
- [x] .gitignore configured

## Code Quality
- [x] Prettier + prettier-plugin-astro
- [x] EditorConfig
- [x] VS Code workspace settings (Tailwind CSS IntelliSense)

## Commit Guards
- [x] Husky (pre-commit hook)
- [x] lint-staged (auto-format on commit)
- [x] Commitlint (conventional commit enforcement)

## CI/CD Workflows
- [x] ci.yml — build + lint on push/PR
- [x] deploy.yml — Cloudflare Pages deployment on main
- [x] lighthouse.yml — performance audit on PR to main
- [x] security.yml — weekly dependency vulnerability scan

## Documentation & Rules
- [x] CONTRIBUTING.md (coding rules, branching, PR process)
- [x] BRANCH_RULES.md (branching strategy, commit format)
- [x] PR template (.github/PULL_REQUEST_TEMPLATE.md)
- [x] .env.example with setup instructions

## Pending (Manual)
- [ ] Enable branch protection on client/* branches in GitHub Settings

# ============================================================
# PHASE 2: DESIGN SYSTEM & THEME ENGINE
# Status: ✅ COMPLETE
# ============================================================

## Components Built
- [x] Header (responsive + mobile menu + scroll behavior + hide/show on scroll)
- [x] Hero (image/video background + overlay + dual CTA + parallax + entrance animations)
- [x] About (image + description + stats grid + counter animation)
- [x] Services (card grid + icons + hover effects + navigation to tours)
- [x] Gallery (category filters + expand/collapse + stagger animation + scalable grid)
- [x] Testimonials (star ratings + avatar + quote)
- [x] FAQ (accordion + single-open behavior)
- [x] Contact (form + info cards + WhatsApp integration)
- [x] Footer (social icons + quick links + contact info)

## Theme System
- [x] CSS custom properties from site.yaml
- [x] Tailwind config reads YAML colors/fonts dynamically
- [x] Global styles (typography scale, buttons, cards)

## Animation System
- [x] Scroll reveal (IntersectionObserver + data-animate attributes)
- [x] Stagger children animation
- [x] Hero parallax background
- [x] Lazy image blur-up loading
- [x] Counter animation for stats
- [x] Card hover + image zoom effects
- [x] Page transitions (fade in 250ms / fade out 200ms)
- [x] Smooth anchor scroll (custom easeInOutCubic, 800ms)
- [x] Cross-page hash navigation (simultaneous fade + scroll)
- [x] Gallery expand/collapse with staggered item reveal
- [x] Reduced-motion media query support

## Pending
- [ ] Accessibility audit (axe-core / manual keyboard test)
- [ ] Design tokens documentation
- [ ] Dark mode support (optional / future)

# ============================================================
# PHASE 3: CONTENT MANAGEMENT (CMS)
# Status: 🔄 IN PROGRESS (30%)
# ============================================================

- [x] Decap CMS scaffold (public/admin/index.html)
- [x] CMS config (public/admin/config.yml) — all collections
- [x] Site settings editable via CMS
- [x] Services collection (CRUD)
- [x] Testimonials collection (CRUD)
- [x] Gallery collection (CRUD)
- [x] FAQ collection (CRUD)
- [ ] GitHub OAuth App registered
- [ ] CMS tested end-to-end (login → edit → save → rebuild)
- [ ] CMS preview template
- [ ] Editorial workflow (draft/publish states)
- [ ] CMS user guide for clients

# ============================================================
# PHASE 4: PAGE DEVELOPMENT & SEO
# Status: ✅ COMPLETE
# ============================================================

## Pages
- [x] Home (index.astro) — all sections assembled
- [x] 404 page
- [x] About page (standalone)
- [x] Tours / Services page (standalone with detail sections + anchor navigation)
- [x] Gallery page (standalone with 60 test images, expand/collapse)
- [x] Contact page (standalone with WhatsApp integration)
- [x] Privacy Policy page
- [x] Terms of Service page

## SEO
- [x] BaseLayout with full meta tags (title, description, OG, Twitter)
- [x] Structured data (JSON-LD LocalBusiness)
- [x] Sitemap auto-generation
- [x] robots.txt
- [x] Canonical URLs
- [ ] Per-page SEO metadata
- [ ] Breadcrumb structured data
- [ ] Google Search Console verification

## Features
- [x] WhatsApp redirect from contact form (home + standalone page)
- [x] Service card → Tours page anchor navigation (smooth scroll)
- [x] Gallery category filtering with expand/collapse
- [ ] Image optimization pipeline (srcset, WebP)
- [ ] Lazy loading verified on all images

## Assets
- [x] 18 SVG placeholder images (awaiting user's AI-generated JPGs)
- [x] Logo SVG placeholder
- [x] Favicon SVG

# ============================================================
# PHASE 5: DEPLOYMENT & CI/CD
# Status: ⬜ NOT STARTED
# ============================================================

- [ ] Cloudflare account setup
- [ ] Cloudflare Pages project created
- [ ] GitHub secrets configured (CLOUDFLARE_API_TOKEN, ACCOUNT_ID)
- [ ] First production deployment
- [ ] Custom domain connected
- [ ] HTTPS verified
- [ ] Security headers verified (securityheaders.com)
- [ ] Preview deployments working on PRs
- [ ] Rollback procedure tested

# ============================================================
# PHASE 6: CLIENT ONBOARDING
# Status: ⬜ NOT STARTED
# ============================================================

- [ ] Client onboarding checklist
- [ ] Content collection questionnaire
- [ ] CMS user guide (visual, non-technical)
- [ ] Brand asset requirements doc
- [ ] Domain setup guide (client-facing)
- [ ] Onboarding automation script (fork + configure)
- [ ] Client handoff email template
- [ ] Video tutorial: "How to edit your website"

# ============================================================
# PHASE 7: MULTI-CLIENT SCALING
# Status: ⬜ NOT STARTED
# ============================================================

- [ ] Template versioning strategy (semantic versioning)
- [ ] Upstream sync script (auto-create PRs in client repos)
- [ ] Client site registry
- [ ] Health monitoring dashboard
- [ ] Scaling playbook
- [ ] Client offboarding procedure
- [ ] Template changelog

# ============================================================
# BACKLOG — FUTURE FEATURES
# ============================================================

- [ ] Dark mode toggle
- [ ] RTL language support
- [ ] Blog / News section
- [ ] Booking / appointment integration
- [ ] Multi-language (i18n)
- [ ] E-commerce add-on
- [ ] Cloudflare Workers for edge functions
- [ ] Newsletter signup (Mailchimp / Buttondown)
- [ ] Cookie consent banner
- [ ] Web3Forms as backup contact form handler

# ============================================================
# DECISIONS LOG
# ============================================================

# 2026-06-19 | Astro over Angular — purpose-built for static, zero JS, native CMS
# 2026-06-19 | Decap CMS over TinaCMS — 100% free, no vendor lock-in
# 2026-06-19 | Cloudflare Pages over Netlify — best free tier, superior CDN
# 2026-06-20 | Removed lightbox overlay — replaced with clean grid gallery (better mobile UX)
# 2026-06-20 | Custom smooth scroll over native scrollIntoView — controlled duration + easing
# 2026-06-20 | No React — Astro is right choice for content sites (15-30x less JS shipped)
# 2026-06-19 | YAML over JSON for config — human-readable, CMS-friendly
# 2026-06-19 | Fork strategy over monorepo — client isolation, independent deploys
# 2026-06-19 | WhatsApp + Web3Forms for contact — no backend needed, free
# 2026-06-19 | main for template dev, client/* branches for customizations — no develop branch
#              Each client branch = independent deployment. Template updates via git merge main.

# ============================================================
# RULES — HOW TO UPDATE THIS TRACKER
# ============================================================
#
# 1. Update status after EVERY commit/push
# 2. Move items from [ ] to [x] when complete
# 3. Add new items to appropriate phase or BACKLOG
# 4. If a new phase is needed, add it before BACKLOG
# 5. Update "Last Updated" date at the top
# 6. Log all architecture decisions in DECISIONS LOG
# 7. Commit tracker updates as: chore: update project tracker
#
