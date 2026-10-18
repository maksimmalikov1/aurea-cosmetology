export type Brand = {
  name: string;
  logo: string; // путь к оптимизированному логотипу (файлы предоставлены клиникой)
};

export const BRANDS: Brand[] = [
  { name: 'iS Clinical',    logo: '/img/brands/mono/is-clinical.webp' },
  { name: 'ZO Skin Health', logo: '/img/brands/mono/zo.webp' },
  { name: 'PHYTO Paris',     logo: '/img/brands/mono/phyto-c.webp' },
  { name: 'DSD de Luxe',    logo: '/img/brands/mono/dsd.webp' },
  { name: 'GIGI',           logo: '/img/brands/mono/gigi.webp' },
];
