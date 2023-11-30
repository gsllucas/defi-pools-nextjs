import { Tab, Tabs } from '@/app/ui/components/Tabs/Tabs';
import styles from './MainContent.module.css';
import { useEffect, useState } from 'react';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import { Pools } from './components/Pools/Pools';
import { TVLDexs } from './components/TVLDexs/TVLDexs';
import { Chains } from './components/Chains/Chains';
import { Box } from '@mui/material';

const tabs: Tab[] = [
  { id: 1, label: 'Pools', value: 'pools', active: true },
  { id: 2, label: "TVL DEX's", value: 'tvl-dexs', active: false },
  { id: 3, label: 'Chains', value: 'chains', active: false },
];

export function MainContent() {
  const [pageTabs, setPageTabs] = useState<Tab[]>(tabs);
  const [allowedPoolTabAnimation, setAllowedPoolTabAnimation] = useState(false);

  function handleTabClick(event: Tab) {
    const newState = tabs.map((tab) => {
      return { ...tab, active: event.id === tab.id };
    });
    if (event.value !== 'pools') setAllowedPoolTabAnimation(true);
    setPageTabs(newState);
  }

  function findSelectedTab() {
    const tabIndex = pageTabs.findIndex((element) => element.active);
    if (tabIndex !== -1) return pageTabs[tabIndex];
  }

  function getVisibility(tab: string) {
    const selectedTab = findSelectedTab();
    return selectedTab?.value === tab ? 'visible' : 'hidden';
  }

  function getHeight(tab: string) {
    const selectedTab = findSelectedTab();
    return selectedTab?.value === tab ? 'auto' : 0;
  }

  function checkAnimation(tab: string) {
    const selectedTab = findSelectedTab();
    return selectedTab?.value === tab;
  }

  return (
    <section className={styles.tabsLayout}>
      <Tabs tabs={pageTabs} onClick={handleTabClick} />
      <Spacing height={50} />
      <Box visibility={getVisibility('pools')} height={getHeight('pools')}>
        <Pools
          startAnimationTrigger={
            checkAnimation('pools') && allowedPoolTabAnimation
          }
        />
      </Box>
      <Box
        visibility={getVisibility('tvl-dexs')}
        height={getHeight('tvl-dexs')}
      >
        <TVLDexs startAnimationTrigger={checkAnimation('tvl-dexs')} />
      </Box>
      <Box visibility={getVisibility('chains')} height={getHeight('chains')}>
        <Chains startAnimationTrigger={checkAnimation('chains')} />
      </Box>
    </section>
  );
}
