export type Frame = {
  array: number[]
  comparing: number[]
}

export type AlgorithmFn = (arr: number[]) => Generator<Frame>

export type AlgorithmDef = {
  title: string
  timeComplexity: string
  spaceComplexity: string
  fn: AlgorithmFn
}

export type VisualizerState = {
  array: number[]
  comparing: Set<number>
  isSorting: boolean
  isSorted: boolean
  timeTaken: number
}
