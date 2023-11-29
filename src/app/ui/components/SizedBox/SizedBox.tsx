import { CSSProperties, ReactNode } from 'react';

export interface SizedBoxProps {
  children: ReactNode;
  style: CSSProperties;
}

export function SizedBox({ style, children }: SizedBoxProps) {
  return <div style={style}>{children}</div>;
}
