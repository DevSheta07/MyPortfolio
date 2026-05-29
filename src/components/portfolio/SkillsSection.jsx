import React from 'react'
import { Code2, Layers, Database, BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'

const SkillCard = ({ icon, title, items }) => {
  return (
    <div className="bg-parchment-50 p-8 rounded-lg border border-lilac-ash/20 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-space-indigo rounded-lg flex items-center justify-center text-parchment-50">{icon}</div>
        <h3 className="text-xl font-bold text-space-indigo">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 bg-almond-silk/20 text-space-indigo border border-almond-silk/35 rounded-full text-sm font-medium hover:bg-almond-silk/35 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const SkillsSection = ({ sectionRef, skills }) => {
  return (
    <section ref={sectionRef} className="bg-parchment-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Expertise" title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard icon={<Code2 size={24} />} title="Programming Languages" items={skills.languages} />
          <SkillCard icon={<Layers size={24} />} title="Frameworks & Tools" items={skills.frameworks} />
          <SkillCard icon={<Database size={24} />} title="Database & Cloud" items={skills.database} />
          <SkillCard icon={<BookOpen size={24} />} title="Core Subjects" items={skills.subjects} />
        </div>
      </div>
    </section>
  )
}

export default SkillsSection