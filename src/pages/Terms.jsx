import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { siteConfig } from '@/utils/config';

export default function Terms() {
  const lastUpdate = '06 de Março de 2026';

  return (
    <>
      <SEO
        title='Termos de Uso'
        description='Termos de Uso do site Pedrazzoli Digital. Condições gerais para utilização dos nossos serviços de desenvolvimento web.'
        path='/termos'
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
              Termos de{' '}
              <em className='italic text-green-600 dark:text-green-400'>Uso</em>
            </h1>
            <p className='text-sm text-zinc-400 dark:text-zinc-500'>
              Última atualização: {lastUpdate}
            </p>
          </div>

          {/* Content */}
          <div className='space-y-10 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed'>
            <Section title='1. Aceitação dos Termos'>
              <p>
                Ao acessar e utilizar o site{' '}
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  {siteConfig.url}
                </strong>
                , operado por{' '}
                <strong className='text-zinc-900 dark:text-zinc-200'>
                  {siteConfig.name}
                </strong>{' '}
                ({siteConfig.owner.name}), você concorda integralmente com estes
                Termos de Uso. Caso não concorde com algum dos termos,
                solicitamos que não utilize o site.
              </p>
            </Section>

            <Section title='2. Descrição dos Serviços'>
              <p>
                A {siteConfig.name} oferece serviços de desenvolvimento web,
                incluindo criação de sites institucionais, lojas virtuais
                (e-commerce), sistemas web personalizados e manutenção de
                projetos digitais. O site serve como vitrine dos nossos serviços
                e canal de contato com potenciais clientes.
              </p>
            </Section>

            <Section title='3. Uso do Site'>
              <p>
                Ao utilizar este site, você concorda em não utilizar o site para
                fins ilegais ou não autorizados; não tentar acessar áreas
                restritas do site ou dos nossos servidores; não transmitir
                vírus, malware ou qualquer código malicioso; não reproduzir,
                duplicar ou copiar o conteúdo do site sem autorização prévia; e
                fornecer informações verdadeiras ao preencher o formulário de
                contato.
              </p>
            </Section>

            <Section title='4. Propriedade Intelectual'>
              <p>
                Todo o conteúdo do site — incluindo textos, design,
                código-fonte, imagens, logotipos, ícones e a marca{' '}
                {siteConfig.name} — é propriedade exclusiva de{' '}
                {siteConfig.owner.name}e está protegido pelas leis de
                propriedade intelectual do Brasil e de Portugal.
              </p>
              <p>
                É proibida a reprodução, distribuição, modificação ou utilização
                comercial de qualquer conteúdo do site sem autorização escrita
                prévia. O código dos projetos desenvolvidos para clientes é
                regido por contratos específicos de prestação de serviço.
              </p>
            </Section>

            <Section title='5. Portfólio e Projetos'>
              <p>
                Os projetos apresentados na seção de portfólio são reais e
                representam trabalhos desenvolvidos para clientes da{' '}
                {siteConfig.name}. As informações, métricas e descrições são
                apresentadas com consentimento dos respectivos clientes. Os
                links para sites de clientes são fornecidos para referência —
                não somos responsáveis pelo conteúdo de sites de terceiros.
              </p>
            </Section>

            <Section title='6. Formulário de Contato'>
              <p>
                As informações submetidas através do formulário de contato são
                utilizadas exclusivamente para responder à sua solicitação e
                enviar propostas comerciais. Os dados são tratados conforme
                nossa{' '}
                <a
                  href='/privacidade'
                  className='text-green-600 dark:text-green-400 hover:underline no-underline font-medium'
                >
                  Política de Privacidade
                </a>
                . Não utilizamos esses dados para envio de newsletters ou
                comunicações não solicitadas.
              </p>
            </Section>

            <Section title='7. Preços e Pagamentos'>
              <p>
                Os valores apresentados no site são referenciais (a partir de).
                O valor final de cada projeto é definido em proposta comercial
                personalizada após análise das necessidades específicas do
                cliente. Os termos de pagamento, prazos e condições são
                estabelecidos em contrato de prestação de serviço individual.
              </p>
            </Section>

            <Section title='8. Limitação de Responsabilidade'>
              <p>
                A {siteConfig.name} empenha-se em manter o site disponível e com
                informações atualizadas, porém não garantimos a disponibilidade
                ininterrupta do site nem a ausência total de erros. Não nos
                responsabilizamos por danos indiretos, perda de dados ou lucros
                cessantes decorrentes do uso ou impossibilidade de uso do site.
              </p>
              <p>
                O site pode conter links para sites de terceiros. Não nos
                responsabilizamos pelo conteúdo, políticas de privacidade ou
                práticas de qualquer site de terceiros.
              </p>
            </Section>

            <Section title='9. Disponibilidade'>
              <p>
                Reservamo-nos o direito de modificar, suspender ou descontinuar
                qualquer aspecto do site a qualquer momento, sem aviso prévio.
                Podemos também realizar manutenções programadas que podem
                resultar em indisponibilidade temporária.
              </p>
            </Section>

            <Section title='10. Alterações aos Termos'>
              <p>
                Estes Termos de Uso podem ser alterados a qualquer momento. As
                alterações entram em vigor imediatamente após a publicação no
                site. O uso continuado do site após as alterações implica a
                aceitação dos novos termos. Recomendamos que consulte esta
                página periodicamente.
              </p>
            </Section>

            <Section title='11. Legislação Aplicável'>
              <p>
                Estes Termos de Uso são regidos pelas leis da República
                Portuguesa e pela legislação brasileira (Código de Defesa do
                Consumidor e Lei nº 13.709/2018 — LGPD), conforme aplicável ao
                domicílio do utilizador. Eventuais litígios serão submetidos ao
                foro da comarca de Lisboa, Portugal, ou do domicílio do
                consumidor, conforme a legislação aplicável.
              </p>
            </Section>

            <Section title='12. Contato'>
              <p>
                Para questões relacionadas a estes Termos de Uso, entre em
                contato:
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
