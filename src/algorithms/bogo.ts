import type { Frame } from '../types'

function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}

function shuffle(arr: number[]): void {
  let current = arr.length
  while (current !== 0) {
    const random = Math.floor(Math.random() * current--)
    ;[arr[current], arr[random]] = [arr[random], arr[current]]
  }
}

export function* bogoSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  let iterations = 0
  while (!isSorted(arr) && iterations < 1000) {
    shuffle(arr)
    yield { array: [...arr], comparing: [] }
    iterations++
  }
}
