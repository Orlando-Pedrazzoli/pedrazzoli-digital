import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeIn from '@/components/ui/FadeIn';
import { AnimatedFolder } from '@/components/ui/AnimatedFolder';
import { featuresFolders } from '@/data/features';

export default function Features() {
  const { t } = useTranslation();
  const folderTranslations = t('features.folders', { returnObjects: true });

  return (
    <section id='funcionalidades' className='py-24 px-6 bg-[#131834]'>
      <div className='max-w-7xl mx-auto'>
        <SectionHeader
          label={t('features.label')}
          title={t('features.title')}
          description={t('features.description')}
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12'>
          {featuresFolders.map((folder, index) => {
            const ft = folderTranslations[index] || {};
            return (
              <FadeIn key={index} delay={index * 80}>
                <AnimatedFolder
                  title={ft.title || folder.title}
                  description={ft.description || folder.description}
                  projects={folder.projects.map((p, pi) => ({
                    ...p,
                    title: ft.projects?.[pi] || p.title,
                  }))}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
