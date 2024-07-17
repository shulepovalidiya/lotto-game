import { useState } from 'react';
import { FieldConfig } from '../constants/gameConfigs/types';

/**
 * Интерфейс описывает состояние пользовательского выбора в игровом поле:
 * - текущее количество выбранных чисел
 * - функцию, которая позволяет снимать и устанавливать выделение на числе
 * - индикатор, позволяющий определить, выбрано ли необходимое количество чисел
 */
export interface FieldState {
  selectedNumbers: number[];
  toggleNumber: (num: number) => void;
  isSelectionCompleted: boolean;
}

export type UseNumberSelection = [FieldState[], (selected: number[][]) => void];

/**
 * Кастомный React-хук для управления выбором чисел в полях билета
 *
 * @params fieldConfigs - массив с конфигурацией полей
 *
 * @returns {UseNumberSelection} - кортеж, где
 * первое значение — объекты состояния выбора каждого из полей,
 * второе — функция для установки в поле значений
 */
export function useNumberSelection(fieldConfigs: readonly FieldConfig[]): UseNumberSelection {
  const [selectedFields, setSelectionState] = useState<number[][]>(fieldConfigs.map(() => []));

  const fieldSelectionStates: FieldState[] = fieldConfigs.map((config, index) => {
    const toggleNumber = (num: number) => {
      setSelectionState((prev) => {
        const newSelected = [...prev];
        const fieldSelected = newSelected[index];

        if (fieldSelected.includes(num)) {
          newSelected[index] = fieldSelected.filter((n) => n !== num);
        } else if (fieldSelected.length < config.requiredCellCount) {
          newSelected[index] = [...fieldSelected, num];
        }

        return newSelected;
      });
    };

    const isSelectionCompleted = selectedFields[index].length === config.requiredCellCount;

    return {
      selectedNumbers: selectedFields[index],
      toggleNumber,
      isSelectionCompleted,
    };
  });

  return [fieldSelectionStates, setSelectionState];
}
