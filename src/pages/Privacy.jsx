import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { siteConfig } from '@/utils/config';
import { useCookieConsent } from '@/contexts/CookieProvider';

export default function Privacy() {
  const { openPreferences } = useCookieConsent();
  const lastUpdate = '06 de Março de 2026';

  return (
    <>
      <SEO
        title='Política de Privacidade'
        description='Política de Privacidade da Pedrazzoli Digital. Saiba como coletamos, utilizamos e protegemos seus dados pessoais.'
        path='/privacidade'
      />
      <Navbar />

      <main className='pt-28 pb-24 px-6 bg-[#F8F7F4] dark:bg-[#0C0C0F]'>
        <article className='max-w-180 mx-auto'>
          {/* Header */}
          <div className='mb-12'>
            <p className='text-xs font-bold tracking-[2.5px] uppercase text-green-600 dark:text-green-400 mb-3'>
              Legal
            </p>
            <h1 className='font-display text-[clamp(32px,5vw,48px)] font-normal text-zinc-900 dark:text-zinc-100 leading-[1.1] mb-4'>
              Política de{' '}
              <em className='italic text-green-600 dark:text-green-400'>
                Privacidade
              </em>
            </h1>
            <p className='text-sm text-zinc-400 dark:text-zinc-500'>
              Última atualização: {lastUpdate}
            </p>
          </div>

          {/* Content */}
          <div className='prose-legal space-y-10 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed'>
            <Section title='1. Introdução'>
              <p>
                A{' '}
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  {siteConfig.name}
                </strong>
                , operada por {siteConfig.owner.name}, com sede em{' '}
                {siteConfig.owner.location}, valoriza e respeita a privacidade
                dos seus visitantes e clientes. Esta Política de Privacidade
                descreve como coletamos, utilizamos, armazenamos e protegemos
                seus dados pessoais quando você acessa nosso site (
                {siteConfig.url}).
              </p>
              <p>
                Esta política está em conformidade com a Lei Geral de Proteção
                de Dados (LGPD — Lei nº 13.709/2018) do Brasil e com o
                Regulamento Geral sobre a Proteção de Dados (RGPD/GDPR) da União
                Europeia.
              </p>
            </Section>

            <Section title='2. Responsável pelo Tratamento dos Dados'>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Controlador:
                </strong>{' '}
                {siteConfig.owner.name}
                <br />
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Email:
                </strong>{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className='text-green-600 dark:text-green-400 hover:underline no-underline'
                >
                  {siteConfig.contact.email}
                </a>
                <br />
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Localização:
                </strong>{' '}
                {siteConfig.owner.location}
              </p>
            </Section>

            <Section title='3. Dados que Coletamos'>
              <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Dados fornecidos por você:
                </strong>{' '}
                Nome, email, número de WhatsApp, tipo de negócio e mensagem —
                quando preenchidos voluntariamente no formulário de contato.
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Dados coletados automaticamente:
                </strong>{' '}
                Endereço IP (anonimizado), tipo de navegador, sistema
                operacional, páginas visitadas, tempo de permanência, origem do
                tráfego e dados de interação — coletados através de cookies de
                análise, apenas com seu consentimento prévio.
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Dados de cookies:
                </strong>{' '}
                Preferências de tema (claro/escuro), estado de consentimento de
                cookies e identificadores de sessão. Para mais detalhes,
                consulte a seção 7 (Cookies).
              </p>
            </Section>

            <Section title='4. Finalidades do Tratamento'>
              <p>Utilizamos seus dados pessoais para:</p>
              <p>
                Responder a solicitações de contato e enviar orçamentos;
                melhorar a experiência de navegação no site; analisar o
                desempenho e o tráfego do site (com consentimento); cumprir
                obrigações legais e fiscais; e comunicar atualizações sobre
                projetos em andamento.
              </p>
            </Section>

            <Section title='5. Base Legal para o Tratamento (LGPD Art. 7)'>
              <p>O tratamento de dados pessoais é realizado com base em:</p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Consentimento
                </strong>{' '}
                (Art. 7, I) — para cookies de análise e marketing. Você pode
                revogar seu consentimento a qualquer momento.
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Execução de contrato ou procedimentos preliminares
                </strong>{' '}
                (Art. 7, V) — para responder ao seu formulário de contato e
                enviar propostas.
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Interesse legítimo
                </strong>{' '}
                (Art. 7, IX) — para melhorar nossos serviços e a experiência no
                site, quando não sobrepõe seus direitos.
              </p>
            </Section>

            <Section title='6. Compartilhamento de Dados'>
              <p>Seus dados podem ser compartilhados com:</p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  EmailJS
                </strong>{' '}
                — para processamento do formulário de contato (dados transitam
                criptografados).
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Google Analytics
                </strong>{' '}
                — para análise de tráfego (apenas com seu consentimento, dados
                anonimizados).
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Vercel
                </strong>{' '}
                — para hospedagem do site (logs de acesso básicos).
              </p>
              <p>
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com
                terceiros para fins de marketing sem seu consentimento
                explícito.
              </p>
            </Section>

            <Section title='7. Cookies'>
              <p>
                Utilizamos cookies para funcionalidades essenciais do site e,
                com seu consentimento, para análise de tráfego. Ao visitar nosso
                site pela primeira vez, será apresentado um banner de cookies
                onde pode aceitar, recusar ou personalizar suas preferências.
              </p>
              <p>Os tipos de cookies que utilizamos são:</p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Essenciais:
                </strong>{' '}
                Necessários para o funcionamento do site (preferências de tema,
                estado do consentimento). Não podem ser desativados.
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Análise:
                </strong>{' '}
                Google Analytics para dados agregados de tráfego. Ativados
                apenas com seu consentimento.
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Marketing:
                </strong>{' '}
                Pixels de redes sociais para publicidade direcionada. Ativados
                apenas com seu consentimento.
              </p>
              <p>
                Você pode{' '}
                <button
                  onClick={openPreferences}
                  className='text-green-600 dark:text-green-400 font-semibold underline bg-transparent border-none cursor-pointer text-[15px]'
                >
                  gerenciar suas preferências de cookies
                </button>{' '}
                a qualquer momento.
              </p>
            </Section>

            <Section title='8. Seus Direitos (LGPD Art. 18 / GDPR Art. 15-22)'>
              <p>Você tem o direito de:</p>
              <p>
                Confirmar a existência de tratamento dos seus dados; acessar
                seus dados pessoais; corrigir dados incompletos ou
                desatualizados; solicitar a anonimização, bloqueio ou eliminação
                de dados desnecessários; solicitar a portabilidade dos dados;
                revogar o consentimento a qualquer momento; e ser informado
                sobre as entidades com quem seus dados foram compartilhados.
              </p>
              <p>
                Para exercer qualquer destes direitos, entre em contato pelo
                email{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className='text-green-600 dark:text-green-400 hover:underline no-underline'
                >
                  {siteConfig.contact.email}
                </a>
                . Responderemos no prazo de 15 dias úteis.
              </p>
            </Section>

            <Section title='9. Retenção de Dados'>
              <p>
                Os dados pessoais fornecidos via formulário de contato são
                retidos pelo tempo necessário para atender à sua solicitação e,
                após isso, por até 5 anos para cumprimento de obrigações
                fiscais. Os dados de cookies são retidos conforme a validade de
                cada cookie (máximo de 13 meses para cookies de análise).
              </p>
            </Section>

            <Section title='10. Segurança'>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus
                dados contra acesso não autorizado, perda ou destruição. O site
                utiliza protocolo HTTPS (criptografia SSL/TLS) e os dados do
                formulário são transmitidos de forma criptografada via EmailJS.
              </p>
            </Section>

            <Section title='11. Transferência Internacional'>
              <p>
                Alguns dos nossos prestadores de serviço (EmailJS, Google
                Analytics, Vercel) podem processar dados em servidores fora do
                Brasil e de Portugal. Nesses casos, garantimos que os dados são
                tratados em conformidade com a LGPD e o GDPR, com base em
                cláusulas contratuais padrão ou decisões de adequação.
              </p>
            </Section>

            <Section title='12. Menores de Idade'>
              <p>
                Nosso site e serviços não são direcionados a menores de 18 anos.
                Não coletamos intencionalmente dados de menores. Se tomarmos
                conhecimento de que dados de um menor foram coletados,
                procederemos à sua eliminação imediata.
              </p>
            </Section>

            <Section title='13. Alterações a Esta Política'>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente.
                Recomendamos que a consulte regularmente. A data da última
                atualização está indicada no topo deste documento.
              </p>
            </Section>

            <Section title='14. Contato e Reclamações'>
              <p>
                Para dúvidas, solicitações ou reclamações sobre o tratamento dos
                seus dados, entre em contato:
              </p>
              <p>
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  Email:
                </strong>{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className='text-green-600 dark:text-green-400 hover:underline no-underline'
                >
                  {siteConfig.contact.email}
                </a>
                <br />
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  WhatsApp:
                </strong>{' '}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className='text-green-600 dark:text-green-400 hover:underline no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  +351 912 164 220
                </a>
              </p>
              <p>
                Caso considere que o tratamento dos seus dados não está em
                conformidade, pode apresentar reclamação junto à Autoridade
                Nacional de Proteção de Dados (ANPD) do Brasil ou à Comissão
                Nacional de Proteção de Dados (CNPD) de Portugal.
              </p>
            </Section>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className='text-[18px] font-bold text-zinc-900 dark:text-zinc-100 mb-3'>
        {title}
      </h2>
      {children}
    </section>
  );
}
