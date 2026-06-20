import { useState } from 'react'
import { PROFESSORS } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function Portrait({ professor }) {
  const [errored, setErrored] = useState(false)
  const showImage = professor.image && !errored

  return (
    <div className="relative aspect-[4/5] w-full self-start overflow-hidden bg-gradient-to-br from-ink-700 to-ink-850">
      {showImage ? (
        <img
          src={professor.image}
          alt={professor.name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-serif text-5xl font-semibold text-gold/40">
            {professor.initials}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
    </div>
  )
}

export default function Professors() {
  return (
    <section id="professores" className="section-pad bg-ink-900">
      <div className="container-content">
        <SectionHeading
          eyebrow="Quem ensina"
          title="Professores convidados"
          subtitle="Profissionais que vivem o mercado e ensinam com prática, autoridade e propósito."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROFESSORS.map((professor, i) => (
            <Reveal
              key={professor.name}
              delay={(i % 2) * 90}
              className="card-base group grid grid-cols-1 overflow-hidden transition-colors duration-300 hover:border-gold/25 sm:grid-cols-[200px_1fr]"
            >
              <Portrait professor={professor} />
              <div className="flex flex-col p-7">
                <h3 className="text-xl font-semibold text-white">{professor.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-gold">{professor.role}</p>
                <div className="mt-4 h-px w-10 bg-gold/40" />
                <p className="mt-4 text-[14px] leading-relaxed text-white/60">{professor.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-white/40">
            Grade de professores em atualização — novos nomes podem ser confirmados até o início da turma.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
