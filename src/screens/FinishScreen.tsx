import { Link, useParams } from 'react-router'
import { findExperience } from '../data/experiences'
import { NotFound } from '../components/NotFound'
import { ShareButton } from '../components/ShareButton'

export function FinishScreen() {
  const { id } = useParams()
  const experience = findExperience(id)
  if (!experience) return <NotFound />

  return (
    <main className="page finish">
      <div className="finish-icon" aria-hidden="true">
        🍺
      </div>
      <h1>Proost!</h1>
      <p>
        You finished the {experience.title}. Thanks for walking it. If you enjoyed it, send it to a friend who'd like
        it too.
      </p>
      <ShareButton experience={experience} />
      <Link to="/" className="button button-secondary">
        Back to all tours
      </Link>
    </main>
  )
}
