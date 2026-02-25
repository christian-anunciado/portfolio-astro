import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.christiananunciado.com",
  integrations: [tailwind(), react(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],
});
