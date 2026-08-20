import { defineConfig } from "astro/config";

const base = process.env.BASE_PATH || "/";
const site = process.env.SITE_URL || "https://platinumproducersclub.com";

export default defineConfig({
  output: "static",
  site,
  base,
  trailingSlash: "always",
  build: {
    assets: "_assets",
    format: "directory"
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  },
  vite: {
    build: {
      cssCodeSplit: true,
      sourcemap: false
    }
  }
});

