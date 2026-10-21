import type { Experience } from '../types'

// Only on tours marked adultsOnly (e.g. beer tours).
export function AdultsNote({ experience }: { experience: Experience }) {
  if (!experience.suits.adultsOnly) return null
  return <p className="adults-note">18+ only · Please drink responsibly</p>
}
