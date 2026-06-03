# workfel.github.io — Johan Pujol portfolio

One-page "indie software" portfolio: a profile hero, then my deployed apps as
full-width bands. Built with [Astro](https://astro.build/) and shipped as a
fully static site to GitHub Pages.

## Stack

- **Astro** (static output, no client framework)
- Vanilla CSS with theme tokens (dark / light), custom cursor, scroll reveal
- Google Fonts: Anton (display), Archivo (body), Space Mono (labels)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

Requires Node 22 (see `.nvmrc`).

## Adding / editing an app

Everything on the page is **data-driven** — the only thing you edit to add an
app is `src/data/apps.ts`. Append an object to the `apps` array:

```ts
{
  name: 'Newapp',
  kicker: 'One short line above the name.',
  description: 'One or two sentences describing the app.',
  type: 'Subscription',        // 'Free' | 'Subscription' | 'Freemium' | 'One-time'
  stage: 'beta',               // 'idea' | 'build' | 'beta' | 'live'
  launchYear: 2026,
  stack: ['Astro', 'Postgres'],
  url: 'https://newapp.com',
  provider: 'stripe',          // optional — 'stripe' | 'polar' (paid apps only)
  providerUrl: 'https://newapp.com/pricing', // optional — checkout / product page
}
```

What updates **automatically** (never edit by hand):

- The hero stats — **apps shipped**, **live in the wild**, **building since** —
  are computed from the list (`stats` in `src/data/apps.ts`).
- The "Selected work" counter.
- The band index numbers (01, 02, …).
- The maturity stepper (Idea → Build → Beta → Live) and the status pill, both
  derived from `stage`.

There are **no time-evolving metrics** (no revenue, no user counts, no charts):
the site stays static and never needs upkeep beyond adding an app.

### Paid apps & payment providers

For a paid app, set `provider` (`stripe` or `polar`) and `providerUrl`. The band
then shows a clickable **Stripe ↗ / Polar ↗** tag pointing at the checkout /
product page. Because the site is static and the repo is public, **no API keys
are ever stored or fetched** — the provider link is the connection to Stripe /
Polar.

### Personal info

Name, tagline, bio, location and social links live in `src/data/profile.ts`.
The avatar is `public/assets/johan.png`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` via the official GitHub Pages action. In the repo
settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
