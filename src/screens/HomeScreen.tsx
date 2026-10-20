import { experiences } from '../data/experiences'
import { ExperienceCard } from '../components/ExperienceCard'

export function HomeScreen() {
  return (
    <main className="page">
      <header className="home-header">
        <h1 className="app-name">Tours</h1>
        <p className="muted">Walk someone else's favourite route.</p>
      </header>
      <div className="card-list">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </main>
  )
}
