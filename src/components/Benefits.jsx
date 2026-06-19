import { Sparkles } from 'lucide-react'
import { BENEFITS } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Benefits() {
  return (
    <section className="section-pad bg-ink-900">
      <div className="container-content">
        <SectionHeading
          eyebrow="Resultados"
          title="O que você leva dessa jornada"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 60}
              className="card-base group flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold/15">
                <Sparkles className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <p className="text-[15px] leading-relaxed text-white/75">{benefit}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
