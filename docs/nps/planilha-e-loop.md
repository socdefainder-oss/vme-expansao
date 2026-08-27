# Planilha, painel e fechamento de loop

---

## 1. Fórmulas do painel

Na aba **Respostas** vinculada ao formulário, as colunas saem nesta ordem (Formulário Pulso):

| Coluna | Conteúdo |
|:--:|:--|
| A | Carimbo de data/hora |
| B | Nome |
| C | WhatsApp |
| **D** | **Nota NPS (0 a 10)** |
| E | Motivo da nota |
| F | O que faltou para ser 10 |
| G | O que vai aplicar em 7 dias |
| H | Autorização de depoimento |
| I | Quer contato |

> Se a ordem das perguntas mudar, ajuste a letra da coluna em todas as fórmulas.
> A coluna da nota é a única que realmente importa acertar.

Crie uma aba nova chamada **Painel** e cole:

| Célula | Conteúdo |
|:--|:--|
| `A1` | `Alunos matriculados` |
| `B1` | *(digite o número de matriculados — usado na taxa de resposta)* |
| `A3` | `Respostas` |
| `B3` | `=CONT.NÚM(Respostas!D2:D)` |
| `A4` | `Taxa de resposta` |
| `B4` | `=SEERRO(CONT.NÚM(Respostas!D2:D)/$B$1;"—")` — formate como porcentagem |
| `A6` | `Promotores (9-10)` |
| `B6` | `=CONT.SE(Respostas!D2:D;">=9")` |
| `A7` | `Passivos (7-8)` |
| `B7` | `=CONT.SES(Respostas!D2:D;">=7";Respostas!D2:D;"<=8")` |
| `A8` | `Detratores (0-6)` |
| `B8` | `=CONT.SES(Respostas!D2:D;">=0";Respostas!D2:D;"<=6")` |
| `A10` | `NPS` |
| `B10` | `=SEERRO(ARRED((CONT.SE(Respostas!D2:D;">=9")-CONT.SES(Respostas!D2:D;">=0";Respostas!D2:D;"<=6"))/CONT.NÚM(Respostas!D2:D)*100);"—")` |
| `A11` | `Nota média` |
| `B11` | `=SEERRO(ARRED(MÉDIA(Respostas!D2:D);1);"—")` |

O NPS **não é a média das notas** — é a porcentagem de promotores menos a porcentagem de
detratores, e vai de -100 a +100. As duas linhas ficam lado a lado de propósito: quando a
média está boa mas o NPS está ruim, existe um grupo pequeno e muito insatisfeito escondido
atrás da média. Esse grupo é justamente quem precisa da ligação.

### Listas de trabalho

Ainda na aba **Painel**, mais abaixo:

```
A14: DETRATORES — LIGAR EM 48H
A15: =SEERRO(FILTRO(Respostas!B2:E; Respostas!D2:D<=6; Respostas!D2:D<>""); "Nenhum. Bom sinal.")

A25: PASSIVOS — MENSAGEM EM 72H
A26: =SEERRO(FILTRO(Respostas!B2:E; Respostas!D2:D>=7; Respostas!D2:D<=8); "Nenhum.")

A35: PROMOTORES QUE AUTORIZARAM DEPOIMENTO
A36: =SEERRO(FILTRO(Respostas!B2:H; Respostas!D2:D>=9; Respostas!H2:H<>"Não"); "Nenhum ainda.")

A45: PEDIRAM CONTATO
A46: =SEERRO(FILTRO(Respostas!B2:E; Respostas!I2:I="Sim, quero conversar"); "Ninguém.")
```

Essas quatro listas são a agenda da semana da coordenação. Elas se atualizam sozinhas a
cada resposta nova.

### Formatação condicional na célula do NPS (`B10`)

| Regra | Cor |
|:--|:--|
| Menor que 30 | vermelho |
| Entre 30 e 49 | laranja |
| Entre 50 e 74 | amarelo |
| 75 ou mais | verde |

### Consolidado da turma

Crie uma aba **Consolidado** e preencha uma linha por aula, copiando o NPS de cada
formulário. É esse quadro que vira o gráfico de evolução da turma.

| Aula | Data | Tema | Respostas | Taxa | Promotores | Passivos | Detratores | NPS |
|:--:|:--|:--|--:|--:|--:|--:|--:|--:|
| 1 | 04/08 | Liderança | | | | | | |
| 2 | 25/08 | Vendas | | | | | | |
| 3 | 01/09 | Posicionamento | | | | | | |
| ... | | | | | | | | |

---

## 2. Roteiro de palco — como pedir a resposta

Nos últimos 3 minutos da aula, **antes de liberar a saída**. Quem fala é o professor ou
quem estiver conduzindo o encontro — não pode ser um aviso solto no grupo depois.

> "Antes de vocês saírem, sessenta segundos. Esse QR Code na tela abre uma pergunta só:
> de zero a dez, quanto você recomendaria a aula de hoje a um amigo empresário.
>
> A gente lê tudo. Não é pesquisa de gaveta — o que vocês escreverem muda a próxima aula, e
> na abertura do próximo encontro eu venho aqui contar o que mudou por causa das respostas
> de hoje.
>
> E olha: quem der nota baixa vai receber uma ligação nossa. Não é para convencer de nada,
> nem para pedir que mude a nota. É para entender. Nota baixa aqui ajuda mais do que nota
> alta por educação.
>
> Vou ficar aqui em silêncio um minuto. Podem responder."

Depois: **fique em silêncio de verdade**. O silêncio é o que faz a taxa de resposta.

**Checklist do dia da aula**
- [ ] QR Code projetado no telão (gere em qualquer gerador gratuito a partir do link do formulário)
- [ ] Link do formulário postado no grupo do WhatsApp no mesmo momento
- [ ] Ninguém liberado para sair antes dos 60 segundos
- [ ] Alguém da coordenação circulando para ajudar quem tiver dificuldade com o QR

O que **não** fazer: pedir nota alta, dizer que "a nota é importante para o professor",
mandar o link só no dia seguinte, ou deixar a resposta opcional na saída. Cada um desses
derruba a taxa de resposta ou contamina o dado.

---

## 3. Fechamento de loop

Isto é o que separa uma pesquisa que ninguém leva a sério de um sistema de gestão.
Sem esta etapa, o resto do documento não vale nada.

### Detrator (0 a 6) — ligação em até 48 horas

Ligação, não mensagem. Quem liga é alguém da coordenação, não o professor da aula.

> "Oi, [nome], aqui é [seu nome], da coordenação do VME Expansão. Vi sua resposta na
> pesquisa da última aula e liguei para entender melhor. O que aconteceu?"

Regras da ligação:
- **Escutar.** Não defender a aula, não explicar o professor, não justificar.
- **Não vender.** Nada de falar de próxima turma, de renovação ou de desconto.
- **Não pedir mudança de nota.** Nunca.
- **Anotar literalmente** o que a pessoa disser, na aba de respostas.
- Fechar com: *"O que a gente pode fazer para melhorar isso pra você especificamente?"*

Uma ligação dessas costuma recuperar um aluno que já tinha desistido internamente. E, mais
importante: a turma inteira fica sabendo que a ligação existe.

### Passivo (7 a 8) — mensagem em até 72 horas

> "Oi, [nome], tudo bem? Vi que você deu 8 para a aula da semana passada.
> Queria te perguntar uma coisa só: o que faltou para ser 10?"

Passivo é o grupo mais negligenciado e o mais fácil de mover. Quem dá 8 gostou — só viu
algo faltando e normalmente não vai falar espontaneamente.

### Promotor (9 a 10) — mensagem em até 72 horas

Duas perguntas, uma mensagem:

> "Oi, [nome]! Vi sua nota na pesquisa e fiquei muito feliz. Duas coisinhas rápidas:
>
> 1. Você toparia gravar um vídeo de 30 segundos falando o que escreveu ali? Pode ser
>    no celular mesmo, sem produção nenhuma.
> 2. Tem algum empresário que você acha que se beneficiaria do VME? Se você me passar o
>    nome, eu falo com ele com todo o respeito e digo que veio por indicação sua."

Vídeo de 30 segundos gravado no celular converte mais do que depoimento escrito e
diagramado. Peça enquanto a emoção da aula ainda está viva — depois de duas semanas, não
vem mais.

### Abertura da aula seguinte — 2 minutos de palco

> "Na última aula, [N] de vocês responderam a pesquisa. O NPS foi [X].
> Vocês pediram duas coisas: [A] e [B].
> A partir de hoje: [mudança concreta]."

Este é o item que faz a taxa de resposta **subir** a cada rodada em vez de despencar.
Quando a turma vê que a resposta virou mudança, responder deixa de ser favor.

---

## 4. Rotina semanal da coordenação

| Prazo após a aula | Tarefa | Responsável |
|:--|:--|:--|
| Mesma noite | Conferir a taxa de resposta no Painel | Coordenação |
| 24h | Ler todas as respostas abertas e marcar o que se repete | Coordenação |
| 48h | Ligar para 100% dos detratores | Coordenação |
| 72h | Mensagem para passivos e promotores | Coordenação |
| 72h | Enviar ao professor da próxima aula o resumo do que a turma pediu | Coordenação |
| 7 dias | Arquivar depoimentos autorizados na pasta de depoimentos | Coordenação |
| Próxima aula | Anunciar resultado e mudanças no palco | Quem abre a aula |

---

## 5. O que fazer com os depoimentos

Os depoimentos autorizados alimentam diretamente a seção de depoimentos do site, que hoje
está com três textos de espaço reservado em `src/data.js` (`TESTIMONIALS`).

Critério de escolha, em ordem de força:
1. Depoimento que cita um **resultado concreto** ("cortei 3 reuniões por semana",
   "descobri que meu produto mais vendido dava prejuízo")
2. Depoimento que descreve uma **mudança de comportamento** do empresário
3. Depoimento que elogia a aula ou o professor — é o mais fraco dos três, use por último

Formato para o site: 2 a 3 linhas, nome, empresa e cargo. Sempre respeitando exatamente a
permissão que a pessoa marcou no formulário.
