import { PoolObject } from '@/app/interfaces/pool-object';
import styles from './PoolTile.module.css';
import millify from 'millify';
import { truncate } from '@/app/utils/functions/functions';
import { useDrawerContext } from '@/app/contexts/DrawerContext';
import { PoolDrawerContent } from '@/app/components/AppDrawer/drawers/PoolDrawerContent/PoolDrawerContent';

export function PoolTile(poolObject: PoolObject) {
  const { setDrawerOpen, setDrawerChildren } = useDrawerContext();

  function openDrawer() {
    setDrawerOpen(true);
    setDrawerChildren(<PoolDrawerContent {...poolObject} />);
  }

  return (
    <div className={styles.tile} onClick={openDrawer}>
      <span className={styles.pairTileData}>{poolObject.pair}</span>
      <span className={styles.tileData}>
        {truncate(poolObject.exchange, 10)}
      </span>
      <span className={styles.chainTileData}>{poolObject.chain}</span>
      <span className={styles.tileData}>{poolObject.poolFee}</span>
      <span className={styles.tileData}>{millify(poolObject.tvl)}</span>
      <span className={styles.tileData}>{millify(poolObject.volume1d)}</span>
      <span className={styles.tileData}>{millify(poolObject.volume7d)}</span>
      <span className={styles.tileData}>{millify(poolObject.fees1d)}</span>
      <span className={styles.tileData}>{millify(poolObject.fees7d)}</span>
      <span className={styles.tileData}>{`${poolObject.apy.toFixed(2)}%`}</span>
      <span
        className={styles.tileData}
        style={{
          fontWeight: poolObject.volumeTvl > 1 ? 700 : 400,
          color: 'var(--primary-color)',
        }}
      >
        {poolObject.volumeTvl.toFixed(2)}
      </span>
    </div>
  );
}
