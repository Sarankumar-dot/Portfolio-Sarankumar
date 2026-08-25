import { Briefcase, Calendar } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import SectionHeading from './ui/SectionHeading'

const EXPERIENCE_POINTS = [
  'Built and deployed full-stack web features for live client projects using the MERN stack, following clean, maintainable coding practices',
  'Developed reusable, responsive React.js UI components and integrated REST APIs with Node.js/Express.js backends, resolving bugs identified in senior developer code reviews',
  'Partnered with designers and cross-functional teams to improve UI/UX consistency and cross-device compatibility, taking ownership of assigned modules end-to-end',
]

export default function Experience() {
  return (
    <section id="experience" className="py-stack-md scroll-mt-24">
      <SectionHeading inverted rotate="rotate-1">Experience</SectionHeading>

      {/* Timeline */}
      <div className="relative pl-8 border-l-[4px] border-dashed border-on-background py-4">
        {/* Timeline dot */}
        <div className="absolute -left-[14px] top-6 w-6 h-6 bg-secondary-fixed brutal-border rounded-full z-10" />

        <Card className="p-stack-md ml-stack-md relative">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
            <div>
              <h3 className="font-heading text-headline-sm font-bold uppercase flex items-center gap-2">
                <Briefcase size={20} strokeWidth={3} className="text-primary" />
                Web Developer Intern
              </h3>
              <Badge variant="surface" className="mt-2">
                ST Software Solutions
              </Badge>
            </div>
            <span className="flex items-center gap-2 bg-surface-variant text-on-surface-variant px-3 py-1 brutal-border font-label text-label-sm">
              <Calendar size={14} strokeWidth={3} />
              June 2025 – July 2025
            </span>
          </div>

          {/* Divider */}
          <hr className="border-t-[3px] border-on-background mb-4" />

          {/* Bullet points */}
          <ul className="space-y-3 font-body text-body-md">
            {EXPERIENCE_POINTS.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="font-bold text-primary text-lg mt-0.5 shrink-0">&gt;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
