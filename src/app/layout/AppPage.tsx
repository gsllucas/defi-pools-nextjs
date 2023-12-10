import React from 'react';

import { Header } from '../components/Header/Header';
import { MainContent } from '../components/MainContent/MainContent';
import { TopPools } from '../components/TopPools/TopPools';
import { ComponentResizing } from './ComponentResizing';
import { AppLoading } from '../components/AppLoading/AppLoading';
import { useAppPageLoadingContext } from '../contexts/AppPageLoadingContext';
import { PoolsDataProvider } from '../contexts/PoolsDataContext';
import { LeftMenuFloatingNavigation } from '../components/LeftMenuFloatingNavigation/LeftMenuFloatingNavigation';

export function AppPage() {
  const { appPageLoading } = useAppPageLoadingContext();

  return (
    <React.Fragment>
      <AppLoading startAnimationTrigger={!appPageLoading} />
      <ComponentResizing open={true}>
        <LeftMenuFloatingNavigation />
        <PoolsDataProvider>
          {/* <Header /> */}
          {/* <TopPools /> */}
          <MainContent />
        </PoolsDataProvider>
      </ComponentResizing>
    </React.Fragment>
  );
}
