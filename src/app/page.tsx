'use client';

import { Header } from './components/Header/Header';
import { ComponentResizing } from './layout/ComponentResizing';
import { ToopPools } from './components/TopPools/TopPools';
import { DrawerProvider } from './contexts/DrawerContext';
import { AppDrawer } from './components/AppDrawer/AppDrawer';
import { MainContent } from './components/MainContent/MainContent';
import { ThemeProvider } from '@mui/material';
import { theme } from './ui/theme/theme';
import { AppPage } from './layout/AppPage';
import { AppPageLoadingProvider } from './contexts/AppPageLoadingContent';

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <AppPageLoadingProvider>
          <DrawerProvider>
            <AppPage />
            <AppDrawer />
          </DrawerProvider>
        </AppPageLoadingProvider>
      </ThemeProvider>
    </main>
  );
}
