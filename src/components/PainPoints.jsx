import { AlertTriangle } from 'lucide-react'
import { PAINS } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function PainPoints() {
  return (
    <section className="section-pad bg-ink-900">
      <div className="container-content">
        <SectionHeading
          eyebrow="Identificação"
          title="Reconhece alguma dessas situações?"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="card-base group flex items-start gap-4 p-6 transition-colors duration-300 hover:border-gold/25"
            >
              <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-gold/80 transition-colors group-hover:bg-gold/10">
                <AlertTriangle className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <p className="text-[15px] leading-relaxed text-white/75">{pain}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.08] to-transparent p-8 text-center sm:p-10">
            <p className="font-serif text-xl leading-snug text-white sm:text-2xl md:text-[1.7rem]">
              Se você se identificou com qualquer um desses pontos, o problema{' '}
              <span className="text-gold">não é falta de mercado</span>. É falta de estrutura.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
