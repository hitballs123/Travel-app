import { Link } from 'react-router'

export function NotFound() {
  return (
    <main className="page">
      <h1>Not found</h1>
      <p className="muted">This tour or stop doesn't exist.</p>
      <Link to="/" className="button button-secondary">
        Back to all tours
      </Link>
    </main>
  )
}
