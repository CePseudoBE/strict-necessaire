// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  // Adresse GitHub Pages. Avec un domaine personnalisé : le mettre dans site et supprimer base.
  site: "https://cepseudobe.github.io",
  base: "/strict-necessaire",
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
