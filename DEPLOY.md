# Deploy Watchwire site (Vercel + Stripe test mode)

Zero-spend path: Vercel hobby + Stripe **test** keys. Do not put live charges live until Max is ready for books/tax.

## 1. Import on Vercel

1. Sign in to [Vercel](https://vercel.com) (GitHub).
2. **Add New… → Project** → import `maxmccutcheon59/watchwire-site`.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: repo root. Build: `npm run build`. Output: default.
5. Do **not** commit secrets; set env in the Vercel project UI only.

## 2. Environment variables

Copy from `.env.example`. Set in Vercel → Project → Settings → Environment Variables (Production + Preview as needed):

| Variable | Required | Notes |
|----------|----------|--------|
| `STRIPE_SECRET_KEY` | Yes for Checkout | `sk_test_...` for test mode |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Optional | `pk_test_...`; Checkout Session redirect works with secret alone |
| `STRIPE_PRICE_BUILDER` | Optional | If unset, API uses `price_data` at **$12/mo** |
| `STRIPE_PRICE_TEAM` | Optional | If unset, API uses `price_data` at **$39/seat/mo** |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL, e.g. `https://watchwire.vercel.app` (no trailing slash) |

Redeploy after changing env vars.

## 3. Stripe test checkout

1. Stripe Dashboard → **Test mode** on.
2. Use test keys in Vercel / `.env.local`.
3. On `/pricing`, click **Start Builder** or **Start Team**.
4. Card: `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP.
5. Success → `/success`; cancel → `/cancel`.
6. Without `STRIPE_SECRET_KEY`, `/api/checkout` returns **503** (site still builds and browses).

## 4. After deploy

- Confirm `https://YOUR_DOMAIN/robots.txt` and `/sitemap.xml`.
- Confirm OG/Twitter meta on the homepage (view-source or a card debugger).
- Keep copy honest: pre-revenue, no fake customers.

## Local verify before push

```bash
cp .env.example .env.local   # optional for Checkout
npm install
npm run build
```
