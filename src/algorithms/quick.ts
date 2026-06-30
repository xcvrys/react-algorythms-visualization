import type { Frame } from '../types'

function* partition(
  arr: number[],
  low: number,
  high: number,
): Generator<Frame, number, unknown> {
  const pivot = arr[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    yield { array: [...arr], comparing: [j, high] }
    if (arr[j] <= pivot) {
      i++
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      yield { array: [...arr], comparing: [i, j] }
    }
  }
  ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  yield { array: [...arr], comparing: [i + 1, high] }
  return i + 1
}

function* quickSortHelper(
  arr: number[],
  low: number,
  high: number,
): Generator<Frame, void, unknown> {
  if (low < high) {
    const pivotIdx = yield* partition(arr, low, high)
    yield* quickSortHelper(arr, low, pivotIdx - 1)
    yield* quickSortHelper(arr, pivotIdx + 1, high)
  }
}

export function* quickSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  yield* quickSortHelper(arr, 0, arr.length - 1)
}
