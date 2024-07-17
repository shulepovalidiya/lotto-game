import { getCombinationMatches } from '../../utils/getCombinationMatches';
import { FieldConfig, GameConfig } from './types';

/** Конфигурация полей в билете. Определяется условиями задачи
 * @see {https://github.com/shulepovalidiya/lotto-game/blob/main/docs/games/8_out_of_19.md}
 */
const FIELDS_CONFIG: readonly FieldConfig[] = [
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
const isGameWon = (userCombination: number[][], winningCombination: number[][]): boolean => {
  const matches = getCombinationMatches(userCombination, winningCombination);

  const matchesInFirstField = matches[0];
  const matchesInSecondField = matches[1];

  return matchesInFirstField >= 4 || (matchesInFirstField >= 3 && matchesInSecondField >= 1);
};

/** Конфигурация игры. Описана по условиям задачи.
 * @see {https://github.com/shulepovalidiya/lotto-game/blob/main/docs/games/8_out_of_19.md}
 */
export const CONFIG_8_OUT_OF_19: GameConfig = {
  initialTicketsCount: 5,
  fieldsConfig: FIELDS_CONFIG,
  isGameWon,
} as const;
