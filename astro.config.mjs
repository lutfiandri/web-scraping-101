// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://web-scraping-101.lutfiandri.my.id",
  integrations: [
    starlight({
      title: "Web Scraping 101",
      // components: ...
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lutfiandri/web-scraping-101",
        },
        {
          icon: "rocket",
          label: "Lutfi Andriyanto Personal Website",
          href: "https://www.lutfiandri.my.id",
        },
      ],
      sidebar: [
        {
          label: "A. Konsep Dasar",
          autogenerate: { directory: "a-basic-concept" },
        },
        {
          label: "B. Dasar Web Development",
          autogenerate: { directory: "b-basic-webdev" },
        },
      ],
    }),
  ],

  adapter: cloudflare({
    imageService: "compile",
  }),
});
