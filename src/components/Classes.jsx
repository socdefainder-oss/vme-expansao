import { CLASSES } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Classes() {
  return (
    <section id="aulas" className="relative bg-ink-950 section-pad">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(201,162,75,0.07),transparent_65%)]" />
      <div className="container-content relative">
        <SectionHeading
          eyebrow="O programa · 8 encontros"
          title="8 aulas para estruturar sua empresa e destravar o crescimento"
          subtitle="Cada encontro foi pensado para atacar um ponto crítico da vida real de um empresário: vendas, posicionamento, equipe, liderança, processos, gestão e financeiro."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CLASSES.map((cls, i) => (
            <Reveal
              key={cls.n}
              delay={(i % 2) * 80}
              className="card-base group relative flex flex-col p-7 transition-all duration-300 hover:border-gold/25 hover:bg-white/[0.035]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-grad font-sans text-lg font-bold text-ink-950">
                  {cls.n}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/55">
                  {cls.tag}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold leading-snug text-white">
                {cls.title}
              </h3>
              <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-white/60">{cls.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
