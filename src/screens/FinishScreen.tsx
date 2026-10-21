import { Link, useParams } from 'react-router'
import { findExperience } from '../data/experiences'
import { themeFor } from '../lib/theme'
import { AdultsNote } from '../components/AdultsNote'
import { NotFound } from '../components/NotFound'
import { ShareButton } from '../components/ShareButton'

export function FinishScreen() {
  const { id } = useParams()
  const experience = findExperience(id)
  if (!experience) return <NotFound />

  const isBeer = experience.tags.includes('beer')

  return (
    <main className="page finish">
      <div className="finish-icon" aria-hidden="true">
        {themeFor(experience).emoji}
      </div>
      <h1>{isBeer ? 'Proost!' : 'Well done!'}</h1>
      <p>
        You finished the {experience.title}. Thanks for walking it. If you enjoyed it, send it to a friend who'd like
        it too.
      </p>
      <ShareButton experience={experience} />
      <Link to="/" className="button button-secondary">
        Back to all tours
      </Link>
      <AdultsNote experience={experience} />
    </main>
  )
}
