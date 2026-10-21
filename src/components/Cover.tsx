import type { ReactNode } from 'react'
import type { Experience } from '../types'
import { themeFor } from '../lib/theme'

// No remote images: a warm per-theme gradient with a big emoji. coverUrl wins if set.
export function Cover({ experience, children }: { experience: Experience; children?: ReactNode }) {
  const theme = themeFor(experience)
  const style = { backgroundImage: experience.coverUrl ? `url(${experience.coverUrl})` : theme.gradient }
  return (
    <div className="cover" style={style}>
      {!experience.coverUrl && (
        <span className="cover-emoji" aria-hidden="true">
          {theme.emoji}
        </span>
      )}
      {children}
    </div>
  )
}
