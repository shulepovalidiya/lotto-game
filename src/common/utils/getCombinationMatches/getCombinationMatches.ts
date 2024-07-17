import { getArrayIntersection } from '../getArrayIntersection';

/** Функция, которая находит и возвращает
 * количество совпадений между пользовательской и выигрышной комбинациями
 *
 * @param userCombination - комбинация, выбранная пользователем
 * @param winningCombination - выигрышная комбинация
 *
 * @returns - массив с количеством пересечений по полям:
 * первое значение - количество совпадений в первом поле,
 * второе значение - количество совпадений во втором поле,
 * и так далее.
 */
export function getCombinationMatches(
  userCombination: number[][],
  winningCombination: number[][],
): number[] {
  const matches: number[] = [];
  for (let i = 0; i < userCombination.length; i++) {
    const currentFieldMatchesCount = getArrayIntersection(
      userCombination[i],
      winningCombination[i],
    ).length;
    matches.push(currentFieldMatchesCount);
  }
  return matches;
}
