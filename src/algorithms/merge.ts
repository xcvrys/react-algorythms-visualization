import type { Frame } from '../types'

function* mergeHelper(
  arr: number[],
  low: number,
  mid: number,
  high: number,
): Generator<Frame, void, unknown> {
  const left = arr.slice(low, mid + 1)
  const right = arr.slice(mid + 1, high + 1)
  let i = 0, j = 0, k = low
  while (i < left.length && j < right.length) {
    yield { array: [...arr], comparing: [low + i, mid + 1 + j] }
    if (left[i] <= right[j]) arr[k++] = left[i++]
    else arr[k++] = right[j++]
    yield { array: [...arr], comparing: [k - 1, k - 1] }
  }
  while (i < left.length) { arr[k++] = left[i++]; yield { array: [...arr], comparing: [k - 1, k - 1] } }
  while (j < right.length) { arr[k++] = right[j++]; yield { array: [...arr], comparing: [k - 1, k - 1] } }
}

function* mergeSortHelper(
  arr: number[],
  low: number,
  high: number,
): Generator<Frame, void, unknown> {
  if (low >= high) return
  const mid = Math.floor((low + high) / 2)
  yield* mergeSortHelper(arr, low, mid)
  yield* mergeSortHelper(arr, mid + 1, high)
  yield* mergeHelper(arr, low, mid, high)
}

export function* mergeSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  yield* mergeSortHelper(arr, 0, arr.length - 1)
}
