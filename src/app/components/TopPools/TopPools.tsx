import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import styles from './TopPools.module.css';
import { environment } from '@/environments/environment';
import { PoolCard } from './components/PoolCard/PoolCard';
import { useEffect, useState } from 'react';
import { PoolObject } from '@/app/interfaces/pool-object';
import { Skeleton } from '@mui/material';
import { useAppPageLoadingContext } from '@/app/contexts/AppPageLoadingContent';

export function ToopPools() {
  const [topPools, setTopPools] = useState<PoolObject[]>([]);
  const [loadingTopPools, setLoadingTopPools] = useState(true);
  const { setAppPageLoading } = useAppPageLoadingContext();

  useEffect(() => {
    getTopVolumePoolsInLast24h();
  }, []);

  async function getTopVolumePoolsInLast24h() {
    try {
      setLoadingTopPools(true);
      const result = await fetch(
        `${environment.API_URL}/pools?orderBy=volume1d&orientation=desc&limit=5&offset=0`
      );
      const resultJson = await result.json();
      setTopPools(resultJson.pools);
      setLoadingTopPools(false);
      setAppPageLoading(false);
    } catch (err) {
      setLoadingTopPools(false);
      // TODO: Fazer todos tratamento de erro
    }
  }

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
