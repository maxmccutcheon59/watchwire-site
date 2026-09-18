# Watchwire site

Marketing and documentation site for [Watchwire](https://github.com/maxmccutcheon59/watchwire), a local-first defensive CLI.

Built with Next.js (App Router), TypeScript, and Tailwind. Optional Stripe Checkout for experimenting with paid tiers; the OSS CLI stays free.

- **CLI:** https://github.com/maxmccutcheon59/watchwire
- **Latest release:** https://github.com/maxmccutcheon59/watchwire/releases/tag/v0.4.0
- **Public deploy:** https://maxmccutcheon59.github.io/watchwire-site/

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Stripe Checkout (optional; Vercel only)
- GitHub Pages static export (primary public deploy)

## Local development

```bash
cp .env.example .env.local   # optional; needed only for Checkout
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build (includes `/api/checkout`) |
| `npm run build:pages` | Static export for GitHub Pages |
| `npm run lint` | ESLint |

## Deploy

See [DEPLOY.md](./DEPLOY.md).

1. **GitHub Pages** — Settings → Pages → Source: GitHub Actions
2. **Vercel** — add Stripe test keys if Checkout should work

## Stripe (optional, test mode)

Set in `.env.local` / Vercel when using Checkout:

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (optional)
- `STRIPE_PRICE_BUILDER` / `STRIPE_PRICE_TEAM` (optional)

On GitHub Pages, Checkout falls back to mailto (no API route in the static export).

## License

MIT. Watchwire is the name of the open-source CLI project.
