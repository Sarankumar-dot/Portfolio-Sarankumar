/**
 * Card — Neobrutalist container with 3px black border and hard-offset shadow.
 * Supports optional rotation for the "sticker-book" asymmetry effect.
 */
export default function Card({ children, className = '', rotate = '', hover = false, ...props }) {
  const rotateClass = rotate ? `${rotate} ${hover ? 'hover:rotate-0' : ''}` : ''
  const hoverClass = hover ? 'transition-transform duration-200' : ''

  return (
    <div
      className={`bg-surface-container-lowest brutal-border brutal-shadow ${rotateClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
