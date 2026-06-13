# saharpak.dev

Personal hub and product-builder portfolio for **Sahar Pakseresht**, founder of Tech Immigrants.

The site tells one story: community data leads to real problems, which lead to useful tools, trust-safe monetization, and impact. It is a static marketing site with no backend, no auth, and no payments.

## Tech stack

- **Framework:** [Astro](https://astro.build/) (v6)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4, via the Vite plugin)
- **Hosting / adapter:** [Cloudflare](https://developers.cloudflare.com/workers/) (`@astrojs/cloudflare`, configured in `wrangler.jsonc`)
- **Domain:** saharpak.dev

## Local setup

Requires Node `>=22.12.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view it.

## Scripts

| Command           | What it does                                              |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Start the local dev server.                              |
| `npm run build`   | Build the production site to `./dist/`.                  |
| `npm run check`   | Run Astro type checking (`astro check`).                 |
| `npm run preview` | Build, then preview through `wrangler dev`.              |
| `npm run deploy`  | Build, then deploy to Cloudflare with `wrangler deploy`. |

## Deploy

The project targets Cloudflare via the Astro Cloudflare adapter.

- **Cloudflare Pages (Git):** connect the repo, set build command `npm run build` and output directory `dist`, then connect the `saharpak.dev` domain in Cloudflare DNS.
- **Wrangler (CLI):** run `npm run deploy` (requires a `wrangler login`).

## Where to edit content

Almost everything is driven by a single file:

```
src/config/site.ts
```

It holds personal info, hero copy, social links, the project list and statuses, community stats, CTAs, speaking items, and collaboration options. You should rarely need to touch the components in `src/components/`.

### How to add a new project

1. Open `src/config/site.ts`.
2. Find `projectCategories` and pick the right category (`career`, `builder`, `automation`, `personal`).
3. Add a project object to that category's `projects` array:

```ts
{
  name: "My New Tool",
  status: "Experiment", // see allowed statuses below
  description: "One clear sentence about what it does.",
  why: "The real problem this came from.",
  links: [{ label: "GitHub", href: "https://github.com/..." }], // optional
  cta: { label: "Learn more", href: "#contact" }, // optional
}
```

Allowed `status` values: `Live`, `Open Source`, `Pilot`, `Demo`, `Internal Tool`, `Experiment`, `Coming Soon`, `Idea`. Each maps to a badge color automatically.

### How to update stats

Edit the `communityIntelligence.stats` array in `src/config/site.ts`. Each item is `{ value, label }`. Keep the privacy note honest: insights are aggregate and anonymized.

When the Community Intelligence report is public, set `communityIntelligence.report.available` to `true` and add the `href`.

## SEO & social preview

- Title, description, canonical URL, and Open Graph / Twitter tags live in `src/layouts/Layout.astro`, sourced from `site` in `src/config/site.ts`.
- The social preview image is `public/og.png` (1200x630). Replace it to change the share card.
- A `Person` JSON-LD block is included for structured data.

## Environment variables

None are required for the static version. See `.env.example`.

## Known limitations

- Content is static and hand-maintained (no CMS).
- The Community Intelligence report is a placeholder until a public version is linked.
- Some project links point to sections (`#projects`, `#contact`) until public URLs exist.
- Stats are aggregate community signals, not live analytics.

## License

MIT
