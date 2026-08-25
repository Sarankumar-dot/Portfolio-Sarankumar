import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/Icons'

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-stack-xl mt-stack-xl border-t-[3px] border-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-margin-page flex flex-col md:flex-row justify-between items-center gap-stack-lg">
        <div className="font-heading text-headline-sm font-bold text-center md:text-left">
          © 2026 Sarankumar K — Built with the MERN Stack
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://github.com/Sarankumar-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-label-bold uppercase text-on-surface hover:text-primary transition-colors active:translate-y-1 flex items-center gap-1"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/saran-kumar-"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-label-bold uppercase text-on-surface hover:text-primary transition-colors active:translate-y-1 flex items-center gap-1"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:kumarsaran2004@gmail.com"
            className="font-label text-label-bold uppercase text-on-surface hover:text-primary transition-colors active:translate-y-1 flex items-center gap-1"
          >
            <Mail size={16} strokeWidth={3} />
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
