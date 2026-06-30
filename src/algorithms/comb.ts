import type { Frame } from '../types'

export function* combSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  let gap = n
  let swapped = true
  while (gap !== 1 || swapped) {
    gap = Math.max(1, Math.floor((gap * 10) / 13))
    swapped = false
    for (let i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        ;[arr[i], arr[i + gap]] = [arr[i + gap], arr[i]]
        swapped = true
      }
      yield { array: [...arr], comparing: [i, i + gap] }
    }
  }
}
