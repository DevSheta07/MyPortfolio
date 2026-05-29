import React from 'react'
import { Download } from 'lucide-react'

const HeroSection = ({ sectionRef, onNavigate, onResumeDownload }) => {
  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="inline-block bg-lilac-ash/20 text-space-indigo px-4 py-2 rounded-full text-sm font-medium mb-8 border border-lilac-ash/30">
          Welcome to my portfolio
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-space-indigo mb-4">Dev Sheta</h1>
        <p className="text-xl text-dusty-grape mb-4">Computer Engineering Student</p>
        <p className="text-lg text-lilac-ash mb-8">Building meaningful digital experiences through code.</p>
        <p className="max-w-2xl mx-auto text-dusty-grape mb-12">
          A developer focused on backend systems, AI-powered applications, and modern web development.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 bg-space-indigo text-parchment-50 rounded-lg hover:bg-dusty-grape transition-colors font-medium"
          >
            View Projects
          </button>
          <button
            onClick={onResumeDownload}
            className="px-8 py-3 border-2 border-space-indigo text-space-indigo rounded-lg hover:bg-space-indigo hover:text-parchment-50 transition-colors font-medium inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection