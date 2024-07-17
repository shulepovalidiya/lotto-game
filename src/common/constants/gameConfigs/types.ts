export interface FieldConfig {
  id: number;
  totalCellCount: number;
  requiredCellCount: number;
}

export type IsGameWon = (userCombination: number[][], winningCombination: number[][]) => boolean;

export interface GameConfig {
  initialTicketsCount: number;
  fieldsConfig: readonly FieldConfig[];
  isGameWon: IsGameWon;
}
