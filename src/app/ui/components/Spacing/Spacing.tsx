interface SpacingProps {
  width?: number;
  height?: number;
}

export function Spacing({ width = 0, height = 0 }: SpacingProps) {
  return <div style={{ width, height }}></div>;
}
