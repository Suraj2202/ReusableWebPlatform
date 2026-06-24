# 12 — Git Workflow & Deployment

> Keeps `main` shippable and the demo deploys predictable.

## 1. Branches

- `main` — production branch (Cloudflare **production** deploy). Always buildable.
- `Hidden_Naqsha` — active development branch (Cloudflare **preview** deploys).
- Feature work branches off `Hidden_Naqsha` when useful; merge back via small commits/PRs.

## 2. Commits

- **Conventional Commits** (commitlint enforced): `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`.
- Small, focused, one logical change each. Clear messages.
- Never bypass hooks (`--no-verify`). `husky` + `lint-staged` format and check staged files.

## 3. Quality gate before push

```bash
npm run validate     # lint + build must pass
npm run check        # astro type-check (no errors)
```

- No `.env`/secret staged (see [01-security.md](01-security.md)).
- No broken/404 asset references.

## 4. Deployment (Cloudflare Pages)

- Build command: `npm run build`; output: `dist/`.
- Push to `Hidden_Naqsha` → preview URL (use this to show the user).
- Merge to `main` → production deploy.
- `public/_headers` and `public/_redirects` are deployed as-is — update deliberately.

## 5. Reversible-first

- Local edits, branches, and preview deploys are free to iterate on.
- For irreversible/shared actions (force-push, history rewrite, deleting remote branches, production changes) — confirm first.

## 6. Data refresh commits

- Social snapshot refresh = its own `chore: refresh social snapshot` commit (see [04-social-sync.md](04-social-sync.md)).
