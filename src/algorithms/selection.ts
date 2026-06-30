import type { Frame } from '../types'

export function* selectionSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j
      yield { array: [...arr], comparing: [i, j] }
    }
    if (minIdx !== i) {
      ;[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
      yield { array: [...arr], comparing: [i, minIdx] }
    }
  }
}
