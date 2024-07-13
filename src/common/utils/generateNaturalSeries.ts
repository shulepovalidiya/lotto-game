/**
 * Функция для генерации натурального ряда заданной длины.
 * @param length - Длина ряда.
 * @returns - Массив натуральных чисел от 1 до length.
 */

export function generateNaturalSeries(length: number): number[] {
  const series: number[] = [];
  for (let i = 1; i <= length; i++) {
    series.push(i);
  }
  return series;
}
