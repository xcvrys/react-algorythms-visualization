import type { Frame } from '../types'

export function* radixSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  const max = Math.max(...arr)
  const output = new Array<number>(n)

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const count = new Array<number>(10).fill(0)
    for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++
    for (let i = 1; i < 10; i++) count[i] += count[i - 1]
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10
      output[count[digit] - 1] = arr[i]
      count[digit]--
      yield { array: [...output], comparing: [i, count[digit]] }
    }
    for (let i = 0; i < n; i++) arr[i] = output[i]
    yield { array: [...arr], comparing: [] }
  }
}
