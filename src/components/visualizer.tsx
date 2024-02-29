export const ArrayBar: React.FC<ArrayBarProps> = ({ height, isSorted }) => (
  <div
    className={`array-bar ${isSorted ? "sorted" : ""}`}
    style={{ height: `${height * 2}px` }}
  />
);
