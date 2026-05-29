import React from 'react'
import SectionHeading from './SectionHeading'

const CertificationsSection = ({ certifications }) => {
  return (
    <section className="bg-parchment-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Recognition" title="Achievements & Certifications" />
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-lilac-ash/12 p-8 rounded-lg border border-lilac-ash/20 text-center transition-colors">
              <div className="w-12 h-12 bg-space-indigo rounded-lg mx-auto mb-4 flex items-center justify-center text-parchment-50 text-lg">
                🎖️
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-bold text-space-indigo mb-2 hover:text-dusty-grape hover:underline inline-block"
              >
                {cert.title}
              </a>
              <p className="text-dusty-grape text-sm font-semibold mb-1">{cert.issuer}</p>
              <p className="text-lilac-ash text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection