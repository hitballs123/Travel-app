import type { Experience } from '../types'

// "Good for" chips: only the suits flags that are true.
export function GoodFor({ suits }: { suits: Experience['suits'] }) {
  const chips = [
    suits.kids && 'Kid-friendly',
    suits.adultsOnly && '18+ only',
    suits.accessible && 'Step-free',
  ].filter((chip): chip is string => Boolean(chip))
  if (chips.length === 0) return null
  return (
    <ul className="chips">
      {chips.map((chip) => (
        <li key={chip} className="chip">
          {chip}
        </li>
      ))}
    </ul>
  )
}
