import type { Frame } from '../types'

export function* shellSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  let gap = Math.floor(n / 2)
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i]
      let j = i
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap]
        j -= gap
        yield { array: [...arr], comparing: [j, j + gap] }
      }
      arr[j] = temp
      yield { array: [...arr], comparing: [j, i] }
    }
    gap = Math.floor(gap / 2)
  }
}
