/**
 * VME EXPANSÃO — preenche a Avaliação de Meio de Percurso.
 *
 * Este script NÃO cria um formulário novo: ele escreve as 25 perguntas dentro do
 * formulário que já existe, preservando a imagem de cabeçalho, o tema e a URL que
 * você já configurou. O Apps Script não mexe na foto do cabeçalho, então ela fica
 * exatamente como está.
 *
 * COMO RODAR
 *   1. Logado na conta que é dona do formulário, abra script.google.com
 *   2. Novo projeto → apague o editor → cole este arquivo inteiro
 *   3. Função `preencher` → Executar
 *   4. Autorize (Avançado → Acessar ... (não seguro); é o seu próprio script)
 *
 * Ao terminar, o Log mostra a URL de resposta e — importante — a letra exata da
 * coluna onde a nota do NPS vai cair na planilha, calculada a partir das perguntas
 * que realmente entraram. Não precisa contar à mão.
 */

// ─── Configuração ──────────────────────────────────────────────────────────

var FORM_ID = '1qfXma4AclmL65vHK7Ul0fgvJ6eQO0HGEDmxegfb3E28';

/** true apaga as perguntas que já estão no formulário antes de escrever as novas.
 *  Deixe true num formulário recém-criado: ele remove a "Pergunta sem título"
 *  que o Google cria sozinho. Ponha false se você já digitou perguntas que quer
 *  manter — mas aí elas vão se misturar com as novas, na ordem errada. */
var LIMPAR_ANTES = true;

/** true reescreve o título e a descrição do formulário. */
var AJUSTAR_TITULO = true;

/** true cria a planilha de respostas e monta as abas Painel, Ações e Links.
 *  Ponha false se você JÁ clicou em "Criar planilha" na aba Respostas. */
var CRIAR_PLANILHA = true;

var TITULO = 'VME Expansão · Avaliação de Meio de Percurso';

var DESCRICAO =
  'Cinco das oito aulas já aconteceram. Esta é a pesquisa que define o que ainda dá para ' +
  'melhorar nesta turma e o que vai mudar nas próximas.\n\n' +
  'São cerca de cinco minutos. Responda com franqueza — nota baixa aqui não ofende ninguém, ' +
  'ajuda. Quem der nota baixa recebe uma ligação nossa, e não é para convencer de nada: ' +
  'é para entender.\n\n' +
  'Instituto AlphaMind · VME Expansão · Turma 01\n\n' +
  'Seus dados são usados apenas pela coordenação do VME Expansão, para retorno e melhoria ' +
  'do curso. Não compartilhamos com terceiros. Política de privacidade em ' +
  'vme-expansao.vercel.app/politica-de-privacidade';

var CONFIRMACAO =
  'Recebido. Obrigado de verdade — a coordenação lê todas as respostas, uma por uma.';

var AULAS = [
  'Aula 1 · 04/08 · O empresário que não lidera, vira refém dos funcionários (Cleiton Pinheiro)',
  'Aula 2 · 25/08 · Como criar uma máquina de vendas sem depender só de você (Rafael Mendes)',
  'Aula 3 · 01/09 · Você não tem problema de vendas. Você tem problema de posicionamento. (Daniel Brunet)',
  'Aula 4 · 15/09 · Como contratar certo e parar de montar e desmontar equipe (Drª Érica Belon)',
  'Aula 5 · 29/09 · Saia da operação: como estruturar processos (Gerson Ribeiro de Paula)',
];

var IMPACTO = [
  'Aula 1 — Liderança (Cleiton Pinheiro)',
  'Aula 2 — Vendas (Rafael Mendes)',
  'Aula 3 — Posicionamento (Daniel Brunet)',
  'Aula 4 — Equipe (Drª Érica Belon)',
  'Aula 5 — Processos (Gerson Ribeiro de Paula)',
];

var DIMENSOES = [
  'Qualidade do conteúdo',
  'Qualidade dos professores',
  'Aplicabilidade — o quanto você conseguiu aplicar na prática',
  'Estrutura e acolhimento no Instituto AlphaMind',
  'Comunicação e organização (avisos, gravações, materiais)',
];

var PERGUNTA_NPS =
  'De 0 a 10, qual a probabilidade de você recomendar o VME Expansão a um amigo empresário?';

// Registro das perguntas na ordem em que entram, para calcular as colunas depois.
var ordem = [];

// ─── Ponto de entrada ──────────────────────────────────────────────────────

function preencher() {
  var form = FormApp.openById(FORM_ID);

  if (LIMPAR_ANTES) {
    var itens = form.getItems();
    for (var i = itens.length - 1; i >= 0; i--) form.deleteItem(itens[i]);
    Logger.log('Removidas ' + itens.length + ' perguntas que já estavam no formulário.');
  }

  if (AJUSTAR_TITULO) {
    form.setTitle(TITULO);
    form.setDescription(DESCRICAO);
  }

  form.setConfirmationMessage(CONFIRMACAO);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false); // exigir login derruba a taxa de resposta
  try {
    form.setCollectEmail(false);
  } catch (e) {
    Logger.log('Aviso: setCollectEmail indisponível (' + e + ').');
  }

  // ── Seção 1 — quem é você
  texto_(form, 'Nome completo', null, true);
  texto_(form, 'Sua empresa e seu cargo', null, true);
  texto_(form, 'Seu WhatsApp', 'Usamos para o retorno da coordenação.', true);

  // ── Seção 2 — as cinco aulas
  secao_(form, 'As cinco aulas até aqui',
    'Dê uma nota para cada aula que você acompanhou. Deixe em branco a que você não assistiu.');
  for (var a = 0; a < AULAS.length; a++) {
    escala_(form, AULAS[a], 'Não valeu', 'Valeu muito', false);
  }

  // ── Seção 3 — a pergunta principal
  secao_(form, 'A pergunta principal', null);
  escala_(form, PERGUNTA_NPS, 'De jeito nenhum', 'Com certeza', true);
  paragrafo_(form, 'Qual o principal motivo da sua nota?', null, true);
  paragrafo_(form, 'O que precisaria acontecer para essa nota ser um 10?', null, true);

  // ── Seção 4 — dimensões
  secao_(form, 'Notas por dimensão', 'De 0 (muito ruim) a 10 (excelente).');
  for (var d = 0; d < DIMENSOES.length; d++) {
    escala_(form, DIMENSOES[d], 'Muito ruim', 'Excelente', true);
  }

  // ── Seção 5 — o que mudou
  secao_(form, 'O que mudou na sua empresa', null);
  paragrafo_(form,
    'O que mudou na sua empresa desde que você começou o VME Expansão?',
    'Seja concreto: um número, uma decisão que você tomou, uma rotina nova, alguém que você contratou ou desligou.',
    true);
  paragrafo_(form,
    'Se você tivesse que explicar o VME Expansão para um amigo empresário em uma frase, o que você diria?',
    null, true);
  escolha_(form, 'Qual aula teve o maior impacto para você?', IMPACTO, true);

  // ── Seção 6 — o que falta, indicação e permissões
  secao_(form, 'As três aulas que faltam', null);
  paragrafo_(form, 'O que você quer ver nas três aulas que ainda faltam?',
    'Isso vai direto para os professores das aulas 6, 7 e 8.', true);
  paragrafo_(form, 'Você indicaria alguém para a próxima turma? Quem?',
    'Nome e, se puder, o WhatsApp. A gente fala com respeito e sem pressão — e diz que veio por indicação sua.',
    false);
  escolha_(form, 'Podemos usar suas respostas como depoimento?', [
    'Sim, com meu nome e empresa',
    'Sim, só o primeiro nome',
    'Sim, sem me identificar',
    'Não',
  ], true);
  escolha_(form, 'Você pretende continuar com a gente na próxima formação?',
    ['Sim, com certeza', 'Provavelmente', 'Ainda não sei', 'Não'], true);
  escolha_(form, 'Quer que alguém da coordenação fale com você?',
    ['Não precisa', 'Sim, quero conversar'], true);
  paragrafo_(form, 'Tem algo que você quer dizer e que a gente não perguntou?', null, false);

  // ── Coluna da nota NPS, calculada e não chutada
  var colunaNps = colunaDe_(PERGUNTA_NPS);

  Logger.log('--------------------------------------------------');
  Logger.log('Perguntas escritas: ' + ordem.length);
  Logger.log('Link para responder: ' + form.getPublishedUrl());
  Logger.log('Link para editar:    ' + form.getEditUrl());
  Logger.log('Coluna da nota NPS na planilha: ' + colunaNps);
  Logger.log('--------------------------------------------------');

  if (CRIAR_PLANILHA) {
    var url = montarPlanilha_(form, colunaNps);
    Logger.log('Planilha de respostas: ' + url);
  } else {
    Logger.log('Planilha não criada (CRIAR_PLANILHA = false). Fórmula do NPS:');
    Logger.log(formulaNps_('Respostas', colunaNps));
  }

  return form.getPublishedUrl();
}

// ─── Auxiliares de formulário ──────────────────────────────────────────────

function texto_(form, titulo, ajuda, obrigatoria) {
  var it = form.addTextItem().setTitle(titulo).setRequired(obrigatoria);
  if (ajuda) it.setHelpText(ajuda);
  ordem.push(titulo);
  return it;
}

function paragrafo_(form, titulo, ajuda, obrigatoria) {
  var it = form.addParagraphTextItem().setTitle(titulo).setRequired(obrigatoria);
  if (ajuda) it.setHelpText(ajuda);
  ordem.push(titulo);
  return it;
}

/** Escala linear 0–10: o padrão do NPS, sem o qual o número não é comparável. */
function escala_(form, titulo, rotuloBaixo, rotuloAlto, obrigatoria) {
  var it = form.addScaleItem()
    .setTitle(titulo)
    .setBounds(0, 10)
    .setLabels(rotuloBaixo, rotuloAlto)
    .setRequired(obrigatoria);
  ordem.push(titulo);
  return it;
}

function escolha_(form, titulo, opcoes, obrigatoria) {
  var it = form.addMultipleChoiceItem()
    .setTitle(titulo)
    .setChoiceValues(opcoes)
    .setRequired(obrigatoria);
  ordem.push(titulo);
  return it;
}

/** Quebra de página: organiza o formulário mas não gera coluna na planilha. */
function secao_(form, titulo, ajuda) {
  var it = form.addPageBreakItem().setTitle(titulo);
  if (ajuda) it.setHelpText(ajuda);
  return it;
}

/** Coluna A é o carimbo de data/hora; as perguntas começam em B. */
function colunaDe_(titulo) {
  var i = ordem.indexOf(titulo);
  if (i === -1) return '?';
  return letra_(i + 2);
}

function letra_(n) {
  var s = '';
  while (n > 0) {
    var r = (n - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

// ─── Planilha de respostas ─────────────────────────────────────────────────

function formulaNps_(aba, col) {
  var f = "'" + aba + "'!" + col + '2:' + col;
  return '=IFERROR(ROUND((COUNTIF(' + f + ',">=9")-COUNTIFS(' + f + ',">=0",' + f +
         ',"<=6"))/COUNT(' + f + ')*100),"—")';
}

function montarPlanilha_(form, colunaNps) {
  var ss = SpreadsheetApp.create('VME Expansão · Respostas — Meio de Percurso');
  var ssId = ss.getId();

  var antes = {};
  var atuais = SpreadsheetApp.openById(ssId).getSheets();
  for (var i = 0; i < atuais.length; i++) antes[atuais[i].getSheetId()] = true;

  form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId);
  SpreadsheetApp.flush();

  var ABA = 'Respostas';
  var depois = SpreadsheetApp.openById(ssId).getSheets();
  for (var j = 0; j < depois.length; j++) {
    if (!antes[depois[j].getSheetId()]) { depois[j].setName(ABA); break; }
  }

  painel_(ssId, ABA, colunaNps);
  acoes_(ssId, ABA, colunaNps);
  limparAbaPadrao_(ssId);

  return SpreadsheetApp.openById(ssId).getUrl();
}

function painel_(ssId, aba, col) {
  var sh = SpreadsheetApp.openById(ssId).insertSheet('Painel', 0);
  var f = "'" + aba + "'!" + col + '2:' + col;

  sh.getRange('A1').setValue('VME EXPANSÃO · NPS — AVALIAÇÃO DE MEIO DE PERCURSO')
    .setFontSize(14).setFontWeight('bold');
  sh.getRange('A2').setValue(
    'O NPS não é a média das notas: é a % de promotores (9-10) menos a % de detratores ' +
    '(0-6), de -100 a +100. Média boa com NPS ruim significa que há um grupo pequeno e ' +
    'muito insatisfeito escondido atrás da média — e é esse grupo que precisa da ligação.'
  ).setFontSize(9).setFontColor('#666666');

  var linhas = [
    ['Alunos matriculados', null],
    ['Respostas', '=COUNT(' + f + ')'],
    ['Taxa de resposta', '=IFERROR(COUNT(' + f + ')/$B$4,"—")'],
    ['Promotores (9-10)', '=COUNTIF(' + f + ',">=9")'],
    ['Passivos (7-8)', '=COUNTIFS(' + f + ',">=7",' + f + ',"<=8")'],
    ['Detratores (0-6)', '=COUNTIFS(' + f + ',">=0",' + f + ',"<=6")'],
    ['NPS', formulaNps_(aba, col)],
    ['Nota média', '=IFERROR(ROUND(AVERAGE(' + f + '),1),"—")'],
  ];

  for (var i = 0; i < linhas.length; i++) {
    var linha = 4 + i;
    sh.getRange(linha, 1).setValue(linhas[i][0]);
    if (linhas[i][1]) sh.getRange(linha, 2).setFormula(linhas[i][1]);
  }

  sh.getRange('B4').setBackground('#FFF3CD')
    .setNote('Preencha com o número de matriculados. É o divisor da taxa de resposta.');
  sh.getRange('B6').setNumberFormat('0%');
  sh.getRange('B10').setFontWeight('bold').setFontSize(13);

  var alvo = sh.getRange('B10');
  sh.setConditionalFormatRules([
    cor_(alvo, -100, 29, '#F8D7DA'),
    cor_(alvo, 30, 49, '#FDE2C8'),
    cor_(alvo, 50, 74, '#FFF3CD'),
    cor_(alvo, 75, 100, '#D4EDDA'),
  ]);

  sh.getRange('A13').setValue(
    'Referência para formação executiva presencial no Brasil: 50 a 70 é bom, acima de 75 é ' +
    'excelente, abaixo de 30 é alerta vermelho. Taxa abaixo de 50% torna o número não confiável.'
  ).setFontSize(9).setFontColor('#666666');

  sh.setColumnWidth(1, 200);
}

function cor_(faixa, min, max, cor) {
  return SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(min, max).setBackground(cor).setRanges([faixa]).build();
}

function acoes_(ssId, aba, col) {
  var sh = SpreadsheetApp.openById(ssId).insertSheet('Ações', 1);
  var nota = "'" + aba + "'!" + col + '2:' + col;
  var pessoa = "'" + aba + "'!B2:D";                       // nome, empresa, whatsapp
  var motivo = "'" + aba + "'!" + col + '2:' + letra_(col.charCodeAt(0) - 64 + 1); // nota e motivo

  sh.getRange('A1').setValue('AÇÕES DA SEMANA').setFontSize(14).setFontWeight('bold');
  sh.getRange('A2').setValue('Listas automáticas, atualizadas a cada resposta nova.')
    .setFontSize(9).setFontColor('#666666');

  bloco_(sh, 4, 'DETRATORES (0-6) — LIGAR EM 48H', pessoa, motivo,
         nota + '<=6', nota + '<>""', 'Nenhum detrator. Bom sinal.');
  bloco_(sh, 44, 'PASSIVOS (7-8) — MENSAGEM EM 72H', pessoa, motivo,
         nota + '>=7', nota + '<=8', 'Nenhum passivo.');
  bloco_(sh, 84, 'PROMOTORES (9-10) — PEDIR DEPOIMENTO E INDICAÇÃO', pessoa, motivo,
         nota + '>=9', nota + '<>""', 'Nenhum promotor ainda.');

  sh.setColumnWidth(1, 180);
  sh.setColumnWidth(2, 180);
  sh.setColumnWidth(3, 140);
  sh.setColumnWidth(5, 60);
  sh.setColumnWidth(6, 420);
}

function bloco_(sh, linha, titulo, pessoa, motivo, cond1, cond2, vazio) {
  sh.getRange(linha, 1).setValue(titulo).setFontWeight('bold');
  sh.getRange(linha + 1, 1).setFormula(
    '=IFERROR(FILTER(' + pessoa + ',' + cond1 + ',' + cond2 + '),"' + vazio + '")');
  sh.getRange(linha + 1, 5).setFormula(
    '=IFERROR(FILTER(' + motivo + ',' + cond1 + ',' + cond2 + '),"")');
}

function limparAbaPadrao_(ssId) {
  var ss = SpreadsheetApp.openById(ssId);
  var abas = ss.getSheets();
  for (var i = 0; i < abas.length; i++) {
    var n = abas[i].getName();
    if ((n === 'Página1' || n === 'Sheet1') && abas[i].getLastRow() === 0) {
      ss.deleteSheet(abas[i]);
      return;
    }
  }
}
