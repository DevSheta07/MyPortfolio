import React from 'react'
import SectionHeading from './SectionHeading'

const EducationSection = ({ sectionRef, education }) => {
  return (
    <section ref={sectionRef} className="bg-parchment-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-lilac-ash rounded-full"></div>
                {idx !== education.length - 1 && <div className="w-1 h-24 bg-almond-silk mt-2"></div>}
              </div>
              <div className="bg-parchment-50 p-6 rounded-lg flex-1 border border-lilac-ash/20 hover:border-lilac-ash/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-space-indigo">{edu.degree}</h3>
                  <span className="bg-almond-silk/30 text-space-indigo px-3 py-1 rounded-lg text-sm font-semibold border border-almond-silk/35">
                    {edu.year}
                  </span>
                </div>
                <p className="text-dusty-grape font-medium mb-1">{edu.school}</p>
                <p className="text-lilac-ash text-sm">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection