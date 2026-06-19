import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQ } from '../data.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="card-base overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-medium text-white/90">{item.q}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-gold transition-transform duration-300 ${
            isOpen ? 'rotate-45 bg-gold/10' : ''
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[15px] leading-relaxed text-white/60">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section-pad bg-ink-900">
      <div className="container-content">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {FAQ.map((item, i) => (
            <Reveal key={i} delay={i * 40}>
              <Item item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
