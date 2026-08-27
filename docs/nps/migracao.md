# Migração — do Google Forms para página própria

O Google Forms é ponte, não destino. Ele resolve o problema de hoje (não perder mais
nenhuma aula sem medir) e tem três limitações que aparecem por volta da terceira ou quarta
rodada.

## O que o Google Forms não resolve

1. **Marca.** O formulário tem cara de formulário do Google. Numa formação de R$ 497 com
   professores de peso, isso destoa — e a percepção de seriedade do instrumento afeta a
   qualidade das respostas.
2. **Cálculo e consolidação manuais.** Um formulário por aula significa oito planilhas
   separadas e um consolidado preenchido à mão. Funciona para oito aulas; não funciona
   para três turmas rodando ao mesmo tempo.
3. **Sem perguntas condicionais.** A escala linear do Forms não permite ramificação, então
   detrator e promotor recebem exatamente a mesma pergunta aberta. A resposta certa para
   quem deu 3 não é a mesma que para quem deu 10.

## O que a versão própria entrega

- Rota `/pesquisa` no próprio site, com a identidade do VME — o QR aponta para
  `vme-expansao.vercel.app/pesquisa`, não para um link do Google.
- Perguntas condicionais de verdade: a pergunta aberta muda conforme a nota.
- Uma única base para todas as aulas e todas as turmas.
- Painel em `/painel`, protegido, com o NPS calculado, a evolução por aula, as quatro
  listas de trabalho e os depoimentos autorizados prontos para copiar.
- Sem migração de dados perdida: as respostas do Google Forms podem ser importadas.

## Momento certo de migrar

O melhor momento é **entre a Turma 01 e a Turma 02**. Migrar no meio da turma quebra a
comparabilidade entre as aulas e confunde os alunos, que já se acostumaram com o link.

A exceção seria se a taxa de resposta ficar consistentemente abaixo de 50% nas duas
primeiras rodadas — aí o problema pode ser o atrito do formulário, e vale antecipar.

## Esforço

Rota da pesquisa, rota do painel, tabela no banco e importação dos dados existentes.
A infraestrutura já está pronta: o site é React + Vite na Vercel, com `rewrites` de SPA
configurados em `vercel.json`, e o roteamento por caminho em `src/App.jsx` já é usado pelas
páginas legais — acrescentar duas rotas é trivial.
