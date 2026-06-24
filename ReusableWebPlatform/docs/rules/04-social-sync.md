# 04 — Social Sync Rules (Google Reviews + Instagram)

> Model: **fetch once, commit, push.** The live site never calls an API. A developer refreshes the data locally and commits the result.

## 1. Why this model

- Live Google Places / Instagram APIs need keys + billing/app-review → conflicts with "free, no legal/cost".
- A static JSON snapshot is free, fast, and exposes **no key** to the browser.

## 2. Files involved

| File                       | Committed?    | Role                                                            |
| -------------------------- | ------------- | --------------------------------------------------------------- |
| `.env` (local only)        | ❌ gitignored | Holds `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `INSTAGRAM_*` |
| `.env.example`             | ✅            | Documents the variable **names** (no values)                    |
| `scripts/sync-social.mjs`  | ✅            | The sync script (run manually by a dev)                         |
| `content/data/social.json` | ✅            | The committed snapshot the site reads                           |

## 3. `social.json` shape (contract)

```json
{
  "updatedAt": "2026-06-25",
  "google": {
    "rating": 4.9,
    "reviewCount": 212,
    "topReviews": [
      {
        "author": "Name",
        "avatar": "reviews/name.jpg",
        "rating": 5,
        "text": "…",
        "date": "2026-05-01"
      }
    ]
  },
  "instagram": {
    "handle": "hidden.naqsha",
    "followers": 10500,
    "profileUrl": "https://instagram.com/hidden.naqsha"
  }
}
```

- Components read **only** from this file. If a field is missing, render a graceful fallback (e.g. hide the stat) — never crash.

## 4. How to run the sync (developer workflow)

```bash
# 1. One-time: copy the template and fill in your local keys
cp .env.example .env
#    edit .env →  GOOGLE_PLACES_API_KEY=...  GOOGLE_PLACE_ID=...

# 2. Run the sync (reads .env, writes content/data/social.json)
npm run sync:social

# 3. Review the diff, then commit & push
git add content/data/social.json
git commit -m "chore: refresh social snapshot"
git push
```

Cloudflare rebuilds on push → the live numbers update. No key is ever deployed.

## 5. Hard rules

- **Never** commit `.env` or any key. The script must fail clearly if a required env var is missing.
- **Never** call these APIs from client/runtime code. Sync is build/dev-time only.
- If a dev has no API key, the site still builds using the **last committed** `social.json` (or fallbacks). Missing data must never break the build.
- Keep `updatedAt` so we know how stale the snapshot is.
- For the current demo, `social.json` may be **hand-authored** with realistic placeholder numbers until keys are available.

## 6. Instagram note

- No reliably-free official follower API. Options, in order of preference:
  1. Hand-maintained `followers` number in `social.json` (simplest, free).
  2. Official Graph API token via the sync script (if the user later provides one).
- Optionally embed a few posts using Instagram's free public embed snippet — but that loads Instagram's script (update CSP per [01-security.md](01-security.md)) and adds weight; only if the user wants it.
