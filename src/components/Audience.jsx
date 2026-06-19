import { Check, X } from 'lucide-react'
import { FOR_WHO, NOT_FOR_WHO } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Audience() {
  return (
    <section className="relative bg-ink-950 section-pad">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Para quem é */}
          <Reveal className="overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-gold/[0.06] to-transparent p-8 sm:p-10">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold/60" />
              Para quem é
            </span>
            <h3 className="mt-5 font-sans text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">
              O VME Expansão é para empresários que…
            </h3>
            <ul className="mt-8 space-y-4">
              {FOR_WHO.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Para quem não é */}
          <Reveal delay={120} className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
              <span className="h-px w-6 bg-white/30" />
              Para quem não é
            </span>
            <h3 className="mt-5 font-sans text-2xl font-bold leading-snug text-white sm:text-[1.7rem]">
              O VME Expansão não é para quem…
            </h3>
            <ul className="mt-8 space-y-4">
              {NOT_FOR_WHO.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/40">
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/55">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
