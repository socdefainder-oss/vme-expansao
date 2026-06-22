import { useEffect, useState } from 'react'

const NAV = [
  { label: 'O que é', href: '#o-que-e' },
  { label: 'Aulas', href: '#aulas' },
  { label: 'Professores', href: '#professores' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Investimento', href: '#oferta' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-ink-950/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between px-6 py-4 md:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-gold/[0.07] font-serif text-lg font-semibold text-gold">
            V
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            VME <span className="text-gold">Expansão</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#oferta"
            className="hidden rounded-full bg-gold-grad px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:brightness-110 sm:inline-flex"
          >
            Garantir minha vaga
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 lg:hidden"
            aria-label="Menu"
          >
            <span className={`h-0.5 w-5 bg-white transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-white transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="container-content flex flex-col gap-1 px-6 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#oferta"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-gold-grad px-5 py-3 text-center text-sm font-semibold text-ink-950"
          >
            Quero garantir minha vaga
          </a>
        </nav>
      </div>
    </header>
  )
}
