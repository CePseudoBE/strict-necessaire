import type { APIRoute } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { ui } from "../i18n/ui";

const locales = Object.keys(ui);

export const GET: APIRoute = () => {
  const alternates = locales
    .map(
      (locale) =>
        `<xhtml:link rel="alternate" hreflang="${locale}" href="${getAbsoluteLocaleUrl(locale)}"/>`,
    )
    .join("");
  const urls = locales
    .map(
      (locale) =>
        `<url><loc>${getAbsoluteLocaleUrl(locale)}</loc>${alternates}</url>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
