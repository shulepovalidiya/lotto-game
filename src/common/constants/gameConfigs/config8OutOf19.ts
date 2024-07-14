export interface IFieldConfig {
  id: number;
  totalCellCount: number;
  requiredCellCount: number;
}

export type TIsGameWon = (
  userCombination: number[][],
  winningCombination: number[][],
) => boolean;

export interface IGameConfig {
  ticketsCount: number;
  fieldsConfig: readonly IFieldConfig[];
  isGameWon: TIsGameWon;
}

/** Конфигурация полей в билете */
const FIELDS_CONFIG: readonly IFieldConfig[] = [
  {
    id: 1,
    totalCellCount: 19,
    requiredCellCount: 8,
  },
  {
    id: 2,
    totalCellCount: 2,
    requiredCellCount: 1,
  },
];

/**
 * Функция проверяет, является ли комбинация пользователя выигрышной
 *
 * @param userCombination - выбранная пользователем комбинация
 * @param winningCombination - выигрышная комбинация
 * @returns {boolean} - выиграл ли пользователь
 */

export const isGameWon = (
  userCombination: number[][],
  winningCombination: number[][],
): boolean => {
  function intersection(array1: number[], array2: number[]) {
    return array1.filter((num) => array2.includes(num));
  }
  const matchesField1 = intersection(
    userCombination[0],
    winningCombination[0],
  ).length;
  const matchesField2 = intersection(
    userCombination[1],
    winningCombination[1],
  ).length;
  return matchesField1 >= 4 || (matchesField1 >= 3 && matchesField2 >= 1);
};

/** Конфигурация игры. Описываем, сколько нужно отобразить билетов, с какими полями */
export const CONFIG_8_OUT_OF_19: IGameConfig = {
  ticketsCount: 1,
  fieldsConfig: FIELDS_CONFIG,
  isGameWon,
} as const;
