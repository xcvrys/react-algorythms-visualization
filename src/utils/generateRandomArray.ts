export const generateRandomArray = (arraySize: number): number[] => {
  const randomArray = Array.from(
    { length: arraySize - 1 },
    () => Math.floor(Math.random() * 99) + 1
  );
  randomArray.push(100);
  return randomArray;
};
