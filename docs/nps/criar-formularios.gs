/**
 * VME EXPANSÃO — criação automática das pesquisas de NPS da Turma 01.
 *
 * Rode este script UMA VEZ, logado como vme.expansao@gmail.com.
 * Passo a passo em docs/nps/README.md, seção "Como criar os formulários".
 *
 * O que ele cria, tudo dentro de uma pasta única no Drive:
 *
 *   1. Avaliação de Meio de Percurso  — enviar agora, por WhatsApp
 *   2. Termômetro da Aula 5           — 29/09, na sala
 *   3. Termômetro da Aula 6           — 13/10, na sala
 *   4. Termômetro da Aula 7           — 27/10, na sala
 *   5. Avaliação Final da Turma 01    — 10/11, na sala
 *
 *   + uma planilha única com todas as respostas (uma aba por pesquisa),
 *     uma aba Painel com o NPS calculado e uma aba Ações com as listas
 *     de quem ligar, de quem cobrar depoimento e de quem pediu contato.
 *
 * Rodar duas vezes cria tudo de novo, duplicado. Se precisar recomeçar,
 * apague a pasta antiga no Drive antes.
 */

// ─── Configuração ──────────────────────────────────────────────────────────

var NOME_PASTA    = 'VME Expansão · NPS Turma 01';
var NOME_PLANILHA = 'VME Expansão · Respostas NPS — Turma 01';

var RODAPE_LGPD =
  'Seus dados são usados apenas pela coordenação do VME Expansão, para retorno e ' +
  'melhoria do curso. Não compartilhamos com terceiros. Política de privacidade em ' +
  'vme-expansao.vercel.app/politica-de-privacidade';

var CONFIRMACAO =
  'Recebido. Obrigado de verdade — a coordenação lê todas as respostas, uma por uma.';

var OPCOES_DEPOIMENTO = [
  'Sim, com meu nome e empresa',
  'Sim, só o primeiro nome',
  'Sim, sem me identificar',
  'Não',
];

var OPCOES_CONTATO = ['Não precisa', 'Sim, quero conversar'];

// As 4 aulas já realizadas, na ordem real do calendário.
var AULAS_REALIZADAS = [
  'Aula 1 · 04/08 · O empresário que não lidera, vira refém dos funcionários (Cleiton Pinheiro)',
  'Aula 2 · 25/08 · Como criar uma máquina de vendas sem depender só de você (Rafael Mendes)',
  'Aula 3 · 01/09 · Você não tem problema de vendas. Você tem problema de posicionamento. (Daniel Brunet)',
  'Aula 4 · 15/09 · Como contratar certo e parar de montar e desmontar equipe (Drª Érica Belon)',
];

// As 8 aulas da turma, para a pergunta de maior impacto na avaliação final.
var TODAS_AS_AULAS = AULAS_REALIZADAS.concat([
  'Aula 5 · 29/09 · Saia da operação: como estruturar processos (Gerson Ribeiro de Paula)',
  'Aula 6 · 13/10 · Por que sua empresa não cresce: o diagnóstico que ninguém faz',
  'Aula 7 · 27/10 · Gestão na prática: rotinas, indicadores e clareza operacional (Clécio Albino)',
  'Aula 8 · 10/11 · Fluxo de caixa, lucro e estabilidade',
]);

// Os pulsos por aula que ainda serão aplicados na sala.
var PULSOS = [
  {
    n: 5,
    data: '29/09',
    tema: 'Saia da operação: como estruturar processos para a empresa funcionar sem você',
    professor: 'Gerson Ribeiro de Paula',
  },
  {
    n: 6,
    data: '13/10',
    tema: 'Por que sua empresa não cresce: o diagnóstico que ninguém faz',
    professor: null,
  },
  {
    n: 7,
    data: '27/10',
    tema: 'Gestão na prática: rotinas, indicadores e clareza operacional',
    professor: 'Clécio Albino',
  },
];

// ─── Ponto de entrada ──────────────────────────────────────────────────────

function criarTudo() {
  var pasta = DriveApp.createFolder(NOME_PASTA);
  var ss = SpreadsheetApp.create(NOME_PLANILHA);
  var ssId = ss.getId();
  mover_(ssId, pasta);

  // A coluna da nota NPS depende da ordem das perguntas definida acima.
  // Meio de Percurso: A carimbo, B-D identificação, E-H as quatro aulas, I o NPS.
  // Pulso:            A carimbo, B nome, C whatsapp, D o NPS.
  // Final:            A carimbo, B-D identificação, E-F a aula de hoje, G o NPS.
  var criados = [];

  criados.push(registrar_(criarMeioDePercurso_(), ssId, pasta, 'Meio de Percurso', 'I'));

  for (var i = 0; i < PULSOS.length; i++) {
    criados.push(registrar_(criarPulso_(PULSOS[i]), ssId, pasta, 'Pulso Aula ' + PULSOS[i].n, 'D'));
  }

  criados.push(registrar_(criarAvaliacaoFinal_(), ssId, pasta, 'Avaliação Final', 'G'));

  montarPainel_(ssId, criados);
  montarAcoes_(ssId, 'Meio de Percurso', 'I');
  montarLinks_(ssId, criados, pasta);

  limparAbaPadrao_(ssId);

  Logger.log('Pronto. Planilha: ' + ss.getUrl());
  for (var j = 0; j < criados.length; j++) {
    Logger.log(criados[j].rotulo + ' → ' + criados[j].urlPublica);
  }
  return ss.getUrl();
}

// ─── Pesquisa 1: Avaliação de Meio de Percurso ─────────────────────────────

function criarMeioDePercurso_() {
  var form = FormApp.create('VME Expansão · Avaliação de Meio de Percurso');

  form.setDescription(
    'Quatro das oito aulas já aconteceram. Esta é a pesquisa que define o que ainda dá ' +
    'para melhorar nesta turma e o que vai mudar nas próximas.\n\n' +
    'São cerca de quatro minutos. Responda com franqueza — nota baixa aqui não ofende ' +
    'ninguém, ajuda. Quem der nota baixa recebe uma ligação nossa, e não é para convencer ' +
    'de nada: é para entender.\n\n' +
    'Instituto AlphaMind · VME Expansão · Turma 01\n\n' + RODAPE_LGPD
  );
  ajustesComuns_(form);

  // Seção 1 — identificação
  form.addTextItem().setTitle('Nome completo').setRequired(true);
  form.addTextItem().setTitle('Sua empresa e seu cargo').setRequired(true);
  form.addTextItem()
    .setTitle('Seu WhatsApp')
    .setHelpText('Usamos para o retorno da coordenação.')
    .setRequired(true);

  // Seção 2 — notas das aulas já realizadas
  form.addPageBreakItem()
    .setTitle('As quatro aulas até aqui')
    .setHelpText('Dê uma nota para cada aula que você acompanhou. Deixe em branco a que você não assistiu.');

  for (var i = 0; i < AULAS_REALIZADAS.length; i++) {
    escala_(form, AULAS_REALIZADAS[i], 'Não valeu', 'Valeu muito', false);
  }

  // Seção 3 — a pergunta principal
  form.addPageBreakItem().setTitle('A pergunta principal');

  escala_(
    form,
    'De 0 a 10, qual a probabilidade de você recomendar o VME Expansão a um amigo empresário?',
    'De jeito nenhum', 'Com certeza', true
  );
  form.addParagraphTextItem()
    .setTitle('Qual o principal motivo da sua nota?')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('O que precisaria acontecer para essa nota ser um 10?')
    .setRequired(true);

  // Seção 4 — dimensões
  form.addPageBreakItem()
    .setTitle('Notas por dimensão')
    .setHelpText('De 0 (muito ruim) a 10 (excelente).');

  var dimensoes = [
    'Qualidade do conteúdo',
    'Qualidade dos professores',
    'Aplicabilidade — o quanto você conseguiu aplicar na prática',
    'Estrutura e acolhimento no Instituto AlphaMind',
    'Comunicação e organização (avisos, gravações, materiais)',
  ];
  for (var d = 0; d < dimensoes.length; d++) {
    escala_(form, dimensoes[d], 'Muito ruim', 'Excelente', true);
  }

  // Seção 5 — o que mudou
  form.addPageBreakItem().setTitle('O que mudou na sua empresa');

  form.addParagraphTextItem()
    .setTitle('O que mudou na sua empresa desde que você começou o VME Expansão?')
    .setHelpText('Seja concreto: um número, uma decisão que você tomou, uma rotina nova, alguém que você contratou ou desligou.')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('Se você tivesse que explicar o VME Expansão para um amigo empresário em uma frase, o que você diria?')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Qual aula teve o maior impacto para você?')
    .setChoiceValues(AULAS_REALIZADAS)
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('O que você quer ver nas quatro aulas que ainda faltam?')
    .setHelpText('Isso vai direto para os professores das aulas 5 a 8.')
    .setRequired(true);

  // Seção 6 — indicação e permissões
  form.addPageBreakItem().setTitle('Indicação e permissões');

  form.addParagraphTextItem()
    .setTitle('Você indicaria alguém para a próxima turma? Quem?')
    .setHelpText('Nome e, se puder, o WhatsApp. A gente fala com respeito e sem pressão — e diz que veio por indicação sua.')
    .setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle('Podemos usar suas respostas como depoimento?')
    .setChoiceValues(OPCOES_DEPOIMENTO)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Você pretende continuar com a gente na próxima formação?')
    .setChoiceValues(['Sim, com certeza', 'Provavelmente', 'Ainda não sei', 'Não'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Quer que alguém da coordenação fale com você?')
    .setChoiceValues(OPCOES_CONTATO)
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('Tem algo que você quer dizer e que a gente não perguntou?')
    .setRequired(false);

  return form;
}

// ─── Pesquisas 2 a 4: Termômetro da Aula ───────────────────────────────────

function criarPulso_(aula) {
  var form = FormApp.create('VME Expansão · Termômetro da Aula ' + aula.n);

  var linha = 'Aula ' + aula.n + ' · ' + aula.data + ' · ' + aula.tema;
  if (aula.professor) linha += ' — com ' + aula.professor;

  form.setDescription(
    'Menos de um minuto. O que você escrever aqui muda a próxima aula — a coordenação lê tudo.\n\n' +
    linha + '\n\n' + RODAPE_LGPD
  );
  ajustesComuns_(form);

  form.addTextItem().setTitle('Seu nome').setRequired(true);
  form.addTextItem()
    .setTitle('Seu WhatsApp')
    .setHelpText('Só entramos em contato se você pedir.')
    .setRequired(false);

  escala_(
    form,
    'De 0 a 10, quanto você recomendaria a aula de hoje a um amigo empresário?',
    'De jeito nenhum', 'Com certeza', true
  );
  form.addParagraphTextItem()
    .setTitle('Qual o principal motivo da sua nota?')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('O que faltou para essa aula ser um 10?')
    .setHelpText('Vale mesmo se você deu 10 — o que faria a próxima ser ainda melhor?')
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle('O que você vai aplicar na sua empresa nos próximos 7 dias?')
    .setHelpText('Escreva uma ação concreta. Vamos te perguntar sobre ela.')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Podemos usar sua resposta como depoimento?')
    .setChoiceValues(OPCOES_DEPOIMENTO)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Quer que alguém da coordenação fale com você?')
    .setChoiceValues(OPCOES_CONTATO)
    .setRequired(true);

  return form;
}

// ─── Pesquisa 5: Avaliação Final ───────────────────────────────────────────

function criarAvaliacaoFinal_() {
  var form = FormApp.create('VME Expansão · Avaliação Final da Turma 01');

  form.setDescription(
    'Última aula. Esta é a avaliação que define o VME Expansão das próximas turmas — e é ' +
    'dela que sai o número oficial da Turma 01.\n\n' +
    'Cerca de quatro minutos. Responda com franqueza.\n\n' +
    'Instituto AlphaMind · VME Expansão · Turma 01\n\n' + RODAPE_LGPD
  );
  ajustesComuns_(form);

  form.addTextItem().setTitle('Nome completo').setRequired(true);
  form.addTextItem().setTitle('Sua empresa e seu cargo').setRequired(true);
  form.addTextItem().setTitle('Seu WhatsApp').setRequired(true);

  form.addPageBreakItem().setTitle('A aula de hoje');
  escala_(
    form,
    'De 0 a 10, quanto você recomendaria a aula de hoje (Fluxo de caixa, lucro e estabilidade)?',
    'De jeito nenhum', 'Com certeza', true
  );
  form.addParagraphTextItem()
    .setTitle('O que você vai aplicar na sua empresa nos próximos 7 dias?')
    .setRequired(true);

  form.addPageBreakItem().setTitle('A pergunta principal');
  escala_(
    form,
    'De 0 a 10, qual a probabilidade de você recomendar o VME Expansão a um amigo empresário?',
    'De jeito nenhum', 'Com certeza', true
  );
  form.addParagraphTextItem()
    .setTitle('Qual o principal motivo da sua nota?')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('O que precisaria acontecer para essa nota ser um 10?')
    .setRequired(true);

  form.addPageBreakItem()
    .setTitle('Notas por dimensão')
    .setHelpText('De 0 (muito ruim) a 10 (excelente).');
  var dimensoes = [
    'Qualidade do conteúdo',
    'Qualidade dos professores',
    'Aplicabilidade — o quanto você conseguiu aplicar na prática',
    'Estrutura e acolhimento no Instituto AlphaMind',
    'Comunicação e organização (avisos, gravações, materiais)',
  ];
  for (var d = 0; d < dimensoes.length; d++) {
    escala_(form, dimensoes[d], 'Muito ruim', 'Excelente', true);
  }

  form.addPageBreakItem().setTitle('O que mudou na sua empresa');
  form.addParagraphTextItem()
    .setTitle('O que mudou na sua empresa desde que você começou o VME Expansão?')
    .setHelpText('Seja concreto: um número, uma decisão que você tomou, uma rotina nova, alguém que você contratou ou desligou.')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('Se você tivesse que explicar o VME Expansão para um amigo empresário em uma frase, o que você diria?')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Qual aula teve o maior impacto para você?')
    .setChoiceValues(TODAS_AS_AULAS)
    .setRequired(true);

  form.addPageBreakItem().setTitle('Indicação e permissões');
  form.addParagraphTextItem()
    .setTitle('Você indicaria alguém para a próxima turma? Quem?')
    .setHelpText('Nome e, se puder, o WhatsApp. A gente fala com respeito e sem pressão — e diz que veio por indicação sua.')
    .setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle('Podemos usar suas respostas como depoimento?')
    .setChoiceValues(OPCOES_DEPOIMENTO)
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Você pretende continuar com a gente na próxima formação?')
    .setChoiceValues(['Sim, com certeza', 'Provavelmente', 'Ainda não sei', 'Não'])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('Tem algo que você quer dizer e que a gente não perguntou?')
    .setRequired(false);

  return form;
}

// ─── Auxiliares de formulário ──────────────────────────────────────────────

function ajustesComuns_(form) {
  form.setConfirmationMessage(CONFIRMACAO);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false); // exigir login derruba a taxa de resposta
  try {
    form.setCollectEmail(false);
  } catch (e) {
    // Em contas onde a coleta de e-mail é gerida de outro jeito, seguimos sem ela.
    Logger.log('Aviso: setCollectEmail indisponível neste formulário (' + e + ').');
  }
}

/** Escala linear 0–10, o padrão do NPS. */
function escala_(form, titulo, rotuloBaixo, rotuloAlto, obrigatoria) {
  return form.addScaleItem()
    .setTitle(titulo)
    .setBounds(0, 10)
    .setLabels(rotuloBaixo, rotuloAlto)
    .setRequired(obrigatoria);
}

// ─── Planilha: vínculo, painel, ações e links ──────────────────────────────

/**
 * Liga o formulário à planilha comum, renomeia a aba criada e devolve os
 * dados de que o painel precisa. `colunaNota` é a coluna onde cai a nota NPS,
 * determinada pela ordem das perguntas definida acima.
 */
function registrar_(form, ssId, pasta, rotulo, colunaNota) {
  mover_(form.getId(), pasta);

  // Reabrimos a planilha a cada passo: o objeto fica desatualizado depois que
  // o Forms cria uma aba nova por fora.
  var antes = {};
  var atuais = SpreadsheetApp.openById(ssId).getSheets();
  for (var i = 0; i < atuais.length; i++) antes[atuais[i].getSheetId()] = true;

  form.setDestination(FormApp.DestinationType.SPREADSHEET, ssId);
  SpreadsheetApp.flush();

  var depois = SpreadsheetApp.openById(ssId).getSheets();
  for (var j = 0; j < depois.length; j++) {
    if (!antes[depois[j].getSheetId()]) {
      depois[j].setName(rotulo);
      break;
    }
  }

  return {
    rotulo: rotulo,
    aba: rotulo,
    colunaNota: colunaNota,
    urlPublica: form.getPublishedUrl(),
    urlEdicao: form.getEditUrl(),
  };
}

function montarPainel_(ssId, criados) {
  var sh = SpreadsheetApp.openById(ssId).insertSheet('Painel', 0);

  sh.getRange('A1').setValue('VME EXPANSÃO · PAINEL DE NPS — TURMA 01')
    .setFontSize(14).setFontWeight('bold');
  sh.getRange('A2').setValue(
    'O NPS não é a média das notas: é a % de promotores (9-10) menos a % de detratores (0-6), ' +
    'de -100 a +100. As duas colunas ficam lado a lado de propósito — média boa com NPS ruim ' +
    'significa que há um grupo pequeno e muito insatisfeito escondido atrás da média.'
  ).setFontSize(9).setFontColor('#666666');

  sh.getRange('A4').setValue('Alunos matriculados');
  sh.getRange('B4').setValue('').setBackground('#FFF3CD')
    .setNote('Preencha com o número de matriculados na turma. É o divisor da taxa de resposta.');

  var cabecalho = ['Pesquisa', 'Respostas', 'Taxa', 'Promotores', 'Passivos', 'Detratores', 'NPS', 'Média'];
  sh.getRange(6, 1, 1, cabecalho.length).setValues([cabecalho])
    .setFontWeight('bold').setBackground('#0A0B0D').setFontColor('#C9A24B');

  for (var i = 0; i < criados.length; i++) {
    var c = criados[i];
    var linha = 7 + i;
    var faixa = "'" + c.aba + "'!" + c.colunaNota + '2:' + c.colunaNota;

    sh.getRange(linha, 1).setValue(c.rotulo);
    sh.getRange(linha, 2).setFormula('=COUNT(' + faixa + ')');
    sh.getRange(linha, 3).setFormula('=IFERROR(COUNT(' + faixa + ')/$B$4,"—")').setNumberFormat('0%');
    sh.getRange(linha, 4).setFormula('=COUNTIF(' + faixa + ',">=9")');
    sh.getRange(linha, 5).setFormula('=COUNTIFS(' + faixa + ',">=7",' + faixa + ',"<=8")');
    sh.getRange(linha, 6).setFormula('=COUNTIFS(' + faixa + ',">=0",' + faixa + ',"<=6")');
    sh.getRange(linha, 7).setFormula(
      '=IFERROR(ROUND((COUNTIF(' + faixa + ',">=9")-COUNTIFS(' + faixa + ',">=0",' +
      faixa + ',"<=6"))/COUNT(' + faixa + ')*100),"—")'
    );
    sh.getRange(linha, 8).setFormula('=IFERROR(ROUND(AVERAGE(' + faixa + '),1),"—")');
  }

  var colunaNps = sh.getRange(7, 7, criados.length, 1);
  colunaNps.setFontWeight('bold');
  var regras = [
    faixaDeCor_(colunaNps, -100, 29, '#F8D7DA'),
    faixaDeCor_(colunaNps, 30, 49, '#FDE2C8'),
    faixaDeCor_(colunaNps, 50, 74, '#FFF3CD'),
    faixaDeCor_(colunaNps, 75, 100, '#D4EDDA'),
  ];
  sh.setConditionalFormatRules(regras);

  sh.getRange(6 + criados.length + 2, 1).setValue(
    'Referência para formação executiva presencial no Brasil: 50 a 70 é bom, acima de 75 é ' +
    'excelente, abaixo de 30 é alerta vermelho. Taxa de resposta abaixo de 50% torna o número ' +
    'não confiável.'
  ).setFontSize(9).setFontColor('#666666');

  sh.setColumnWidth(1, 220);
  sh.getRange(7, 2, criados.length, 7).setHorizontalAlignment('center');
}

function faixaDeCor_(faixa, min, max, cor) {
  return SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(min, max)
    .setBackground(cor)
    .setRanges([faixa])
    .build();
}

/**
 * Listas de trabalho da coordenação, apontando para a pesquisa ativa.
 * Para usar com um pulso, duplique a aba e troque o nome entre aspas simples.
 */
function montarAcoes_(ssId, aba, colunaNota) {
  var sh = SpreadsheetApp.openById(ssId).insertSheet('Ações', 1);
  var nota = "'" + aba + "'!" + colunaNota + '2:' + colunaNota;
  var pessoa = "'" + aba + "'!B2:D";   // nome, empresa, whatsapp
  var texto = "'" + aba + "'!" + colunaNota + '2:' + proximaColuna_(colunaNota); // nota e motivo

  sh.getRange('A1').setValue('AÇÕES DA SEMANA — ' + aba)
    .setFontSize(14).setFontWeight('bold');
  sh.getRange('A2').setValue(
    'Listas automáticas. Para aplicar a um pulso, duplique esta aba e troque o nome da ' +
    'pesquisa dentro das fórmulas.'
  ).setFontSize(9).setFontColor('#666666');

  bloco_(sh, 4, 'DETRATORES (0-6) — LIGAR EM 48H', pessoa, texto, nota + '<=6', nota + '<>""',
         'Nenhum detrator. Bom sinal.');
  bloco_(sh, 44, 'PASSIVOS (7-8) — MENSAGEM EM 72H', pessoa, texto, nota + '>=7', nota + '<=8',
         'Nenhum passivo.');
  bloco_(sh, 84, 'PROMOTORES (9-10) — PEDIR DEPOIMENTO E INDICAÇÃO', pessoa, texto, nota + '>=9',
         nota + '<>""', 'Nenhum promotor ainda.');

  sh.setColumnWidth(1, 180);
  sh.setColumnWidth(2, 180);
  sh.setColumnWidth(3, 140);
  sh.setColumnWidth(5, 60);
  sh.setColumnWidth(6, 420);
}

function bloco_(sh, linha, titulo, pessoa, texto, cond1, cond2, vazio) {
  sh.getRange(linha, 1).setValue(titulo).setFontWeight('bold').setFontColor('#0A0B0D');
  sh.getRange(linha + 1, 1).setFormula(
    '=IFERROR(FILTER(' + pessoa + ',' + cond1 + ',' + cond2 + '),"' + vazio + '")'
  );
  sh.getRange(linha + 1, 5).setFormula(
    '=IFERROR(FILTER(' + texto + ',' + cond1 + ',' + cond2 + '),"")'
  );
}

function proximaColuna_(letra) {
  return String.fromCharCode(letra.charCodeAt(0) + 1);
}

function montarLinks_(ssId, criados, pasta) {
  var sh = SpreadsheetApp.openById(ssId).insertSheet('Links', 2);

  sh.getRange('A1').setValue('LINKS DAS PESQUISAS').setFontSize(14).setFontWeight('bold');
  sh.getRange('A2').setValue(
    'O link "para responder" é o que vira QR Code e vai para o grupo do WhatsApp. ' +
    'O link "para editar" é só da coordenação — não divulgue.'
  ).setFontSize(9).setFontColor('#666666');

  sh.getRange(4, 1, 1, 3).setValues([['Pesquisa', 'Link para responder', 'Link para editar']])
    .setFontWeight('bold').setBackground('#0A0B0D').setFontColor('#C9A24B');

  for (var i = 0; i < criados.length; i++) {
    sh.getRange(5 + i, 1).setValue(criados[i].rotulo);
    sh.getRange(5 + i, 2).setValue(criados[i].urlPublica);
    sh.getRange(5 + i, 3).setValue(criados[i].urlEdicao);
  }

  sh.getRange(6 + criados.length, 1).setValue('Pasta no Drive');
  sh.getRange(6 + criados.length, 2).setValue(pasta.getUrl());

  sh.setColumnWidth(1, 220);
  sh.setColumnWidth(2, 420);
  sh.setColumnWidth(3, 420);
}

// ─── Utilitários ───────────────────────────────────────────────────────────

function mover_(fileId, pasta) {
  DriveApp.getFileById(fileId).moveTo(pasta);
}

/** Remove a "Página1" vazia que o Google cria junto com a planilha. */
function limparAbaPadrao_(ssId) {
  var alvo = SpreadsheetApp.openById(ssId);
  var abas = alvo.getSheets();
  for (var i = 0; i < abas.length; i++) {
    var nome = abas[i].getName();
    if ((nome === 'Página1' || nome === 'Sheet1') && abas[i].getLastRow() === 0) {
      alvo.deleteSheet(abas[i]);
      return;
    }
  }
}
