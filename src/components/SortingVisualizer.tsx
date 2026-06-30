import { useSortingAnimation } from "../hooks/useSortingAnimation";
import { ALGORITHMS } from "../algorithms";
import type { AlgorithmKey } from "../algorithms";
import { ArrayBar } from "./ArrayBar";
import "../styles/visualizer.css";

type Props = {
  algorithmKey: AlgorithmKey;
  speed: number;
  arrayLength: number;
};

export default function SortingVisualizer({
  algorithmKey,
  speed,
  arrayLength,
}: Props) {
  const { state, sort, reset } = useSortingAnimation(
    algorithmKey,
    arrayLength,
    speed
  );
  const { title, timeComplexity, spaceComplexity } = ALGORITHMS[algorithmKey];

  return (
    <div className="sorting-visualizer">
      <div
        className={`array-container${state.isSorted ? " fully-sorted" : ""}`}
      >
        {state.array.map((value, index) => (
          <ArrayBar
            key={index}
            height={value}
            index={index}
            isComparing={state.comparing.has(index)}
          />
        ))}
        {state.timeTaken > 0 && (
          <div className="time-taken tooltip">
            <span>{state.timeTaken}ms</span>
            <span className="tooltiptext">
              Visualisation time taken by the algorithm
            </span>
          </div>
        )}
      </div>
      <div className="sorting-desc">
        <div className="sorting-desc-info">
          <h2>{title}</h2>
          <p>
            Time complexity: <span>{timeComplexity}</span>
          </p>
          <p>
            Space complexity: <span>{spaceComplexity}</span>
          </p>
        </div>
        <div className="sorting-desc-buttons">
          <button
            className="sorting-desc btn"
            onClick={sort}
            disabled={state.isSorting || state.isSorted}
          >
            Sort
          </button>
          <button
            className="sorting-desc btn"
            onClick={reset}
            disabled={state.isSorting}
          >
            Randomize
          </button>
        </div>
      </div>
    </div>
  );
}
