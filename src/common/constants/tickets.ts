import { IFieldConfig } from '../../components/Field/Field.tsx';

/** Количество билетов, которые нужно отрендерить. По умолчанию — 1 */
export const TICKETS_COUNT: number = 5;

/** Конфигурация первого поля билета. По умолчанию — 8 из 19 */
export const FIRST_FIELD_CONFIG: IFieldConfig = {
  totalCellCount: 19,
  selectedCellCount: 8,
} as const;

/** Конфигурация второго поля билета. По умолчанию — 1 из 2 */
export const SECOND_FIELD_CONFIG: IFieldConfig = {
  totalCellCount: 2,
  selectedCellCount: 1,
} as const;
