import { ArrowDown, Download, MapPin } from 'lucide-react'
import Button from './ui/Button'

const RESUME_URL = 'https://drive.google.com/file/d/12EfFi2DHC_pjrlHYbCfck44rX1S9iOMt/view?usp=sharing'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-start py-stack-lg">
      {/* Open to Work sticker */}
      <div className="absolute top-8 right-4 md:right-16 rotate-6 bg-primary-container text-on-primary-container brutal-border px-4 py-2 font-label text-label-bold brutal-shadow z-10 animate-pulse">
        ✦ OPEN TO WORK
      </div>

      {/* Main heading */}
      <h1 className="font-heading text-headline-xl max-md:text-headline-lg-mobile mb-stack-sm relative z-20 leading-tight">
        Hi, I'm{' '}
        <span className="bg-secondary-fixed px-2 inline-block -rotate-1 brutal-border">
          Sarankumar K
        </span>
      </h1>

      {/* Tagline */}
      <p className="font-body text-body-lg text-on-surface-variant mb-stack-md max-w-2xl">
        MERN Stack Full-Stack Developer building scalable, production-ready web applications.
      </p>

      {/* Role + Location badges */}
      <div className="flex flex-wrap items-center gap-3 mb-stack-lg">
        <span className="bg-inverse-surface text-inverse-on-surface px-4 py-2 brutal-border font-label text-label-bold uppercase">
          Software Developer (SDE-1)
        </span>
        <span className="bg-surface-container-highest px-4 py-2 brutal-border font-label text-label-bold uppercase flex items-center gap-2">
          <MapPin size={16} strokeWidth={3} />
          Tiruppur, India
        </span>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-stack-md">
        <Button
          href="#projects"
          variant="primary"
          icon={<ArrowDown size={18} strokeWidth={3} />}
          className="min-w-[180px] max-sm:w-full"
        >
          View Projects
        </Button>
        <Button
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          icon={<Download size={18} strokeWidth={3} />}
          className="min-w-[180px] max-sm:w-full"
        >
          Download Resume
        </Button>
      </div>
    </section>
  )
}
