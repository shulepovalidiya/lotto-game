import { IFieldConfig } from '../components/Field/Field.tsx';

/**
 * Функция генерирует случайную выигрышную комбинацию
 *
 * @param fields - массив с настройками полей
 * @returns {number[][]} - массив с выигрышными числами в каждом поле
 */

export const generateWinningCombination = (fields: IFieldConfig[]): number[][] => {
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

  return fields.map((field) => getRandomNumbers(field.totalCellCount, field.selectedCellCount));
};
