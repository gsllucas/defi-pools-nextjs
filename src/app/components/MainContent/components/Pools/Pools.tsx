import { SlideAnimation } from '@/app/ui/components/SlideAnimation/SlideAnimation';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import { Title } from '@/app/ui/components/Title/Title';
import { Box } from '@mui/material';
import { MainContentTabProps } from '../../interfaces/MainContentTabProps';
import { SearchBarFilters } from './components/SearchBarFilters/SearchBarFilters';
import { LastUpdateTime } from '../LastUpdateTime/LastUpdateTime';
import { PoolList } from './components/PoolsList/PoolsList';

export function Pools({ startAnimationTrigger }: MainContentTabProps) {
  return (
    <SlideAnimation startTrigger={startAnimationTrigger}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Title title="All Pools"></Title>
        <LastUpdateTime />
      </Box>
      <Spacing height={30} />
      <SearchBarFilters />
      <Spacing height={30} />
      <PoolList />
    </SlideAnimation>
  );
}
