import { ReactNode } from 'react';
import styles from './SlideAnimation.module.css';
import { ChildrenProps } from '@/app/interfaces/children-props';

export interface SlideAnimationProps {
  children: ReactNode;
  startTrigger: boolean;
}

export function SlideAnimation({
  children,
  startTrigger,
}: SlideAnimationProps) {
  return (
    <div className={startTrigger ? styles.slideAnimation : undefined}>
      {children}
    </div>
  );
}
