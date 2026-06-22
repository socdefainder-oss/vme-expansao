import LegalPage from '../components/LegalPage.jsx'
import { COMPANY } from '../data.js'

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Como o Instituto AlphaMind coleta, utiliza, armazena e protege os seus dados pessoais no âmbito do programa VME Expansão."
    >
      <p className="lead">
        Esta Política de Privacidade descreve como o <strong>{COMPANY.name}</strong>, responsável
        pela criação e realização do programa <strong>{COMPANY.product}</strong>, trata os dados
        pessoais de visitantes, interessados e participantes, em conformidade com a Lei nº
        13.709/2018 (Lei Geral de Proteção de Dados Pessoais — “LGPD”), o Marco Civil da Internet
        (Lei nº 12.965/2014) e demais normas aplicáveis.
      </p>
      <p>
        Ao acessar este site ou se inscrever no VME Expansão, você declara estar ciente das práticas
        descritas neste documento. Recomendamos a leitura atenta e, em caso de dúvidas, o contato
        pelos canais indicados ao final.
      </p>

      <h2>1. Quem é o controlador dos seus dados</h2>
      <p>
        O controlador dos dados pessoais tratados em razão do VME Expansão é o{' '}
        <strong>{COMPANY.name}</strong>, criador e responsável pelo programa, com endereço em{' '}
        {COMPANY.address}. Informações institucionais adicionais podem ser consultadas em{' '}
        <a href={COMPANY.site} target="_blank" rel="noopener noreferrer">
          {COMPANY.siteLabel}
        </a>
        .
      </p>

      <h2>2. Quais dados coletamos</h2>
      <h3>2.1. Dados fornecidos por você</h3>
      <ul>
        <li>
          <strong>Dados de identificação e contato:</strong> nome completo, e-mail, telefone/WhatsApp
          e, quando aplicável, cidade e empresa.
        </li>
        <li>
          <strong>Dados de inscrição:</strong> informações fornecidas em formulários de interesse,
          inscrição ou atendimento.
        </li>
        <li>
          <strong>Dados de pagamento:</strong> as transações são processadas por plataformas de
          pagamento parceiras. Não armazenamos os dados completos do seu cartão; recebemos apenas
          confirmações e informações necessárias à gestão da matrícula.
        </li>
        <li>
          <strong>Comunicações:</strong> mensagens, dúvidas e interações enviadas por você por
          e-mail, WhatsApp ou redes sociais.
        </li>
      </ul>
      <h3>2.2. Dados coletados automaticamente</h3>
      <ul>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, tipo de dispositivo, navegador, páginas
          acessadas, tempo de permanência e origem do acesso.
        </li>
        <li>
          <strong>Cookies e tecnologias semelhantes:</strong> identificadores utilizados para
          funcionamento do site, métricas e marketing, conforme a seção específica abaixo.
        </li>
      </ul>

      <h2>3. Para que finalidades utilizamos os dados</h2>
      <ul>
        <li>Processar inscrições, matrículas e pagamentos do VME Expansão;</li>
        <li>Disponibilizar acesso às aulas ao vivo, gravações e materiais na plataforma;</li>
        <li>Comunicar informações sobre datas, horários, conteúdos e alterações do programa;</li>
        <li>Prestar suporte e atendimento aos interessados e participantes;</li>
        <li>
          Enviar comunicações institucionais e de marketing sobre o VME Expansão e iniciativas do{' '}
          {COMPANY.name}, sempre com possibilidade de descadastramento;
        </li>
        <li>Realizar análises estatísticas, medir resultados e aprimorar a experiência do site;</li>
        <li>Prevenir fraudes, garantir segurança e cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>4. Bases legais do tratamento</h2>
      <p>
        O tratamento dos seus dados se fundamenta nas hipóteses do art. 7º da LGPD, em especial:
      </p>
      <ul>
        <li>
          <strong>Execução de contrato</strong> e procedimentos preliminares relacionados à sua
          inscrição (art. 7º, V);
        </li>
        <li>
          <strong>Cumprimento de obrigação legal ou regulatória</strong> pelo controlador (art. 7º,
          II);
        </li>
        <li>
          <strong>Legítimo interesse</strong> para melhoria dos serviços, segurança e comunicação
          relacionada (art. 7º, IX);
        </li>
        <li>
          <strong>Consentimento</strong>, quando exigido, por exemplo para determinadas comunicações
          de marketing e cookies não essenciais (art. 7º, I).
        </li>
      </ul>

      <h2>5. Cookies e tecnologias de rastreamento</h2>
      <p>
        Utilizamos cookies essenciais (necessários ao funcionamento do site), cookies de desempenho
        e analytics (para entender o uso das páginas) e, eventualmente, cookies de marketing (para
        mensurar campanhas). Você pode gerenciar ou bloquear cookies nas configurações do seu
        navegador, ciente de que alguns recursos podem ser afetados.
      </p>

      <h2>6. Compartilhamento de dados</h2>
      <p>Seus dados podem ser compartilhados, na medida do necessário, com:</p>
      <ul>
        <li>
          <strong>Operadores e prestadores de serviço:</strong> plataformas de pagamento, hospedagem,
          plataforma de aulas e gravações, ferramentas de e-mail, CRM e analytics;
        </li>
        <li>
          <strong>Parceiros do {COMPANY.name}</strong> envolvidos na realização do VME Expansão,
          observado o dever de confidencialidade;
        </li>
        <li>
          <strong>Autoridades públicas</strong>, quando houver obrigação legal, regulatória ou ordem
          judicial.
        </li>
      </ul>
      <p>Não vendemos seus dados pessoais a terceiros.</p>

      <h2>7. Transferência internacional</h2>
      <p>
        Algumas ferramentas utilizadas podem armazenar dados em servidores localizados fora do
        Brasil. Nesses casos, adotamos salvaguardas para garantir que a transferência ocorra em
        conformidade com a LGPD.
      </p>

      <h2>8. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acessos
        não autorizados, perda, alteração ou divulgação indevida. Apesar dos esforços, nenhum sistema
        é totalmente imune a incidentes; em caso de incidente relevante, atuaremos conforme a
        legislação aplicável.
      </p>

      <h2>9. Por quanto tempo guardamos seus dados</h2>
      <p>
        Mantemos os dados pelo tempo necessário ao cumprimento das finalidades descritas, ou pelos
        prazos exigidos por obrigações legais, contratuais e para o exercício regular de direitos.
        Encerradas as finalidades, os dados são eliminados ou anonimizados, ressalvadas as hipóteses
        legais de guarda.
      </p>

      <h2>10. Seus direitos como titular</h2>
      <p>Nos termos do art. 18 da LGPD, você pode, a qualquer tempo, solicitar:</p>
      <ul>
        <li>confirmação da existência de tratamento e acesso aos seus dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>
          anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;
        </li>
        <li>portabilidade dos dados, observados os limites legais;</li>
        <li>eliminação dos dados tratados com base no consentimento;</li>
        <li>informação sobre o compartilhamento com quem realizamos uso compartilhado;</li>
        <li>revogação do consentimento e oposição a tratamentos, quando cabível.</li>
      </ul>

      <h2>11. Como exercer seus direitos</h2>
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato com o
        encarregado/responsável pelo tratamento de dados do {COMPANY.name} pelos canais indicados na
        seção “Contato”. Poderemos solicitar informações adicionais para confirmar sua identidade
        antes de atender à solicitação.
      </p>

      <h2>12. Dados de crianças e adolescentes</h2>
      <p>
        O VME Expansão é destinado a maiores de 18 anos. Não coletamos intencionalmente dados de
        menores sem o consentimento dos responsáveis. Caso identifique tratamento indevido, entre em
        contato para que possamos adotar as providências cabíveis.
      </p>

      <h2>13. Links e serviços de terceiros</h2>
      <p>
        Este site pode conter links para páginas e serviços de terceiros, incluindo o site do{' '}
        {COMPANY.name} e plataformas de pagamento. Não nos responsabilizamos pelas práticas de
        privacidade desses terceiros, cujas políticas devem ser consultadas separadamente.
      </p>

      <h2>14. Alterações desta Política</h2>
      <p>
        Esta Política poderá ser atualizada a qualquer momento para refletir mudanças legais,
        técnicas ou de negócio. A versão vigente estará sempre disponível nesta página, com indicação
        da data da última atualização.
      </p>

      <h2>15. Contato</h2>
      <p>
        <strong>Controlador:</strong> {COMPANY.name}
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
