import { MapPin, Calendar, Clock } from 'lucide-react'
import { BRAND } from '../data.js'
import CTAButton from './CTAButton.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-950">
      {/* Faixa CTA final */}
      <div className="container-content px-6 py-16 md:px-8">
        <div className="flex flex-col items-center gap-7 text-center">
          <h2 className="max-w-2xl font-sans text-2xl font-bold leading-snug tracking-tightest text-white sm:text-3xl">
            Crescer exige mais do que esforço.{' '}
            <span className="text-gold-gradient">Exige estrutura.</span>
          </h2>
          <CTAButton />
        </div>
      </div>

      <div className="hairline mx-auto max-w-content" />

      <div className="container-content px-6 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-gold/[0.07] font-serif text-lg font-semibold text-gold">
                V
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                VME <span className="text-gold">Expansão</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              Escola prática de negócios para empresários que querem crescer com direção, estratégia e
              princípios.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              {BRAND.institute}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold/70" strokeWidth={1.7} />
                {BRAND.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 flex-shrink-0 text-gold/70" strokeWidth={1.7} />
                Início em {BRAND.startDateLong}
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-shrink-0 text-gold/70" strokeWidth={1.7} />
                {BRAND.weekday} · {BRAND.meetings}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Institucional</p>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-gold">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#oferta" className="transition-colors hover:text-gold">
                  Garantir minha vaga
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/35">
            © 2026 VME Expansão · {BRAND.institute}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/35">Feito com direção, estratégia e princípios.</p>
        </div>
      </div>
    </footer>
  )
}
