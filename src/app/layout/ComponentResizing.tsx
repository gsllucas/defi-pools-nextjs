import { styled } from '@mui/material';
import { useDrawerContext } from '../contexts/DrawerContext';

import { constants } from '../constants/constants';

export const ComponentResizing = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean;
}>(({ theme }) => {
  const { drawerOpen } = useDrawerContext();

  return {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(drawerOpen && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: constants.drawerWidth,
    }),
    position: 'relative',
  };
});
