/**
 * Dados centralizados do site.
 * Endereço e horários são campos editáveis até a confirmação da empresa.
 */

export const WHATSAPP_NUMBER = '5511964803325';

export const CONTACT = {
  phoneDisplay: '(11) 96480-3325',
  phoneHref: 'tel:+5511964803325',
  whatsappDisplay: '(11) 96480-3325',
  instagramHandle: '@zelarvet',
  instagramUrl: 'https://www.instagram.com/zelarvet/',
  /** Editável até confirmação */
  address: 'Endereço a confirmar',
  addressNote: 'Em breve atualizaremos o endereço completo.',
  /** Editável até confirmação */
  hours: 'Horários a confirmar',
  hoursNote: 'Entre em contato pelo WhatsApp para confirmar o horário.',
  /** Coordenadas do mapa (editáveis) — centro de São Paulo/SP */
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-46.665%2C-23.575%2C-46.605%2C-23.53&layer=mapnik&marker=-23.5505%2C-46.6333',
  mapLinkUrl: 'https://www.openstreetmap.org/?mlat=-23.5505&mlon=-46.6333#map=14/-23.5505/-46.6333',
} as const;

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: 'consulta' | 'vacinacao' | 'emergencia' | 'exames';
  accent: 'turquesa' | 'coral' | 'terracota' | 'marrom';
};

export const SERVICES: Service[] = [
  {
    id: 'consultas',
    title: 'Consultas veterinárias',
    description: 'Atendimento cuidadoso para acompanhar a saúde do seu pet em cada fase da vida.',
    icon: 'consulta',
    accent: 'turquesa',
  },
  {
    id: 'vacinacao',
    title: 'Vacinação',
    description: 'Proteção e prevenção com o esquema de vacinas ideal para o seu pet.',
    icon: 'vacinacao',
    accent: 'coral',
  },
  {
    id: 'emergencias',
    title: 'Atendimento de emergências',
    description: 'Agilidade e cuidado nos momentos que pedem atenção imediata.',
    icon: 'emergencia',
    accent: 'terracota',
  },
  {
    id: 'exames',
    title: 'Exames',
    description: 'Diagnósticos para orientar decisões e manter seu pet saudável.',
    icon: 'exames',
    accent: 'marrom',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Atendimento acolhedor',
    description: 'Um ambiente leve e cuidadoso para você e seu pet se sentirem em casa.',
    icon: 'heart',
  },
  {
    title: 'Atenção individualizada',
    description: 'Cada animal é único: o cuidado acompanha as necessidades de cada pet.',
    icon: 'paw',
  },
  {
    title: 'Compromisso com o bem-estar animal',
    description: 'Saúde e qualidade de vida em todos os momentos do atendimento.',
    icon: 'cross',
  },
  {
    title: 'Cuidado em cada detalhe',
    description: 'Carinho e atenção do primeiro contato ao pós-atendimento.',
    icon: 'stethoscope',
  },
] as const;
