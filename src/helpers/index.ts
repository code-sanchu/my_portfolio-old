export function calcNextIndex({
  currentIndex,
  maxIndex,
}: {
  currentIndex: number;
  maxIndex: number;
}) {
  return currentIndex + 1 <= maxIndex ? currentIndex + 1 : 0;
}

export function calcPrevIndex({
  currentIndex,
  maxIndex,
}: {
  currentIndex: number;
  maxIndex: number;
}) {
  return currentIndex - 1 >= 0 ? currentIndex - 1 : maxIndex;
}
