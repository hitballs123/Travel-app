import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Stop } from '../types'

interface Props {
  stops: Stop[]
  /** Index of the stop to highlight; omit to show the whole route evenly. */
  activeIndex?: number
  height?: number
}

// Leaflet + OpenStreetMap tiles. Only our own data goes on this map.
export function StopMap({ stops, activeIndex, height = 260 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const map = L.map(containerRef.current, { scrollWheelZoom: false })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    const points = stops.map((s) => L.latLng(s.lat, s.lng))
    L.polyline(points, { color: '#b4531f', weight: 4, opacity: 0.7, dashArray: '6 8' }).addTo(map)

    stops.forEach((stop, i) => {
      const isActive = i === activeIndex
      const dimmed = activeIndex !== undefined && !isActive
      const icon = L.divIcon({
        className: '',
        html: `<div class="marker${isActive ? ' marker-active' : ''}${dimmed ? ' marker-dim' : ''}">${i + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      })
      L.marker(points[i], { icon, title: stop.name, zIndexOffset: isActive ? 1000 : 0 }).addTo(map)
    })

    if (activeIndex !== undefined) {
      map.setView(points[activeIndex], 15)
    } else {
      map.fitBounds(L.latLngBounds(points), { padding: [24, 24] })
    }

    return () => {
      map.remove()
    }
  }, [stops, activeIndex])

  return <div ref={containerRef} className="map" style={{ height }} />
}
