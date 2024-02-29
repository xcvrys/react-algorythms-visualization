import { generateRandomArray } from "../utils";

describe("generateRandomArray", () => {
  it("should generate an array of the specified size", () => {
    const arraySize = 10;
    const result = generateRandomArray(arraySize);
    expect(result.length).toBe(arraySize);
  });

  it("should generate an array with values between 1 and 100", () => {
    const arraySize = 10;
    const result = generateRandomArray(arraySize);
    result.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(100);
    });
  });

  it("should include the number 100 in the generated array", () => {
    const arraySize = 10;
    const result = generateRandomArray(arraySize);
    expect(result).toContain(100);
  });

  it("should handle an array of size 1", () => {
    const arraySize = 1;
    const result = generateRandomArray(arraySize);
    expect(result.length).toBe(arraySize);
  });

  it("should handle an array of size 100", () => {
    const arraySize = 100;
    const result = generateRandomArray(arraySize);
    expect(result.length).toBe(arraySize);
  });

  it("should handle an array of size 1000", () => {
    const arraySize = 1000;
    const result = generateRandomArray(arraySize);
    expect(result.length).toBe(arraySize);
  });
});
