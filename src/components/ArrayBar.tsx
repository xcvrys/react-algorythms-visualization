type Props = {
  height: number;
  index: number;
  isComparing: boolean;
};

export function ArrayBar({ height, index, isComparing }: Props) {
  return (
    <div
      className={`array-bar${isComparing ? " comparing" : ""}`}
      style={{ height: `${height * 2}px`, "--i": index } as React.CSSProperties}
    />
  );
}
