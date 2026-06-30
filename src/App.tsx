import { useState, useMemo, useCallback } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { ALGORITHMS } from "./algorithms";
import type { AlgorithmKey } from "./algorithms";
import Header from "./components/header";
import Footer from "./components/footer";
import Settings from "./components/Settings";
import SortingVisualizer from "./components/SortingVisualizer";

export default function App() {
  const [speed, setSpeed] = useState(10);
  const [length, setLength] = useState(100);
  const [search, setSearch] = useState("");

  const debouncedSpeed = useDebounce(speed, 300);
  const debouncedLength = useDebounce(length, 300);
  const debouncedSearch = useDebounce(search, 300);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  }, []);

  const filteredKeys = useMemo(() => {
    const lower = debouncedSearch.toLowerCase();
    return (Object.keys(ALGORITHMS) as AlgorithmKey[]).filter((key) =>
      ALGORITHMS[key].title.toLowerCase().includes(lower),
    );
  }, [debouncedSearch]);

  return (
    <>
      <Header />
      <main className="app">
        <Settings
          speed={speed}
          setSpeed={setSpeed}
          length={length}
          setLength={setLength}
          onSearch={handleSearch}
        />
        {filteredKeys.map((key) => (
          <SortingVisualizer
            key={`${debouncedLength}-${key}`}
            algorithmKey={key}
            speed={debouncedSpeed}
            arrayLength={debouncedLength}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
