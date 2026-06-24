# Copilot Instructions — Hidden Naqsha

> Auto-loaded on every request. This is the **binding contract**. It is a thin pointer to the full docs — do not duplicate them here.
> Project lives in `ReusableWebPlatform/`. Active branch: `Hidden_Naqsha`.

## Before you code (every time)

1. Read **`ReusableWebPlatform/TRACKER.md` → 🎯 Current Focus**. Work only that one step.
2. For the area you touch, follow the matching rule doc in **`ReusableWebPlatform/docs/rules/`** (index: `docs/rules/README.md`).
3. Architecture/decisions: **`ReusableWebPlatform/docs/Hidden-Naqsha-Plan.md`**.

## Workflow per step (Plan → Build → Review → Commit)

1. **Mini-plan first** — state files to touch + approach (~5 lines), wait for "go".
2. **Build one slice** — end in a working preview.
3. **Self-review** against the Definition of Done below + the step's rule docs.
4. **Commit** only on user OK (conventional commit), then tick the step in `TRACKER.md` and move the Current Focus pointer.

## Definition of Done (all must hold before ticking a step)

1. `npm run build` passes clean (run inside `ReusableWebPlatform/`).
2. Responsive verified at 375 / 768 / 1280px.
3. Complies with the relevant `docs/rules/` doc(s).
4. Any placeholder asset logged in `docs/rules/image-registry.md`.
5. Committed; preview deploy green.

## Golden Rules (never break)

1. **Free & static only** — no paid APIs, no server, no runtime API calls.
2. **No secrets in repo or browser** — keys live only in local `.env` (gitignored).
3. **Never block on a missing asset** — copy an existing file to the correct path/name, mark it `PLACEHOLDER` in the registry, ask for the real one.
4. **One source of truth** — theme tokens, WhatsApp number, and social data each live in exactly one file.
5. **Mobile-first, all devices** — must look elegant on Android, iOS, desktop.
6. **Lightweight motion** — smooth, never janky, never blocking; respect `prefers-reduced-motion`. Never set `body`/sections to `opacity:0` waiting for JS.
7. **Data-driven** — trips/packages are content (Astro collections), not hardcoded HTML.
8. **Owner uploads via `uploads/` only** — devs move them into `public/assets/`.

## Scope Guard (anything failing these → Parking Lot, not the build)

No paid/non-free services · no CMS/admin this phase · no heavy/device-incompatible animation · no hardcoded content · no scattered config · no scope creep beyond the demo site.

## Anti-distraction

- Do exactly the Current Focus step — nothing more.
- Capture every tangent/idea in `TRACKER.md` → 🅿️ Parking Lot instead of doing it.
- New decisions go in `docs/Hidden-Naqsha-Plan.md` §13, not scattered.

## Conventions

- Astro 5 + Tailwind + TypeScript (strict). Vanilla JS/CSS for interactivity — no heavy framework islands.
- Theme tokens centralized in `content/site.config.yaml` → `tailwind.config.mjs`. Change theme in one place.
- Currency ₹ INR. English only (demo). WhatsApp = placeholder number in central config.
- Run terminal commands from inside `ReusableWebPlatform/` (workspace root is the parent).
- Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`).
