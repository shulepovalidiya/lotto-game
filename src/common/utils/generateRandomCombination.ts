import { IFieldConfig } from '../constants/gameConfigs/config8OutOf19.ts';

/** Функция генерирует случайную игровую комбинацию для заданной конфигурации полей
 *
 * @param fieldsConfig - конфигурация полей
 * @returns {number[][]} - комбинация (количество вложенных массивов зависит от
 * количества полей в конфиге)
 */
export const generateRandomCombination = (
  fieldsConfig: readonly IFieldConfig[],
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

  return fieldsConfig.map((field) => getRandomNumbers(field.totalCellCount, field.requiredCellCount));
};
