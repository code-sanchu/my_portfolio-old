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

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
