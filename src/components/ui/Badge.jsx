/**
 * Badge — Small neobrutalist "sticker" chip.
 * Used for tech stack labels, soft skill tags, etc.
 * Max 4px border-radius per DESIGN.md.
 */
export default function Badge({
  children,
  variant = 'dark',
  rotate = '',
  className = '',
  ...props
}) {
  const variants = {
    dark: 'bg-on-background text-background',
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
    surface: 'bg-surface-variant text-on-surface-variant',
    muted: 'bg-surface-container-highest text-on-surface',
  }

  return (
    <span
      className={`inline-block px-2 py-1 font-label text-label-sm uppercase brutal-border rounded-[4px] ${variants[variant] || variants.dark} ${rotate} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
