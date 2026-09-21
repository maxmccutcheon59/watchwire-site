/** Shared site config — Pages vs Vercel-aware. */

const rawBase =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  process.env.BASE_PATH ??
  "";

/** e.g. "/watchwire-site" on GitHub Pages; "" on Vercel / local. */
export const basePath = rawBase.replace(/\/$/, "");

export const isStaticExport =
  process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" ||
  process.env.STATIC_EXPORT === "true" ||
  process.env.GITHUB_PAGES === "true";

const pagesDefault =
  "https://maxmccutcheon59.github.io/watchwire-site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (isStaticExport ? pagesDefault : "http://localhost:3000")
).replace(/\/$/, "");

export const contactEmail = "MaxMcCutcheon1@outlook.com";

export const cliRepo = "https://github.com/maxmccutcheon59/watchwire";
export const cliRelease =
  "https://github.com/maxmccutcheon59/watchwire/releases/tag/v0.5.0";
export const productVersion = "v0.5.0";
export const testCount = 80;
