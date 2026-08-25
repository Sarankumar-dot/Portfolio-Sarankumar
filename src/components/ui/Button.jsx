/**
 * Button — Neobrutalist button with 3px border, hard shadow, and press effect.
 * Per DESIGN.md: uppercase Space Mono Bold, shadow shrink + translate on hover.
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className = '',
  icon,
  ...props
}) {
  const variants = {
    primary: 'bg-secondary-fixed text-on-secondary-fixed',
    secondary: 'bg-surface-container-lowest text-on-background',
    dark: 'bg-on-background text-background',
    accent: 'bg-primary-container text-on-primary-container',
  }

  const Tag = href ? 'a' : as

  return (
    <Tag
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-label text-label-bold uppercase brutal-border brutal-shadow brutal-press ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {icon && icon}
      {children}
    </Tag>
  )
}
