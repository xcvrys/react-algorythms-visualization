import type { Frame } from '../types'

export function* cycleSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  const n = arr.length
  for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
    let item = arr[cycleStart]
    let pos = cycleStart
    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) pos++
      yield { array: [...arr], comparing: [i, cycleStart] }
    }
    if (pos === cycleStart) continue
    while (item === arr[pos]) pos++
    if (pos !== cycleStart) {
      ;[item, arr[pos]] = [arr[pos], item]
      yield { array: [...arr], comparing: [cycleStart, pos] }
    }
    while (pos !== cycleStart) {
      pos = cycleStart
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) pos++
        yield { array: [...arr], comparing: [i, cycleStart] }
      }
      while (item === arr[pos]) pos++
      if (item !== arr[pos]) {
        ;[item, arr[pos]] = [arr[pos], item]
        yield { array: [...arr], comparing: [cycleStart, pos] }
      }
    }
  }
}
