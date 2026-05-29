import React from 'react'
import SectionHeading from './SectionHeading'

const ProjectsSection = ({ sectionRef, projects }) => {
  return (
    <section ref={sectionRef} className="bg-parchment-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="My Work" title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-almond-silk/18 p-8 rounded-lg border border-lilac-ash/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-space-indigo">{project.title}</h3>
                <span className="text-xs font-semibold text-space-indigo bg-parchment-50 px-3 py-1 rounded-full border border-lilac-ash/20">
                  {project.dates}
                </span>
              </div>
              <p className="text-dusty-grape mb-6 mt-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-parchment-50 text-space-indigo rounded-full text-sm font-medium border border-lilac-ash/20 hover:bg-parchment-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-space-indigo font-semibold hover:text-dusty-grape transition-colors inline-flex items-center gap-1"
              >
                View Code <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection