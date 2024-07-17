export interface IFieldConfig {
  id: number;
  totalCellCount: number;
  requiredCellCount: number;
}

export type TIsGameWon = (userCombination: number[][], winningCombination: number[][]) => boolean;

export interface IGameConfig {
  initialTicketsCount: number;
  fieldsConfig: readonly IFieldConfig[];
  isGameWon: TIsGameWon;
}
