import type { Block } from '../types'

// A new block type = add it to Block in types.ts + one case here.
export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return <p className="block-text">{block.data.text}</p>
    case 'tip':
      return (
        <div className="block-callout block-tip">
          <span className="block-label">Tip</span>
          <p>{block.data.text}</p>
        </div>
      )
    case 'tryThis':
      return (
        <div className="block-callout block-try">
          <span className="block-label">Try this</span>
          <p>{block.data.text}</p>
        </div>
      )
    case 'link':
      return (
        <a className="block-link" href={block.data.url} target="_blank" rel="noopener noreferrer">
          {block.data.label} ↗
        </a>
      )
    case 'photo':
      return <div className="block-placeholder">Photo{block.data.caption ? `: ${block.data.caption}` : ''}</div>
    case 'audio':
      return <div className="block-placeholder">Audio{block.data.title ? `: ${block.data.title}` : ''}</div>
  }
}
