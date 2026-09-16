import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/product", "/install", "/pricing", "/privacy", "/terms"];
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/product" || path === "/install" || path === "/pricing"
          ? 0.8
          : 0.4,
  }));
}
