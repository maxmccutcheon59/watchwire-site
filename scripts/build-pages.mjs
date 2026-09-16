#!/usr/bin/env node
/**
 * Static / GitHub Pages build.
 * Temporarily stashes src/app/api (Route Handlers are incompatible with
 * output: 'export') so the Stripe Checkout API stays in the repo for Vercel.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "src", "app", "api");
const stashDir = path.join(root, "src", "app", "_api_stash_pages");

function restore() {
  if (fs.existsSync(stashDir)) {
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true, force: true });
    }
    fs.renameSync(stashDir, apiDir);
    console.log("[build-pages] Restored src/app/api");
  }
}

process.on("exit", restore);
process.on("SIGINT", () => {
  restore();
  process.exit(130);
});
process.on("uncaughtException", (err) => {
  console.error(err);
  restore();
  process.exit(1);
});

if (fs.existsSync(apiDir)) {
  if (fs.existsSync(stashDir)) {
    fs.rmSync(stashDir, { recursive: true, force: true });
  }
  fs.renameSync(apiDir, stashDir);
  console.log("[build-pages] Stashed src/app/api for static export");
}

const env = {
  ...process.env,
  STATIC_EXPORT: "true",
  GITHUB_PAGES: "true",
  NEXT_PUBLIC_STATIC_EXPORT: "true",
  BASE_PATH: process.env.BASE_PATH || "/watchwire-site",
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "/watchwire-site",
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://maxmccutcheon59.github.io/watchwire-site",
};

const result = spawnSync("npx", ["next", "build"], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

restore();
process.exit(result.status ?? 1);
