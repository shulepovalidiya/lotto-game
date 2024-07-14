import { useState } from 'react';
import { IFieldConfig } from '../constants/gameConfigs/config8OutOf19.ts';

export interface FieldState {
  selectedNumbers: number[];
  toggleNumber: (num: number) => void;
  isSelectionCompleted: boolean;
}

export type UseNumberSelection = [FieldState[], (selected: number[][]) => void];

/** Кастомный React-хук для управления выбором чисел в полях билета
 * @params fieldConfigs - массив с конфигурацией полей
 * @returns {UseNumberSelection} - кортеж, где
 * первое значение — объекты состояния выбора каждого из полей,
 * второе — функция для установки в поле значений
 */

export function useNumberSelection(
  fieldConfigs: readonly IFieldConfig[],
): UseNumberSelection {
  const [selectedFields, setSelectedFields] = useState<number[][]>(
    fieldConfigs.map(() => []),
  );

  const fieldSelectionStates: FieldState[] = fieldConfigs.map(
    (config, index) => {
      const toggleNumber = (num: number) => {
        setSelectedFields((prev) => {
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

      const isSelectionCompleted =
        selectedFields[index].length === config.requiredCellCount;

      return {
        selectedNumbers: selectedFields[index],
        toggleNumber,
        isSelectionCompleted,
      };
    },
  );

  return [fieldSelectionStates, setSelectedFields];
}
