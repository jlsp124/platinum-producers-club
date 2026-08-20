# Platinum Producers Club sales-page redesign

![Platinum Producers Club sales page desktop hero](docs/screenshots/qa/desktop-1440-hero.png)

A focused, static sales page for the Platinum Producers Club music-production mentorship operated by Terence Lam / PROMU Music Group Ltd.

Status: independent public preview. The current production website, DNS, Calendly configuration, and funnel service remain separate and untouched.

- [Open the GitHub Pages preview](https://jlsp124.github.io/platinum-producers-club/)
- [View the public repository](https://github.com/jlsp124/platinum-producers-club)

## Purpose

Owner review on 2026-08-20 corrected the product direction: PPC is one mentorship offer for one audience with one primary action. The previous personal-brand/editorial direction is deferred to a possible future Terence Lam personal website.

The page now follows a simple sales progression: outcome and VSL, problem recognition, mentorship value, Terence credibility, process, real student proof, fit, next steps, FAQ, and a final Calendly action.

The preview does not rebuild scheduling, reminders, time-zone handling, meeting links, CRM behavior, applications, or payments.

## Local development

Requirements: Node.js 22.12 or newer and npm.

```powershell
npm ci
npm run dev
```

Open `http://localhost:4321/`.

## Build and QA

```powershell
npm run build
npm run qa
npm run screenshots
```

`npm run qa` builds the static site, validates generated HTML, and runs responsive Playwright/axe tests at 320, 375, 390, 430, 768, 1024, 1440, and 1728 CSS pixels. Current evidence is in [docs/testing-and-performance.md](docs/testing-and-performance.md).

## Architecture

- Astro static output and GitHub Pages deployment
- TypeScript for small progressive enhancements
- Plain CSS and a locally served Archivo variable font
- Sharp/Astro responsive AVIF and WebP generation
- Supported click-to-load Vimeo and Mux iframe players
- Native semantic links and `<details>` FAQs
- No backend, database, CMS, UI framework, carousel, or client-side router
- No production analytics IDs in the preview

The VSL and testimonial players load only after a visitor presses play. All primary CTAs work without JavaScript.

## Calendly integration

Every primary CTA points to:

`https://calendly.com/terence-p-lam/release-ready-strategy-call`

Only supported `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` values are forwarded. A local `ppc:calendly-click` browser event exposes CTA context for a future owner-approved analytics integration; it sends nothing by itself.

## Preview and SEO modes

The default preview build:

- points canonical metadata to `https://platinumproducersclub.com/`;
- uses `noindex,nofollow,noarchive`;
- disallows crawling through `robots.txt`;
- leaves the current production domain authoritative.

Production indexing is gated behind `PUBLIC_SITE_MODE=production` and the approved migration checklist. Do not enable it for GitHub Pages.

## GitHub Pages deployment

`.github/workflows/pages.yml` validates the project, builds with the repository base path, verifies the preview noindex guard, uploads the static artifact, and deploys on every push to `main`.

The workflow does not create a custom domain, write a `CNAME`, or touch production DNS.

## Directory structure

```text
src/
  assets/source/       Owner/business source assets
  components/          Shared header, footer, and Calendly CTA
  data/                Site and Calendly constants
  layouts/             Shared metadata and page shell
  pages/               Sales page, legal routes, robots, sitemap, 404
  scripts/             Progressive enhancement
  styles/              Sales-page design system and responsive rules
docs/                  Audit, reference analysis, QA, and migration notes
scripts/               Build assets, screenshots, and Pages validation
tests/                 Playwright and axe sales-flow suite
public/                Generated social and favicon assets
```

## Documentation

- [Reference sales-page analysis](docs/reference-sales-page-analysis.md)
- [Current-site audit](docs/current-site-audit.md)
- [Information architecture](docs/information-architecture.md)
- [Redesign rationale](docs/redesign-rationale.md)
- [Design system](docs/design-system.md)
- [Testing and performance](docs/testing-and-performance.md)
- [Tracking migration](docs/tracking-migration.md)
- [Content needing owner verification](docs/content-needing-owner-verification.md)
- [Assets requested from Terence](docs/assets-needed-from-terence.md)
- [Production migration checklist](docs/production-migration-checklist.md)
- [Third-party licenses and asset provenance](docs/third-party-licenses.md)

## Production boundary

This repository is not authorization to migrate production. Terence must approve the design, copy, claims, testimonials, legal text, and tracking plan before any custom-domain or platform change. A complete Calendly booking also requires owner permission and is deliberately not performed by the automated suite.
