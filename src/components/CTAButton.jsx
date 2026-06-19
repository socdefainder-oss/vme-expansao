import { ArrowRight } from 'lucide-react'
import { INSCRICAO_LINK } from '../data.js'

export default function CTAButton({ children = 'Quero garantir minha vaga', className = '' }) {
  return (
    <a href={INSCRICAO_LINK} className={`btn-primary group ${className}`}>
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
