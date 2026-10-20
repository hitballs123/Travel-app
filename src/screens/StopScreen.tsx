import { Link, useParams } from 'react-router'
import { findExperience } from '../data/experiences'
import { distanceKm, formatDistance, googleMapsUrl } from '../lib/geo'
import { BlockRenderer } from '../components/BlockRenderer'
import { NotFound } from '../components/NotFound'
import { StopMap } from '../components/StopMap'

export function StopScreen() {
  const { id, n } = useParams()
  const experience = findExperience(id)
  const index = Number(n) - 1
  const stop = experience?.stops[index]
  if (!experience || !stop) return <NotFound />

  const total = experience.stops.length
  const next = experience.stops[index + 1]
  const base = `/e/${experience.id}`

  return (
    <main className="page">
      <Link to={base} className="back-link">
        ← {experience.title}
      </Link>
      <p className="eyebrow">
        Stop {index + 1} of {total}
      </p>
      <h1>{stop.name}</h1>
      {stop.address && <p className="muted">{stop.address}</p>}

      <a className="button button-secondary" href={googleMapsUrl(stop, experience.city)} target="_blank" rel="noopener noreferrer">
        Open in Google Maps ↗
      </a>

      <div className="blocks">
        {stop.blocks.map((block) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
      </div>

      <StopMap stops={experience.stops} activeIndex={index} height={200} />

      {next && (
        <p className="muted next-hint">
          Next: {next.name}, about {formatDistance(distanceKm(stop, next))} away (straight line)
        </p>
      )}

      <nav className="stop-nav">
        {index > 0 ? (
          <Link to={`${base}/stop/${index}`} className="button button-secondary">
            ← Previous
          </Link>
        ) : (
          <Link to={base} className="button button-secondary">
            ← Overview
          </Link>
        )}
        {next ? (
          <Link to={`${base}/stop/${index + 2}`} className="button button-primary">
            Next →
          </Link>
        ) : (
          <Link to={`${base}/done`} className="button button-primary">
            Finish
          </Link>
        )}
      </nav>
    </main>
  )
}
