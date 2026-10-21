import { Link, useParams } from 'react-router'
import { findExperience } from '../data/experiences'
import { formatDistance, formatDuration } from '../lib/geo'
import { Cover } from '../components/Cover'
import { NotFound } from '../components/NotFound'
import { Rating } from '../components/Rating'
import { StopMap } from '../components/StopMap'
import { Tags } from '../components/Tags'

export function ExperienceScreen() {
  const { id } = useParams()
  const experience = findExperience(id)
  if (!experience) return <NotFound />

  return (
    <main className="page page-flush">
      <Cover experience={experience}>
        <Link to="/" className="back-link back-link-on-cover">
          ← All tours
        </Link>
      </Cover>
      <div className="page-inner">
        <h1>{experience.title}</h1>
        <p className="meta">
          {experience.city} · {formatDuration(experience.durationMin)} · {formatDistance(experience.distanceKm)} ·{' '}
          <Rating avg={experience.ratingAvg} count={experience.ratingCount} />
        </p>
        <Tags tags={experience.tags} />
        <p>{experience.description}</p>

        <StopMap stops={experience.stops} />

        <h2>{experience.stops.length} stops</h2>
        <ol className="stop-list">
          {experience.stops.map((stop, i) => (
            <li key={stop.id}>
              <Link to={`/e/${experience.id}/stop/${i + 1}`} className="stop-row">
                <span className="stop-number">{i + 1}</span>
                <span>
                  <strong>{stop.name}</strong>
                  {stop.address && <span className="muted"> · {stop.address}</span>}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className="sticky-actions">
        <Link to={`/e/${experience.id}/stop/1`} className="button button-primary button-big">
          Start tour
        </Link>
      </div>
    </main>
  )
}
