import { useEffect } from 'react'
import { siteConfig } from '@/utils/config'

/**
 * Componente SEO — atualiza meta tags via DOM nativo (React 19 compatível)
 * @param {Object} props
 * @param {string} props.title - Título da página
 * @param {string} props.description - Descrição meta
 * @param {string} props.path - Path da URL (ex: "/contato")
 */
export default function SEO({
  title,
  description = siteConfig.description,
  path = '',
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.seo.defaultTitle

  const url = `${siteConfig.url}${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:site_name', siteConfig.name)
    setMeta('property', 'og:image', `${siteConfig.url}${siteConfig.seo.ogImage}`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [fullTitle, description, url])

  return null
}
