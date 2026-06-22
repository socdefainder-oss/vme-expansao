import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import CTAButton from './CTAButton.jsx'

const SEALS = [
  { icon: Users, label: '8 encontros ao vivo' },
  { icon: Calendar, label: 'Início em 04/08/2026' },
  { icon: Clock, label: 'Terças às 20h' },
  { icon: MapPin, label: 'Instituto AlphaMind — Alphaville, Barueri/SP' },
]

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_10%,rgba(201,162,75,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_90%,rgba(12,27,42,0.55),transparent_70%)]" />
        <div className="grain absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="container-content relative px-6 pb-24 pt-32 sm:pt-40 md:px-8 lg:pb-28 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Coluna de texto */}
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold/60" />
                Escola prática de negócios · Cristã e empresarial
              </span>
            </div>

            <h1 className="mt-7 animate-fade-up font-sans text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              Você tem anos de mercado.{' '}
              <span className="text-gold-gradient">Está na hora de estruturar e crescer da forma certa.</span>
            </h1>

            <p className="mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/65 sm:text-xl">
              Uma escola prática de negócios para empresários que querem crescer com{' '}
              <span className="text-white">direção, estratégia e princípios</span> — sem perder a fé, a
              família e o propósito.
            </p>

            <div className="mt-9 flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton />
              <a href="#aulas" className="btn-ghost">
                Ver as 8 aulas
              </a>
            </div>

            <p className="mt-4 animate-fade-up text-sm text-white/45">
              Vagas limitadas para empresários que querem crescer com estrutura.
            </p>

            {/* Selos */}
            <div className="mt-12 grid animate-fade-up grid-cols-1 gap-3 sm:grid-cols-2">
              {SEALS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da imagem (poster) */}
          <div className="animate-fade-up">
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
              <div className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-card ring-1 ring-gold/10">
                <img
                  src="/professores/imagem.topo.jpeg"
                  alt="VME Expansão com Jairo Manhães — 8 encontros estratégicos para empresários"
                  className="block w-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="container-content px-6 md:px-8">
        <div className="hairline" />
      </div>
    </section>
  )
}
