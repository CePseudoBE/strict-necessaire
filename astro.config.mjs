// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  // Domaine provisoire : à remplacer par le domaine définitif avant la mise en ligne (canonical, hreflang, sitemap, og:url).
  site: "https://strict-necessaire.example",
  build: {
    inlineStylesheets: "always",
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bricolage Grotesque",
      cssVariable: "--font-display",
      weights: [400, 600, 800],
      fallbacks: ["Arial Narrow", "Arial", "sans-serif"],
      options: { experimental: { variableAxis: { opsz: [["12", "96"]] } } },
    },
    {
      provider: fontProviders.google(),
      name: "Instrument Sans",
      cssVariable: "--font-body",
      weights: [400, 500, 600],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "DM Mono",
      cssVariable: "--font-mono",
      weights: [400, 500],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
});
