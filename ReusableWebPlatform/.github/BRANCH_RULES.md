# Branch Protection Rules — Apply in GitHub Settings
# Repository → Settings → Branches → Add Branch Protection Rule

# =============================================================
# BRANCHING STRATEGY
# =============================================================
#
# main          — Production. Always deployable. Never push directly.
# develop       — Integration branch. All features merge here first.
# feature/*     — New features (e.g., feature/whatsapp-form)
# fix/*         — Bug fixes (e.g., fix/header-mobile-menu)
# client/*      — Client-specific forks (e.g., client/wanderlust)
# release/*     — Release prep (e.g., release/v1.1.0)
# hotfix/*      — Emergency production fixes
#
# =============================================================
# FLOW
# =============================================================
#
# feature/xyz → PR → develop → PR → main (auto-deploys to production)
#
# Client customization:
#   Fork repo OR create client/* branch
#   Client branches receive upstream template updates via merge
#
# =============================================================
# BRANCH PROTECTION — main
# =============================================================
#
# ✅ Require pull request before merging
# ✅ Require at least 1 approval
# ✅ Dismiss stale reviews when new commits are pushed
# ✅ Require status checks to pass (build, lint, lighthouse)
# ✅ Require branches to be up to date before merging
# ✅ Require conversation resolution before merging
# ✅ Do not allow bypassing the above settings
# ❌ Do not allow force pushes
# ❌ Do not allow deletions
#
# =============================================================
# BRANCH PROTECTION — develop
# =============================================================
#
# ✅ Require pull request before merging
# ✅ Require status checks to pass (build, lint)
# ❌ Approvals optional (developer self-merge OK)
# ❌ Do not allow force pushes
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
