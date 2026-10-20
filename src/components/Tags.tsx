export function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}
