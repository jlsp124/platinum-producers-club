# Third-party licenses and asset provenance

## Runtime dependencies

| Package | Version | License | Purpose |
| --- | --- | --- | --- |
| Astro | 7.2.4 | MIT | Static site generation |
| Archivo variable font | 5.3.0 package / SIL OFL 1.1 typeface | SIL OFL 1.1 | Self-hosted typography |
| Sharp | 0.35.3 | Apache-2.0 | Build-time image generation |

## Development and QA dependencies

| Package | Version | License |
| --- | --- | --- |
| Playwright | 1.62.1 | Apache-2.0 |
| axe Playwright integration | 4.13.0 | MPL-2.0 |
| html-validate | 11.8.0 | MIT |
| Lighthouse | 13.4.1 | Apache-2.0 |
| TypeScript | 5.9.3 | Apache-2.0 |

No third-party motion, carousel, icon, or component library ships to visitors. Arrow and play marks are local SVG/CSS primitives.

## Third-party media services

- Vimeo hosts the owner-controlled sales VSL (`1137317543`) and pre-call video (`1105995692`). The preview uses their current provider thumbnails and creates supported player iframes only after click; it does not download or rehost either video.
- Testimonial.to is the public owner-controlled testimonial source.
- Mux hosts the video assets exposed through that Testimonial.to wall. The preview uses provider thumbnails plus Mux’s supported `player.mux.com/{playback-id}` iframe only after click.
- Calendly remains the scheduling destination. It is linked, not embedded, and is not configured or modified by this repository.

These services receive normal browser requests only when their poster/player/link is used. No production analytics identifier is added.

## Business assets

The Terence portrait, PPC wordmark, PROMU mark, favicon, and testimonial copy came from the current public PPC/PROMU funnel or its linked public services for this owner-directed replacement preview. The thank-you portrait is local and byte-identical to the current live asset. Vimeo/Mux thumbnails remain provider-hosted so the media stays aligned with the current owner videos rather than the historical funnel.

The three testimonial posters remain on Mux’s provider CDN; the video files remain with Mux. Their final usage rights, official single-testimonial embed snippets, and the claims they support remain on the owner-verification/asset checklist.

The design does not use Creator College branding/assets/code, AI-generated images of Terence, stock DJ imagery, or Steven Bartlett/Silverback brand assets.
