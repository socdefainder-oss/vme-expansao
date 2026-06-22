import { Check, ShieldCheck, Lock } from 'lucide-react'
import { OFFER_ITEMS, PRICE, INSCRICAO_LINK } from '../data.js'
import CTAButton from './CTAButton.jsx'
import Reveal from './Reveal.jsx'

export default function Offer() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-ink-900 section-pad">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(201,162,75,0.10),transparent_65%)]" />
      <div className="container-content relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-gold/60" />
            Investimento
          </span>
          <h2 className="mt-6 font-sans text-3xl font-bold leading-tight tracking-tightest text-white sm:text-4xl md:text-[2.75rem]">
            Garanta sua vaga no VME Expansão
          </h2>
          <p className="mt-5 text-lg text-white/60">
            8 aulas ao vivo + acesso às gravações na plataforma.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-12 max-w-xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-b from-white/[0.05] to-ink-850 shadow-card">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative border-b border-white/[0.07] p-8 text-center sm:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold/80">
                Turma 2026 · Vagas limitadas
              </p>
              <div className="mt-6">
                <span className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {PRICE.installments}
                </span>
              </div>
              <p className="mt-3 text-base text-white/70">
                ou <span className="font-semibold text-white">{PRICE.cash}</span>{' '}
                <span className="text-white/55">{PRICE.cashNote}</span>
              </p>

              <div className="mt-8">
                <CTAButton href={INSCRICAO_LINK} className="w-full">
                  Clique aqui e faça a inscrição!
                </CTAButton>
              </div>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-white/45">
                <Lock className="h-3.5 w-3.5" /> Inscrição segura. Vagas limitadas.
              </p>
            </div>

            <div className="relative p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                O que está incluído
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {OFFER_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] leading-snug text-white/75">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <ShieldCheck className="h-6 w-6 flex-shrink-0 text-gold" strokeWidth={1.6} />
                <div>
                  <p className="text-sm font-semibold text-white">Garantia de 7 dias</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    Se não for o que você esperava, devolvemos 100% do valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
