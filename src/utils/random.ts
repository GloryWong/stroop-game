export function getRandomNumber(min: number, max: number) {
  return min + Math.floor(Math.random() * max)
}

export function getRandomInRange<T>(arr: T[]) {
  return arr[getRandomNumber(0, arr.length)]
}
