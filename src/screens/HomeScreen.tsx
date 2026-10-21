import { experiences } from '../data/experiences'
import type { Experience } from '../types'
import { CardRow } from '../components/CardRow'
import { ToursMap } from '../components/ToursMap'

const hasTag = (...tags: string[]) => (e: Experience) => e.tags.some((t) => tags.includes(t))

// Rows are rules over tags and editorsPick, never lists of specific tours.
const rows: { title: string; matches: (e: Experience) => boolean }[] = [
  { title: "Editor's picks", matches: (e) => Boolean(e.editorsPick) },
  { title: 'Food & drink', matches: hasTag('food', 'drink', 'beer', 'coffee') },
  { title: 'History & culture', matches: hasTag('history', 'culture', 'art') },
  { title: 'All tours', matches: () => true },
]

export function HomeScreen() {
  return (
    <main className="page page-home">
      <header className="home-header">
        <h1>Explore Amsterdam</h1>
        <p className="muted">Walk someone else's favourite route.</p>
      </header>
      <ToursMap experiences={experiences} />
      {rows.map((row) => (
        <CardRow key={row.title} title={row.title} experiences={experiences.filter(row.matches)} />
      ))}
    </main>
  )
}
