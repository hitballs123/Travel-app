import { Link } from 'react-router'
import type { Experience } from '../types'
import { formatDuration } from '../lib/geo'
import { formatCost } from '../lib/theme'
import { Cover } from './Cover'
import { Rating } from './Rating'

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Link to={`/e/${experience.id}`} className="card">
      <Cover experience={experience}>{experience.demo && <span className="badge-demo">Demo</span>}</Cover>
      <div className="card-body">
        <div className="card-title-row">
          <h3 className="card-title">{experience.title}</h3>
          <Rating avg={experience.ratingAvg} count={experience.ratingCount} />
        </div>
        <p className="card-meta">
          {formatDuration(experience.durationMin)} · {formatCost(experience.costLevel)}
        </p>
      </div>
    </Link>
  )
}
