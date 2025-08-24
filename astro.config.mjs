import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://github.com/MaykeJaspers/tutorialAstro",
  integrations: [preact()]
});