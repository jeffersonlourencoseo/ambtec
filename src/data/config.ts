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
    cnpj: '18.837.878/0001-41',
    email: 'contato@ambtec.com.br',
    phone: '+5521998351294',
    phoneFormatted: '(21) 99835-1294',
    whatsapp: '+5521998351294',
    whatsappFormatted: '(21) 99835-1294',
    address: {
      street: 'Estr. da Grota Funda, 479',
      neighborhood: 'Guaratiba',
      city: 'Rio de Janeiro',
      state: 'RJ',
      stateFull: 'Rio de Janeiro',
      zipCode: '23020-220',
      country: 'BR',
    },
    mapsUrl: 'https://maps.app.goo.gl/cBmhQXNwTR32BQNU9',
    geo: {
      latitude: '-22.9376',
      longitude: '-43.5751',
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
      'Consultoria especializada em licenciamento ambiental, CAR, EIA/RIMA e gestão sustentável no Rio de Janeiro. Diagnóstico inicial gratuito.',
    defaultImage: '/og-image.jpg',
    twitterHandle: '@ambtecambiental',
    locale: 'pt_BR',
    lang: 'pt-BR',
  },
} as const;
