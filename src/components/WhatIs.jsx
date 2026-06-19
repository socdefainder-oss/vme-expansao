import { Compass, Target, Heart } from 'lucide-react'
import { PILLARS } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const ICONS = [Compass, Target, Heart]

export default function WhatIs() {
  return (
    <section id="o-que-e" className="section-pad bg-ink-900">
      <div className="container-content">
        <SectionHeading eyebrow="A proposta" title="O que é o VME Expansão?" />

        <Reveal className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-relaxed text-white/65 sm:text-lg">
          <p>
            O VME Expansão é uma escola prática de negócios, realizada quinzenalmente no Instituto
            AlphaMind, para empresários que querem estruturar, fortalecer e expandir seus negócios de
            forma estratégica e consistente.
          </p>
          <p>
            <span className="text-white">Não é palestra de motivação. Não é teoria de faculdade.</span>{' '}
            É conhecimento aplicável, ensinado por quem vive o mercado, fundamentado em princípios
            bíblicos sólidos.
          </p>
          <p className="font-serif text-xl text-gold sm:text-2xl">
            Empresários aprendendo a crescer com direção, estratégia e princípios.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal
                key={pillar.title}
                delay={i * 90}
                className="card-base group relative overflow-hidden p-8 transition-all duration-300 hover:border-gold/25"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 bg-gold/[0.07] text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="relative mt-6 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-white/60">{pillar.text}</p>
                <span className="relative mt-6 block font-serif text-5xl font-light text-white/[0.06]">
                  0{i + 1}
                </span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
