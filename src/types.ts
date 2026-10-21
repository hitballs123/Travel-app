// Source of truth for the data model. See CLAUDE.md before changing anything here.

export interface Experience {
  id: string
  title: string
  creatorId: string
  city: string
  /** Empty string = no remote image; the UI falls back to a gradient cover. */
  coverUrl: string
  description: string
  tags: string[]
  durationMin: number
  distanceKm: number
  stops: Stop[]
  ratingAvg: number
  ratingCount: number
}

export interface Stop {
  id: string
  name: string
  lat: number
  lng: number
  /** The only Google data we may store (Google's terms). Used for "Open in Google Maps". */
  googlePlaceId?: string
  address?: string
  hours?: string
  blocks: Block[]
}

export type Block =
  | { id: string; type: 'text'; data: { text: string } }
  | { id: string; type: 'photo'; data: { url: string; caption?: string } }
  | { id: string; type: 'audio'; data: { url: string; title?: string } }
  | { id: string; type: 'tip'; data: { text: string } }
  | { id: string; type: 'tryThis'; data: { text: string } }
  | { id: string; type: 'link'; data: { url: string; label: string } }

export interface Rating {
  experienceId: string
  userId: string
  stars: 1 | 2 | 3 | 4 | 5
  comment?: string
  createdAt: string
}
