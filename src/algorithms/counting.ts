import type { Frame } from '../types'

export function* countingSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  const max = Math.max(...arr)
  const count = new Array<number>(max + 1).fill(0)
  for (let i = 0; i < n; i++) count[arr[i]]++
  let index = 0
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      arr[index] = i
      count[i]--
      yield { array: [...arr], comparing: [index, index] }
      index++
    }
  }
}
