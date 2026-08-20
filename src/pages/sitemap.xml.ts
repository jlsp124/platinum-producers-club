import type { APIRoute } from "astro";

export const prerender = true;

const urls = ["/", "/privacy/", "/terms/"];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>https://platinumproducersclub.com${path}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};

