import { ArrowRight } from 'lucide-react'

// Por padrão, leva para a seção de preço (#oferta).
// Passe href={INSCRICAO_LINK} apenas no botão dentro da própria seção de oferta.
export default function CTAButton({
  children = 'Quero garantir minha vaga',
  className = '',
  href = '#oferta',
}) {
  return (
    <a href={href} className={`btn-primary group ${className}`}>
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
