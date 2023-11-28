'use client';

import { Header } from './components/Header/Header';
import { ComponentResizing } from './layout/ComponentResizing';
import { ToopPools } from './components/TopPools/TopPools';
import { DrawerProvider } from './contexts/DrawerContext';
import { AppDrawer } from './components/AppDrawer/AppDrawer';
import { AppContent } from './components/AppContent/AppContent';

export default function Home() {
  // async function getPools() {
  //   try {
  //     const queryParams: QueryParams = {
  //       chain: 'Polygon',
  //       exchange: 'uniswap-v3',
  //       orderBy: 'volumeTvl',
  //       orientation: 'desc',
  //     };
  //     const response = await fetch(
  //       `${environment.API_URL}/pools?chain=${queryParams.chain}&exchange=${queryParams.exchange}&orderBy=${queryParams.orderBy}&orientation=${queryParams.orientation}`
  //     );
  //     const jsonResponse = await response.json();
  //     setPools(jsonResponse.pools);
  //     return () => {};
  //   } catch (err) {
  //     setPools([]);
  //   }
  // }

  return (
    <main>
      <DrawerProvider>
        <ComponentResizing open={true}>
          <Header />
          <ToopPools />
          <AppContent />
        </ComponentResizing>
        <AppDrawer />
      </DrawerProvider>
    </main>
  );
}
