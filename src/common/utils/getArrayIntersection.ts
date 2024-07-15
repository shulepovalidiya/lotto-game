export function getArrayIntersection<T>(
  firstArray: T[],
  secondArray: T[],
): T[] {
  return firstArray.filter((num) => secondArray.includes(num));
}
