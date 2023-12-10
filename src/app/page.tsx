'use client';

import { DrawerProvider } from './contexts/DrawerContext';
import { AppDrawer } from './components/AppDrawer/AppDrawer';
import { ThemeProvider } from '@mui/material';
import { theme } from './ui/theme/theme';
import { AppPage } from './layout/AppPage';
import { AppPageLoadingProvider } from './contexts/AppPageLoadingContext';

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <AppPageLoadingProvider>
          <DrawerProvider>
            {/* Call pools data provider here */}
            <AppPage />
            <AppDrawer />
          </DrawerProvider>
        </AppPageLoadingProvider>
      </ThemeProvider>
    </main>
  );
}
