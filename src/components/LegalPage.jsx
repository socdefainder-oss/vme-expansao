import { ArrowLeft } from 'lucide-react'
import { COMPANY } from '../data.js'

export default function LegalPage({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-ink-900 text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/85 backdrop-blur-xl">
        <div className="container-content flex items-center justify-between px-6 py-4 md:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-gold/[0.07] font-serif text-lg font-semibold text-gold">
              V
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              VME <span className="text-gold">Expansão</span>
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </a>
        </div>
      </header>

      {/* Hero da página */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-ink-950">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,162,75,0.10),transparent_65%)]" />
        <div className="container-content relative px-6 pb-14 pt-20 md:px-8 lg:pt-24">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" />
            Documento legal
          </span>
          <h1 className="mt-5 max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tightest text-white sm:text-4xl md:text-[2.75rem]">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-base text-white/55">{subtitle}</p>}
          <p className="mt-6 text-sm text-white/40">
            Última atualização: {COMPANY.lastUpdated}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <main className="container-content px-6 py-14 md:px-8 lg:py-20">
        <article className="legal-prose mx-auto max-w-3xl">{children}</article>
      </main>

      {/* Rodapé simples */}
      <footer className="border-t border-white/[0.07] bg-ink-950">
        <div className="container-content px-6 py-10 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-white">
                VME Expansão · {COMPANY.name}
              </span>
              <span className="text-xs text-white/40">{COMPANY.address}</span>
            </div>
            <div className="flex items-center gap-5 text-sm">
              <a href="/politica-de-privacidade" className="text-white/55 transition-colors hover:text-gold">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="text-white/55 transition-colors hover:text-gold">
                Termos de Uso
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-white/30 sm:text-left">
            © 2026 {COMPANY.name}. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
