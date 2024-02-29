import React, { useState } from "react";
import "../styles/SortingVisualizer.css";
import "../styles/visualizer.scss";
import { generateRandomArray } from "../utils";
import { ArrayBar } from "./visualizer";
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
  BogoSort,
  CombSort,
  CountingSort,
  GnomeSort,
  OddEvenSort,
  CycleSort,
  PigeonholeSort,
  PancakeSort,
  BinaryTreeSort,
} from "../utils";

const sortingAlgorithms: sortingAlgorithmsProps = {
  QuickSort,
  MergeSort,
  BubbleSort,
  HeapSort,
  SelectionSort,
  InsertionSort,
  CocktailSort,
  ShellSort,
  RadixSort,
  BogoSort,
  CombSort,
  CountingSort,
  GnomeSort,
  OddEvenSort,
  CycleSort,
  PigeonholeSort,
  PancakeSort,
  BinaryTreeSort,
};

const SortingVisualizer: React.FC<SortingVisualizerProps> = ({
  speed,
  arrayLength,
  algorithmType,
  title,
  timeComplexity,
  spaceComplexity,
}) => {
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const [isFullySorted, setIsFullySorted] = useState<boolean>(false);
  const [state, setState] = useState<SortingVisualizerState>({
    array: generateRandomArray(arrayLength),
    sortedIndices: [],
    isSorting: false,
  });

  const handleSort = async () => {
    setState((prev) => ({ ...prev, isSorting: true }));

    const startTime = new Date().getTime();

    const sortedArray = await sortingAlgorithms[algorithmType](
      [...state.array],
      setState,
      speed
    );

    setState((prev) => ({
      ...prev,
      isSorting: false,
      sortedIndices: Array.from({ length: sortedArray.length }, (_, i) => i),
    }));

    setTimeTaken(new Date().getTime() - startTime);

    setIsFullySorted(
      sortedArray.every((value, index) => {
        if (index === 0) return true;
        return value >= sortedArray[index - 1];
      })
    );
  };

  const resetArray = () => {
    setTimeTaken(0);
    setIsFullySorted(false);
    setState((prev) => ({
      ...prev,
      array: generateRandomArray(arrayLength),
      sortedIndices: [],
    }));
  };

  return (
    <div className="sorting-visualizer">
      <div
        className={`array-container ${isFullySorted ? "fullySorted" : ""}`}
        // className="array-container"
      >
        <>
          {state.array.map((value, index) => (
            <ArrayBar
              key={index}
              height={value}
              isSorted={state.sortedIndices.includes(index)}
            />
          ))}
          {timeTaken > 0 && (
            <div className="time-taken tooltip">
              <span>{timeTaken}ms</span>
              <span className="tooltiptext">
                Visualisation time taken by the algorithm
              </span>
            </div>
          )}
        </>
      </div>
      <div className="sorting-desc">
        <div className="sorting-desc-info">
          <h2>{title}</h2>
          <p>
            Time complexity:
            <span>
              <div dangerouslySetInnerHTML={{ __html: timeComplexity }} />
            </span>
          </p>
          <p>
            Space complexity:
            <span>
              <div dangerouslySetInnerHTML={{ __html: spaceComplexity }} />
            </span>
          </p>
        </div>
        <div className="sorting-desc-buttons">
          <button
            className="sorting-desc btn"
            onClick={handleSort}
            disabled={
              state.isSorting ||
              state.sortedIndices.length === state.array.length
            }
          >
            Sort
          </button>
          <button
            className="sorting-desc btn"
            onClick={resetArray}
            disabled={state.isSorting}
          >
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
