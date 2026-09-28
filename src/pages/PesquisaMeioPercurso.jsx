import { useEffect, useRef, useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { QR_PATH, QR_SIZE, QR_URL } from './qrMeioPercurso.js'

// Tela de coleta projetada no telão ao final da aula.
// A pesquisa é aplicada na sala, não por WhatsApp: é o que leva a taxa de
// resposta de ~30% para ~75%. O cronômetro existe para o silêncio de 60
// segundos acontecer de verdade em vez de virar "uns instantinhos".

const SEGUNDOS = 60

// A matriz do QR não traz quiet zone; os 4 módulos de margem que a norma ISO
// pede entram aqui, pelo viewBox.
const MARGEM = 4
const VIEW_BOX = `${-MARGEM} ${-MARGEM} ${QR_SIZE + MARGEM * 2} ${QR_SIZE + MARGEM * 2}`

function formatar(segundos) {
  const m = Math.floor(segundos / 60)
  const s = segundos % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function PesquisaMeioPercurso() {
  const [restante, setRestante] = useState(SEGUNDOS)
  const [rodando, setRodando] = useState(false)
  const [terminou, setTerminou] = useState(false)
  const [cheia, setCheia] = useState(false)
  const intervalo = useRef(null)

  useEffect(() => {
    document.title = 'Avaliação de Meio de Percurso · VME Expansão'

    // Página operacional de uma turma específica — não deve ser indexada.
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  useEffect(() => {
    if (!rodando) return undefined
    intervalo.current = setInterval(() => {
      setRestante((s) => {
        if (s <= 1) {
          clearInterval(intervalo.current)
          setRodando(false)
          setTerminou(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalo.current)
  }, [rodando])

  useEffect(() => {
    const aoTrocar = () => setCheia(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', aoTrocar)
    return () => document.removeEventListener('fullscreenchange', aoTrocar)
  }, [])

  function alternar() {
    if (terminou) {
      setTerminou(false)
      setRestante(SEGUNDOS)
      setRodando(true)
      return
    }
    setRodando((r) => !r)
  }

  // Espaço e as teclas de avanço do controle remoto de apresentação.
  useEffect(() => {
    function aoTeclar(e) {
      if (e.target instanceof HTMLElement && e.target.tagName === 'BUTTON') return
      if ([' ', 'Spacebar', 'ArrowRight', 'PageDown'].includes(e.key)) {
        e.preventDefault()
        alternar()
      }
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  })

  function telaCheia() {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen?.()
  }

  const corRelogio = terminou ? 'text-gold' : rodando ? 'text-gold-light' : 'text-white/40'

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(48%_55%_at_78%_45%,rgba(201,162,75,0.13),transparent_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_8%_92%,rgba(12,27,42,0.6),transparent_72%)]" />
        <div className="grain absolute inset-0 opacity-[0.04]" />
      </div>

      <button
        type="button"
        onClick={telaCheia}
        aria-label={cheia ? 'Sair da tela cheia' : 'Entrar em tela cheia'}
        className="absolute right-5 top-5 z-20 rounded-full border border-white/10 p-2.5 text-white/40 transition-colors hover:border-gold/50 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        {cheia ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </button>

      <main className="relative grid min-h-screen grid-cols-1 items-center justify-items-center gap-8 px-6 py-10 text-center lg:grid-cols-[1fr_auto] lg:justify-items-start lg:gap-16 lg:px-20 lg:py-16 lg:text-left">
        <div className="max-w-[46ch]">
          <p className="eyebrow justify-center lg:justify-start">
            VME Expansão · Turma 01 · Aula 5
          </p>

          <h1 className="mt-5 font-serif text-[clamp(2.1rem,5.2vw,4.6rem)] font-medium leading-none tracking-tightest text-white [text-wrap:balance]">
            Sessenta segundos{' '}
            <span className="italic text-gold-light">antes de sair</span>
          </h1>

          <p className="mt-6 border-t-2 border-gold pt-4 font-serif text-[clamp(1.05rem,1.9vw,1.7rem)] leading-snug text-white/90 lg:mt-8 lg:border-l-2 lg:border-t-0 lg:pl-6 lg:pt-0">
            De 0 a 10, quanto você recomendaria o VME Expansão a um amigo empresário?
          </p>

          <div className="mt-8 flex items-center justify-center gap-5 lg:justify-start">
            <div
              className={`min-w-[3.2ch] font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-none tracking-tightest tabular-nums transition-colors duration-500 ${corRelogio}`}
            >
              {terminou ? 'Obrigado' : formatar(restante)}
            </div>
            <div>
              <button
                type="button"
                onClick={alternar}
                className="rounded-full border border-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-gold/60 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.98]"
              >
                {rodando ? 'Pausar' : terminou ? 'Reiniciar' : 'Começar'}
              </button>
              <p className="mt-1.5 text-xs text-white/40">Para o silêncio valer</p>
            </div>
          </div>

          <p className="mt-8 text-[clamp(0.85rem,1.15vw,1.05rem)] leading-relaxed text-white/60">
            A coordenação lê <strong className="font-semibold text-white">todas</strong> as
            respostas. Quem der nota baixa recebe uma ligação nossa — não é para convencer de
            nada, é para entender.
          </p>

          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/40">
            Se a câmera não pegar, o link está no grupo do WhatsApp.
          </p>
        </div>

        <figure className="relative rounded-2xl bg-white p-4 shadow-card lg:p-6">
          <svg
            viewBox={VIEW_BOX}
            role="img"
            aria-label="QR Code da Avaliação de Meio de Percurso"
            className="block h-auto w-[min(72vw,clamp(220px,34vw,460px))] [shape-rendering:crispEdges]"
          >
            <rect
              x={-MARGEM}
              y={-MARGEM}
              width={QR_SIZE + MARGEM * 2}
              height={QR_SIZE + MARGEM * 2}
              fill="#FFFFFF"
            />
            <path fill="#0A0B0D" d={QR_PATH} />
          </svg>
          <figcaption className="mt-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6B6B6B]">
            Aponte a câmera
          </figcaption>
        </figure>
      </main>

      {/* Fallback para quem abrir sem conseguir ler o QR. */}
      <a href={QR_URL} className="sr-only">
        Abrir a Avaliação de Meio de Percurso
      </a>
    </div>
  )
}
