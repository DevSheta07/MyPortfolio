import React from 'react'
import { Download } from 'lucide-react'

const Navigation = ({ activeSection, navItems, onNavigate, onResumeDownload }) => {
  return (
    <nav className="sticky top-0 z-50 bg-parchment-50 border-b border-lilac-ash/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-space-indigo">Dev Sheta</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-space-indigo border-b-2 border-space-indigo' : 'text-dusty-grape hover:text-space-indigo'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            <button
              onClick={onResumeDownload}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-space-indigo text-space-indigo rounded-lg hover:bg-space-indigo hover:text-parchment-50 transition-colors font-medium"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation