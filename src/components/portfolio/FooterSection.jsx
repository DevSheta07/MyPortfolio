import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const FooterSection = () => {
  return (
    <footer className="bg-space-indigo text-parchment-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-wrap gap-8">
          <div>
            <h3 className="text-xl font-bold mb-1">Dev Sheta</h3>
            <p className="text-parchment-50/80">Computer Engineering Student </p>
            <div className="mt-4 space-y-1 text-sm text-parchment-50/70">
              <p>📧 devsheta114@gmail.com</p>
              <p>📱 +91 9099430287</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/DevSheta07"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-parchment-50/10 rounded-lg flex items-center justify-center text-parchment-50 hover:bg-parchment-50/20 transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-sheta"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-parchment-50/10 rounded-lg flex items-center justify-center text-parchment-50 hover:bg-parchment-50/20 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:devsheta114@gmail.com"
              className="w-10 h-10 bg-parchment-50/10 rounded-lg flex items-center justify-center text-parchment-50 hover:bg-parchment-50/20 transition-colors"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-parchment-50/20 mt-8 pt-8 text-center text-parchment-50/60 text-sm">
          <p>© 2026 Dev Sheta. Build with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection