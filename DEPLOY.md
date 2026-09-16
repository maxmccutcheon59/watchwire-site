# Deploy Watchwire marketing site

Two paths. **Primary (zero keys):** GitHub Pages static export. **Secondary:** Vercel + Stripe test keys for live Checkout.

---

## Primary — GitHub Pages (no Stripe / Vercel keys)

Static export via `npm run build:pages`. The `/api/checkout` Route Handler is stashed for that build only (API routes cannot ship in `output: 'export'`). Pricing still renders; paid CTAs degrade to mailto. Stripe code stays in the repo for the Vercel path.

### One-time: enable Pages (Max)

1. Open **https://github.com/maxmccutcheon59/watchwire-site/settings/pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Save. (No secrets required.)

After the next successful `Deploy GitHub Pages` workflow on `main`, the site is at:

**https://maxmccutcheon59.github.io/watchwire-site/**

### How the workflow works

- File: `.github/workflows/pages.yml`
- Triggers: push to `main`, or **workflow_dispatch**
- Runs `npm run build:pages` with `BASE_PATH=/watchwire-site`
- Uploads the `out/` directory via `actions/upload-pages-artifact` + `actions/deploy-pages`

### Local static verify

```bash
npm ci
npm run build:pages
# Static files in out/ — open out/index.html via any static server if desired
npx serve out   # optional; note basePath /watchwire-site
```

Checkout buttons on this build say **Email about Builder/Team** and point to `MaxMcCutcheon1@outlook.com` — intentional.

---

## Secondary — Vercel + Stripe (Checkout)

Use when Max wants live founding Checkout. Needs Stripe **test** keys (and later live keys only when books/tax are ready). Do not commit secrets.

### 1. Import on Vercel

1. Sign in to [Vercel](https://vercel.com) (GitHub).
2. **Add New… → Project** → import `maxmccutcheon59/watchwire-site`.
3. Framework preset: **Next.js**. Root directory: repo root. Build: `npm run build` (default — **not** `build:pages`).
4. Do **not** set `STATIC_EXPORT` / `GITHUB_PAGES` on Vercel (leave unset so the API route ships).
5. Set env in the Vercel project UI only.

### 2. Environment variables

Copy from `.env.example`. Set in Vercel → Project → Settings → Environment Variables:

| Variable | Required | Notes |
|----------|----------|--------|
| `STRIPE_SECRET_KEY` | Yes for Checkout | `sk_test_...` for test mode |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Optional | `pk_test_...`; Session redirect works with secret alone |
| `STRIPE_PRICE_BUILDER` | Optional | If unset, API uses `price_data` at **$12/mo** |
| `STRIPE_PRICE_TEAM` | Optional | If unset, API uses `price_data` at **$39/seat/mo** |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL, e.g. `https://watchwire.vercel.app` (no trailing slash) |

Leave `BASE_PATH` / `NEXT_PUBLIC_BASE_PATH` empty on Vercel (site at domain root).

Redeploy after changing env vars.

### 3. Stripe test checkout

1. Stripe Dashboard → **Test mode** on.
2. Use test keys in Vercel / `.env.local`.
3. On `/pricing`, click **Start Builder** or **Start Team**.
4. Card: `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP.
5. Success → `/success`; cancel → `/cancel`.
6. Without `STRIPE_SECRET_KEY`, `/api/checkout` returns **503** (site still builds and browses).

### 4. After deploy

- Confirm `https://YOUR_DOMAIN/robots.txt` and `/sitemap.xml`.
- Confirm OG/Twitter meta on the homepage.
- Keep copy honest: pre-revenue, no fake customers. Builder/Team = founding hypotheses.

---

## Local verify before push

```bash
cp .env.example .env.local   # optional; only needed for live Checkout
npm install
npm run build                # Vercel-style (API included)
npm run build:pages          # Pages-style static export
```

Both builds must succeed.
