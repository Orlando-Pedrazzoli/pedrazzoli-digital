import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import FadeIn from '@/components/ui/FadeIn';
import Plans from '@/components/sections/Plans';
import Process from '@/components/sections/Process';
import CTAFinal from '@/components/sections/CTAFinal';

export default function Planos() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.plans.title')}
        description={t('seo.plans.description')}
        path='/planos'
      />
      <Navbar />
      <main className='relative z-20 bg-[#F8F7F4] dark:bg-[#131834]'>
        <div className='pt-28'>
          {/* Back link */}
          <div className='max-w-300 mx-auto px-6'>
            <FadeIn>
              <Link
                to='/'
                className='inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors mb-4 no-underline'
              >
                <ArrowLeft size={14} />
                {t('common.backToHome')}
              </Link>
            </FadeIn>
          </div>

          <Plans />
          <Process />
          <CTAFinal />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
