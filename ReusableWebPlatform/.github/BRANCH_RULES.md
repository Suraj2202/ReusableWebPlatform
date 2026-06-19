# Branch Protection Rules — Apply in GitHub Settings
# Repository → Settings → Branches → Add Branch Protection Rule

# =============================================================
# BRANCHING STRATEGY
# =============================================================
#
# main          — Template development. All template work happens here.
# client/*      — Client-specific customizations (e.g., client/wanderlust)
# feature/*     — Experimental features before merging to main
# fix/*         — Bug fixes
# hotfix/*      — Emergency fixes on client branches
#
# =============================================================
# FLOW
# =============================================================
#
# Template Development:
#   Work directly on main → push → CI validates → auto-deploys template demo
#
# Client Customization:
#   git checkout -b client/clientname   (branch from main)
#   Make client-specific changes (extra pages, animations, themes, etc.)
#   Each client/* branch gets its own Cloudflare Pages deployment
#
# Syncing template updates to client:
#   git checkout client/clientname
#   git merge main                      (pull latest template improvements)
#   Resolve any conflicts in client-specific files
#   git push
#
# Promoting client feature to template:
#   If a client feature is useful for all, cherry-pick to main
#   git checkout main
#   git cherry-pick <commit-hash>
#
# =============================================================
# BRANCH PROTECTION — client/* (recommended)
# =============================================================
#
# ✅ Require status checks to pass (build, lint)
# ❌ Approvals optional (developer self-merge OK)
# ❌ Do not allow force pushes
# ❌ Do not allow deletions
#
# =============================================================
# COMMIT MESSAGE FORMAT (Enforced by commitlint)
# =============================================================
#
# type(scope): description
#
# Types:
#   feat     — New feature
#   fix      — Bug fix
#   docs     — Documentation only
#   style    — Formatting, no code change
#   refactor — Code restructure, no behavior change
#   perf     — Performance improvement
#   test     — Adding/updating tests
#   chore    — Build, tooling, dependencies
#   ci       — CI/CD pipeline changes
#   content  — Content/CMS updates
#
# Scope (optional): header, hero, gallery, cms, ci, config, seo
#
# Examples:
#   feat(gallery): add lightbox zoom gesture support
#   fix(header): mobile menu not closing on link click
#   content: update testimonials for Q1
#   chore: upgrade astro to v5.1
#   ci: add lighthouse performance budget
#
