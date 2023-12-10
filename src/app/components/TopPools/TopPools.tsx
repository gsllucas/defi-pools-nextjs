import styles from './TopPools.module.css';
import { PoolCard } from './components/PoolCard/PoolCard';
import { useEffect, useState } from 'react';
import { PoolObject } from '@/app/interfaces/pool-object';
import { Skeleton } from '@mui/material';
import { usePoolsDataContext } from '@/app/contexts/PoolsDataContext';
import { PoolRestfulService } from '@/app/services/PoolRestfulService';

export function TopPools() {
  const [topPools, setTopPools] = useState<PoolObject[]>([]);
  const [loadingTopPools, setLoadingTopPools] = useState(false);
  const { poolsData } = usePoolsDataContext();

  const poolRestfulService = new PoolRestfulService();

  useEffect(() => {
    getTopPools();
  }, []);

  async function getTopPools() {
    try {
      setLoadingTopPools(true);
      const result = await poolRestfulService.getTopPools();
      console.log('top pools result data', result.pools);
      if (result) setTopPools(result.pools);
      setLoadingTopPools(false);
    } catch (err) {
      setLoadingTopPools(false);
    }
  }

  // TODO: Ajustar skeleton loading
  if (loadingTopPools) return <Skeleton />;

  return (
    <section className={styles.topPoolsBackground}>
      <div className={styles.justifyWrapper}>
        <div className={styles.topPoolsContainer}>
          {topPools.map((pool, index) => (
            <PoolCard
              key={pool.poolId}
              poolObject={pool}
              loading={loadingTopPools}
              index={index}
            />
          ))}
        </div>
        <div className={styles.topPoolsLast24h}>
          <h2>Top Volume Pools</h2>
          <span>In the last 24h</span>
        </div>
      </div>
    </section>
  );
}
