import { Mail, Globe, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/Icons'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

const SOCIALS = [
  { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/saran-kumar-' },
  { icon: <GithubIcon size={20} />, label: 'GitHub', href: 'https://github.com/Sarankumar-dot' },
  { icon: <Globe size={20} strokeWidth={3} />, label: 'Portfolio', href: 'https://portfolio-sarankumar.vercel.app' },
  { icon: <Phone size={20} strokeWidth={3} />, label: 'Phone', href: 'tel:+916379891950' },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="bg-secondary-fixed brutal-border brutal-shadow p-8 sm:p-stack-xl rotate-1 max-sm:rotate-0">
        <SectionHeading className="text-on-secondary-fixed tracking-tighter mb-4">
          Get In Touch
        </SectionHeading>

        <p className="font-body text-body-lg text-on-secondary-fixed-variant mb-stack-lg max-w-xl">
          I'm actively looking for SDE-1 opportunities. Let's connect and build something great together.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:kumarsaran2004@gmail.com"
          className="inline-flex items-center gap-2 font-heading text-headline-sm md:text-headline-md font-bold text-on-secondary-fixed bg-surface-container-lowest px-4 py-2 brutal-border brutal-press mb-stack-lg break-all"
        >
          <Mail size={24} strokeWidth={3} />
          kumarsaran2004@gmail.com
        </a>

        {/* Social icons */}
        <div className="flex flex-wrap gap-4">
          {SOCIALS.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="bg-surface-container-lowest p-3 brutal-border brutal-shadow brutal-press flex items-center justify-center gap-2"
            >
              {icon}
              <span className="font-label text-label-bold uppercase hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
