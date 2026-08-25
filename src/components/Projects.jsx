import { ExternalLink, BarChart3, ShoppingBag, Wallet, StickyNote } from 'lucide-react'
import { GithubIcon } from './ui/Icons'
import Badge from './ui/Badge'
import Button from './ui/Button'
import SectionHeading from './ui/SectionHeading'

const PROJECTS = [
  {
    title: 'Resume ATS Checker',
    icon: <BarChart3 size={24} strokeWidth={3} />,
    accent: 'bg-primary-container',
    accentText: 'text-on-primary-container',
    rotate: '-rotate-1',
    description: 'Full-stack ATS resume checker parsing PDF/DOCX resumes, computing JD-match score with matched/missing keyword breakdowns, ATS-parseability checks, section detection, action-verb/quantification suggestions. JWT auth with Google OAuth, Prisma/PostgreSQL backend, React (Vite) frontend.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT'],
    links: [
      { label: 'Live Demo', href: 'https://resume-ats-score-checker-ruddy.vercel.app', icon: <ExternalLink size={14} strokeWidth={3} /> },
    ],
  },
  {
    title: 'Sellora',
    icon: <ShoppingBag size={24} strokeWidth={3} />,
    accent: 'bg-secondary-fixed',
    accentText: 'text-on-secondary-fixed',
    rotate: 'rotate-2',
    description: 'Scalable e-commerce platform with MVC architecture, JWT access/refresh tokens, role-based auth, OTP password reset, product management, cart, order processing, seller/admin dashboards, Cloudinary uploads, and Swagger docs.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Docker', 'Render', 'Railway'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Sarankumar-dot/Sellora', icon: <GithubIcon size={14} /> },
      { label: 'API Docs', href: 'https://sellora-backend-u514.onrender.com/api/docs', icon: <ExternalLink size={14} strokeWidth={3} /> },
    ],
  },
  {
    title: 'Expense Tracker',
    icon: <Wallet size={24} strokeWidth={3} />,
    accent: 'bg-tertiary-container',
    accentText: 'text-on-tertiary-container',
    rotate: 'rotate-1',
    description: 'Secure full-stack expense tracker with JWT auth, email OTP password recovery, full CRUD for expenses (category, amount, date), REST APIs + MySQL, reusable React components, bcrypt hashing, real-time updates.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Tailwind CSS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Sarankumar-dot/ExpenseTracker', icon: <GithubIcon size={14} /> },
    ],
  },
  {
    title: 'Notes App',
    icon: <StickyNote size={24} strokeWidth={3} />,
    accent: 'bg-surface-variant',
    accentText: 'text-on-surface-variant',
    rotate: '-rotate-2',
    description: 'Full-stack note-taking app with JWT auth, OTP recovery, full CRUD for notes, REST APIs + MySQL, reusable components, and real-time updates.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Tailwind CSS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Sarankumar-dot/Notes-App', icon: <GithubIcon size={14} /> },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-stack-md scroll-mt-24">
      <SectionHeading>Projects / Output</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg lg:gap-stack-xl">
        {PROJECTS.map(({ title, icon, accent, accentText, rotate, description, tech, links }) => (
          <article
            key={title}
            className={`bg-surface-container-lowest brutal-border brutal-shadow flex flex-col ${rotate} hover:rotate-0 transition-transform duration-200`}
          >
            <div className={`${accent} ${accentText} p-3 border-b-[3px] border-on-background flex justify-between items-center`}>
              <h3 className="font-heading text-headline-sm font-bold uppercase truncate">{title}</h3>
              {icon}
            </div>
            <div className="p-stack-md flex-grow flex flex-col justify-between">
              <div>
                <p className="font-body text-body-md mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-stack-md">
                  {tech.map((t) => (
                    <Badge key={t} variant="surface">{t}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {links.map(({ label, href, icon: linkIcon }) => (
                  <Button key={label} href={href} target="_blank" rel="noopener noreferrer" variant="dark" icon={linkIcon} className="flex-1 min-w-[120px] text-center">
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
