// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      // components: ...
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
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
