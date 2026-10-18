export const SITE = {
  name: 'AUREA',
  tagline: 'Студия эстетической косметологии',
  city: 'Санкт-Петербург',
  address: 'Каменноостровский проспект, 24',
  addressFull: 'Санкт-Петербург, Каменноостровский проспект, 24',
  phone: '+7 (812) 426-18-00',
  phoneHref: 'tel:+78124261800',
  email: 'hello@aurea-studio.ru',
  hours: 'Ежедневно · 10:00 — 21:00',
  socials: {
    telegram: 'https://t.me/aurea_studio',
    instagram: 'https://instagram.com/aurea.studio',
    vk: 'https://vk.com/aurea_spb',
  },
  nav: [
    { label: 'О студии', href: '/#about' },
    { label: 'Услуги',   href: '/#services' },
    { label: 'Работы',   href: '/#works' },
    { label: 'Отзывы',   href: '/#reviews' },
    { label: 'Уход',     href: '/#rituals' },
  ],
} as const;
