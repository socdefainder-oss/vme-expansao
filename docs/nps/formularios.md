# Os três formulários — prontos para montar

Monte em **forms.google.com**. Cada formulário leva ~15 minutos para construir.

> **Nota técnica importante:** no Google Forms, a opção *"Ir para a seção com base na
> resposta"* só existe em perguntas de **Múltipla escolha** e **Lista suspensa** — ela
> **não funciona** em Escala linear. Por isso os formulários abaixo usam Escala linear sem
> ramificação: a experiência no celular é muito melhor, o visual é o do NPS clássico, e a
> separação entre promotor / passivo / detrator é feita na planilha, não no formulário.
> Perguntas condicionais automáticas entram na versão com página própria.

## Configuração comum aos três

Na engrenagem do formulário:

- **Coletar endereços de e-mail:** Não. *(exige login Google e derruba a taxa de resposta)*
- **Limitar a 1 resposta:** Não. *(mesmo motivo)*
- **Mostrar barra de progresso:** Sim.
- **Embaralhar ordem das perguntas:** Não.
- **Mensagem de confirmação:**
  > Recebido. Obrigado de verdade — a coordenação lê todas as respostas, uma por uma.

Na aba **Respostas**, clique no ícone verde de planilha para criar a planilha vinculada.
As fórmulas de NPS estão em `planilha-e-loop.md`.

---

# Formulário 1 — Retroativo (Aulas 1 e 2)

**Dispare hoje ou amanhã.** A Aula 2 foi em 25/08 e a memória esfria rápido.

**Título:** `VME Expansão · Como foram as duas primeiras aulas`

**Descrição:**
> Dois minutos. Começamos a medir agora e queremos recuperar o que ficou para trás —
> inclusive, e principalmente, o que não funcionou. Pode ser franco: é exatamente para isso
> que este formulário existe.
>
> Instituto AlphaMind · VME Expansão · Turma 01

| # | Pergunta | Tipo | Obrig. | Configuração |
|:--:|:--|:--|:--:|:--|
| 1 | Seu nome | Resposta curta | Sim | — |
| 2 | Seu WhatsApp | Resposta curta | Não | Descrição: *Só entramos em contato se você pedir.* |
| 3 | Você participou da **Aula 1** — 04/08, *"O empresário que não lidera, vira refém dos funcionários"*, com Cleiton Pinheiro? | Múltipla escolha | Sim | `Sim, estive presente` · `Assisti à gravação` · `Não participei` |
| 4 | Que nota você dá para a Aula 1? | Escala linear | Não | 0 a 10 · rótulo 0: `Não valeu` · rótulo 10: `Valeu muito` · Descrição: *Pule se não participou.* |
| 5 | Aula 1: o que mais te marcou? | Parágrafo | Não | — |
| 6 | Você participou da **Aula 2** — 25/08, *"Como criar uma máquina de vendas sem depender só de você"*, com Rafael Mendes? | Múltipla escolha | Sim | `Sim, estive presente` · `Assisti à gravação` · `Não participei` |
| 7 | Que nota você dá para a Aula 2? | Escala linear | Não | 0 a 10 · mesmos rótulos |
| 8 | Aula 2: o que mais te marcou? | Parágrafo | Não | — |
| 9 | **Até aqui, de 0 a 10, quanto você recomendaria o VME Expansão a um amigo empresário?** | Escala linear | **Sim** | 0 a 10 · rótulo 0: `De jeito nenhum` · rótulo 10: `Com certeza` |
| 10 | Qual o principal motivo da sua nota? | Parágrafo | Sim | — |
| 11 | **O que precisa melhorar a partir da Aula 3?** | Parágrafo | Sim | Descrição: *Seja específico. O que você escrever aqui vai ser lido pelo professor da próxima aula.* |
| 12 | Podemos usar sua resposta como depoimento? | Múltipla escolha | Sim | `Sim, com meu nome e empresa` · `Sim, só o primeiro nome` · `Sim, sem me identificar` · `Não` |
| 13 | Quer que alguém da coordenação fale com você? | Múltipla escolha | Sim | `Não precisa` · `Sim, quero conversar` |

A pergunta **9** é o NPS de referência da turma — é contra ela que todas as próximas
medições serão comparadas.

---

# Formulário 2 — Pulso da Aula

Um formulário **por aula**. Duplique e troque só o título e a descrição.
Estrutura idêntica em todas — é isso que permite comparar a Aula 3 com a Aula 7.

**Título:** `VME Expansão · Termômetro da Aula 3`

**Descrição:**
> Menos de um minuto. O que você escrever aqui muda a próxima aula — a coordenação lê tudo.
>
> Aula 3 · 01/09 · *Você não tem problema de vendas. Você tem problema de posicionamento.*
> com Daniel Brunet

| # | Pergunta | Tipo | Obrig. | Configuração |
|:--:|:--|:--|:--:|:--|
| 1 | Seu nome | Resposta curta | Sim | — |
| 2 | Seu WhatsApp | Resposta curta | Não | Descrição: *Só entramos em contato se você pedir.* |
| 3 | **De 0 a 10, quanto você recomendaria a aula de hoje a um amigo empresário?** | Escala linear | **Sim** | 0 a 10 · rótulo 0: `De jeito nenhum` · rótulo 10: `Com certeza` |
| 4 | Qual o principal motivo da sua nota? | Parágrafo | Sim | — |
| 5 | **O que faltou para essa aula ser um 10?** | Parágrafo | Não | Descrição: *Vale mesmo se você deu 10 — o que faria a próxima ser ainda melhor?* |
| 6 | **O que você vai aplicar na sua empresa nos próximos 7 dias?** | Parágrafo | Sim | Descrição: *Escreva uma ação concreta. Vamos te perguntar sobre ela.* |
| 7 | Podemos usar sua resposta como depoimento? | Múltipla escolha | Sim | `Sim, com meu nome e empresa` · `Sim, só o primeiro nome` · `Sim, sem me identificar` · `Não` |
| 8 | Quer que alguém da coordenação fale com você? | Múltipla escolha | Sim | `Não precisa` · `Sim, quero conversar` |

**Por que a pergunta 5 existe mesmo para quem deu 10:** é a pergunta que extrai crítica
acionável de quem está satisfeito. Um promotor calado não ensina nada; um promotor que diz
"faltou tempo para perguntas" entrega a melhoria da próxima aula de graça.

**Por que a pergunta 6 existe:** faz dois trabalhos ao mesmo tempo. Gera compromisso no
aluno — quem escreve o que vai fazer, faz mais — e produz o material bruto para o
acompanhamento e para os depoimentos de resultado lá na frente.

### Títulos e descrições das demais aulas

| Aula | Título do formulário | Linha da descrição |
|:--:|:--|:--|
| 4 | `VME Expansão · Termômetro da Aula 4` | Aula 4 · 15/09 · *Como contratar certo e parar de montar e desmontar equipe* — com Dra. Érica Belon |
| 5 | `VME Expansão · Termômetro da Aula 5` | Aula 5 · 29/09 · *Saia da operação: como estruturar processos* — com Gerson Ribeiro |
| 6 | `VME Expansão · Termômetro da Aula 6` | Aula 6 · 13/10 · *Por que sua empresa não cresce: o diagnóstico que ninguém faz* |
| 7 | `VME Expansão · Termômetro da Aula 7` | Aula 7 · 27/10 · *Gestão na prática: rotinas, indicadores e clareza operacional* — com Clécio Albino |
| 8 | `VME Expansão · Termômetro da Aula 8` | Aula 8 · 10/11 · *Fluxo de caixa, lucro e estabilidade* |

---

# Formulário 3 — NPS do Programa

Aplicado **duas vezes**: na Aula 4 (15/09, parcial) e na Aula 8 (10/11, oficial).
Mesmo formulário, títulos diferentes — comparar as duas rodadas mostra se a turma melhorou.

**Título (Aula 4):** `VME Expansão · Avaliação de meio de percurso`
**Título (Aula 8):** `VME Expansão · Avaliação final da Turma 01`

**Descrição:**
> Três minutos. Esta é a pesquisa que define o que ainda dá para melhorar nesta turma e o
> que vai mudar nas próximas. Responda com franqueza — nota baixa aqui não ofende ninguém,
> ajuda.
>
> Instituto AlphaMind · VME Expansão · Turma 01

### Seção 1 — Quem é você

| # | Pergunta | Tipo | Obrig. |
|:--:|:--|:--|:--:|
| 1 | Nome completo | Resposta curta | Sim |
| 2 | Sua empresa e seu cargo | Resposta curta | Sim |
| 3 | Seu WhatsApp | Resposta curta | Sim |

### Seção 2 — A pergunta

| # | Pergunta | Tipo | Obrig. | Configuração |
|:--:|:--|:--|:--:|:--|
| 4 | **De 0 a 10, qual a probabilidade de você recomendar o VME Expansão a um amigo empresário?** | Escala linear | Sim | 0 a 10 · rótulo 0: `De jeito nenhum` · rótulo 10: `Com certeza` |
| 5 | Qual o principal motivo da sua nota? | Parágrafo | Sim | — |
| 6 | **O que precisaria acontecer para essa nota ser um 10?** | Parágrafo | Sim | — |

### Seção 3 — Notas por dimensão

Todas em **Escala linear 0 a 10**, rótulo 0: `Muito ruim`, rótulo 10: `Excelente`,
todas obrigatórias.

| # | Pergunta |
|:--:|:--|
| 7 | Qualidade do **conteúdo** |
| 8 | Qualidade dos **professores** |
| 9 | **Aplicabilidade** — o quanto você conseguiu aplicar na prática |
| 10 | **Estrutura e acolhimento** no Instituto AlphaMind |
| 11 | **Comunicação e organização** — avisos, gravações, materiais |

A dimensão 9 é a mais importante de todas. Nota alta em conteúdo com nota baixa em
aplicabilidade significa que a turma está gostando das aulas mas não está mudando de
comportamento — e isso não gera depoimento, não gera resultado e não gera renovação.

### Seção 4 — O que mudou

| # | Pergunta | Tipo | Obrig. | Configuração |
|:--:|:--|:--|:--:|:--|
| 12 | **O que mudou na sua empresa desde que você começou o VME Expansão?** | Parágrafo | Sim | Descrição: *Seja concreto: um número, uma decisão que você tomou, uma rotina nova, alguém que você contratou ou desligou.* |
| 13 | **Se você tivesse que explicar o VME Expansão para um amigo empresário em uma frase, o que você diria?** | Parágrafo | Sim | — |
| 14 | Qual aula teve o maior impacto para você? | Múltipla escolha | Sim | As 8 aulas na ordem real do calendário |

As perguntas 12 e 13 são a fonte principal dos depoimentos do site. A 13, em especial,
costuma produzir a frase de venda melhor do que qualquer copy escrita internamente — é o
aluno explicando o produto com as palavras dele.

**Opções da pergunta 14:**

```
1. Liderança — O empresário que não lidera, vira refém dos funcionários (Cleiton Pinheiro)
2. Vendas — Como criar uma máquina de vendas sem depender só de você (Rafael Mendes)
3. Posicionamento — Você não tem problema de vendas, tem problema de posicionamento (Daniel Brunet)
4. Equipe — Como contratar certo e parar de montar e desmontar equipe (Dra. Érica Belon)
5. Processos — Saia da operação: como estruturar processos (Gerson Ribeiro)
6. Diagnóstico — Por que sua empresa não cresce
7. Gestão — Rotinas, indicadores e clareza operacional (Clécio Albino)
8. Financeiro — Fluxo de caixa, lucro e estabilidade
```

*Na aplicação da Aula 4, liste apenas as aulas já realizadas (1 a 4).*

### Seção 5 — Indicação e permissões

| # | Pergunta | Tipo | Obrig. | Configuração |
|:--:|:--|:--|:--:|:--|
| 15 | **Você indicaria alguém para a próxima turma? Quem?** | Parágrafo | Não | Descrição: *Nome e, se puder, o WhatsApp. A gente fala com respeito e sem pressão — e diz que veio por indicação sua.* |
| 16 | Podemos usar suas respostas como depoimento? | Múltipla escolha | Sim | `Sim, com meu nome e empresa` · `Sim, só o primeiro nome` · `Sim, sem me identificar` · `Não` |
| 17 | Você pretende continuar com a gente na próxima formação? | Múltipla escolha | Sim | `Sim, com certeza` · `Provavelmente` · `Ainda não sei` · `Não` |
| 18 | Tem algo que você quer dizer e que a gente não perguntou? | Parágrafo | Não | — |

A pergunta 15 é o que transforma o NPS de termômetro em canal de aquisição. A 17 é
intenção declarada de renovação — cruzada com a nota NPS, mostra quem está satisfeito mas
não pretende continuar, que é o grupo mais interessante para uma conversa.

---

## LGPD

Os formulários coletam nome, WhatsApp e empresa — dado pessoal. O mínimo necessário:

1. Acrescente ao final da descrição de cada formulário:
   > Seus dados são usados apenas pela coordenação do VME Expansão, para retorno e melhoria
   > do curso. Não compartilhamos com terceiros. Consulte a Política de Privacidade em
   > vme-expansao.vercel.app/politica-de-privacidade
2. Depoimento só é publicado com a autorização explícita da pergunta correspondente, e no
   formato que a pessoa escolheu.
3. Se alguém pedir a exclusão dos dados, apague a linha da planilha e confirme por WhatsApp.

A página de Política de Privacidade já existe no site e cobre a base — vale acrescentar um
parágrafo sobre pesquisas de satisfação quando houver oportunidade.
