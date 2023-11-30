import React from 'react';
import { Header } from '../components/Header/Header';
import { MainContent } from '../components/MainContent/MainContent';
import { ToopPools } from '../components/TopPools/TopPools';
import { ComponentResizing } from './ComponentResizing';
import { AppLoading } from '../components/AppLoading/AppLoading';
import { useAppPageLoadingContext } from '../contexts/AppPageLoadingContent';
import { Box } from '@mui/material';

export function AppPage() {
  const { appPageLoading } = useAppPageLoadingContext();

  return (
    <React.Fragment>
      <AppLoading startAnimationTrigger={!appPageLoading} />
      <ComponentResizing open={true}>
        <Header />
        <ToopPools />
        <MainContent />
      </ComponentResizing>
    </React.Fragment>
  );
}
