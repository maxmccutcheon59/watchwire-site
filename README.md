# Watchwire marketing site

For-profit company surface for **Watchwire** — a local-first defensive CLI (`scan` · `proc` · `hygiene`).

- **CLI repo:** https://github.com/maxmccutcheon59/watchwire  
- **This site:** Next.js App Router + TypeScript + Tailwind + Stripe Checkout  
- **Stage:** Pre-revenue · early OSS · founding pricing hypotheses (no fake traction)

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Stripe Checkout (Builder + Team subscriptions)

## Local development

```bash
cd watchwire-site
cp .env.example .env.local
# Fill STRIPE_SECRET_KEY (sk_test_...) at minimum for Checkout
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Stripe (test mode)

1. Create a Stripe account and use **test** keys.
2. Set in `.env.local`:
   - `STRIPE_SECRET_KEY` — required for `/api/checkout`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — optional for future Elements; Checkout Session redirect works with secret key alone
   - `STRIPE_PRICE_BUILDER` / `STRIPE_PRICE_TEAM` — optional Price IDs; if omitted, the API creates `price_data` at **$12/mo** and **$39/seat/mo**
3. Click **Start Builder** or **Start Team** on `/pricing`.
4. Use Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC.
5. Success → `/success`; cancel → `/cancel`.

Without `STRIPE_SECRET_KEY`, Checkout returns **503** with a clear error (site still builds and browses).

## Deploy (Vercel)

1. Import `maxmccutcheon59/watchwire-site` in Vercel.
2. Add env vars (production or test keys as appropriate):
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_PRICE_BUILDER` (optional)
   - `STRIPE_PRICE_TEAM` (optional)
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://watchwire.vercel.app`)
3. Deploy. Framework preset: Next.js.

## Pages

| Path | Content |
|------|---------|
| `/` | Landing: hero, problem, commands, trust, how-it-works, pricing, FAQ |
| `/pricing` | Community / Builder / Team |
| `/api/checkout` | POST `{ "plan": "builder" \| "team" }` → Stripe Session URL |
| `/success` · `/cancel` | Checkout return pages |
| `/privacy` · `/terms` | Honest pre-revenue stubs |

## Hard rules (copy)

- No fake customers, logos, ARR, waitlists, or “trusted by”
- Paid features labeled founding / roadmap honestly
- Defensive only — no offensive framing

## License

Site source: MIT (same spirit as the CLI). Product name **Watchwire** locked by founder Max McCutcheon.
