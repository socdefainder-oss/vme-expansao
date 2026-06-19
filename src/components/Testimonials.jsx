import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Testimonials() {
  return (
    <section className="relative bg-ink-950 section-pad">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(12,27,42,0.5),transparent_70%)]" />
      <div className="container-content relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem os participantes"
          subtitle="Espaços reservados — os depoimentos reais serão incluídos em breve."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="card-base flex flex-col p-8"
            >
              <Quote className="h-8 w-8 text-gold/40" strokeWidth={1.5} />
              <p className="mt-5 flex-1 font-serif text-lg leading-relaxed text-white/75">
                “{t.quote}”
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.05] text-sm font-semibold text-white/40">
                  ?
                </span>
                <div>
                  <p className="text-sm font-semibold text-white/80">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
