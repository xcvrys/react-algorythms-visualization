import type { Frame } from '../types'

function findMaxIndex(arr: number[], n: number): number {
  let maxIdx = 0
  for (let i = 1; i < n; i++) if (arr[i] > arr[maxIdx]) maxIdx = i
  return maxIdx
}

function* flip(arr: number[], end: number): Generator<Frame, void, unknown> {
  let start = 0
  while (start < end) {
    yield { array: [...arr], comparing: [start, end] }
    ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
    yield { array: [...arr], comparing: [start, end] }
  }
}

export function* pancakeSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  let n = arr.length
  while (n > 1) {
    const maxIdx = findMaxIndex(arr, n)
    if (maxIdx !== n - 1) {
      yield* flip(arr, maxIdx)
      yield* flip(arr, n - 1)
    }
    n--
  }
}
