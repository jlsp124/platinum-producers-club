import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
  const isProduction = import.meta.env.PUBLIC_SITE_MODE === "production";
  const body = isProduction
    ? "User-agent: *\nAllow: /\nSitemap: https://platinumproducersclub.com/sitemap.xml\n"
    : "User-agent: *\nDisallow: /\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};

