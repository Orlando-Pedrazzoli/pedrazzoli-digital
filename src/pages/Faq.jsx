import { useTranslation } from 'react-i18next';
import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import FAQ from '@/components/sections/FAQ';

export default function Faq() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('seo.faq.title')} description={t('seo.faq.description')} />
      <Navbar />
      <main className='relative z-20 bg-[#F8F7F4] dark:bg-[#131834]'>
        <div className='pt-20' />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
