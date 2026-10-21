import type { Experience } from '../types'
import { ExperienceCard } from './ExperienceCard'

// A titled, horizontally scrolling row of cards. Renders nothing when empty.
export function CardRow({ title, experiences }: { title: string; experiences: Experience[] }) {
  if (experiences.length === 0) return null
  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-scroll">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}
