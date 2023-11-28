import { useDrawerContext } from '@/app/contexts/DrawerContext';
import styles from './PoolCard.module.css';

import millify from 'millify';

import { formatPair, truncate } from '@/app/utils/functions/functions';
import { PoolObject } from '@/app/interfaces/pool-object';
import { PoolDrawerContent } from '@/app/components/AppDrawer/drawers/PoolDrawerContent/PoolDrawerContent';
import { useEffect } from 'react';

export interface PoolCardProps {
  poolObject: PoolObject;
  loading: boolean;
  index: number;
}

export function PoolCard({ poolObject, loading, index }: PoolCardProps) {
  const { setDrawerOpen, setDrawerChildren } = useDrawerContext();

  useEffect(() => {
    if (index === 0) openDrawer();
  }, []);

  function openDrawer() {
    setDrawerOpen(true);
    setDrawerChildren(<PoolDrawerContent {...poolObject} />);
  }

  return (
    // TODO: add tag position label
    <div className={styles.poolCard} onClick={openDrawer}>
      <span className={styles.chain}>{poolObject.chain}</span>
      <div className={styles.pairAndChainWrapper}>
        <span className={styles.pair}>{formatPair(poolObject.pair)}</span>
        <span className={styles.poolVolume}>
          {millify(+poolObject.volume1d)}
        </span>
      </div>
      <div className={styles.volumeAndExchangeWrapper}>
        <span className={styles.exchange}>
          {truncate(poolObject.exchange.toUpperCase(), 18)}
        </span>
        <span className={styles.poolFee}>{poolObject.poolFee}</span>
      </div>
    </div>
  );
}
