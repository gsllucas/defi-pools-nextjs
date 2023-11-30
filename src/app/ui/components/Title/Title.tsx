import { ReactNode } from 'react';

export interface TitleProps {
  title: string;
  fontSize?: number;
  color?: string;
}

export function Title({ title, fontSize = 20, color = '#3C3E45' }: TitleProps) {
  return <h1 style={{ fontSize, color, fontWeight: 700 }}>{title}</h1>;
}
