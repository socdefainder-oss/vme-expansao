import { Radio, Repeat, Clock, CalendarCheck, MapPin, PlayCircle, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = [
  { icon: Radio, label: 'Formato', value: 'Aulas ao vivo' },
  { icon: Repeat, label: 'Frequência', value: 'Quinzenal' },
  { icon: Clock, label: 'Dia e horário', value: 'Terças às 20h' },
  { icon: CalendarCheck, label: 'Início', value: '04 de agosto de 2026' },
  { icon: MapPin, label: 'Local', value: 'Instituto AlphaMind · Av. Juruá, 376, Alphaville, Barueri/SP' },
  { icon: PlayCircle, label: 'Gravações', value: 'Disponíveis na plataforma após cada aula' },
  { icon: Layers, label: 'Total', value: '8 encontros' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad bg-ink-900">
      <div className="container-content">
        <SectionHeading eyebrow="Estrutura" title="Como funciona o VME Expansão?" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, label, value }, i) => (
            <Reveal
              key={label}
              delay={(i % 3) * 70}
              className="card-base flex items-start gap-4 p-6"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold/80">{label}</p>
                <p className="mt-1.5 text-[15px] font-medium leading-snug text-white/85">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
          <p>
            Você participa dos encontros ao vivo, aprende com profissionais que vivem o mercado, aplica
            os conceitos na sua empresa e ainda tem acesso às gravações para revisar o conteúdo sempre
            que precisar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
