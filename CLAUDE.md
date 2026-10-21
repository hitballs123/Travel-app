# CLAUDE.md — Travel Experiences App

## What this is
A mobile-first web app where creators publish travel experiences (walking tours,
food routes, themed beer tours, anything) and travellers follow, rate (1–5 stars)
and share them. Side project: work happens in small nightly tasks.

First real use case: a bokbier walking tour in Amsterdam.

## How we work
- Every session gets ONE task brief. Do only that task; don't start the next backlog item.
- Keep changes small enough to review on a phone the next morning.
- End every session by opening a pull request. The PR description must contain:
  what was built, what was skipped or simplified, open questions.
- If the brief is unclear, make the simplest reasonable choice and list it under open questions.
  Don't stop to ask.
- If a brief or a decision changes a standing rule, update CLAUDE.md in the same PR and say so in the description.

## Stack
- Vite + React + TypeScript. Plain CSS (or CSS modules); no UI framework unless a brief says so.
- Mobile-first: design for ~390px wide, then make sure it scales up.
- Mock data lives in `src/data/`. No backend, auth or paid APIs until a brief introduces them.
- Never commit API keys or secrets. Use environment variables when keys arrive.

## Data model (source of truth: `src/types.ts`)
```
Experience { id, title, creatorId, city, coverUrl, description, tags[], durationMin,
             distanceKm, stops[], ratingAvg, ratingCount,
             costLevel: 1|2|3, suits { kids, adultsOnly, accessible },
             editorsPick?: { note }, demo? }
Stop       { id, name, lat, lng, googlePlaceId?, address?, hours?, blocks[] }
Block      { id, type: 'text'|'photo'|'audio'|'tip'|'tryThis'|'link', data }
Rating     { experienceId, userId, stars: 1-5, comment?, createdAt }
```
- Formats stay flexible: never hard-code tour types. Variety comes from tags and blocks.
- A new block type = add it to `Block['type']` + one case in `BlockRenderer`. Nothing else should need changing.
- Change the data model only when the brief asks for it, and note it in the PR.
- `costLevel` shows as €/€€/€€€. `suits.accessible` means step-free. `demo: true` = dummy content
  (Demo badge on the card). `editorsPick.note` is one or two sentences from the editor.

## Screens
- Tab bar (Home `#/`, Search `#/search`, Editor's picks `#/picks`), hidden in follow mode
  (`#/e/:id/stop/:n`) and on the finish screen (`#/e/:id/done`).
- Home: map peek with one pin per tour, then rows built from rules over tags/editorsPick
  (never lists of specific tours).
- Tour `#/e/:id`: map on top, content card overlapping it, sticky "Start tour".
- The 18+ / drink responsibly note shows only on tours with `suits.adultsOnly`; there is no global footer.

## Look and feel
- Airbnb meets Google Maps: big warm cards, map-first tour screen. 20px card radius, soft shadows,
  150–200ms transitions, 48px+ tap targets, light and dark mode (design tokens at the top of `index.css`).
- No remote images: covers are a per-theme gradient + emoji, picked from tags in `src/lib/theme.ts`.
- No UI framework; icons are inline SVG in `src/components/Icon.tsx`.

## Google Maps rules (important)
- Store only `googlePlaceId` from Google. Do not store or cache Google ratings, reviews,
  photos or hours in our data. Their terms forbid it.
- "Open in Google Maps" links are fine and need no API key.
- Our own 1–5 star ratings are separate from Google ratings. Never mix them.
- Never scrape Google Maps.

## Code conventions
- Small, focused components; one component per file in `src/components/`.
- Prefer readable code over clever code; the owner reviews on mobile.
- Keep the README current: how to run, what exists, data model summary.
- Run `npm run build` before opening the PR and make sure it passes.
