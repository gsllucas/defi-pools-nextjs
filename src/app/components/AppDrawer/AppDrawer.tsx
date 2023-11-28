import { Drawer } from '@mui/material';
import { constants } from '@/app/constants/constants';
import { useDrawerContext } from '@/app/contexts/DrawerContext';
import { IconButtonUI } from '@/app/ui/components/IconButtonUI/IconButtonUI';
import { MaterialIconUI } from '@/app/ui/components/MaterialIconUI/MaterialIconUI';

import { CSSProperties } from 'react';

const style: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '40px',
};

export function AppDrawer() {
  const { drawerOpen, setDrawerOpen, drawerChildren } = useDrawerContext();

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <Drawer
      sx={{
        width: constants.drawerWidth,
        '& .MuiDrawer-paper': { width: constants.drawerWidth, padding: '40px' },
      }}
      variant="persistent"
      anchor="right"
      open={drawerOpen}
    >
      <IconButtonUI size="medium" onClick={closeDrawer} style={style}>
        <MaterialIconUI icon="close" />
      </IconButtonUI>
      {drawerChildren}
    </Drawer>
  );
}
