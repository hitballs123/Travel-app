export function ComingSoon({ title, emoji }: { title: string; emoji: string }) {
  return (
    <main className="page coming-soon">
      <div className="coming-soon-emoji" aria-hidden="true">
        {emoji}
      </div>
      <h1>{title}</h1>
      <p className="muted">Coming soon.</p>
    </main>
  )
}
