import type { Experience } from '../types'

export interface Theme {
  emoji: string
  /** CSS gradient for the cover. Warm in both light and dark mode. */
  gradient: string
}

// The first tag that matches decides the cover. Order matters: a beer tour tagged
// "food" too should still look like a beer tour.
const themes: { tags: string[]; theme: Theme }[] = [
  { tags: ['beer', 'bokbier'], theme: { emoji: '🍺', gradient: 'linear-gradient(135deg, #7a2e12, #c0651f 55%, #e8b04a)' } },
  { tags: ['coffee', 'cake'], theme: { emoji: '☕', gradient: 'linear-gradient(135deg, #4b2c1c, #8a5a3b 55%, #d6a874)' } },
  { tags: ['food'], theme: { emoji: '🍜', gradient: 'linear-gradient(135deg, #8c2a1e, #d4572c 55%, #f2a65a)' } },
  { tags: ['night', 'music'], theme: { emoji: '🌙', gradient: 'linear-gradient(135deg, #1f1840, #4a2c6b 55%, #b05a5a)' } },
  { tags: ['art', 'street art'], theme: { emoji: '🎨', gradient: 'linear-gradient(135deg, #6b1f4f, #c2456b 55%, #f2a65a)' } },
  { tags: ['shopping'], theme: { emoji: '🛍️', gradient: 'linear-gradient(135deg, #7a2445, #c95a6b 55%, #f2b28a)' } },
  { tags: ['history', 'canals'], theme: { emoji: '🏛️', gradient: 'linear-gradient(135deg, #3d3a5c, #7a6a8c 50%, #d9a86c)' } },
]

const fallback: Theme = { emoji: '🧭', gradient: 'linear-gradient(135deg, #5c3a1e, #a8682f 55%, #e0b061)' }

export function themeFor(experience: Experience): Theme {
  for (const { tags, theme } of themes) {
    if (experience.tags.some((t) => tags.includes(t))) return theme
  }
  return fallback
}

export function formatCost(level: Experience['costLevel']): string {
  return '€'.repeat(level)
}
