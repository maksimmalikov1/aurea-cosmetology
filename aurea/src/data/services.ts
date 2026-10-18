export type ServiceCategoryId =
  | 'injection'
  | 'hardware'
  | 'facial'
  | 'body'
  | 'spa';

export type Service = {
  slug: string;
  title: string;
  short: string;
  price: number;
  priceFrom: boolean;
  duration: number; // минуты
  category: ServiceCategoryId;
};

export const CATEGORIES: { id: ServiceCategoryId; title: string; shortTitle: string }[] = [
  { id: 'injection', title: 'Инъекционная косметология', shortTitle: 'Инъекции' },
  { id: 'hardware',  title: 'Аппаратная косметология',   shortTitle: 'Аппаратная' },
  { id: 'facial',    title: 'Уход за лицом',             shortTitle: 'Уход' },
  { id: 'body',      title: 'Коррекция тела',            shortTitle: 'Тело' },
  { id: 'spa',       title: 'SPA и ритуалы',             shortTitle: 'SPA' },
];

export const SERVICES: Service[] = [
  // Инъекционная
  { slug: 'lips-contour',    title: 'Контурная пластика губ (1 мл)', short: 'Деликатная коррекция формы и объёма губ филлерами на гиалуроновой кислоте.', price: 24000, priceFrom: true, duration: 60, category: 'injection' },
  { slug: 'nasolabial',      title: 'Коррекция носогубных складок',   short: 'Разглаживание складок филлером средней плотности.', price: 22000, priceFrom: true, duration: 45, category: 'injection' },
  { slug: 'cheekbones',      title: 'Увеличение скул',                 short: 'Моделирование объёма и линии скул контурной пластикой.', price: 36000, priceFrom: true, duration: 60, category: 'injection' },
  { slug: 'botox',           title: 'Ботулинотерапия (лоб, межбровье)',short: 'Коррекция мимических морщин препаратами Dysport / Xeomin.', price: 14500, priceFrom: true, duration: 30, category: 'injection' },
  { slug: 'biorevitalization',title:'Биоревитализация',                short: 'Инъекции гиалуроновой кислоты для глубокого увлажнения кожи.', price: 11500, priceFrom: true, duration: 45, category: 'injection' },
  { slug: 'mesotherapy',     title: 'Мезотерапия лица',                short: 'Витаминный коктейль, работающий на уровне дермы.', price: 9800,  priceFrom: true, duration: 45, category: 'injection' },
  { slug: 'prp',             title: 'Плазмотерапия (PRP)',             short: 'Процедура на собственной плазме, обогащённой тромбоцитами.', price: 13500, priceFrom: true, duration: 60, category: 'injection' },

  // Аппаратная
  { slug: 'smas',            title: 'SMAS-лифтинг Ultraformer MPT',    short: 'Безоперационный лифтинг глубоких слоёв кожи.', price: 48000, priceFrom: true, duration: 90, category: 'hardware' },
  { slug: 'rf-lift',         title: 'Радиочастотный лифтинг',          short: 'Прогрев тканей для стимуляции коллагена.', price: 18000, priceFrom: true, duration: 60, category: 'hardware' },
  { slug: 'fraxel',          title: 'Лазерная шлифовка Fraxel',        short: 'Фракционное обновление поверхности кожи.', price: 32000, priceFrom: true, duration: 75, category: 'hardware' },
  { slug: 'ipl',             title: 'Фотоомоложение IPL',              short: 'Коррекция пигментации и сосудистых изменений.', price: 15000, priceFrom: true, duration: 60, category: 'hardware' },
  { slug: 'carbon-peel',     title: 'Карбоновый пилинг',               short: 'Лазерный пилинг на основе угольной маски.', price: 9500,  priceFrom: true, duration: 45, category: 'hardware' },

  // Уход
  { slug: 'cleansing',       title: 'Чистка лица (комбинированная)',   short: 'Глубокое очищение с ультразвуком и ручной техникой.', price: 8500, priceFrom: true, duration: 90, category: 'facial' },
  { slug: 'prx',             title: 'Пилинг PRX-T33',                  short: 'Биоревитализирующий пилинг без шелушения.', price: 6800, priceFrom: true, duration: 60, category: 'facial' },
  { slug: 'hydrafacial',     title: 'Увлажняющий ритуал HydraFacial',  short: 'Трёхэтапная аппаратная процедура глубокого увлажнения.', price: 12000, priceFrom: true, duration: 75, category: 'facial' },
  { slug: 'zo-care',         title: 'Классический уход ZO Skin Health',short: 'Профессиональный уход на средствах dr. Obagi.', price: 7500, priceFrom: true, duration: 60, category: 'facial' },
  { slug: 'antioxidant',     title: 'Антиоксидантный уход',            short: 'Протокол на основе витамина C и ферулиевой кислоты.', price: 7900, priceFrom: true, duration: 60, category: 'facial' },

  // Тело
  { slug: 'lpg',             title: 'LPG-массаж (1 зона)',             short: 'Эндермологический массаж для моделирования контура.', price: 4500, priceFrom: true, duration: 45, category: 'body' },
  { slug: 'pressotherapy',   title: 'Прессотерапия',                   short: 'Лимфодренаж в компрессионном костюме.', price: 3200, priceFrom: true, duration: 45, category: 'body' },
  { slug: 'myostimulation',  title: 'Миостимуляция',                   short: 'Электростимуляция мышц для подтянутости.', price: 3800, priceFrom: true, duration: 40, category: 'body' },
  { slug: 'cellulite-massage',title:'Антицеллюлитный массаж',          short: 'Ручная техника против фиброзного целлюлита.', price: 5500, priceFrom: true, duration: 60, category: 'body' },

  // SPA
  { slug: 'asahi',           title: 'Массаж лица «Асахи»',             short: 'Японская техника лимфодренажа.', price: 5500, priceFrom: true, duration: 60, category: 'spa' },
  { slug: 'buccal',          title: 'Буккальный массаж',               short: 'Внутриротовой массаж для тонуса овала лица.', price: 6800, priceFrom: true, duration: 60, category: 'spa' },
  { slug: 'kobido',          title: 'Японский лифтинг-массаж Kobido',  short: 'Традиционная техника глубокого воздействия.', price: 7500, priceFrom: true, duration: 75, category: 'spa' },
  { slug: 'spa-ritual',      title: 'Расслабляющий SPA-ритуал',        short: 'Полный ритуал ухода с ароматерапией.', price: 6200, priceFrom: true, duration: 90, category: 'spa' },
];

export const CATEGORY_META: Record<ServiceCategoryId, { tagline: string; desc: string }> = {
  injection: { tagline: 'Деликатное прикосновение. Видимый результат.', desc: 'Безопасные и точные эстетические инъекции, чтобы естественно подчеркнуть вашу красоту.' },
  hardware:  { tagline: 'Технологии. Бережный уход.',                   desc: 'Современные аппаратные методики для лифтинга, тонуса и обновления кожи.' },
  facial:    { tagline: 'Чистота. Сияние.',                            desc: 'Профессиональные уходы для здоровья, увлажнения и свежести кожи.' },
  body:      { tagline: 'Контур. Лёгкость.',                           desc: 'Моделирующие и дренажные процедуры для тела и силуэта.' },
  spa:       { tagline: 'Расслабление. Тонус.',                        desc: 'Массажные ритуалы для тонуса лица и восстановления сил.' },
};

// Фото на странице направления; pos — точка кадрирования (object-position)
type DetailImage = { src: string; alt: string; pos?: string };

// Контент для страниц категорий: вступление, этапы визита, советы, фото
export const CATEGORY_DETAILS: Record<ServiceCategoryId, {
  aboutTitle: string;
  about: string;
  steps: { title: string; text: string }[];
  tips: string[];
  heroImg: DetailImage;
}> = {
  injection: {
    aboutTitle: 'О методике',
    about:
      'Инъекционные методики — самый точный способ вернуть коже плотность и подчеркнуть черты лица. Мы работаем только с сертифицированными препаратами и всегда начинаем с подробной консультации врача.',
    steps: [
      { title: 'Консультация',   text: 'Врач оценивает состояние кожи, обсуждает пожелания и подбирает препарат и объём.' },
      { title: 'Подготовка',     text: 'Очищение, разметка зон и аппликационная анестезия для комфорта.' },
      { title: 'Процедура',      text: 'Точное введение препарата канюлей или иглой по индивидуальной схеме.' },
      { title: 'Рекомендации',   text: 'Лёгкий массаж, уходовые средства и памятка на восстановительный период.' },
    ],
    tips: [
      'За 5–7 дней до процедуры откажитесь от алкоголя и препаратов, разжижающих кровь, — так меньше риск синяков.',
      'Первые сутки не трогайте и не массируйте зоны коррекции, не наносите макияж.',
      'Две недели обходитесь без бани, сауны, солярия и интенсивных тренировок.',
      'Первые ночи спите на спине, чтобы препарат распределился равномерно.',
      'Приходите на контрольный осмотр через 14 дней — врач оценит результат.',
    ],
    heroImg: { src: '/img/cat-injection.webp', alt: 'Нанесение сыворотки на кожу лица', pos: '50% 30%' },
  },
  hardware: {
    aboutTitle: 'О технологии',
    about:
      'Аппаратная косметология работает с глубокими слоями кожи без игл и длительной реабилитации. Протокол подбирается под задачу — лифтинг, тонус или ровный тон.',
    steps: [
      { title: 'Диагностика',    text: 'Определяем тип кожи, зоны и необходимую мощность воздействия.' },
      { title: 'Подготовка',     text: 'Очищение и нанесение проводящего геля для равномерной работы аппарата.' },
      { title: 'Процедура',      text: 'Контролируемое воздействие — ультразвук, RF или лазер по зонам.' },
      { title: 'Финиш',          text: 'Успокаивающая маска, SPF и рекомендации по домашнему уходу.' },
    ],
    tips: [
      'За две недели до лазерных и световых процедур откажитесь от загара и автозагара.',
      'Предупредите врача, если принимаете ретиноиды или антибиотики, — их иногда временно отменяют.',
      'После процедуры наносите SPF 50 каждый день, даже в пасмурную погоду.',
      'Неделю обходитесь без скрабов, кислот и агрессивного очищения.',
      'Лифтинг проявляется постепенно — итоговый результат оценивайте через 2–3 месяца.',
    ],
    heroImg: { src: '/img/cat-hardware.webp', alt: 'Аппаратный уход за кожей лица', pos: '50% 30%' },
  },
  facial: {
    aboutTitle: 'О ритуале',
    about:
      'Профессиональный уход возвращает коже чистоту, увлажнение и сияние. Это база, на которой заметно лучше работают все остальные процедуры.',
    steps: [
      { title: 'Диагностика',    text: 'Снимаем макияж и анализируем кожу под лампой-лупой.' },
      { title: 'Очищение',       text: 'Деликатное распаривание и бережная чистка — ультразвук и ручная техника.' },
      { title: 'Активы',         text: 'Пилинг, сыворотки и маска, подобранные под состояние кожи.' },
      { title: 'Защита',         text: 'Финишный крем и SPF, рекомендации по домашнему уходу.' },
    ],
    tips: [
      'Умывайтесь утром и вечером мягким средством без сульфатов.',
      'Наносите крем на слегка влажную кожу — так он лучше удерживает влагу.',
      'Обновляйте SPF каждые 2 часа, если проводите день на улице или у окна.',
      'Выбирайте средства с церамидами и жирными кислотами — они укрепляют защитный барьер.',
      'Не выдавливайте воспаления дома: остаются следы, а инфекция распространяется.',
    ],
    heroImg: { src: '/img/svc-facial.webp', alt: 'Уход за кожей лица', pos: '50% 30%' },
  },
  body: {
    aboutTitle: 'О курсе',
    about:
      'Процедуры для тела моделируют силуэт, улучшают лимфоток и возвращают коже упругость. Эффективнее всего они работают курсом.',
    steps: [
      { title: 'Консультация',   text: 'Определяем зоны, задачи и количество процедур в курсе.' },
      { title: 'Подготовка',     text: 'Разогрев тканей и нанесение рабочих средств.' },
      { title: 'Процедура',      text: 'Аппаратное или ручное воздействие по проблемным зонам.' },
      { title: 'Дренаж',         text: 'Завершаем лимфодренажем и даём рекомендации по питьевому режиму.' },
    ],
    tips: [
      'Во время курса пейте 1,5–2 литра воды в день — это помогает лимфодренажу.',
      'Не ешьте плотно за 2 часа до процедуры и приходите в удобной одежде.',
      'Соблюдайте интервал между сеансами, который рекомендовал специалист, — эффект накапливается.',
      'Добавьте умеренную активность: прогулки, плавание или йогу.',
      'Ограничьте соль и сахар — отёки уходят быстрее, а результат держится дольше.',
    ],
    heroImg: { src: '/img/cat-body.webp',  alt: 'Процедура в кабинете студии', pos: '50% 40%' },
  },
  spa: {
    aboutTitle: 'О ритуале',
    about:
      'Массажные ритуалы снимают напряжение, возвращают лицу тонус и чёткость овала. Это уход, результат которого чувствуется сразу.',
    steps: [
      { title: 'Настройка',      text: 'Аромадиагностика, тёплые компрессы и расслабление.' },
      { title: 'Очищение',       text: 'Подготавливаем кожу к работе рук мастера.' },
      { title: 'Массаж',         text: 'Авторская техника — лимфодренаж, тонус мышц, лифтинг овала.' },
      { title: 'Завершение',     text: 'Питательная маска и несколько минут покоя.' },
    ],
    tips: [
      'Приходите за 10 минут до начала, чтобы спокойно переключиться и расслабиться.',
      'Предупредите мастера об аллергии на эфирные масла и о чувствительных зонах.',
      'После массажа не спешите: побудьте несколько минут в покое и выпейте тёплой воды.',
      'Для стойкого лифтинг-эффекта проходите курс из 5–10 сеансов раз в неделю.',
      'Дома поддерживайте результат лёгким самомассажем с маслом или скребком гуаша.',
    ],
    heroImg: { src: '/img/cat-spa.webp', alt: 'Массаж лица', pos: '50% 40%' },
  },
};

export const SERVICES_BY_CATEGORY = CATEGORIES.map((c) => ({
  ...c,
  services: SERVICES.filter((s) => s.category === c.id),
}));

export function formatPrice(p: number): string {
  return formatAmount(p) + ' ₽';
}

// Только число («8 500») — когда знак ₽ оформляется отдельно
export function formatAmount(p: number): string {
  return new Intl.NumberFormat('ru-RU').format(p);
}

export function formatDuration(min: number): string {
  if (min < 60) return `${min} мин`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (m === 0) return `${h} ч`;
  return `${h} ч ${m} мин`;
}

export const FEATURED_SERVICES: string[] = ['lips-contour', 'biorevitalization', 'smas', 'hydrafacial', 'botox', 'cleansing'];
