import type { Frame } from '../types'

export function* pigeonholeSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  let min = arr[0], max = arr[0]
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) min = arr[i]
    else if (arr[i] > max) max = arr[i]
  }
  const range = max - min + 1
  const holes = new Array<number>(range).fill(0)
  for (let i = 0; i < n; i++) holes[arr[i] - min]++
  let index = 0
  for (let i = 0; i < range; i++) {
    while (holes[i] > 0) {
      arr[index] = i + min
      holes[i]--
      yield { array: [...arr], comparing: [index, index] }
      index++
    }
  }
}
