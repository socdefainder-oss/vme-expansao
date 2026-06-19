import Reveal from './Reveal.jsx'

// Standard eyebrow + title + optional subtitle block, centered by default.
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold/60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-sans text-3xl font-bold leading-[1.1] tracking-tightest sm:text-4xl md:text-[2.75rem] ${
          light ? 'text-ink-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed sm:text-lg ${light ? 'text-ink-700/80' : 'text-white/60'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
