import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-base.mkz.dev",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    react(),
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
});
