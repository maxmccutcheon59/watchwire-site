# Deploy Watchwire marketing site

Two paths. **Primary:** GitHub Pages static export. **Optional:** Vercel. Neither needs secrets — the site has no checkout or API routes.

---

## Primary — GitHub Pages

Static export via `npm run build:pages` (`output: 'export'`).

### One-time: enable Pages (Max)

1. Open **https://github.com/maxmccutcheon59/watchwire-site/settings/pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Save. (No secrets required.)

After the next successful `Deploy GitHub Pages` workflow on `main`, the site is at:

**https://maxmccutcheon59.github.io/watchwire-site/**

### How the workflow works

- Canonical copy in-repo: `docs/pages.yml` (also installed as `.github/workflows/pages.yml` on this branch)
- If your local CLI token lacks the `workflow` scope, push the YAML via the GitHub UI or a PAT that includes **workflow**, then enable Pages as below
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

---

## Optional — Vercel

1. Sign in to [Vercel](https://vercel.com) and import `maxmccutcheon59/watchwire-site`.
2. Framework preset **Next.js**, build command `npm run build` (not `build:pages`).
3. Leave `STATIC_EXPORT`, `GITHUB_PAGES`, and `BASE_PATH` unset so the site serves at the domain root.
4. Optionally set `NEXT_PUBLIC_SITE_URL` (no trailing slash) for canonical URLs, robots, and sitemap.

---

## Local verify before push

```bash
npm install
npm run build                # Vercel-style
npm run build:pages          # Pages-style static export
```

Both builds must succeed.

## Security headers (GitHub Pages)

GitHub Pages sets **HSTS** at the edge. Custom headers (CSP, X-Frame-Options, etc.) are **not** configurable for user Pages without a reverse proxy. Documented limitation.

