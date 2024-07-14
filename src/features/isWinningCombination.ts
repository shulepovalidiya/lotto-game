/**
 * Функция проверяет, является ли комбинация пользователя выигрышной
 *
 * @param userCombination - выбранная пользователем комбинация
 * @param winningCombination - выигрышная комбинация
 * @returns {number[][]} - массив с выигрышными числами в каждом поле
 */

export const isWinningCombination = (
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
