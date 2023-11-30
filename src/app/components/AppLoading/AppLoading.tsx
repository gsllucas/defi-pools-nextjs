import CircularProgressLoading from '@/app/ui/components/CircularProgressLoading/CircularProgressLoading';
import { Box, Container } from '@mui/material';
import { MainContentTabProps } from '../MainContent/interfaces/MainContentTabProps';

import styles from './AppLoading.module.css';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';

export function AppLoading({ startAnimationTrigger }: MainContentTabProps) {
  return (
    <div
      style={{
        background:
          'linear-gradient(114deg, #FEF8F4 0%, #FCF2F8 21.75%, #EBF4FE 49.79%, #EEFBF4 102.31%)',
        height: '100vh',
        width: '100%',
      }}
      className={startAnimationTrigger ? styles.fadeAway : undefined}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="inherit"
        flexDirection="column"
        width="inherit"
      >
        <CircularProgressLoading size={30} />
      </Box>
    </div>
  );
}
