export const SITE_CONFIG = {
  // Domínio
  site: 'https://www.licenciamentoambientalrio.com.br',

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

  // Responsável pela empresa (página Quem Somos)
  responsavel: {
    nome: 'Roberto Lourenço',
    cargo: 'Sócio e Responsável Técnico',
    formacao: 'Biólogo · Pós-graduado pela UFRJ',
    registro: 'CRBio-02 42542-02D',
    // Ficha técnica exibida no card
    formacoes: [
      { curso: 'Ciências Biológicas (graduação e licenciatura), ênfase em meio ambiente', instituicao: 'Universidade da Cidade · 2000' },
      { curso: 'Pós-graduação em Gestão de Recursos Hídricos e Auditoria Ambiental', instituicao: 'Universidade Federal do Rio de Janeiro (UFRJ)' },
    ],
    atribuicoes: ['Estudos ambientais', 'Laudos técnicos', 'Projetos ao INEA e SMACs'],
    linkedin: '',
    bio: [
      'Roberto Lourenço é biólogo formado em 2000 pela Universidade da Cidade, com graduação e licenciatura em Ciências Biológicas e ênfase em meio ambiente. Como sócio e responsável técnico da Ambtec, responde pelos estudos, laudos e projetos que a empresa apresenta ao INEA e às Secretarias Municipais de Meio Ambiente do Rio de Janeiro.',
      'Pós-graduado em Gestão de Recursos Hídricos e Auditoria Ambiental pela Universidade Federal do Rio de Janeiro (UFRJ), une a base científica da biologia, com o conhecimento de flora, fauna e ecossistemas, à leitura técnica e normativa que o licenciamento exige. É essa combinação que permite à Ambtec conduzir do inventário florestal à compensação e ao reflorestamento com coerência entre o que está no papel e o que acontece no terreno.',
      'Registrado no Conselho Regional de Biologia da 2ª Região (CRBio-02), acompanha cada projeto da primeira vistoria à licença emitida, e é quem assina os conteúdos técnicos publicados neste site.',
    ],
    citacao: 'Licença boa é a que sai coerente com o que acontece no terreno. Por isso, aqui, quem estuda e protocola também vai a campo.',
    destaques: [
      { valor: '2000', rotulo: 'formado em Ciências Biológicas' },
      { valor: 'UFRJ', rotulo: 'pós em recursos hídricos e auditoria ambiental' },
      { valor: '200+', rotulo: 'empreendimentos regularizados pela Ambtec' },
    ],
  },

  // Avaliações do Perfil da Empresa no Google (copiadas em 18/11/2026).
  // Ficaram de fora: avaliações só com estrelas e a do próprio sócio.
  google: {
    rating: 5.0,
    reviewCount: 11,
    reviews: [
      { nome: 'Luiz M. Berlim', texto: 'Excelente empresa. Profissionais altamente qualificados' },
      { nome: 'Renato Studenski', texto: 'Excelente, trabalho altamente profissional!!!' },
      { nome: 'Flavio Ribeiro', texto: 'Empresa com grande sucesso supressão vegetal e legalização ambiental' },
      { nome: 'Jorcely Borges', texto: 'Profissionais competentes.' },
      { nome: 'Saulo Gomes da Silva', texto: 'Profissionais e Competentes.' },
      { nome: 'Paulo Alfredo', texto: 'Competência e responsabilidade' },
      { nome: 'Marinho Junior', texto: 'Eficiente e pontual' },
    ],
  },

  // SEO Defaults
  seo: {
    defaultTitle: 'Consultoria Ambiental no Rio de Janeiro — Ambtec',
    defaultDescription:
      'Consultoria ambiental no Rio de Janeiro: licenciamento junto ao INEA e prefeituras, supressão vegetal, inventário florestal, compensação e reflorestamento. Diagnóstico gratuito.',
    defaultImage: '/og-image.jpg',
    twitterHandle: '@ambtecambiental',
    locale: 'pt_BR',
    lang: 'pt-BR',
  },
} as const;
