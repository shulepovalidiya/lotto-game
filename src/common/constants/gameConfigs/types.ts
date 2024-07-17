/**
 * Интерфейс описывает конфигурацию игрового поля:
 * - номер,
 * - общее количество клеток,
 * - количество клеток, которое необходимо выбрать пользователю
 */
export interface FieldConfig {
  id: number;
  totalCellCount: number;
  requiredCellCount: number;
}

/**
 * Тип описывает функцию определения победы в билете.
 * Функция принимает на вход комбинацию пользователя, выигрышную комбинацию,
 * возвращает true, если найдено нужное количество совпадений между ними, и false, если нет
 */
export type CheckIsTicketWon = (userCombination: number[][], winningCombination: number[][]) => boolean;

/**
 * Интерфейс описывает конфигурацию игры:
 * - количество билетов,
 * - массив с конфигурацией полей билета,
 * - метод, определяющий победу
 */
export interface GameConfig {
  initialTicketsCount: number;
  fieldsConfig: readonly FieldConfig[];
  checkIsTicketWon: CheckIsTicketWon;
}
