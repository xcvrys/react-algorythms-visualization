import {
  BubbleSort,
  QuickSort,
  MergeSort,
  HeapSort,
  SelectionSort,
  InsertionSort,
  CocktailSort,
  ShellSort,
  RadixSort,
  CombSort,
  CountingSort,
  GnomeSort,
  OddEvenSort,
  CycleSort,
  PigeonholeSort,
  PancakeSort,
  BinaryTreeSort,
} from "../utils";

const sortingAlgorithms = [
  BubbleSort,
  QuickSort,
  MergeSort,
  HeapSort,
  SelectionSort,
  InsertionSort,
  CocktailSort,
  ShellSort,
  RadixSort,
  CombSort,
  CountingSort,
  GnomeSort,
  OddEvenSort,
  CycleSort,
  PigeonholeSort,
  PancakeSort,
  BinaryTreeSort,
];

sortingAlgorithms.forEach((sortingAlgorithm) => {
  describe(`${sortingAlgorithm.name} function`, () => {
    it('should sort a generic input array', async () => {
      const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
      const sortedArray = await sortingAlgorithm([...inputArray], jest.fn(), 0);
      expect(sortedArray).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
    });

    it('should handle arrays with duplicate values', async () => {
      const inputArray = [5, 2, 1, 4, 4, 3, 5, 2];
      const sortedArray = await sortingAlgorithm([...inputArray], jest.fn(), 0);
      expect(sortedArray).toEqual([1, 2, 2, 3, 4, 4, 5, 5]);
    });

    it('should handle an already sorted array', async () => {
      const inputArray = [1, 2, 3, 4, 5, 6];
      const sortedArray = await sortingAlgorithm([...inputArray], jest.fn(), 0);
      expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle a reverse sorted array', async () => {
      const inputArray = [6, 5, 4, 3, 2, 1];
      const sortedArray = await sortingAlgorithm([...inputArray], jest.fn(), 0);
      expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});

// describe('simplest', () => {
//   it('should be true', () => {
//     expect(true).toBe(true);
//   });
// });