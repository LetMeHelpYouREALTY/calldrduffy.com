# calldrduffy.com

Owner-side luxury home leasing site for Dr. Jan Duffy, REALTOR® (NV S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties). Next.js 16 on Vercel.

Audience: owners of luxury homes in Las Vegas's highest-rent communities who are deciding whether to lease or sell.

## Pages

| Route | What it is |
|---|---|
| `/` | Owner homepage: rent benchmarks, area grid, leasing plan, Nevada rules, Calendly booking |
| `/areas` | Index of the 10 high-rent communities |
| `/areas/[slug]` | One page per community, generated from `lib/luxury-areas.ts` |
| `/lease-your-luxury-home` | Step-by-step owner leasing plan |
| `/rent-vs-sell` | Client-side rent vs. sell calculator |
| `/about`, `/contact` | Profile and booking |
| `/las-vegas-property-tax`, `/listings/9528-rainfall-avenue` | Kept from the previous site |

Retired pages 301-redirect via `lib/legacy-redirects.json` (wired in `next.config.ts`).

## Content rules

- **Every number carries a source and an as-of date.** Market figures live in `lib/luxury-areas.ts` and `lib/owner-site.ts`. Refresh or remove any figure older than 60 days rather than guessing.
- **Fair Housing:** describe the home and the rules, never the ideal renter. No "family-friendly", "safe", "good schools", "perfect for professionals".
- **No forms.** Owners book through Calendly (`CALENDLY_OWNER_URL` in `lib/owner-site.ts`). Site phone: (702) 500-1955.
- The FUB Widget Tracker in `app/layout.tsx` stays installed.

## Hero photos

Every page has its own hero photo, listed in `lib/hero-photos.ts` and stored in `public/images/heroes/`. All are from Unsplash under the Unsplash License (free commercial use) and carry a small credit. Community pages show landscapes or views from that part of the valley, never a specific house. A new community needs its own entry in `AREA_HERO_PHOTOS`.

## Adding a community

Add an entry to `LUXURY_AREAS` in `lib/luxury-areas.ts`. The page, sitemap entry, footer link and homepage card are generated from it.

## Develop

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build
node scripts/generate-route-seo.mjs   # refresh fallback titles after changing H1s
```
