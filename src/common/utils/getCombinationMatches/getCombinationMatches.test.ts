import { getCombinationMatches } from './getCombinationMatches';

describe('test getCombinationMatches', () => {
  it('should return length if all matches', () => {
    expect(
      getCombinationMatches(
        [
          [1, 2, 3, 4, 5],
          [3, 2, 1],
        ],
        [
          [1, 2, 3, 4, 5],
          [3, 2, 1],
        ],
      ),
    ).toEqual([5, 3]);
  });

  it('should return zeros if nothing matches', () => {
    expect(
      getCombinationMatches(
        [
          [1, 2, 3, 4, 5],
          [3, 2, 1],
        ],
        [[6, 7, 8, 9], [100]],
      ),
    ).toEqual([0, 0]);
  });

  it('should return count of mutual numbers if partly matches', () => {
    expect(
      getCombinationMatches(
        [
          [1, 2, 3, 4, 5],
          [3, 2, 1],
        ],
        [
          [6, 7, 8, 9, 5],
          [1, 2],
        ],
      ),
    ).toEqual([1, 2]);
  });

  it('should return zeros if winning combinations is empty', () => {
    expect(
      getCombinationMatches(
        [
          [1, 2, 3, 4, 5],
          [3, 2, 1],
        ],
        [[], []],
      ),
    ).toEqual([0, 0]);
  });

  it('should return zeros if user combination is empty', () => {
    expect(
      getCombinationMatches(
        [[], []],
        [
          [1, 2, 3, 4, 5],
          [3, 2, 1],
        ],
      ),
    ).toEqual([0, 0]);
  });
});
