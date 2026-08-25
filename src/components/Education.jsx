import { GraduationCap, Award } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import SectionHeading from './ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-stack-md scroll-mt-24">
      <SectionHeading inverted rotate="-rotate-1">Education</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
        {/* B.Tech */}
        <Card className="p-6 translate-x-1">
          <div className="flex items-start gap-3 mb-3">
            <GraduationCap size={28} strokeWidth={3} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-headline-sm font-bold uppercase">
                B.Tech in Computer Science and Business Systems
              </h3>
              <p className="font-label text-label-bold text-outline mt-1">
                PSNA College of Engineering and Technology, Dindigul
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Badge variant="secondary">2022 – 2026</Badge>
                <Badge variant="primary">CGPA: 8.02 / 10</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* School */}
        <Card className="p-6 -translate-x-1">
          <div className="flex items-start gap-3 mb-3">
            <GraduationCap size={28} strokeWidth={3} className="text-tertiary shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-headline-sm font-bold uppercase">
                Class 12 & Class 10
              </h3>
              <p className="font-label text-label-bold text-outline mt-1">
                Saradha Vidhyalaya Matriculation Higher Secondary School
              </p>
              <p className="font-label text-label-sm text-outline mt-0.5">2019 – 2022</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Badge variant="tertiary">Class 12: 84.16%</Badge>
                <Badge variant="surface">Class 10: 71.4%</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Certifications */}
      <div className="mt-stack-lg">
        <h3 className="font-heading text-headline-sm uppercase border-b-[3px] border-on-background pb-2 mb-4 flex items-center gap-2">
          <Award size={20} strokeWidth={3} className="text-secondary" />
          Certifications
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-secondary-fixed brutal-border brutal-shadow brutal-press px-4 py-3 font-label text-label-bold uppercase rotate-1">
            ✦ Java Programming Certification – Udemy
          </div>
          <div className="bg-tertiary-container text-on-tertiary-container brutal-border brutal-shadow brutal-press px-4 py-3 font-label text-label-bold uppercase -rotate-1">
            ✦ Java and SQL Certification – CodeChef
          </div>
        </div>
      </div>
    </section>
  )
}
