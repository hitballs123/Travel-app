import type { ReactNode } from 'react'
import type { Experience } from '../types'

// No remote images yet: a warm autumn gradient stands in for coverUrl.
export function Cover({ experience, children }: { experience: Experience; children?: ReactNode }) {
  const style = experience.coverUrl ? { backgroundImage: `url(${experience.coverUrl})` } : undefined
  return (
    <div className="cover" style={style}>
      {children}
    </div>
  )
}
