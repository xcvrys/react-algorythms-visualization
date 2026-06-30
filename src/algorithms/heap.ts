import type { Frame } from '../types'

function* heapify(
  arr: number[],
  n: number,
  i: number,
): Generator<Frame, void, unknown> {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2
  if (left < n && arr[left] > arr[largest]) largest = left
  if (right < n && arr[right] > arr[largest]) largest = right
  if (largest !== i) {
    yield { array: [...arr], comparing: [i, largest] }
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    yield { array: [...arr], comparing: [i, largest] }
    yield* heapify(arr, n, largest)
  }
}

export function* heapSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) yield* heapify(arr, n, i)
  for (let i = n - 1; i > 0; i--) {
    yield { array: [...arr], comparing: [0, i] }
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    yield { array: [...arr], comparing: [0, i] }
    yield* heapify(arr, i, 0)
  }
}
