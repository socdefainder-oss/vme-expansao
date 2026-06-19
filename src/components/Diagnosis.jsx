import Reveal from './Reveal.jsx'

export default function Diagnosis() {
  return (
    <section className="relative overflow-hidden bg-ink-950 section-pad">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(12,27,42,0.6),transparent_70%)]" />
      <div className="container-content relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold/60" />
                Diagnóstico
              </span>
              <h2 className="mt-6 font-sans text-3xl font-bold leading-[1.12] tracking-tightest text-white sm:text-4xl md:text-[2.6rem]">
                O mercado não é o seu maior problema.{' '}
                <span className="text-gold-gradient">A falta de estrutura é.</span>
              </h2>
            </Reveal>

            <Reveal delay={100} className="mt-8 space-y-5 text-base leading-relaxed text-white/65 sm:text-lg">
              <p>
                Muitos empresários já têm anos de experiência, clientes, esforço e vontade de crescer.
                Mas continuam travados porque a empresa depende demais do dono, as vendas acontecem sem
                método, a equipe não sustenta a operação, os processos estão na cabeça de uma pessoa e o
                financeiro não mostra a verdade do negócio.
              </p>
              <p className="text-white/80">
                O <span className="font-semibold text-white">VME Expansão</span> nasceu para ajudar
                empresários a saírem do improviso e construírem uma empresa com clareza, método,
                liderança, gestão e princípios.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 shadow-card">
                <p className="font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">
                  “O empresário que não organiza a empresa vira funcionário do próprio negócio.”
                </p>
                <div className="mt-8 h-px w-full bg-white/10" />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {[
                    ['Improviso', 'Hoje'],
                    ['→', ''],
                    ['Estrutura', 'Depois'],
                  ].map(([a, b], i) => (
                    <div key={i} className={i === 1 ? 'flex items-center justify-center text-2xl text-gold' : ''}>
                      {i !== 1 ? (
                        <>
                          <p className="text-base font-semibold text-white">{a}</p>
                          <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{b}</p>
                        </>
                      ) : (
                        a
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
