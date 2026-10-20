import type { Stop } from '../types'

/** Straight-line distance in km (haversine). Walking distance will be a bit longer. */
export function distanceKm(a: Stop, b: Stop): number {
  const R = 6371
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

export function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 100) * 10} m` : `${km.toFixed(1)} km`
}

export function formatDuration(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  if (h === 0) return `${m} min`
  return m === 0 ? `${h} h` : `${h} h ${m} min`
}

/** Google Maps URL with a place ID. No API key and no Google API calls. */
export function googleMapsUrl(stop: Stop, city: string): string {
  const query = encodeURIComponent([stop.name, stop.address, city].filter(Boolean).join(', '))
  const placeId = stop.googlePlaceId ? `&query_place_id=${encodeURIComponent(stop.googlePlaceId)}` : ''
  return `https://www.google.com/maps/search/?api=1&query=${query}${placeId}`
}
