import React, { useRef, useState } from 'react'
import Navigation from './portfolio/Navigation'
import HeroSection from './portfolio/HeroSection'
import AboutSection from './portfolio/AboutSection'
import SkillsSection from './portfolio/SkillsSection'
import ProjectsSection from './portfolio/ProjectsSection'
import EducationSection from './portfolio/EducationSection'
import CertificationsSection from './portfolio/CertificationsSection'
import ContactSection from './portfolio/ContactSection'
import FooterSection from './portfolio/FooterSection'
import { navItems, skills, projects, education, certifications } from './portfolio/portfolioData'

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('home')
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  }

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Dev_Sheta_Resume.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen bg-parchment-100">
      <Navigation
        activeSection={activeSection}
        navItems={navItems}
        onNavigate={scrollToSection}
        onResumeDownload={handleResumeDownload}
      />
      <HeroSection sectionRef={sectionRefs.home} onNavigate={scrollToSection} onResumeDownload={handleResumeDownload} />
      <AboutSection sectionRef={sectionRefs.about} />
      <SkillsSection sectionRef={sectionRefs.skills} skills={skills} />
      <ProjectsSection sectionRef={sectionRefs.projects} projects={projects} />
      <EducationSection sectionRef={sectionRefs.education} education={education} />
      <CertificationsSection certifications={certifications} />
      <ContactSection sectionRef={sectionRefs.contact} />
      <FooterSection />
    </div>
  )
}

export default PortfolioPage