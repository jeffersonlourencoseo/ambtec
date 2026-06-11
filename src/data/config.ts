export const SITE_CONFIG = {
  // Domínio
  site: 'https://licenciamentoambientalrio.com.br',

  // Empresa (NAP)
  company: {
    name: 'Ambtec Consultoria Ambiental',
    shortName: 'Ambtec',
    slogan: 'Licenciamento Ambiental e Consultoria',
    description:
      'Consultoria especializada em licenciamento ambiental, CAR, EIA/RIMA e gestão sustentável. Mais de 200 empreendimentos regularizados.',
    cnpj: '00.000.000/0001-00',
    email: 'contato@ambtec.com.br',
    phone: '+5521999999999',
    phoneFormatted: '(21) 99999-9999',
    whatsapp: '+5521999999999',
    whatsappFormatted: '(21) 99999-9999',
    address: {
      street: 'Rua das Acácias, 123',
      neighborhood: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
      stateFull: 'Rio de Janeiro',
      zipCode: '20000-000',
      country: 'BR',
    },
    geo: {
      latitude: '-22.906846',
      longitude: '-43.172896',
    },
    openingHours: [
      { day: 'Monday', open: '08:00', close: '18:00' },
      { day: 'Tuesday', open: '08:00', close: '18:00' },
      { day: 'Wednesday', open: '08:00', close: '18:00' },
      { day: 'Thursday', open: '08:00', close: '18:00' },
      { day: 'Friday', open: '08:00', close: '18:00' },
      { day: 'Saturday', open: '09:00', close: '13:00' },
    ],
    social: {
      facebook: 'https://facebook.com/ambtecambiental',
      instagram: 'https://instagram.com/ambtecambiental',
      linkedin: 'https://linkedin.com/company/ambtecambiental',
    },
    founded: '2010',
    priceRange: '$$$',
  },

  // SEO Defaults
  seo: {
    defaultTitle: 'Ambtec — Licenciamento Ambiental no Rio de Janeiro',
    defaultDescription:
      'Consultoria especializada em licenciamento ambiental, CAR, EIA/RIMA e gestão sustentável no Rio de Janeiro. Diagnóstico gratuito em 24h.',
    defaultImage: '/og-image.jpg',
    twitterHandle: '@ambtecambiental',
    locale: 'pt_BR',
    lang: 'pt-BR',
  },
} as const;
