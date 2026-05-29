import React, { useState } from 'react'
import SectionHeading from './SectionHeading'

const ContactSection = ({ sectionRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'Anonymous'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:devsheta114@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section ref={sectionRef} className="bg-parchment-100 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get In Touch" title="Let's Work Together" />
        <p className="text-center text-dusty-grape mb-12">Have a project in mind or just want to chat? Feel free to reach out.</p>

        <form onSubmit={handleSubmit} className="bg-parchment-50 p-8 rounded-lg border border-lilac-ash/20 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-space-indigo mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border border-lilac-ash/30 rounded-lg focus:outline-none focus:border-space-indigo transition-colors bg-parchment-100 text-space-indigo placeholder:text-lilac-ash"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-space-indigo mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-2 border border-lilac-ash/30 rounded-lg focus:outline-none focus:border-space-indigo transition-colors bg-parchment-100 text-space-indigo placeholder:text-lilac-ash"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-space-indigo mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or just say hi..."
              rows="6"
              required
              className="w-full px-4 py-2 border border-lilac-ash/30 rounded-lg focus:outline-none focus:border-space-indigo transition-colors bg-parchment-100 text-space-indigo placeholder:text-lilac-ash"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-space-indigo text-parchment-50 py-3 rounded-lg hover:bg-dusty-grape transition-colors font-semibold inline-flex items-center justify-center gap-2"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection