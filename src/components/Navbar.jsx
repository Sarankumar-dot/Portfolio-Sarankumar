import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const RESUME_URL = 'https://drive.google.com/file/d/12EfFi2DHC_pjrlHYbCfck44rX1S9iOMt/view?usp=sharing'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="bg-background fixed top-0 w-full z-50 border-b-[3px] border-on-background shadow-[6px_6px_0px_#000000]">
      <div className="flex justify-between items-center w-full px-4 sm:px-margin-page py-stack-md mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#" className="font-heading text-headline-sm font-bold text-on-background tracking-tighter">
          SARAN.DEV
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <a
                key={href}
                href={href}
                className={`px-4 py-1 font-label text-label-bold uppercase transition-all duration-150 ${
                  isActive
                    ? 'bg-primary text-on-primary brutal-border'
                    : 'text-on-background hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Desktop Resume Button */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-6 py-2 font-label text-label-bold uppercase brutal-border brutal-shadow brutal-press"
        >
          <Download size={16} strokeWidth={3} />
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden brutal-border brutal-shadow brutal-press p-2 bg-surface-container-lowest"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-background border-t-[3px] border-on-background px-4 pb-6 pt-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={`px-4 py-3 font-label text-label-bold uppercase brutal-border brutal-press ${
                    isActive
                      ? 'bg-primary text-on-primary brutal-shadow'
                      : 'bg-surface-container-lowest text-on-background brutal-shadow'
                  }`}
                >
                  {label}
                </a>
              )
            })}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 px-4 py-3 font-label text-label-bold uppercase brutal-border brutal-shadow brutal-press bg-secondary-fixed text-on-secondary-fixed mt-2"
            >
              <Download size={16} strokeWidth={3} />
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
