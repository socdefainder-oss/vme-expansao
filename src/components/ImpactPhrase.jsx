import Reveal from './Reveal.jsx'

export default function ImpactPhrase() {
  return (
    <section className="relative overflow-hidden bg-ink-950 px-6 py-28 md:px-8 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(201,162,75,0.10),transparent_70%)]" />
      <div className="grain absolute inset-0 opacity-[0.04]" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <Reveal className="container-content relative text-center">
        <p className="mx-auto max-w-4xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          “Não falta tempo de mercado.{' '}
          <span className="text-gold-gradient">Falta estrutura para crescer.</span>”
        </p>
      </Reveal>
    </section>
  )
}
