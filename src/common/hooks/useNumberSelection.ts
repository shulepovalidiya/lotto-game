import { useState } from 'react';

export interface UseNumberSelection {
  selectedNumbers: number[];
  toggleNumber: (number: number) => void;
  isSelectionCompleted: boolean;
}

/**
 * Кастомный React-хук, который следит за выбором чисел в поле
 *
 * @param {number} requiredNumbersCount - Необходимое количество чисел для выбора
 * @returns {UseNumberSelection} - Объект, содержащий выбранные на данный момент числа,
 * функцию toggleNumber и индикатор «заполненности» поля isSelectionCompleted
 */

export const useNumberSelection = (
  requiredNumbersCount: number,
): UseNumberSelection => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const toggleNumber = (number: number) => {
    setSelectedNumbers((previous) => {
      if (previous.includes(number)) {
        return previous.filter((n) => n !== number);
      }
      if (previous.length < requiredNumbersCount) {
        return [...previous, number];
      }
      return previous;
    });
  };

  const isSelectionCompleted = selectedNumbers.length === requiredNumbersCount;

  return { selectedNumbers, toggleNumber, isSelectionCompleted };
};
