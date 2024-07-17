import { getArrayIntersection } from './getArrayIntersection';

describe('test getArrayIntersection', () => {
  it('should return partial intersection', () => {
    expect(getArrayIntersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  it('should return empty array if there is  no intersection', () => {
    expect(getArrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should return full array on full intersection', () => {
    expect(getArrayIntersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return empty array on empty array param', () => {
    expect(getArrayIntersection([1, 2, 3], [])).toEqual([]);
  });
});
