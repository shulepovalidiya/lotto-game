import { getArrayIntersection } from './getArrayIntersection';

describe('test getArrayIntersection', () => {
  test('partial intersection', () => {
    expect(getArrayIntersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  test('no intersection', () => {
    expect(getArrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('full intersection', () => {
    expect(getArrayIntersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });
});
