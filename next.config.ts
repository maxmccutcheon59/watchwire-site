import type { NextConfig } from "next";

const isStatic =
  process.env.STATIC_EXPORT === "true" ||
  process.env.GITHUB_PAGES === "true";

const basePath = (
  process.env.BASE_PATH ||
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (isStatic ? "/watchwire-site" : "")
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  ...(isStatic
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: isStatic ? "true" : "",
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      (isStatic
        ? "https://maxmccutcheon59.github.io/watchwire-site"
        : process.env.NEXT_PUBLIC_SITE_URL || ""),
  },
};

export default nextConfig;
