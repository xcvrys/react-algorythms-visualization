import type { Frame } from '../types'

export function* insertionSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
      yield { array: [...arr], comparing: [j + 1, j + 2] }
    }
    arr[j + 1] = key
    yield { array: [...arr], comparing: [j + 1, i] }
  }
}
