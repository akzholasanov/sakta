/**
 * Генерирует значение span для сетки
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @returns {number} - случайное значение от min до max
 */
export const generateGridSpan = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
