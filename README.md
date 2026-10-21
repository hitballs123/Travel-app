# Tours (working name)

A mobile-first web app where creators publish travel experiences (walking tours, food routes,
themed beer tours, anything) and travellers follow them stop by stop.

First experience: an autumn bokbier walking tour in Amsterdam.

**Live:** https://hitballs123.github.io/Travel-app/ (deployed from `main` by GitHub Actions)

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## What exists

| Screen          | URL               | What it does                                                                 |
| --------------- | ----------------- | ---------------------------------------------------------------------------- |
| Home            | `#/`              | "Explore Amsterdam": map peek (one pin per tour), rows of cards by theme     |
| Search          | `#/search`        | Coming soon                                                                  |
| Editor's picks  | `#/picks`         | Coming soon                                                                  |
| Tour            | `#/e/:id`         | Route map on top, card with facts, "Good for", description, stops, Start     |
| Follow mode     | `#/e/:id/stop/:n` | One stop: content blocks, "Open in Google Maps", small map, prev/next        |
| Finish          | `#/e/:id/done`    | Tour emoji, "Well done!" ("Proost!" for beer tours), share                   |

- Bottom tab bar on Home, Search, Editor's picks and Tour; hidden in follow mode and on Finish.
- Light and dark mode follow the device setting.
- Covers are warm gradients with an emoji per theme (`src/lib/theme.ts`); no remote images.
- Maps use Leaflet with OpenStreetMap tiles and show only our own data.
- "Open in Google Maps" is a plain link using the stop's `googlePlaceId`; no API key, no Google API calls.
- No backend, accounts or ratings input yet. All data is in `src/data/`: the bokbier tour plus six
  demo tours (`demoExperiences.ts`, marked with a "Demo" badge).

## Add a tour

Append an `Experience` to the array in `src/data/experiences.ts`. Nothing else needs to change:
the home rows, routes and maps all read from that array. Rows and covers follow the tour's tags.

## Data model

Source of truth: `src/types.ts`.

```
Experience { id, title, creatorId, city, coverUrl, description, tags[], durationMin,
             distanceKm, stops[], ratingAvg, ratingCount,
             costLevel: 1|2|3,                       // €, €€, €€€
             suits { kids, adultsOnly, accessible }, // accessible = step-free
             editorsPick?: { note }, demo? }
Stop       { id, name, lat, lng, googlePlaceId?, address?, hours?, blocks[] }
Block      { id, type: 'text'|'photo'|'audio'|'tip'|'tryThis'|'link', data }
Rating     { experienceId, userId, stars: 1-5, comment?, createdAt }
```

To add a block type: add it to `Block` in `src/types.ts` and add one case to
`src/components/BlockRenderer.tsx`.

Store only `googlePlaceId` from Google: never Google ratings, reviews, photos or hours.
