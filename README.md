# VME Expansão — Landing Page

Landing page de alta conversão para o **VME Expansão**, escola prática de negócios para empresários.
Construída em **React + Vite + Tailwind CSS**, pronta para deploy na **Vercel**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba este projeto para um repositório (GitHub/GitLab).
2. Importe na Vercel — o framework **Vite** é detectado automaticamente.
3. Build: `npm run build` · Output: `dist`.

## Onde editar o conteúdo

Quase todo o texto da página fica centralizado em [`src/data.js`](src/data.js):

- `INSCRICAO_LINK` — **trocar `#LINK_DE_INSCRICAO`** pelo link real de checkout.
- `PRICE` — valor e parcelamento (hoje: `R$ 497` / `10x de R$ XX,XX`).
- `CLASSES` — as 8 aulas e professores.
- `FAQ`, `BENEFITS`, `PAINS`, `TESTIMONIALS` etc.

## Imagens (a incluir depois)

Os pontos onde entram fotos estão marcados:

- **Hero**: `src/components/Hero.jsx` — `data-image-slot="hero"` (sala executiva / empresários).
- Coloque os arquivos em `public/` e referencie como `/nome-da-imagem.jpg`.

## Estrutura

```
src/
  data.js              ← todo o conteúdo editável
  App.jsx              ← ordem das seções
  components/
    Header, Hero, PainPoints, Diagnosis, WhatIs, Classes,
    HowItWorks, Audience, Benefits, Testimonials,
    ImpactPhrase, Offer, Faq, Footer
    Reveal, SectionHeading, CTAButton  (utilitários)
```
