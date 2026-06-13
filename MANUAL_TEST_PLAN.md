# Manual Test Plan — saharpak.dev

Run through this checklist before sharing the site publicly or after any meaningful change.

## Setup

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # production build to ./dist
npm run check  # Astro type checking
```

## Checklist

| #   | Check                          | How to verify                                                                                  | Expected result                                     |
| --- | ------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| 1   | Site opens locally             | `npm run dev`, open http://localhost:4321                                                       | Homepage loads with no console errors.              |
| 2   | Build passes                   | `npm run build`                                                                                 | Completes with "Complete!" and no errors.           |
| 3   | Type check passes              | `npm run check`                                                                                 | 0 errors.                                           |
| 4   | Hero is clear                  | View top of page                                                                                | Headline explains who Sahar is and what she builds. |
| 5   | Project cards render           | Scroll to Projects                                                                              | All categories and cards render with status badges. |
| 6   | All links are checked          | Click nav links and external links (LinkedIn, GitHub, YouTube, Telegram, CVRoast, CV Builder)  | Anchors scroll correctly; external links open.      |
| 7   | Mobile layout works            | DevTools responsive ~375px                                                                      | Single column, readable, no overflow.               |
| 8   | Tablet layout works            | DevTools responsive ~768px                                                                      | Grids adapt, spacing intact.                        |
| 9   | Desktop layout works           | Full width ~1280px+                                                                             | Centered max-width content, multi-column grids.     |
| 10  | SEO metadata exists            | View source `<head>`                                                                            | Title, description, canonical present.              |
| 11  | Open Graph metadata exists     | View source `<head>` + load `/og.png`                                                           | `og:title/description/image`, twitter tags, image loads. |
| 12  | No private data is exposed     | Read all sections and `src/config/site.ts`                                                      | Only public info; no private community data.        |
| 13  | No fake revenue/success claims | Read Projects and Community Intelligence                                                         | Honest statuses; no fabricated revenue or success.  |
| 14  | README setup instructions work | Follow README from a clean checkout                                                             | Install, dev, build, deploy steps all work.         |

## Notes

- The site is static. There is no auth, no payments, and no backend to test.
- Community Intelligence stats are aggregate and anonymized signals, shown as a "Report coming soon" placeholder until a public report is linked.
