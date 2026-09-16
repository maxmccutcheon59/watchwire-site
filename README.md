# Watchwire marketing site

For-profit company surface for **Watchwire** — a local-first defensive CLI (`scan` · `proc` · `hygiene`) with **v0.4.0** pre-commit + GitHub Action (optional `run-hygiene`) + SARIF/JSON + `watchwire.toml` + policy packs.

- **CLI repo:** https://github.com/maxmccutcheon59/watchwire  
- **Release:** https://github.com/maxmccutcheon59/watchwire/releases/tag/v0.4.0  
- **This site:** Next.js App Router + TypeScript + Tailwind  
- **Stage:** Pre-revenue · early OSS · founding pricing hypotheses (no fake traction)  
- **Contact:** MaxMcCutcheon1@outlook.com

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Stripe Checkout (Builder + Team) — **Vercel path only**
- GitHub Pages static export — **zero keys** (primary public deploy)

## Local development

```bash
cd watchwire-site
cp .env.example .env.local   # optional; needed only for Checkout
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build (Vercel-style; includes `/api/checkout`) |
| `npm run build:pages` | Static export for GitHub Pages (`out/`; API stashed) |
| `npm start` | Serve production build (non-static) |
| `npm run lint` | ESLint |

## Deploy

See **[DEPLOY.md](./DEPLOY.md)**.

1. **Primary:** GitHub Pages — enable **Settings → Pages → Source: GitHub Actions** once. Site: `https://maxmccutcheon59.github.io/watchwire-site/`
2. **Secondary:** Vercel + Stripe test keys when Checkout should work.

## Stripe (test mode — Vercel / local only)

1. Create a Stripe account and use **test** keys.
2. Set in `.env.local` / Vercel:
   - `STRIPE_SECRET_KEY` — required for `/api/checkout`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — optional
   - `STRIPE_PRICE_BUILDER` / `STRIPE_PRICE_TEAM` — optional; else `price_data` at **$12/mo** and **$39/seat/mo**
3. On GitHub Pages builds, Checkout CTAs degrade to mailto (no API route in static export).

## Pages

| Path | Content |
|------|---------|
| `/` | Landing: hero, problem, commands, Action/pre-commit/policy, trust, pricing, FAQ |
| `/product` | Deep-dive: three commands + Action + pre-commit + SARIF + watchwire.toml + policy packs |
| `/install` | Real install / demo / CI copy-paste from product README |
| `/pricing` | Community $0 · Builder/Team founding hypotheses |
| `/api/checkout` | POST `{ "plan": "builder" \| "team" }` → Stripe Session URL (Vercel only) |
| `/success` · `/cancel` | Checkout return pages |
| `/privacy` · `/terms` | Honest pre-revenue stubs |

## Hard rules (copy)

- No fake customers, logos, ARR, waitlists, or “trusted by”
- Paid features labeled founding / roadmap honestly
- Community $0 forever for OSS core
- Defensive only — no offensive framing
- Local-first / no telemetry claims stay accurate for the CLI

## License

Site source: MIT (same spirit as the CLI). Product name **Watchwire** locked by founder Max McCutcheon.
