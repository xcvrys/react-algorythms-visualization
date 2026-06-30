import type { Frame } from '../types'

class TreeNode {
  left: TreeNode | null = null
  right: TreeNode | null = null
  constructor(public value: number) {}
}

function insert(root: TreeNode | null, value: number): TreeNode {
  if (!root) return new TreeNode(value)
  if (value < root.value) root.left = insert(root.left, value)
  else root.right = insert(root.right, value)
  return root
}

function* inOrder(node: TreeNode | null): Generator<number, void, unknown> {
  if (!node) return
  yield* inOrder(node.left)
  yield node.value
  yield* inOrder(node.right)
}

export function* binaryTreeSort(input: number[]): Generator<Frame> {
  const arr = [...input]
  let root: TreeNode | null = null
  for (const v of arr) root = insert(root, v)
  let i = 0
  for (const v of inOrder(root)) {
    arr[i++] = v
    yield { array: [...arr], comparing: [i - 1, i - 1] }
  }
}
