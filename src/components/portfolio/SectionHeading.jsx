import React from 'react'

const SectionHeading = ({ eyebrow, title, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center'

  return (
    <>
      <p className={`text-sm font-semibold text-lilac-ash uppercase tracking-wide ${alignClass}`}>{eyebrow}</p>
      <h2 className={`text-4xl font-bold text-space-indigo mb-12 mt-2 ${alignClass}`}>{title}</h2>
    </>
  )
}

export default SectionHeading