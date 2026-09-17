// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Hosting: GitHub Pages unter https://joshuabinswanger.github.io/simone-beratung/
 * Für eine eigene Domain: `site` auf die Domain setzen und `base` entfernen
 * (siehe Docs/HANDOVER.md).
 */
const SITE = process.env.SITE_URL ?? "https://joshuabinswanger.github.io";
const BASE = process.env.SITE_BASE ?? "/simone-beratung";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [sitemap()],
  build: {
    assets: "assets",
  },
});
