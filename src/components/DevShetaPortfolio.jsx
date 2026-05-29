import React, { useState, useRef } from 'react';
import { Download, Github, Linkedin, Mail, Code2, Layers, Database, BookOpen } from 'lucide-react';

const DevShetaPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dev_Sheta_Resume.pdf';
    link.click();
  };

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = {
    languages: ['C++', 'C', 'Python', 'JavaScript'],
    frameworks: ['Node.js', 'ReactJS', 'ExpressJS', 'Tailwind CSS'],
    database: ['MySQL', 'MongoDB'],
    subjects: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS'],
  };

  const projects = [
    {
      title: 'MediSearchApp',
      description: 'Developed a web-based platform that allows patients to search for affordable generic alternatives to expensive brand-name medications. Streamlined the medication search experience by integrating a drug database, making essential healthcare more accessible and cost-effective.',
      tech: ['JavaScript', 'ReactJS', 'NodeJS'],
      dates: 'Feb 2026 – April 2026',
      link: '#',
    },
    {
      title: 'Kidney Stone Detection Using CNN',
      description: 'Engineered a deep learning-based diagnostic tool using Convolutional Neural Networks (CNN) to automate the identification of kidney stones in medical CT scans. Implemented comprehensive image preprocessing and data augmentation pipelines to enhance model accuracy.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook'],
      dates: 'Jan 2026 – Feb 2026',
      link: '#',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Engineering',
      school: 'Pandit Deendayal Energy University (PDEU), Gandhinagar',
      year: '2023 – Present',
      details: 'CGPA: 9.54',
    },
    {
      degree: 'Class XII Science',
      school: 'Aksharjyoti High School, Surat',
      year: '2022 – 2023',
      details: '99.77 Percentile',
    },
    {
      degree: 'Class X',
      school: 'Shree Sharda Vidhyamandir, Surat',
      year: '2020 – 2021',
      details: '99.73 Percentile',
    },
  ];

  const certifications = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      year: '2024',
    },
    {
      title: 'Database Structures and Management with MySQL',
      issuer: 'Meta',
      year: '2024',
    },
    {
      title: 'Interactivity with JavaScript',
      issuer: 'University of Michigan',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-900">Dev Sheta</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-slate-900 border-b-2 border-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="hidden md:block">
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium"
              >
                <Download size={18} />
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={sectionRefs.home} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block bg-amber-200 text-slate-900 px-4 py-2 rounded-full text-sm font-medium mb-8">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">Dev Sheta</h1>
          <p className="text-xl text-slate-700 mb-4">Computer Engineering Student & Full Stack Developer</p>
          <p className="text-lg text-slate-600 mb-8">Building meaningful digital experiences through code.</p>
          <p className="max-w-2xl mx-auto text-slate-600 mb-12">
            A developer focused on backend systems, AI-powered applications, and modern web development.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View Projects
            </button>
            <button
              onClick={handleResumeDownload}
              className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-colors font-medium inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">About Me</p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 mt-2">Who I Am</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                I'm a passionate Computer Engineering student at Pandit Deendayal Energy University with a strong interest in Backend Development, Data Science, and AI. With a CGPA of 9.54 and consistent academic excellence (99.77% in Class XII, 99.73% in Class X), I'm committed to solving real-world problems through technology. My expertise spans full-stack development, deep learning, and cloud technologies.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I've worked on impactful projects including a healthcare platform for affordable medicine alternatives and an AI-powered kidney stone detection system. My journey involves creating scalable backend systems, exploring AI-powered applications, and building modern web experiences that make a difference.
              </p>
              <div className="space-y-4">
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-slate-600">Currently Studying</p>
                  <p className="font-bold text-slate-900">B.Tech Computer Engineering</p>
                  <p className="text-sm text-slate-600">PDEU, Gandhinagar | CGPA: 9.54</p>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-slate-600">Location</p>
                  <p className="font-bold text-slate-900">Gujarat, India</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <p className="text-lg font-semibold">Your Photo Here</p>
                  <p className="text-sm">Add a professional portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide text-center">Expertise</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center mt-2">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-amber-100 text-slate-800 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Frameworks & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((framework) => (
                  <span
                    key={framework}
                    className="px-4 py-2 bg-amber-100 text-slate-800 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Database & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.database.map((db) => (
                  <span
                    key={db}
                    className="px-4 py-2 bg-amber-100 text-slate-800 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Subjects */}
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Core Subjects</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="px-4 py-2 bg-amber-100 text-slate-800 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide text-center">My Work</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center mt-2">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-amber-100 p-8 rounded-lg border border-amber-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <span className="text-xs font-semibold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {project.dates}
                  </span>
                </div>
                <p className="text-slate-700 mb-6 mt-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-slate-900 font-semibold hover:text-slate-700 transition-colors inline-flex items-center gap-1">
                  View Code <span className="text-lg">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={sectionRefs.education} className="bg-amber-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide text-center">Background</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center mt-2">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                  {idx !== education.length - 1 && <div className="w-1 h-24 bg-slate-300 mt-2"></div>}
                </div>
                <div className="bg-white p-6 rounded-lg flex-1 border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                    <span className="bg-amber-200 text-slate-900 px-3 py-1 rounded-lg text-sm font-semibold border border-amber-300">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-slate-700 font-medium mb-1">{edu.school}</p>
                  <p className="text-slate-600 text-sm">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide text-center">Recognition</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center mt-2">Achievements & Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="bg-amber-100 p-8 rounded-lg border border-amber-200 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg mx-auto mb-4 flex items-center justify-center text-white text-lg">
                  🎖️
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-slate-700 text-sm font-semibold mb-1">{cert.issuer}</p>
                <p className="text-slate-600 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="bg-amber-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide text-center">Get In Touch</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center mt-2">Let's Work Together</h2>
          <p className="text-center text-slate-600 mb-12">Have a project in mind or just want to chat? Feel free to reach out.</p>

          <form className="bg-white p-8 rounded-lg border border-slate-200 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 transition-colors bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 transition-colors bg-slate-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project or just say hi..."
                rows="6"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-slate-900 transition-colors bg-slate-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition-colors font-semibold inline-flex items-center justify-center gap-2"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div>
              <h3 className="text-xl font-bold mb-1">Dev Sheta</h3>
              <p className="text-slate-300">Computer Engineering Student & Full Stack Developer</p>
              <div className="mt-4 space-y-1 text-sm text-slate-400">
                <p>📧 devsheta114@gmail.com</p>
                <p>📱 +91 9099430287</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/devsheta" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600 transition-colors" 
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/devsheta" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600 transition-colors" 
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:devsheta114@gmail.com" 
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600 transition-colors" 
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 Dev Sheta. Made with React & Vite</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DevShetaPortfolio;