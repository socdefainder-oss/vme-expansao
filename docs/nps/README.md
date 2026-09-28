# NPS — VME Expansão · Turma 01

Sistema de escuta da turma. Dois níveis: **pulso por aula** (rápido, corrige a próxima aula)
e **avaliação de programa** (profunda, define a próxima turma e gera os depoimentos).

Fase atual: **Google Forms**, criados por script. A migração para página própria fica para
o intervalo entre as turmas — ver `migracao.md`.

---

## Situação em 17/09/2026

Quatro das oito aulas já aconteceram e **nenhuma foi medida**. Isso muda o plano original
de duas formas:

- O NPS parcial estava marcado para a Aula 4 (15/09). **Passou.**
- A pesquisa retroativa cobriria 2 aulas. **Agora são 4.**

Não dá para mandar uma retroativa e, logo em seguida, um NPS de programa — duas pesquisas
seguidas derrubam a taxa de resposta. Por isso as duas viraram **uma só**: a *Avaliação de
Meio de Percurso*, que dá nota às quatro aulas já realizadas e faz o NPS do programa de uma
vez. É o momento certo: quatro aulas já são base suficiente para a pergunta principal, e
ainda restam quatro encontros para corrigir o que aparecer.

---

## Calendário

| Aula | Data | Tema | Professor | Pesquisa |
|:--:|:--|:--|:--|:--|
| 1 | 04/08 | O empresário que não lidera, vira refém dos funcionários | Cleiton Pinheiro | *retroativa* |
| 2 | 25/08 | Como criar uma máquina de vendas sem depender só de você | Rafael Mendes | *retroativa* |
| 3 | 01/09 | Você não tem problema de vendas. Você tem problema de posicionamento. | Daniel Brunet | *retroativa* |
| 4 | 15/09 | Como contratar certo e parar de montar e desmontar equipe | Drª Érica Belon | *retroativa* |
| — | **agora** | — | — | **Avaliação de Meio de Percurso** (WhatsApp) |
| 5 | 29/09 | Saia da operação: como estruturar processos | Gerson Ribeiro de Paula | Pulso na sala |
| 6 | 13/10 | Por que sua empresa não cresce: o diagnóstico que ninguém faz | *a definir* | Pulso na sala |
| 7 | 27/10 | Gestão na prática: rotinas, indicadores e clareza operacional | Clécio Albino | Pulso na sala |
| 8 | 10/11 | Fluxo de caixa, lucro e estabilidade | *a definir* | **Avaliação Final** |
| — | ~jan/2027 | 60 dias após o término | — | **NPS de resultado** |

Quinzenal, terças às 20h. Na Aula 8 roda só a Avaliação Final, que já inclui a nota da aula
do dia — duas pesquisas na mesma noite seria pedir demais.

O **NPS de resultado** é o mais valioso comercialmente e o mais esquecido: é quando o
depoimento deixa de ser sobre a aula e passa a ser sobre o efeito na empresa. É esse
material que vende a Turma 02.

---

## Como criar os formulários

Tudo é criado por `criar-formularios.gs`, um script que roda uma vez e monta as cinco
pesquisas, a planilha de respostas, o painel de NPS e as listas de trabalho.

**Faça logado como `vme.expansao@gmail.com`.** O dono da conta que roda o script vira o dono
de tudo que ele cria — e transferir a posse de um formulário junto com a planilha de
respostas depois é trabalhoso.

1. Confira, no canto superior direito do navegador, que a conta ativa é a do VME.
2. Abra **script.google.com** e clique em **Novo projeto**.
3. Apague o conteúdo do editor e cole o arquivo `criar-formularios.gs` inteiro.
4. Dê um nome ao projeto — `VME NPS`, por exemplo — e salve.
5. Na lista de funções no topo, escolha **`criarTudo`** e clique em **Executar**.
6. O Google vai pedir autorização. Como o script é seu, ele aparece como não verificado:
   clique em **Avançado** e depois em **Acessar VME NPS (não seguro)**. É o comportamento
   normal para um script próprio; a permissão é para criar formulários e planilhas na sua
   conta.
7. Aguarde. Leva de trinta segundos a dois minutos.

Ao terminar, procure no Drive a pasta **VME Expansão · NPS Turma 01**. Dentro dela:

- As cinco pesquisas
- A planilha **Respostas NPS — Turma 01**, com as abas `Painel`, `Ações`, `Links` e uma aba
  por pesquisa

Abra a aba **Links**: é de lá que saem os endereços para divulgar e para gerar os QR Codes.
Preencha a célula de **alunos matriculados** no `Painel` — é o divisor da taxa de resposta.

> Rodar o script duas vezes cria tudo de novo, duplicado. Se precisar recomeçar, apague a
> pasta antiga no Drive antes.

---

## A tela de coleta

A pesquisa é aplicada **na sala**, não por WhatsApp. Projete no telão, nos últimos
cinco minutos da aula:

**https://vme-expansao.vercel.app/pesquisameiopercurso**

A página tem o QR da Avaliação de Meio de Percurso e um cronômetro de 60 segundos.
Quem conduz a aula clica em **Começar** e fica em silêncio até zerar — o silêncio é o
que faz a taxa de resposta, e sem cronômetro ele vira "uns instantinhos".

| Detalhe | |
|:--|:--|
| Tela cheia | botão no canto superior direito, ou F11 |
| Controle remoto | barra de espaço e as teclas de avanço iniciam e pausam |
| Sem internet na sala | a página abre mesmo assim: o QR é SVG embutido, sem CDN |
| Indexação | a rota injeta `noindex` — é página operacional, não marketing |

O código está em [`src/pages/PesquisaMeioPercurso.jsx`](../../src/pages/PesquisaMeioPercurso.jsx)
e a matriz do QR em [`src/pages/qrMeioPercurso.js`](../../src/pages/qrMeioPercurso.js).
Para outra turma ou outro formulário, gere a matriz de novo em vez de editar à mão —
o cabeçalho do arquivo explica como. Os PNGs para colar em slide estão em [`qr/`](qr/).

---

## Ações imediatas

| Quando | O quê |
|:--|:--|
| Hoje | Rodar o script logado como `vme.expansao@gmail.com` |
| Hoje | Preencher o número de matriculados no `Painel` |
| Hoje / amanhã | Disparar a **Avaliação de Meio de Percurso** no grupo do WhatsApp |
| +48h | Lembrete no grupo para quem ainda não respondeu |
| Até 26/09 | Ligar para **todos** os detratores |
| Até 28/09 | Gerar o QR Code do Pulso da Aula 5 e colocar no slide final |
| 29/09, na abertura | Anunciar o resultado e o que vai mudar por causa dele |
| 29/09, no fim | Rodar o primeiro pulso ao vivo, com QR e 60 segundos de silêncio |

O anúncio de 29/09 não é opcional. É o que faz a turma acreditar que responder vale a pena —
e é o que separa uma taxa de resposta que sobe de uma que despenca.

---

## Metas

| Indicador | Meta | Alerta |
|:--|:--|:--|
| Resposta da Avaliação de Meio de Percurso | ≥ 60% | é por WhatsApp, não na sala — esperar menos |
| Taxa de resposta por pulso | ≥ 70% | < 50% torna o número não confiável |
| NPS do programa | ≥ 70 | < 50 exige plano de correção |
| Detratores contatados em 48h | 100% | qualquer falha aqui quebra a confiança |
| Depoimentos autorizados até a Aula 8 | ≥ 10 | — |

Referência para formação executiva presencial no Brasil: **50–70 é bom, acima de 75 é
excelente, abaixo de 30 é alerta vermelho**.

---

## As seis regras que fazem o NPS ser levado a sério

1. **Coleta na sala, não por WhatsApp depois.** QR projetado, o professor pedindo do palco,
   60 segundos de silêncio antes de liberar a saída. É a diferença entre ~75% e ~25% de
   resposta — e um NPS com 25% de resposta não tem autoridade nenhuma. A Avaliação de Meio
   de Percurso é a exceção obrigatória, porque as aulas já passaram.
2. **Identificação, não anonimato.** Sem saber quem deu 4, não há como fechar o loop. E o
   loop é o que dá respeito ao instrumento.
3. **Fechamento de loop em 48h.** Detrator recebe ligação. Passivo recebe mensagem.
   Promotor recebe pedido de depoimento e indicação. Sem exceção.
4. **Anunciar o que mudou por causa das respostas.** "Vocês pediram mais tempo de perguntas
   — a partir de hoje são 20 minutos." É isso que faz a taxa de resposta subir a cada
   rodada em vez de despencar.
5. **Escala 0 a 10, sempre.** Nem 1–10, nem 1–5. Fora do padrão, o número não é comparável
   a benchmark nenhum e vira opinião.
6. **Nunca induzir a nota.** "Dá um 10 pra gente" destrói a validade do dado e a
   credibilidade interna do instrumento. Uma vez que a equipe sabe que a nota foi pedida,
   ninguém mais acredita no painel.

---

## Arquivos

- `criar-formularios.gs` — o script que cria tudo; é a fonte de verdade do conteúdo das pesquisas
- `formularios.md` — o que cada pesquisa pergunta e por quê
- `planilha-e-loop.md` — leitura do painel, roteiro de palco e scripts de contato
- `migracao.md` — o que muda na versão com página própria
