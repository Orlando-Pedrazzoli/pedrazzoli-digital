import { useTranslation } from 'react-i18next';
import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import AboutMe from '@/components/sections/AboutMe';
import Process from '@/components/sections/Process';

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('seo.about.title')}
        description={t('seo.about.description')}
      />
      <Navbar />
      <main className='relative z-20 bg-[#F8F7F4] dark:bg-[#131834]'>
        <div className='pt-20' />
        <AboutMe />
        <Process />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
