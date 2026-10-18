// Детерминированный «псевдо-занятый» график: для одного и того же дня
// всегда возвращает одни и те же занятые слоты. Это даёт стабильную демо.

export const TIME_SLOTS: string[] = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00',
];

// Простая детерминированная псевдо-случайность
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Возвращает массив занятых слотов для даты в формате ISO (YYYY-MM-DD). */
export function getBusySlots(isoDate: string): string[] {
  const d = new Date(isoDate + 'T00:00:00');
  const day = d.getDay(); // 0=вс, 6=сб
  const isWeekend = day === 0 || day === 6;
  const base = hash(isoDate);

  // Чем ближе день, тем плотнее график (имитация реального календаря)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysAhead = Math.max(0, Math.round((d.getTime() - today.getTime()) / 86400000));
  let density: number;
  if (daysAhead === 0) density = 0.9;       // сегодня — почти всё занято
  else if (daysAhead === 1) density = 0.75; // завтра
  else if (daysAhead <= 3) density = 0.55;
  else if (daysAhead <= 7) density = 0.4;
  else if (daysAhead <= 14) density = 0.3;
  else density = 0.2;
  if (isWeekend) density = Math.min(0.95, density + 0.15);

  const busy = new Set<string>();
  TIME_SLOTS.forEach((slot, idx) => {
    const rnd = ((base + idx * 1327) % 1000) / 1000;
    // утро буднего дня свободнее
    const [hh] = slot.split(':').map(Number);
    let localDensity = density;
    if (!isWeekend && hh < 12) localDensity -= 0.2;
    if (!isWeekend && hh >= 18 && hh < 20) localDensity += 0.1;
    if (rnd < localDensity) busy.add(slot);
  });

  return [...busy];
}

/** Полностью «закрыт» день — редко, 1 случай на ~90 дней. */
export function isDayClosed(isoDate: string): boolean {
  return hash(isoDate) % 90 === 0;
}
