type ArrayBarProps = {
  height: number;
  isSorted: boolean;
};

type SortingVisualizerState = {
  array: number[];
  sortedIndices: number[];
  isSorting: boolean;
};

type SortingVisualizerProps = {
  speed: number;
  arrayLength: number;
  algorithmType: string;
  title: string;
  timeComplexity: string;
  spaceComplexity: string;
};

interface SettingsProps {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  searchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface algorithms {
  [key: string]: {
    title: string;
    timeComplexity: string;
    spaceComplexity: string;
  };
}

interface sortingAlgorithmsProps {
  [key: string]: (
    arr: number[],
    setState: React.Dispatch<React.SetStateAction<SortingVisualizerState>>,
    speed: number
  ) => Promise<number[]>;
}
