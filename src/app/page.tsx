'use client';

import { Header } from './components/Header/Header';
import { ComponentResizing } from './layout/ComponentResizing';
import { ToopPools } from './components/TopPools/TopPools';
import { DrawerProvider } from './contexts/DrawerContext';
import { AppDrawer } from './components/AppDrawer/AppDrawer';
import { MainContent } from './components/MainContent/MainContent';
import { ThemeProvider } from '@mui/material';
import { theme } from './ui/theme/theme';

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <DrawerProvider>
          <ComponentResizing open={true}>
            <Header />
            <ToopPools />
            <MainContent />
          </ComponentResizing>
          <AppDrawer />
        </DrawerProvider>
      </ThemeProvider>
    </main>
  );
}
