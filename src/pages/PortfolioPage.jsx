import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/seo/SEO';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAFinal from '@/components/sections/CTAFinal';
import { portfolioProjects } from '@/data/portfolio';

export default function Portfolio() {
  const { t } = useTranslation();
  const projectTranslations = t('portfolio.projects', { returnObjects: true });

  return (
    <>
      <SEO
        title={t('seo.portfolio.title')}
        description={t('seo.portfolio.description')}
        path='/portfolio'
      />
      <Navbar />
      <main className='relative z-20 bg-[#F8F7F4] dark:bg-[#131834]'>
        <div className='pt-28 pb-24 px-6'>
          <div className='max-w-300 mx-auto'>
            {/* Back link */}
            <FadeIn>
              <Link
                to='/'
                className='inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors mb-8 no-underline'
              >
                <ArrowLeft size={14} />
                {t('common.backToHome')}
              </Link>
            </FadeIn>

            <SectionHeader
              label={t('portfolio.label')}
              title={t('portfolio.allProjectsTitle')}
              description={t('portfolio.description')}
            />

            {/* Projects grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
              {portfolioProjects.map((project, i) => {
                const Icon = project.icon;
                const pt = projectTranslations[i] || {};
                return (
                  <FadeIn key={project.name} delay={i * 80}>
                    <div className='group rounded-[20px] overflow-hidden border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#1a2042] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] h-full flex flex-col'>
                      {/* Screenshot */}
                      {project.screenshot && (
                        <div className='relative overflow-hidden bg-zinc-100 dark:bg-zinc-800'>
                          <div className='flex items-center gap-1.5 px-4 py-2.5 bg-zinc-200 dark:bg-zinc-700/60'>
                            <span className='w-2.5 h-2.5 rounded-full bg-red-400/70'></span>
                            <span className='w-2.5 h-2.5 rounded-full bg-yellow-400/70'></span>
                            <span className='w-2.5 h-2.5 rounded-full bg-green-400/70'></span>
                            <span className='ml-3 text-[10px] text-zinc-400 dark:text-zinc-500 truncate'>
                              {project.url || project.name}
                            </span>
                          </div>
                          <div className='aspect-[16/10] overflow-hidden'>
                            <img
                              src={project.screenshot}
                              alt={`${project.name} screenshot`}
                              className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
                              loading='lazy'
                            />
                          </div>
                          <span
                            className='absolute top-12 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-lg'
                            style={{ backgroundColor: project.color }}
                          >
                            {project.type}
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className='p-6 sm:p-8 flex flex-col flex-1'>
                        <div className='flex items-center gap-3 mb-3'>
                          <div
                            className='w-10 h-10 rounded-xl flex items-center justify-center shrink-0'
                            style={{
                              backgroundColor: `${project.color}15`,
                            }}
                          >
                            <Icon size={20} style={{ color: project.color }} />
                          </div>
                          <h3 className='text-lg font-bold text-zinc-900 dark:text-zinc-100'>
                            {project.name}
                          </h3>
                        </div>

                        <p className='text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4'>
                          {pt.desc || project.desc}
                        </p>

                        {project.highlights && (
                          <div className='flex gap-3 mb-5'>
                            {project.highlights.map(h => (
                              <div
                                key={h.label}
                                className='flex-1 text-center px-2 py-2.5 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border border-zinc-100 dark:border-white/[0.06]'
                              >
                                <span
                                  className='block text-base font-extrabold'
                                  style={{ color: project.color }}
                                >
                                  {h.value}
                                </span>
                                <span className='block text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mt-0.5'>
                                  {h.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className='flex flex-wrap gap-1.5 mb-5'>
                          {project.tags.map(tag => (
                            <span
                              key={tag}
                              className='px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <details className='mb-5 group/details'>
                          <summary className='text-[13px] font-semibold text-zinc-700 dark:text-zinc-300 cursor-pointer select-none hover:text-green-600 dark:hover:text-green-400 transition-colors'>
                            {t('portfolio.viewFeatures')} (
                            {project.features.length})
                          </summary>
                          <ul className='mt-3 space-y-1.5'>
                            {project.features.map(f => (
                              <li
                                key={f}
                                className='text-[12px] text-zinc-500 dark:text-zinc-400 leading-relaxed pl-4 relative before:content-[""] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-green-500/40'
                              >
                                {f}
                              </li>
                            ))}
                          </ul>
                        </details>

                        <p className='text-[13px] font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/10 px-4 py-2.5 rounded-xl mb-5'>
                          {pt.result || project.result}
                        </p>

                        <div className='mt-auto'>
                          {project.url ? (
                            <a
                              href={project.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-flex items-center gap-2 text-sm font-medium no-underline transition-colors'
                              style={{ color: project.color }}
                            >
                              {t('portfolio.visitSite')}{' '}
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            <span className='text-sm text-zinc-400 dark:text-zinc-500 italic'>
                              {t('portfolio.privateProject')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>

        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
