import { useState, useRef, useCallback } from "react";
import { ALGORITHMS } from "../algorithms";
import type { AlgorithmKey } from "../algorithms";
import { generateRandomArray } from "../utils/generateRandomArray";
import type { VisualizerState, Frame } from "../types";

function makeInitialState(length: number): VisualizerState {
  return {
    array: generateRandomArray(length),
    comparing: new Set<number>(),
    isSorting: false,
    isSorted: false,
    timeTaken: 0,
  };
}

export function useSortingAnimation(
  algorithmKey: AlgorithmKey,
  length: number,
  speedMs: number
) {
  const [state, setState] = useState<VisualizerState>(() =>
    makeInitialState(length)
  );

  const genRef = useRef<Generator<Frame> | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);
  const speedRef = useRef(speedMs);
  const arrayRef = useRef(state.array);

  speedRef.current = speedMs;
  arrayRef.current = state.array;

  const tick = useCallback(() => {
    if (!genRef.current) return;
    const result = genRef.current.next();
    if (result.done) {
      genRef.current = null;
      setState((prev) => ({
        ...prev,
        comparing: new Set<number>(),
        isSorting: false,
        isSorted: true,
        timeTaken: Date.now() - startTimeRef.current,
      }));
      return;
    }
    const { array, comparing } = result.value;
    setState({
      array,
      comparing: new Set(comparing),
      isSorting: true,
      isSorted: false,
      timeTaken: 0,
    });
    timerRef.current = setTimeout(tick, speedRef.current);
  }, []);

  const sort = useCallback(() => {
    genRef.current = ALGORITHMS[algorithmKey].fn([...arrayRef.current]);
    startTimeRef.current = Date.now();
    setState((prev) => ({ ...prev, isSorting: true }));
    timerRef.current = setTimeout(tick, speedRef.current);
  }, [algorithmKey, tick]);

  const reset = useCallback(() => {
    if (timerRef.current !== null) clearTimeout(timerRef.current);
    genRef.current = null;
    setState(makeInitialState(length));
  }, [length]);

  return { state, sort, reset };
}
