# Watchwire site

Marketing and documentation site for [Watchwire](https://github.com/maxmccutcheon59/watchwire), a free, local-first defensive CLI (MIT).

Built with Next.js (App Router), TypeScript, and Tailwind. The site sells nothing: no checkout, no accounts, no tracking of its own.

- **CLI:** https://github.com/maxmccutcheon59/watchwire
- **Latest release:** https://github.com/maxmccutcheon59/watchwire/releases/tag/v0.5.0
- **Public deploy:** https://maxmccutcheon59.github.io/watchwire-site/

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- GitHub Pages static export (public deploy)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run build:pages` | Static export for GitHub Pages |
| `npm run lint` | ESLint |

## Deploy

See [DEPLOY.md](./DEPLOY.md). GitHub Pages deploys automatically on push to `main`.

## License

MIT. Watchwire is the name of the open-source CLI project.
