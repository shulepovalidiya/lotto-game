import { getCombinationMatches } from './getCombinationMatches';

describe('test getCombinationMatches', () => {
  test('all matches', () => {
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

  test('nothing matches', () => {
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

  test('partly matches', () => {
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
});
