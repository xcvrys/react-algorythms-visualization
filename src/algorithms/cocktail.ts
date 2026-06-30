import type { Frame } from '../types'

export function* cocktailSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  let swapped = true
  let start = 0
  let end = arr.length - 1
  while (swapped) {
    swapped = false
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
      yield { array: [...arr], comparing: [i, i + 1] }
    }
    if (!swapped) break
    swapped = false
    end--
    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
      yield { array: [...arr], comparing: [i, i + 1] }
    }
    start++
  }
}
