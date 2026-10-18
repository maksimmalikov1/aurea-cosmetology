// Нагрузочный сценарий AUREA для ТЕСТОВОГО окружения (preview-деплой), не для продакшена.
// Запуск только с разрешения владельца сайта и хостинга:
//   k6 run -e BASE_URL=https://<preview-адрес> loadtest/static-pages.k6.js
//
// Что имитирует: реальный визит с телефона — главная (HTML + CSS/JS + первый экран),
// страница направления, страница записи. Форма записи сейчас ничего не отправляет на сервер,
// поэтому её отправка в сценарий не входит; когда появится обработчик — добавить отдельный шаг
// с тестовыми данными и пометкой test=1, чтобы заявки не попали администратору.

import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const BASE = __ENV.BASE_URL;
if (!BASE) throw new Error('Укажите BASE_URL тестового окружения: -e BASE_URL=https://...');

const pageErrors = new Rate('page_errors');

export const options = {
  // Плавное увеличение: 0 → 20 → 50 → 100 одновременных посетителей, затем спад.
  // Ожидаемый реальный трафик студии — десятки–сотни визитов в день; 100 одновременных — запас ×50+.
  stages: [
    { duration: '2m', target: 20 },
    { duration: '3m', target: 20 },
    { duration: '2m', target: 50 },
    { duration: '3m', target: 50 },
    { duration: '2m', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    // Цели (обоснование — в отчёте): статика с CDN
    'http_req_duration{kind:asset}': ['p(95)<600'],
    http_req_failed: [
      'rate<0.001',
      // Критерий остановки: >1% ошибок дольше минуты — прекращаем тест
      { threshold: 'rate<0.01', abortOnFail: true, delayAbortEval: '1m' },
    ],
    // Критерий остановки: p95 HTML вдвое хуже цели — прекращаем
    'http_req_duration{kind:html}': [
      'p(95)<400',
      { threshold: 'p(95)<800', abortOnFail: true, delayAbortEval: '1m' },
    ],
    page_errors: ['rate<0.001'],
  },
};

// Без бесконечных ожиданий: каждый запрос не дольше 10 с
const params = (kind) => ({ tags: { kind }, timeout: '10s', headers: { 'User-Agent': 'aurea-loadtest-k6' } });

// Ресурсы первого экрана берём из самой страницы, чтобы не устаревали хэши в именах файлов
function firstScreenAssets(html) {
  const urls = new Set();
  const re = /(?:href|src)="(\/(?:_astro\/[^"]+\.(?:css|js)|img\/hero\.webp))"/g;
  let m;
  while ((m = re.exec(html))) urls.add(BASE + m[1]);
  return [...urls];
}

function visit(path) {
  const res = http.get(BASE + path, params('html'));
  const ok = check(res, {
    [`${path} 200`]: (r) => r.status === 200,
    [`${path} есть разметка`]: (r) => r.body && r.body.includes('AUREA'),
  });
  pageErrors.add(!ok);
  if (ok) {
    const assets = firstScreenAssets(res.body).map((u) => ['GET', u, null, params('asset')]);
    if (assets.length) http.batch(assets);
  }
  return ok;
}

const CATEGORIES = ['injection', 'hardware', 'facial', 'body', 'spa'];

export default function () {
  group('главная', () => visit('/'));
  sleep(3 + Math.random() * 5); // читает, листает

  group('направление', () => visit(`/services/${CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]}`));
  sleep(2 + Math.random() * 4);

  group('запись', () => visit('/booking'));
  sleep(5 + Math.random() * 10); // выбирает услугу и время
}
