export function Rating({ avg, count }: { avg: number; count: number }) {
  if (count === 0) return <span className="rating rating-new">New</span>
  return (
    <span className="rating" aria-label={`Rated ${avg.toFixed(1)} out of 5 by ${count} people`}>
      ★ {avg.toFixed(1)} <span className="muted">({count})</span>
    </span>
  )
}
