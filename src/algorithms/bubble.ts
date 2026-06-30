import type { Frame } from '../types'

export function* bubbleSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
      yield { array: [...arr], comparing: [j, j + 1] }
    }
    if (!swapped) break
  }
}
