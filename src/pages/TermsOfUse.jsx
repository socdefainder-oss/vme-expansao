import LegalPage from '../components/LegalPage.jsx'
import { COMPANY } from '../data.js'

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Termos de Uso"
      subtitle="Condições gerais que regem o acesso ao site e a participação no programa VME Expansão, realizado pelo Instituto AlphaMind."
    >
      <p className="lead">
        Estes Termos de Uso (“Termos”) regulam o acesso e a utilização deste site, bem como as
        condições de inscrição e participação no programa <strong>{COMPANY.product}</strong>,
        idealizado e realizado pelo <strong>{COMPANY.name}</strong>. Ao navegar neste site ou efetuar
        sua inscrição, você declara ter lido, compreendido e aceitado integralmente estes Termos.
      </p>

      <h2>1. Aceitação dos Termos</h2>
      <p>
        A utilização do site e a contratação do VME Expansão implicam a aceitação plena destes
        Termos e da nossa{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>. Caso não concorde com
        qualquer condição, você não deve utilizar o site nem se inscrever no programa.
      </p>

      <h2>2. Sobre o VME Expansão</h2>
      <p>
        O VME Expansão é uma escola prática de negócios, composta por 8 encontros ao vivo realizados
        no Instituto AlphaMind, voltada a empresários e empreendedores que desejam estruturar e
        expandir seus negócios. O conteúdo possui caráter <strong>educacional e informativo</strong>,
        fundamentado em experiência de mercado e em princípios, não constituindo garantia de
        resultados financeiros específicos.
      </p>

      <h2>3. Definições</h2>
      <ul>
        <li>
          <strong>Programa:</strong> o conjunto de aulas, encontros, materiais e gravações do VME
          Expansão;
        </li>
        <li>
          <strong>Aluno/Participante:</strong> pessoa que efetua a inscrição e é admitida no
          Programa;
        </li>
        <li>
          <strong>Plataforma:</strong> ambiente digital onde são disponibilizadas as gravações e
          materiais.
        </li>
      </ul>

      <h2>4. Inscrição e cadastro</h2>
      <p>
        A inscrição é individual e exige o fornecimento de informações verdadeiras, completas e
        atualizadas. O Participante é responsável pela veracidade dos dados e pela guarda de suas
        credenciais de acesso à Plataforma, que são pessoais e intransferíveis. A participação é
        destinada a maiores de 18 anos.
      </p>

      <h2>5. Valores e condições de pagamento</h2>
      <p>
        O investimento no VME Expansão, bem como as condições de parcelamento e eventuais condições
        especiais, são informados na página de oferta no momento da inscrição. Os pagamentos são
        processados por <strong>plataformas de pagamento parceiras</strong>, sujeitos às regras e à
        aprovação dessas instituições. Valores, datas, professores e formato podem ser ajustados pelo{' '}
        {COMPANY.name} mediante comunicação prévia, preservados os direitos dos já inscritos.
      </p>

      <h2>6. Direito de arrependimento e garantia</h2>
      <p>
        Nos termos do art. 49 do Código de Defesa do Consumidor, nas contratações realizadas fora do
        estabelecimento (por exemplo, pela internet), o Participante pode desistir da contratação no
        prazo de <strong>7 (sete) dias</strong> a contar da confirmação da compra, com devolução
        integral dos valores pagos. O pedido deve ser feito pelos canais de contato indicados, e o
        reembolso será processado conforme os meios de pagamento utilizados.
      </p>

      <h2>7. Acesso às aulas, gravações e materiais</h2>
      <p>
        Os encontros ocorrem ao vivo, nas datas e horários divulgados. As gravações ficam disponíveis
        na Plataforma após cada aula, por período determinado pelo {COMPANY.name}. Eventuais
        instabilidades técnicas pontuais não caracterizam descumprimento, comprometendo-se o{' '}
        {COMPANY.name} a envidar esforços razoáveis para restabelecer o acesso.
      </p>

      <h2>8. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo do VME Expansão — incluindo aulas, apostilas, materiais, marcas, logotipos,
        textos, imagens e identidade visual — é de titularidade ou licenciado ao{' '}
        <strong>{COMPANY.name}</strong> e protegido pela legislação de propriedade intelectual. É
        concedida ao Participante uma licença <strong>pessoal, limitada, intransferível e não
        exclusiva</strong> de acesso, exclusivamente para fins de estudo individual.
      </p>
      <p>É expressamente vedado, sem autorização prévia e por escrito:</p>
      <ul>
        <li>reproduzir, copiar, gravar, distribuir ou compartilhar o conteúdo, no todo ou em parte;</li>
        <li>comercializar, sublicenciar ou disponibilizar o acesso a terceiros;</li>
        <li>utilizar marcas, nome ou materiais do VME Expansão e do {COMPANY.name} indevidamente.</li>
      </ul>
      <p>
        O descumprimento poderá acarretar o cancelamento do acesso, sem prejuízo das medidas civis e
        criminais cabíveis.
      </p>

      <h2>9. Conduta do Participante</h2>
      <p>O Participante compromete-se a:</p>
      <ul>
        <li>utilizar o conteúdo de forma ética e conforme estes Termos e a legislação vigente;</li>
        <li>manter respeito com professores, equipe e demais participantes;</li>
        <li>não praticar atos que prejudiquem o funcionamento do Programa ou de terceiros.</li>
      </ul>

      <h2>10. Limitação de responsabilidade</h2>
      <p>
        O VME Expansão entrega <strong>conhecimento, método e direção</strong>, mas os resultados
        dependem da aplicação, do contexto e do esforço de cada Participante. Dessa forma, o{' '}
        {COMPANY.name} não garante resultados financeiros, comerciais ou de qualquer natureza, nem se
        responsabiliza por decisões de negócio tomadas pelo Participante com base no conteúdo.
      </p>

      <h2>11. Cancelamento e suspensão de acesso</h2>
      <p>
        O {COMPANY.name} poderá suspender ou cancelar o acesso do Participante que violar estes
        Termos, especialmente em casos de compartilhamento indevido de conteúdo ou conduta
        incompatível, observado o contraditório quando aplicável e sem prejuízo de outras medidas.
      </p>

      <h2>12. Alterações no Programa</h2>
      <p>
        Por motivos operacionais, datas, horários, professores convidados e a grade de conteúdos
        poderão sofrer alterações. Mudanças relevantes serão comunicadas pelos canais oficiais, sempre
        buscando preservar a qualidade e a proposta do Programa.
      </p>

      <h2>13. Privacidade e proteção de dados</h2>
      <p>
        O tratamento de dados pessoais relacionado a estes Termos observa a nossa{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>, parte integrante deste
        documento.
      </p>

      <h2>14. Alterações destes Termos</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará sempre
        disponível nesta página, com a respectiva data de atualização. O uso continuado do site após
        alterações representa concordância com a versão revisada.
      </p>

      <h2>15. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da{' '}
        {COMPANY.forum}, com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir
        controvérsias decorrentes destes Termos, ressalvadas as hipóteses de competência do foro do
        domicílio do consumidor previstas em lei.
      </p>

      <h2>16. Contato</h2>
      <p>
        <strong>{COMPANY.name}</strong>
        <br />
        <strong>Endereço:</strong> {COMPANY.address}
        <br />
        <strong>WhatsApp:</strong> {COMPANY.whatsapp}
        <br />
        <strong>E-mail:</strong> {COMPANY.email}
        <br />
        <strong>Site:</strong>{' '}
        <a href={COMPANY.site} target="_blank" rel="noopener noreferrer">
          {COMPANY.siteLabel}
        </a>
      </p>
    </LegalPage>
  )
}
