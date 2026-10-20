import { Link } from 'react-router'
import type { Experience } from '../types'
import { formatDuration } from '../lib/geo'
import { Cover } from './Cover'
import { Rating } from './Rating'
import { Tags } from './Tags'

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link to={`/e/${experience.id}`} className="card">
      <Cover experience={experience}>
        <span className="cover-city">{experience.city}</span>
      </Cover>
      <div className="card-body">
        <div className="card-title-row">
          <h2 className="card-title">{experience.title}</h2>
          <Rating avg={experience.ratingAvg} count={experience.ratingCount} />
        </div>
        <p className="muted">
          {formatDuration(experience.durationMin)} · {experience.stops.length} stops
        </p>
        <Tags tags={experience.tags} />
      </div>
    </Link>
  )
}
