# saharpak.dev

Personal builder portfolio for **Sahar Pakseresht**, product manager, community builder, and founder of Tech Immigrants.

A short, visual, single-page site: who I am, what I build, and how to reach me. It is a static site with no backend, no auth, and no payments.

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

It holds personal info, hero copy, identity tags, featured projects, community stats, contact settings, and social links. You should rarely need to touch the components in `src/components/`.

### How to add your photo

1. Drop a square image at `public/sahar.png` (any name works, just match the config).
2. In `src/config/site.ts`, set `profile.available` to `true` (and update `profile.photo` if you used a different filename).

Until a real photo is added, the hero shows a tasteful gradient placeholder that says "Photo coming soon".

### How to add or edit a featured project

The homepage shows a short, curated set. Open `src/config/site.ts`, find `featuredProjects`, and add or edit an entry:

```ts
{
  name: "My New Tool",
  status: "Experiment", // see allowed statuses below
  blurb: "One short sentence (under ~20 words).",
  accent: "terracotta", // terracotta | teal | sage | purple
  cta: { label: "Visit", href: "https://...", external: true }, // optional
}
```

Allowed `status` values: `Live`, `Open Source`, `Pilot`, `Demo`, `Internal Tool`, `Experiment`, `Coming Soon`, `Idea`. Each maps to a badge color automatically. A card without a `cta` shows a muted "Coming soon".

### How to update community stats

Edit the `community.stats` array in `src/config/site.ts` (3 stats). Each is `{ value, label }`. Keep the privacy note honest: numbers are aggregate and anonymized.

### Contact settings (safe by default)

In `src/config/site.ts`, the `contact` object controls what is shown. Nothing fake is ever displayed:

- `publicEmail` + `emailPublished: true` — shows email / mailto actions. Leave `emailPublished: false` to hide email; the site falls back to "Connect on LinkedIn".
- `calendlyUrl` — set a real URL to show a "Book a call" button. Empty = hidden.
- `primaryContactMethod` — `"linkedin"` or `"email"`.
- `linkedinUrl` — the confirmed LinkedIn link used as the safe default.

X / Twitter is intentionally omitted until a real handle is confirmed (add it to `socials`).

## SEO & social preview

- Title, description, canonical URL, and Open Graph / Twitter tags live in `src/layouts/Layout.astro`, sourced from `site` in `src/config/site.ts`.
- The social preview image is `public/og.png` (1200x630). Replace it to change the share card.
- A `Person` JSON-LD block is included for structured data.

## Environment variables

None are required for the static version. See `.env.example`.

## Known limitations

- Content is static and hand-maintained (no CMS).
- The profile photo is a placeholder until `public/sahar.jpg` is added and `profile.available` is set to `true`.
- Public email, Calendly, and X/Twitter are hidden until real values are confirmed in config.
- Some project cards show "Coming soon" until public URLs exist.
- Community stats are aggregate signals, not live analytics.

## License

MIT
