import { PoolObject } from '@/app/interfaces/pool-object';
import { formatPair, toCurrency } from '@/app/utils/functions/functions';

import styles from './PoolDrawerContent.module.css';
import { Chart, ChartProps } from '@/app/ui/components/Chart/Chart';
import { DataTile, DataTileProps } from '@/app/ui/components/DataTile/DataTile';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import React, { CSSProperties, useEffect, useState } from 'react';
import { Tab, Tabs } from '@/app/ui/components/Tabs/Tabs';
import { SlideAnimation } from '@/app/ui/components/SlideAnimation/SlideAnimation';
import { PoolRestfulService } from '@/app/services/PoolRestfulService';
import { PoolChartData } from '@/app/interfaces/pool-chart-data';
import { SizedBox } from '@/app/ui/components/SizedBox/SizedBox';

import tvlChart from '@/app/ui/components/Chart/tvl.json';

const sizedBoxStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  height: 280,
  flexDirection: 'column',
  alignItems: 'flex-end',
  justifyContent: 'center',
};

export function PoolDrawerContent(poolObject: PoolObject) {
  const [chart, setChart] = useState<PoolChartData[]>([]);
  const [loadingChart, setLoadingChart] = useState(false);
  const [chartProps, setChartProps] = useState<ChartProps>({
    series: [],
    xAxis: [],
    valueFormatter: '$',
  });
  const [tabs, setTabs] = useState([
    { id: 1, value: 'tvlUsd', symbol: '$', label: 'TVL', active: true },
    { id: 2, value: 'apy', symbol: '%', label: 'APR', active: false },
  ]);

  useEffect(() => {
    getChartData();
  }, [poolObject]);

  useEffect(() => {
    const selectedTab = tabs.find((tab) => tab.active);
    const property = selectedTab?.value as 'tvlUsd' | 'apy';
    const symbol = selectedTab?.symbol as '$' | '%' | undefined;
    setCurrentScreenChart(property, symbol);
  }, [chart, tabs]);

  const poolRestfulService = new PoolRestfulService();

  const tiles: DataTileProps[] = [
    {
      id: 1,
      label: 'V/TVL',
      labelColor: '#ffffff',
      value: `${poolObject.volumeTvl.toFixed(2)}`,
      valueColor: '#ffffff',
      backgroundColor: '#774af6',
      borderColor: 'transparent',
    },
    { id: 2, label: 'TVL', value: `${toCurrency(poolObject.tvl)}` },
    { id: 3, label: '24h Vol.', value: `${toCurrency(poolObject.volume1d)}` },
    { id: 4, label: 'Chain', value: poolObject.chain },
    { id: 5, label: 'DEX', value: poolObject.exchange.toUpperCase() },
    { id: 6, label: '24h Fees', value: `${toCurrency(poolObject.fees1d)}` },
    { id: 7, label: 'APR', value: `${poolObject.apy.toFixed(2)}%` },
  ];

  function handleTabClick(event: Tab) {
    const newState = tabs.map((tab) => {
      return { ...tab, active: event.id === tab.id };
    });
    setTabs(newState);
  }

  async function getChartData() {
    try {
      setLoadingChart(true);
      const result = await poolRestfulService.getPoolChartData(
        poolObject.poolId
      );
      const resultJson = await result.json();
      // TODO: Sort chat data according to timestamp
      sortProperlyChartData(resultJson.data);
      setLoadingChart(false);
    } catch (err) {}
  }

  function sortProperlyChartData(chart: any) {
    const data = chart.sort((a: any, b: any) => {
      if (new Date(a.timestamp).getTime() > new Date(b.timestamp).getTime())
        return -1;
      if (new Date(a.timestamp).getTime() < new Date(b.timestamp).getTime())
        return 1;
      return 0;
    });
    setChart(data);
  }

  function setCurrentScreenChart(
    property: 'tvlUsd' | 'apy',
    symbol: '$' | '%' | undefined
  ) {
    const series = chart.map((chart) => chart[property]);
    const xAxis = chart.map((chart) => new Date(chart.timestamp));
    const props = { series, xAxis, valueFormatter: symbol };
    setChartProps(props);
  }

  return (
    <section>
      <div className={styles.drawerHeader}>
        <span>{poolObject.poolFee}</span>
        <h1>{formatPair(poolObject.pair)}</h1>
      </div>
      <Tabs tabs={tabs} onClick={handleTabClick} />
      {/* <SlideAnimation startTrigger={true}> */}
      {!loadingChart ? (
        <SizedBox style={sizedBoxStyle}>
          <Chart
            series={chartProps.series}
            xAxis={chartProps.xAxis}
            valueFormatter={chartProps.valueFormatter}
          />
        </SizedBox>
      ) : (
        <SizedBox style={{ ...sizedBoxStyle, alignItems: 'center' }}>
          Loading...
        </SizedBox>
      )}

      {/* </SlideAnimation> */}
      <Spacing height={40} />
      {poolObject.volumeTvl > 1 && (
        <p className={styles.volumeTvlGreaterThan1Text}>
          <strong>V/TVL greater than 1</strong> represents a good opportunity to
          provide liquidity, generating <strong>more fees collection</strong>.
          The pool volume is greater than the tokens supply, but its important
          to take a look in other historical metrics.
        </p>
      )}
      {tiles.map((tile, index) =>
        tiles.length - 1 !== index ? (
          <React.Fragment key={tile.id}>
            <DataTile {...tile} />
            <Spacing height={10} />
          </React.Fragment>
        ) : (
          <DataTile key={tile.id} {...tile} />
        )
      )}
    </section>
  );
}
