import { useState } from 'react'
import type { Experience } from '../types'

// Web Share API where available; otherwise copy the link and show a toast.
export function ShareButton({ experience }: { experience: Experience }) {
  const [toast, setToast] = useState<string | null>(null)

  function showToast(message: string) {
    setToast(message)
    window.setTimeout(() => setToast(null), 2500)
  }

  async function share() {
    const url = `${window.location.origin}${window.location.pathname}#/e/${experience.id}`
    if (navigator.share) {
      try {
        await navigator.share({ title: experience.title, text: `Try the ${experience.title} in ${experience.city}`, url })
        return
      } catch (err) {
        // User closed the share sheet: nothing to do.
        if (err instanceof DOMException && err.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      showToast('Link copied')
    } catch {
      showToast(url)
    }
  }

  return (
    <>
      <button type="button" className="button button-primary" onClick={share}>
        Share this tour
      </button>
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </>
  )
}
