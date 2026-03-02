import { siteConfig } from './config'

/**
 * Gera URL do WhatsApp com mensagem pré-definida
 * @param {string} message - Mensagem customizada (opcional)
 * @returns {string} URL completa do WhatsApp
 */
export function getWhatsAppUrl(message) {
  const defaultMsg = 'Olá! Gostaria de saber mais sobre as soluções digitais.'
  const text = encodeURIComponent(message || defaultMsg)
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`
}

/**
 * Gera URL do WhatsApp para um tipo de negócio específico
 * @param {string} businessType - Tipo de negócio
 * @returns {string} URL do WhatsApp
 */
export function getBusinessWhatsApp(businessType) {
  return getWhatsAppUrl(
    `Olá! Tenho um negócio de ${businessType.toLowerCase()} e gostaria de saber mais sobre as soluções.`
  )
}

/**
 * Gera URL do WhatsApp para um plano específico
 * @param {string} planName - Nome do plano
 * @returns {string} URL do WhatsApp
 */
export function getPlanWhatsApp(planName) {
  return getWhatsAppUrl(
    `Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`
  )
}
