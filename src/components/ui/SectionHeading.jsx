/**
 * SectionHeading — Consistent section title treatment.
 * Some headings get the inverted (dark bg) "sticker" style, others are plain.
 */
export default function SectionHeading({ children, inverted = false, rotate = '', className = '' }) {
  if (inverted) {
    return (
      <h2
        className={`font-heading text-headline-lg max-md:text-headline-lg-mobile mb-stack-lg uppercase inline-block px-4 py-2 bg-on-background text-background ${rotate} ${className}`}
      >
        {children}
      </h2>
    )
  }

  return (
    <h2
      className={`font-heading text-headline-lg max-md:text-headline-lg-mobile mb-stack-lg uppercase tracking-tight ${className}`}
    >
      {children}
    </h2>
  )
}
