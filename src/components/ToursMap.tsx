import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Experience } from '../types'
import { themeFor } from '../lib/theme'

// Compact map with one pin per tour, at the middle of its stops. Tap a pin to open the tour.
export function ToursMap({ experiences }: { experiences: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!containerRef.current) return
    const map = L.map(containerRef.current, { scrollWheelZoom: false, zoomControl: false, zoomSnap: 0.25 })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    const points: L.LatLng[] = []
    for (const experience of experiences) {
      const { stops } = experience
      if (stops.length === 0) continue
      const point = L.latLng(
        stops.reduce((sum, s) => sum + s.lat, 0) / stops.length,
        stops.reduce((sum, s) => sum + s.lng, 0) / stops.length,
      )
      points.push(point)
      const icon = L.divIcon({
        className: '',
        html: `<div class="tour-pin">${themeFor(experience).emoji}</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      })
      L.marker(point, { icon, title: experience.title, keyboard: true })
        .on('click', () => navigate(`/e/${experience.id}`))
        .addTo(map)
    }
    if (points.length > 0) map.fitBounds(L.latLngBounds(points), { padding: [24, 24] })

    return () => {
      map.remove()
    }
  }, [experiences, navigate])

  return <div ref={containerRef} className="map map-peek" />
}
