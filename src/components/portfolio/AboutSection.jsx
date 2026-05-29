import React from 'react'

const AboutSection = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="bg-parchment-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          <div>
            <p className="text-sm font-semibold text-lilac-ash uppercase tracking-wide">About Me</p>
            <h2 className="text-4xl font-bold text-space-indigo mb-6 mt-2">Who I Am</h2>
            <p className="text-dusty-grape leading-relaxed mb-6">
              I'm a passionate Computer Engineering student at Pandit Deendayal Energy University with a strong
              interest in Backend Development, Data Science, and AI. With a CGPA of 9.54 and consistent academic
              excellence (88.92% in Class XII, 96.16% in Class X), I'm committed to solving real-world problems through
              technology. My expertise spans full-stack development, deep learning, and data science.
            </p>
            <p className="text-dusty-grape leading-relaxed mb-6">
              I've worked on impactful projects including a healthcare platform for affordable medicine alternatives
              and an AI-powered kidney stone detection system. My journey involves creating scalable backend systems,
              exploring AI-powered applications, and building modern web experiences that make a difference.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-lilac-ash/12 p-5 rounded-lg border border-lilac-ash/25">
                <p className="text-sm text-lilac-ash">Currently Studying</p>
                <p className="font-bold text-space-indigo">B.Tech Computer Engineering</p>
                <p className="text-sm text-dusty-grape">PDEU, Gandhinagar | CGPA: 9.54</p>
              </div>
              <div className="bg-almond-silk/18 p-5 rounded-lg border border-almond-silk/35">
                <p className="text-sm text-lilac-ash">Location</p>
                <p className="font-bold text-space-indigo">Gujarat, India</p>
                <p className="text-sm text-dusty-grape">Open to internships and collaborations</p>
              </div>
            </div>
          </div>
            <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-2xl border border-lilac-ash/20 bg-parchment-100 p-8">
              <p className="text-sm font-semibold text-lilac-ash uppercase tracking-wide mb-3">Focus Areas</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-space-indigo text-parchment-50 text-sm font-medium">Backend Systems</span>
                <span className="px-4 py-2 rounded-full bg-dusty-grape text-parchment-50 text-sm font-medium">AI & ML</span>
                <span className="px-4 py-2 rounded-full bg-almond-silk text-space-indigo text-sm font-medium">Full Stack Development</span>
                <span className="px-4 py-2 rounded-full bg-lilac-ash text-parchment-50 text-sm font-medium">Problem Solving</span>
              </div>
              <p className="mt-6 text-dusty-grape leading-relaxed">
                I prefer building practical systems with clean structure, strong fundamentals, and a polished UI.
              </p>
            </div>
            <div className="rounded-2xl border border-lilac-ash/20 bg-space-indigo p-8 text-parchment-50 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-amber-50/80 mb-3">Currently</p>
                <h3 className="text-2xl font-bold mb-4">Building in public</h3>
                <p className="text-parchment-50/80 leading-relaxed">
                  Working on projects that combine data, interfaces, and useful automation.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-parchment-50/20 text-sm text-parchment-50/80">
                Available for internships
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection