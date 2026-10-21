import { Link, useParams } from 'react-router'
import { findExperience } from '../data/experiences'
import { formatDistance, formatDuration } from '../lib/geo'
import { formatCost } from '../lib/theme'
import { AdultsNote } from '../components/AdultsNote'
import { GoodFor } from '../components/GoodFor'
import { Icon } from '../components/Icon'
import { NotFound } from '../components/NotFound'
import { Rating } from '../components/Rating'
import { StopMap } from '../components/StopMap'
import { Tags } from '../components/Tags'

// Map-first: the route fills the top ~45%, the content card slides over it.
export function ExperienceScreen() {
  const { id } = useParams()
  const experience = findExperience(id)
  if (!experience) return <NotFound />

  return (
    <main className="tour">
      <div className="tour-map">
        <StopMap stops={experience.stops} fill />
        <Link to="/" className="icon-button tour-back" aria-label="Back to all tours">
          <Icon name="back" />
        </Link>
      </div>

      <article className="sheet">
        <div className="sheet-handle" aria-hidden="true" />
        <h1>{experience.title}</h1>
        <p className="meta">
          <Rating avg={experience.ratingAvg} count={experience.ratingCount} /> · {experience.city}
          {experience.demo && <span className="badge-demo badge-inline">Demo</span>}
        </p>

        <section>
          <h2 className="section-title">What to expect</h2>
          <ul className="facts">
            <li>
              <Icon name="clock" />
              <strong>{formatDuration(experience.durationMin)}</strong>
              <span className="muted">Duration</span>
            </li>
            <li>
              <Icon name="route" />
              <strong>{formatDistance(experience.distanceKm)}</strong>
              <span className="muted">Distance</span>
            </li>
            <li>
              <Icon name="pin" />
              <strong>{experience.stops.length}</strong>
              <span className="muted">Stops</span>
            </li>
            <li>
              <Icon name="wallet" />
              <strong>{formatCost(experience.costLevel)}</strong>
              <span className="muted">Cost</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Good for</h2>
          <GoodFor suits={experience.suits} />
        </section>

        {experience.editorsPick && (
          <blockquote className="editor-note">
            <span className="block-label">Editor's pick</span>
            <p>{experience.editorsPick.note}</p>
          </blockquote>
        )}

        <p>{experience.description}</p>
        <Tags tags={experience.tags} />
        <AdultsNote experience={experience} />

        <section>
          <h2 className="section-title">{experience.stops.length} stops</h2>
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
        </section>

        <div className="sticky-actions">
          <Link to={`/e/${experience.id}/stop/1`} className="button button-primary button-big">
            Start tour
          </Link>
        </div>
      </article>
    </main>
  )
}
