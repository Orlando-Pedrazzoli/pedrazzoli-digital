import { Package, Layers, CreditCard, Zap, Smartphone } from 'lucide-react'

export const portfolioMain = {
  name: 'Elite Surfing',
  type: 'E-Commerce de Acessórios de Surf',
  url: 'https://www.elitesurfing.com.br/',
  description: 'Loja online completa de acessórios de surf com mais de 446 produtos, sistema de avaliações, blog, pagamento PIX com desconto e parcelamento em até 12x sem juros.',
  stats: [
    { value: '446+', label: 'Produtos', icon: Package },
    { value: '6', label: 'Categorias', icon: Layers },
    { value: '12x', label: 'Sem Juros', icon: CreditCard },
    { value: '5%', label: 'OFF no PIX', icon: Zap },
    { value: '100%', label: 'Responsivo', icon: Smartphone },
  ],
  features: [
    'Catálogo completo com filtros e busca',
    'Carrinho persistente + checkout otimizado',
    'Pagamento PIX com desconto automático',
    'Parcelamento em até 12x sem juros',
    'Cálculo de frete com Melhor Envio',
    'Frete grátis por região e valor',
    'Sistema de avaliações com fotos',
    'Blog integrado com SEO',
    'Cupons e promoções (combos, outlet)',
    'Painel admin completo de gestão',
    'Design mobile-first responsivo',
    'WhatsApp integrado para atendimento',
  ],
  categories: ['Decks', 'Leashes', 'Capas', 'Quilhas', 'Sarcófagos', 'Acessórios'],
  mockProducts: [
    { name: 'Deck Noronha', price: 'R$ 187,80', cat: 'Deck' },
    { name: 'Leash Pro 6\'', price: 'R$ 89,90', cat: 'Leash' },
    { name: 'Capa Refletiva', price: 'R$ 149,90', cat: 'Capa' },
    { name: 'Quilha Carbono', price: 'R$ 219,00', cat: 'Quilha' },
  ],
}

export const processSteps = [
  {
    num: '01',
    title: 'Conversa',
    desc: 'Entendemos seu negócio, público, objetivos e necessidades específicas. Sem compromisso, sem jargão técnico.',
  },
  {
    num: '02',
    title: 'Proposta',
    desc: 'Apresentamos o plano ideal com tudo detalhado: funcionalidades, prazo e investimento. Transparência total.',
  },
  {
    num: '03',
    title: 'Criação',
    desc: 'Desenvolvemos seu site com você acompanhando. Revisões ilimitadas até ficar exatamente como você imaginou.',
  },
  {
    num: '04',
    title: 'Lançamento',
    desc: 'Site no ar, domínio configurado, treinamento para você gerenciar tudo sozinho. Suporte incluído.',
  },
]
