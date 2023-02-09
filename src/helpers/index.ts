export function calcNextIndex({
  currentIndex,
  maxIndex,
}: {
  currentIndex: number;
  maxIndex: number;
}) {
  return currentIndex + 1 <= maxIndex ? currentIndex + 1 : 0;
}
