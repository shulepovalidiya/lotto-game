import { generateRandomCombination } from './generateRandomCombination';
import { IFieldConfig } from '../../constants/gameConfigs/types';

describe('generateRandomCombination', () => {
  const fieldsConfig: readonly IFieldConfig[] = [
    { id: 1, totalCellCount: 19, requiredCellCount: 8 },
    { id: 2, totalCellCount: 2, requiredCellCount: 1 },
  ];

  it('should generate the correct number of fields', () => {
    const combination = generateRandomCombination(fieldsConfig);
    expect(combination).toHaveLength(fieldsConfig.length);
  });

  it('should generate the correct number of numbers in each field', () => {
    const combination = generateRandomCombination(fieldsConfig);
    combination.forEach((fieldCombination, index) => {
      expect(fieldCombination).toHaveLength(fieldsConfig[index].requiredCellCount);
    });
  });

  it('should generate unique numbers in each field', () => {
    const combination = generateRandomCombination(fieldsConfig);
    combination.forEach((fieldCombination) => {
      const uniqueNumbers = new Set(fieldCombination);
      expect(uniqueNumbers.size).toBe(fieldCombination.length);
    });
  });

  it('should generate numbers within the correct range in each field', () => {
    const combination = generateRandomCombination(fieldsConfig);
    combination.forEach((fieldCombination, index) => {
      fieldCombination.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(fieldsConfig[index].totalCellCount);
      });
    });
  });
});
