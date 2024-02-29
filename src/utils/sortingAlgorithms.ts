//////////////////////////////////////// Bubble Sort ////////////////////////////////////////
export const BubbleSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      setState((prev) => ({ ...prev, sortedIndices: [j, j + 1] }));

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }

      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
};

//////////////////////////////////////// Quick Sort ////////////////////////////////////////

export const QuickSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  await quickSortHelper(arr, 0, n - 1, setState, speed);
  return arr;
}

const quickSortHelper = async (
  arr: number[],
  low: number,
  high: number,
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  if (low < high) {
    const pivot = await partition(arr, low, high, setState, speed);
    await Promise.all([
      quickSortHelper(arr, low, pivot - 1, setState, speed),
      quickSortHelper(arr, pivot + 1, high, setState, speed)
    ]);
  }
}

const partition = async (
  arr: number[],
  low: number,
  high: number,
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    setState((prev) => ({ ...prev, sortedIndices: [j, high] }));
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  await new Promise((resolve) => setTimeout(resolve, speed));
  setState((prev) => ({ ...prev, array: [...arr] }));
  return i + 1;
}

//////////////////////////////////////// Merge Sort ////////////////////////////////////////
export const MergeSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  const sortedArray = await mergeSortHelper(arr, 0, n - 1, setState, speed);
  return sortedArray;
}

const mergeSortHelper = async (
  arr: number[],
  low: number,
  high: number,
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    await mergeSortHelper(arr, low, mid, setState, speed);
    await mergeSortHelper(arr, mid + 1, high, setState, speed);
    await merge(arr, low, mid, high, setState, speed);
  }
  return arr;
}

const merge = async (
  arr: number[],
  low: number,
  mid: number,
  high: number,
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  const left = new Array(n1);
  const right = new Array(n2);
  for (let i = 0; i < n1; i++) {
    left[i] = arr[low + i];
  }
  for (let i = 0; i < n2; i++) {
    right[i] = arr[mid + 1 + i];
  }
  let i = 0;
  let j = 0;
  let k = low;
  while (i < n1 && j < n2) {
    setState((prev) => ({ ...prev, sortedIndices: [low + i, mid + 1 + j] }));
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
  }
  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
  }
}

//////////////////////////////////////// Heap Sort ////////////////////////////////////////
export const HeapSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i, setState, speed);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
    await heapify(arr, i, 0, setState, speed);
  }
  return arr;
}

const heapify = async (
  arr: number[],
  n: number,
  i: number,
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
    await heapify(arr, n, largest, setState, speed);
  }
}

//////////////////////////////////////// Selection Sort ////////////////////////////////////////
export const SelectionSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      setState((prev) => ({ ...prev, sortedIndices: [i, j] }));
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

//////////////////////////////////////// Insertion Sort ////////////////////////////////////////
export const InsertionSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      setState((prev) => ({ ...prev, sortedIndices: [j, j + 1] }));
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
  }
  return arr;
}

//////////////////////////////////////// Cocktail Sort ////////////////////////////////////////
export const CocktailSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  let swapped = true;
  let start = 0;
  let end = arr.length - 1;
  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      setState((prev) => ({ ...prev, sortedIndices: [i, i + 1] }));
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
    if (!swapped) {
      break;
    }
    swapped = false;
    end--;
    for (let i = end - 1; i >= start; i--) {
      setState((prev) => ({ ...prev, sortedIndices: [i, i + 1] }));
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
    start++;
  }
  return arr;
}

//////////////////////////////////////// Shell Sort ////////////////////////////////////////
export const ShellSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        setState((prev) => ({ ...prev, sortedIndices: [j, j - gap] }));
        arr[j] = arr[j - gap];
        await new Promise((resolve) => setTimeout(resolve, speed));
        setState((prev) => ({ ...prev, array: [...arr] }));
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

//////////////////////////////////////// Radix Sort ////////////////////////////////////////
export const RadixSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const max = Math.max(...arr);
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    for (let i = 0; i < n; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
      setState((prev) => ({ ...prev, sortedIndices: [i, count[Math.floor(arr[i] / exp) % 10] - 1] }));
      output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
      count[Math.floor(arr[i] / exp) % 10]--;
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...output] }));
    }
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
    }
    count.fill(0);
  }

  return arr;
}

//////////////////////////////////////// Bogo Sort ////////////////////////////////////////
export const BogoSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number,
) => {
  let iterations = 0;
  while (!isSorted(arr)) {
    if (iterations === 100 || iterations === 500) {
      const shouldContinue = window.confirm(`The algorithm has reached ${iterations} iterations. Do you want to continue?`);
      if (!shouldContinue) {
        break;
      }
    }
    shuffle(arr);
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
    iterations++;
  }
  return arr;
}

const isSorted = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const shuffle = (arr: number[]) => {
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
}

//////////////////////////////////////// Comb Sort ////////////////////////////////////////
export const CombSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  let gap = n;
  let swapped = true;
  while (gap !== 1 || swapped) {
    gap = getNextGap(gap);
    swapped = false;
    for (let i = 0; i < n - gap; i++) {
      setState((prev) => ({ ...prev, sortedIndices: [i, i + gap] }));
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
  }
  return arr;
}

const getNextGap = (gap: number) => {
  gap = Math.floor((gap * 10) / 13);
  return Math.max(gap, 1);
}

//////////////////////////////////////// Counting Sort ////////////////////////////////////////
export const CountingSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  let index = 0;
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      setState((prev) => ({ ...prev, sortedIndices: [index, index] }));
      arr[index] = i;
      count[i]--;
      index++;
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
  }

  return arr;
}

//////////////////////////////////////// Gnome Sort ////////////////////////////////////////
export const GnomeSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  for (let index = 0; index < n;) {
    if (index === 0) {
      index++;
    }
    setState((prev) => ({ ...prev, sortedIndices: [index, index - 1] }));
    if (arr[index] >= arr[index - 1]) {
      index++;
    } else {
      const temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
  }
  return arr;
}

//////////////////////////////////////// OddEvenSort ////////////////////////////////////////
export const OddEvenSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i <= n - 2; i += 2) {
      setState((prev) => ({ ...prev, sortedIndices: [i, i + 1] }));
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
    for (let i = 0; i <= n - 2; i += 2) {
      setState((prev) => ({ ...prev, sortedIndices: [i, i + 1] }));
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
  }
  return arr;
}

//////////////////////////////////////// Cycle Sort ////////////////////////////////////////
export const CycleSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < n; i++) {
      setState((prev) => ({ ...prev, sortedIndices: [i, cycleStart] }));
      if (arr[i] < item) {
        pos++;
      }
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
    if (pos === cycleStart) {
      continue;
    }
    while (item === arr[pos]) {
      pos++;
    }
    if (pos !== cycleStart) {
      [item, arr[pos]] = [arr[pos], item];
      await new Promise((resolve) => setTimeout(resolve, speed));
      setState((prev) => ({ ...prev, array: [...arr] }));
    }
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        setState((prev) => ({ ...prev, sortedIndices: [i, cycleStart] }));
        if (arr[i] < item) {
          pos++;
        }
        await new Promise((resolve) => setTimeout(resolve, speed));
        setState((prev) => ({ ...prev, array: [...arr] }));
      }
      while (item === arr[pos]) {
        pos++;
      }
      if (item !== arr[pos]) {
        [item, arr[pos]] = [arr[pos], item];
        await new Promise((resolve) => setTimeout(resolve, speed));
        setState((prev) => ({ ...prev, array: [...arr] }));
      }
    }
  }
  return arr;
}

//////////////////////////////////////// Pigonhole Sort ////////////////////////////////////////
export const PigeonholeSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  const n = arr.length;
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  const range = max - min + 1;
  const holes = new Array(range).fill(0);
  for (let i = 0; i < n; i++) {
    holes[arr[i] - min]++;
  }
  let index = 0;
  for (let i = 0; i < range; i++) {
    while (holes[i] > 0) {
      arr[index] = i + min;
      holes[i]--;
      index++;
      setState((prev) => ({ ...prev, array: [...arr] }));
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }
  return arr;
}

//////////////////////////////////////// Pancake Sort ////////////////////////////////////////
export const PancakeSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  let n = arr.length;
  while (n > 1) {
    const maxIndex = findMaxIndex(arr, n);
    if (maxIndex !== n - 1) {
      await flip(arr, maxIndex, setState, speed);
      await flip(arr, n - 1, setState, speed);
    }
    n--;
  }
  return arr;
}

const findMaxIndex = (arr: number[], n: number) => {
  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

const flip = async (
  arr: number[],
  i: number,
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  let start = 0;
  while (start < i) {
    setState((prev) => ({ ...prev, sortedIndices: [start, i] }));
    [arr[start], arr[i]] = [arr[i], arr[start]];
    start++;
    i--;
    await new Promise((resolve) => setTimeout(resolve, speed));
    setState((prev) => ({ ...prev, array: [...arr] }));
  }
}

//////////////////////////////////////// Binary Tree Sort ////////////////////////////////////////
export const BinaryTreeSort = async (
  arr: number[],
  setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
  speed: number
) => {
  class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    root: Node | null;
    constructor() {
      this.root = null;
    }
    insert(value: number) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
    insertNode(node: Node, newNode: Node) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
    inOrder(node: Node | null, arr: number[]) {
      if (node !== null) {
        this.inOrder(node.left, arr);
        arr.push(node.value);
        this.inOrder(node.right, arr);
      }
    }
  }

  const n = arr.length;
  const tree = new BinaryTree();
  for (let i = 0; i < n; i++) {
    tree.insert(arr[i]);
  }
  const sortedArray: number[] = [];
  tree.inOrder(tree.root, sortedArray);
  for (let i = 0; i < n; i++) {
    arr[i] = sortedArray[i];
    setState((prev) => ({ ...prev, array: [...arr] }));
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
  return arr;
}
