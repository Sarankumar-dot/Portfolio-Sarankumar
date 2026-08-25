import { Mail, Phone, Globe } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './ui/Icons'
import Card from './ui/Card'
import Badge from './ui/Badge'
import SectionHeading from './ui/SectionHeading'

const SOFT_SKILLS = [
  { label: 'Team Collaboration', variant: 'primary', rotate: '-rotate-2' },
  { label: 'Ownership', variant: 'tertiary', rotate: 'rotate-1' },
  { label: 'Communication', variant: 'surface', rotate: 'rotate-2' },
  { label: 'Problem-Solving', variant: 'secondary', rotate: '-rotate-1' },
  { label: 'Adaptability', variant: 'primary', rotate: '-rotate-3' },
  { label: 'Time Management', variant: 'tertiary', rotate: 'rotate-2' },
]

const CONTACTS = [
  { icon: <Mail size={16} strokeWidth={3} />, text: 'kumarsaran2004@gmail.com', href: 'mailto:kumarsaran2004@gmail.com' },
  { icon: <Phone size={16} strokeWidth={3} />, text: '+91 6379891950', href: 'tel:+916379891950' },
  { icon: <LinkedinIcon size={16} />, text: 'linkedin.com/in/saran-kumar-', href: 'https://linkedin.com/in/saran-kumar-' },
  { icon: <GithubIcon size={16} />, text: 'github.com/Sarankumar-dot', href: 'https://github.com/Sarankumar-dot' },
  { icon: <Globe size={16} strokeWidth={3} />, text: 'portfolio-sarankumar.vercel.app', href: 'https://portfolio-sarankumar.vercel.app' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main content */}
        <div className="lg:col-span-8">
          <SectionHeading inverted rotate="-rotate-1">About Me</SectionHeading>
          <Card className="p-stack-md">
            <p className="font-body text-body-lg mb-4">
              I'm a fresher Software Developer with a B.Tech in Computer Science and Business Systems (2026) from PSNA College of Engineering, Dindigul. I have a strong foundation in <strong>Java, Data Structures & Algorithms, and OOP</strong>, combined with hands-on MERN full-stack experience building production-ready applications.
            </p>
            <p className="font-body text-body-lg mb-4">
              My expertise spans <strong>React.js, Node.js, Express.js, MongoDB, and MySQL</strong>, with practical experience in REST API design, JWT authentication, Swagger/OpenAPI documentation, database design, Docker containerization, and cloud deployment on Render/Railway.
            </p>
            <p className="font-body text-body-lg">
              During my internship at ST Software Solutions, I shipped production features for live client projects — resolving bugs from senior code reviews, building reusable components, and taking ownership of modules end-to-end. I'm looking for SDE-1 roles where I can contribute to impactful engineering teams.
            </p>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-stack-md">
          {/* Soft skills */}
          <div>
            <h3 className="font-heading text-headline-sm uppercase border-b-[3px] border-on-background pb-2 mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {SOFT_SKILLS.map(({ label, variant, rotate }) => (
                <Badge key={label} variant={variant} rotate={rotate} className="text-[13px] px-3 py-1.5">
                  {label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick contact */}
          <div>
            <h3 className="font-heading text-headline-sm uppercase border-b-[3px] border-on-background pb-2 mb-4">
              Quick Contact
            </h3>
            <div className="flex flex-col gap-2">
              {CONTACTS.map(({ icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-label text-label-sm text-on-surface-variant hover:text-primary transition-colors break-all"
                >
                  {icon}
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
