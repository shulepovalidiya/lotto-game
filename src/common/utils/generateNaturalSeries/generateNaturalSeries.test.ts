import { generateNaturalSeries } from './generateNaturalSeries';

describe('generateNaturalSeries', () => {
  it('should generate a series of natural numbers of the given length', () => {
    const length = 5;
    const result = generateNaturalSeries(length);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should generate an empty array when length is 0', () => {
    const length = 0;
    const result = generateNaturalSeries(length);
    expect(result).toEqual([]);
  });

  it('should generate an empty array when length is negative', () => {
    const length = -5;
    const result = generateNaturalSeries(length);
    expect(result).toEqual([]);
  });

  it('should generate a series with one element when length is 1', () => {
    const length = 1;
    const result = generateNaturalSeries(length);
    expect(result).toEqual([1]);
  });

  it('should generate a series of correct length', () => {
    const length = 10;
    const result = generateNaturalSeries(length);
    expect(result).toHaveLength(length);
  });
});
