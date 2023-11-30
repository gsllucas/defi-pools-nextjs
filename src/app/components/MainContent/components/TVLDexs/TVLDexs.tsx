import { SlideAnimation } from '@/app/ui/components/SlideAnimation/SlideAnimation';
import { MainContentTabProps } from '../../interfaces/MainContentTabProps';

export function TVLDexs({ startAnimationTrigger }: MainContentTabProps) {
  return (
    <SlideAnimation startTrigger={startAnimationTrigger}>
      <p>TVLDexs...</p>
    </SlideAnimation>
  );
}
