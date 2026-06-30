import type { Frame } from '../types'

export function* gnomeSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  let index = 0
  while (index < n) {
    if (index === 0) { index++; continue }
    if (arr[index] >= arr[index - 1]) {
      index++
    } else {
      ;[arr[index], arr[index - 1]] = [arr[index - 1], arr[index]]
      index--
    }
    yield { array: [...arr], comparing: [index, index - 1] }
  }
}
