import type { AlgorithmDef } from "../types";
import { bubbleSort } from "./bubble";
import { quickSort } from "./quick";
import { mergeSort } from "./merge";
import { heapSort } from "./heap";
import { selectionSort } from "./selection";
import { insertionSort } from "./insertion";
import { cocktailSort } from "./cocktail";
import { shellSort } from "./shell";
import { radixSort } from "./radix";
import { bogoSort } from "./bogo";
import { combSort } from "./comb";
import { countingSort } from "./counting";
import { gnomeSort } from "./gnome";
import { oddEvenSort } from "./oddEven";
import { cycleSort } from "./cycle";
import { pigeonholeSort } from "./pigeonhole";
import { pancakeSort } from "./pancake";
import { binaryTreeSort } from "./binaryTree";

export {
  bubbleSort,
  quickSort,
  mergeSort,
  heapSort,
  selectionSort,
  insertionSort,
  cocktailSort,
  shellSort,
  radixSort,
  bogoSort,
  combSort,
  countingSort,
  gnomeSort,
  oddEvenSort,
  cycleSort,
  pigeonholeSort,
  pancakeSort,
  binaryTreeSort,
};

export const ALGORITHMS = {
  BubbleSort: {
    title: "Bubble Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: bubbleSort,
  },
  QuickSort: {
    title: "Quick Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)",
    fn: quickSort,
  },
  MergeSort: {
    title: "Merge Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    fn: mergeSort,
  },
  HeapSort: {
    title: "Heap Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    fn: heapSort,
  },
  SelectionSort: {
    title: "Selection Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: selectionSort,
  },
  InsertionSort: {
    title: "Insertion Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: insertionSort,
  },
  CocktailSort: {
    title: "Cocktail Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: cocktailSort,
  },
  ShellSort: {
    title: "Shell Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    fn: shellSort,
  },
  RadixSort: {
    title: "Radix Sort",
    timeComplexity: "O(nk)",
    spaceComplexity: "O(n+k)",
    fn: radixSort,
  },
  BogoSort: {
    title: "Bogo Sort",
    timeComplexity: "O((n+1)!)",
    spaceComplexity: "O(1)",
    fn: bogoSort,
  },
  CombSort: {
    title: "Comb Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: combSort,
  },
  CountingSort: {
    title: "Counting Sort",
    timeComplexity: "O(n+k)",
    spaceComplexity: "O(n+k)",
    fn: countingSort,
  },
  GnomeSort: {
    title: "Gnome Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: gnomeSort,
  },
  OddEvenSort: {
    title: "Odd Even Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: oddEvenSort,
  },
  CycleSort: {
    title: "Cycle Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: cycleSort,
  },
  PigeonholeSort: {
    title: "Pigeonhole Sort",
    timeComplexity: "O(n+k)",
    spaceComplexity: "O(n+k)",
    fn: pigeonholeSort,
  },
  PancakeSort: {
    title: "Pancake Sort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    fn: pancakeSort,
  },
  BinaryTreeSort: {
    title: "Binary Tree Sort",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    fn: binaryTreeSort,
  },
} satisfies Record<string, AlgorithmDef>;

export type AlgorithmKey = keyof typeof ALGORITHMS;
