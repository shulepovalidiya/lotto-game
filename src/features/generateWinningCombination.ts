/**
 * Функция генерирует случайную выигрышную комбинацию
 *
 * @param fields - массив с настройками полей
 * @returns {number[][]} - массив с выигрышными числами в каждом поле
 */
import { IFieldConfig } from '../common/constants/gameConfigs/config8OutOf19.ts';

export const generateWinningCombination = (
  fields: readonly IFieldConfig[],
): number[][] => {
  const getRandomNumbers = (length: number, count: number): number[] => {
    const numbers = Array.from({ length }, (_, i) => i + 1);
    const result: number[] = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      result.push(numbers[randomIndex]);
      numbers.splice(randomIndex, 1);
    }

    return result;
  };

  return fields.map((field) =>
    getRandomNumbers(field.totalCellCount, field.requiredCellCount),
  );
};
