import type { APIRoute } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", getAbsoluteLocaleUrl("fr"))}\n`,
  );
