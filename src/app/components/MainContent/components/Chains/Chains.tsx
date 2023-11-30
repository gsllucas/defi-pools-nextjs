import { SlideAnimation } from '@/app/ui/components/SlideAnimation/SlideAnimation';
import { MainContentTabProps } from '../../interfaces/MainContentTabProps';

export function Chains({ startAnimationTrigger }: MainContentTabProps) {
  return (
    <SlideAnimation startTrigger={startAnimationTrigger}>
      <p>Chains...</p>
    </SlideAnimation>
  );
}
