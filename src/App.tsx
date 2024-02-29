import { useState, useEffect, useCallback, useMemo } from "react";
import { useDebounce } from "./hooks/useDebounce";

import SortingVisualizer from "./components/sortingVisualizer";
import Header from "./components/header";
import Footer from "./components/footer";
import Settings from "./components/settings";

function App() {
  const [speed, setSpeed] = useState(10);
  const [length, setLength] = useState(100);

  const debouncedSpeed = useDebounce(speed.toString(), 300);
  const debouncedLength = useDebounce(length.toString(), 300);

  const algorithms: algorithms = {
    BubbleSort: {
      title: "Bubble Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    QuickSort: {
      title: "Quick Sort",
      timeComplexity: "O(nlogn)",
      spaceComplexity: "O(logn)",
    },
    MergeSort: {
      title: "Merge Sort",
      timeComplexity: "O(nlogn)",
      spaceComplexity: "O(n)",
    },
    HeapSort: {
      title: "Heap Sort",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
    },
    SelectionSort: {
      title: "Selection Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    InsertionSort: {
      title: "Insertion Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    CocktailSort: {
      title: "Cocktail Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    ShellSort: {
      title: "Shell Sort",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(1)",
    },
    RadixSort: {
      title: "Radix Sort",
      timeComplexity: "O(nk)",
      spaceComplexity: "O(n+k)",
    },
    BogoSort: {
      title: "Bogo Sort",
      timeComplexity: "O((n+1)!)",
      spaceComplexity: "O(1)",
    },
    CombSort: {
      title: "Comb Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    CountingSort: {
      title: "Counting Sort",
      timeComplexity: "O(n+k)",
      spaceComplexity: "O(n+k)",
    },
    GnomeSort: {
      title: "Gnome Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    OddEvenSort: {
      title: "Odd Even Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    CycleSort: {
      title: "Cycle Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    PigeonholeSort: {
      title: "Pigeonhole Sort",
      timeComplexity: "O(n+k)",
      spaceComplexity: "O(n+k)",
    },
    PancakeSort: {
      title: "Pancake Sort",
      timeComplexity: "O(n<sup>2</sup>)",
      spaceComplexity: "O(1)",
    },
    BinaryTreeSort: {
      title: "Binary Tree Sort",
      timeComplexity: "O(nlogn)",
      spaceComplexity: "O(n)",
    },
  };

  const [filteredAlgorithms, setFilteredAlgorithms] = useState(algorithms);
  const [searchInput, setSearchInput] = useState("");

  const debouncedSearchInput = useDebounce(searchInput, 300);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  }, []);

  const filtered = useMemo(() => {
    const lowercasedSearchInput = debouncedSearchInput.toLowerCase();
    return Object.keys(algorithms).reduce((acc, key) => {
      if (algorithms[key].title.toLowerCase().includes(lowercasedSearchInput)) {
        acc[key] = algorithms[key];
      }
      return acc;
    }, {} as algorithms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput]);

  useEffect(() => {
    setFilteredAlgorithms(filtered);
  }, [filtered]);

  return (
    <>
      <Header />
      <main className="app">
        <Settings
          speed={speed}
          setSpeed={setSpeed}
          length={length}
          setLength={setLength}
          searchInput={handleSearch}
        />
        {Object.keys(filteredAlgorithms).map((key) => (
          <SortingVisualizer
            key={debouncedLength + key}
            speed={parseInt(debouncedSpeed)}
            arrayLength={parseInt(debouncedLength)}
            algorithmType={key}
            title={algorithms[key].title}
            timeComplexity={algorithms[key].timeComplexity}
            spaceComplexity={algorithms[key].spaceComplexity}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
