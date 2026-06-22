import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PainPoints from './components/PainPoints.jsx'
import Diagnosis from './components/Diagnosis.jsx'
import WhatIs from './components/WhatIs.jsx'
import Classes from './components/Classes.jsx'
import Professors from './components/Professors.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Audience from './components/Audience.jsx'
import Benefits from './components/Benefits.jsx'
import ImpactPhrase from './components/ImpactPhrase.jsx'
import Offer from './components/Offer.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfUse from './pages/TermsOfUse.jsx'
import { INSCRICAO_LINK } from './data.js'

function Home() {
  return (
    <div className="relative min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Diagnosis />
        <WhatIs />
        <Classes />
        <Professors />
        <HowItWorks />
        <Audience />
        <Benefits />
        <ImpactPhrase />
        <Offer />
        <Faq />
      </main>
      <Footer />

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/90 p-3 backdrop-blur-xl lg:hidden">
        <a
          href={INSCRICAO_LINK}
          className="flex w-full items-center justify-center rounded-full bg-gold-grad py-3.5 text-sm font-semibold text-ink-950"
        >
          Quero garantir minha vaga
        </a>
      </div>
    </div>
  )
}

export default function App() {
  // Roteamento simples por caminho (a Vercel serve index.html em qualquer rota — SPA).
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/politica-de-privacidade') return <PrivacyPolicy />
  if (path === '/termos-de-uso') return <TermsOfUse />
  return <Home />
}
