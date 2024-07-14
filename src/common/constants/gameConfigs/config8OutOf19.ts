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
  initialTicketsCount: number;
  fieldsConfig: readonly IFieldConfig[];
  isGameWon: TIsGameWon;
}

/** Конфигурация полей в билете. Определяется условиями задачи
 * @see {https://github.com/shulepovalidiya/lotto-game/blob/main/docs/games/8_out_of_19.md}
 */
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
 * Функция проверяет, является ли комбинация пользователя выигрышной.
 * Выигрыш определяется условиями задачи.
 *
 * @param userCombination - выбранная пользователем комбинация
 * @param winningCombination - выигрышная комбинация
 * @returns {boolean} - выиграл ли пользователь
 * @see {https://github.com/shulepovalidiya/lotto-game/blob/main/docs/games/8_out_of_19.md}
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

/** Конфигурация игры. Описана по условиям задачи.
 * @see {https://github.com/shulepovalidiya/lotto-game/blob/main/docs/games/8_out_of_19.md}
 */
export const CONFIG_8_OUT_OF_19: IGameConfig = {
  initialTicketsCount: 1,
  fieldsConfig: FIELDS_CONFIG,
  isGameWon,
} as const;
