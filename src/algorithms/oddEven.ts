import type { Frame } from '../types'

export function* oddEvenSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 1; i <= n - 2; i += 2) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        sorted = false
      }
      yield { array: [...arr], comparing: [i, i + 1] }
    }
    for (let i = 0; i <= n - 2; i += 2) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        sorted = false
      }
      yield { array: [...arr], comparing: [i, i + 1] }
    }
  }
}
