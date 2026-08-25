import Badge from './ui/Badge'
import SectionHeading from './ui/SectionHeading'

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    accent: 'bg-secondary-fixed',
    textColor: 'text-on-secondary-fixed',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
    offset: '',
  },
  {
    title: 'Frontend',
    accent: 'bg-primary-container',
    textColor: 'text-on-primary-container',
    skills: ['React.js', 'Redux', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web Design'],
    offset: '-translate-y-1 translate-x-1',
  },
  {
    title: 'Backend',
    accent: 'bg-tertiary-container',
    textColor: 'text-on-tertiary-container',
    skills: ['Node.js', 'Express.js', 'REST API Design', 'Swagger/OpenAPI', 'JWT Authentication', 'bcrypt', 'Async/Await', 'Middleware'],
    offset: '',
  },
  {
    title: 'Databases',
    accent: 'bg-secondary-container',
    textColor: 'text-on-secondary-container',
    skills: ['MongoDB', 'MySQL', 'Database Design', 'CRUD Operations', 'Query Optimization'],
    offset: 'translate-x-1',
  },
  {
    title: 'DevOps / Deployment',
    accent: 'bg-primary-fixed',
    textColor: 'text-on-primary-fixed',
    skills: ['Docker', 'Render', 'Railway', 'Git', 'GitHub'],
    offset: '-translate-y-1',
  },
  {
    title: 'Core CS & Tools',
    accent: 'bg-surface-container-highest',
    textColor: 'text-on-surface',
    skills: ['Data Structures & Algorithms', 'OOP', 'System Design Basics', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Agile', 'Debugging'],
    offset: 'translate-x-1 translate-y-1',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-stack-md scroll-mt-24">
      <SectionHeading>Tech Stack / Loadout</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-stack-lg">
        {SKILL_CATEGORIES.map(({ title, accent, textColor, skills, offset }) => (
          <div
            key={title}
            className={`bg-surface-container-lowest brutal-border brutal-shadow flex flex-col h-full relative ${offset}`}
          >
            <div
              className={`${accent} ${textColor} p-3 border-b-[3px] border-on-background font-heading text-headline-sm uppercase`}
            >
              {title}
            </div>
            <div className="p-stack-md flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="dark">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
