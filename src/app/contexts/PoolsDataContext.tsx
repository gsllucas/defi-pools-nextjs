import { createContext, useContext, useEffect, useState } from 'react';
import { PoolObject } from '../interfaces/pool-object';
import { PoolRestfulService } from '../services/PoolRestfulService';
import { QueryParams } from '../interfaces/query-params';
import { ChildrenProps } from '../interfaces/children-props';
import { useAppPageLoadingContext } from './AppPageLoadingContext';

const PoolsDataContext = createContext<any>({});

const poolRestfulService = new PoolRestfulService();

function PoolsDataProvider({ children }: ChildrenProps) {
  const [poolsData, setPoolsData] = useState<PoolObject[]>([]);
  const [params, setParams] = useState<QueryParams>({
    orderBy: 'volumeTvl',
    orientation: 'desc',
    chain: '',
    exchange: '',
    token: '',
    limit: 100,
    offset: 0,
  });
  const { setAppPageLoading } = useAppPageLoadingContext();
  const [poolsDataReqState, setPoolsDataReqState] = useState<
    'initial' | 'loading' | 'success' | 'failed'
  >('initial');

  useEffect(() => {
    getPoolsData(params);
  }, [params]);

  async function getPoolsData(params: QueryParams) {
    try {
      setAppPageLoading(true);
      const result = await poolRestfulService.getPools(params);
      setPoolsData(result.pools);
      setPoolsDataReqState('success');
      setAppPageLoading(false);
      return poolsData;
    } catch (err) {
      setAppPageLoading(false);
      setPoolsDataReqState('failed');
    }
  }

  console.log('poolsData', poolsData);

  return (
    <PoolsDataContext.Provider
      value={{ poolsData, getPoolsData, poolsDataReqState }}
    >
      {children}
    </PoolsDataContext.Provider>
  );
}

function usePoolsDataContext() {
  const context = useContext(PoolsDataContext);
  return context;
}

export { usePoolsDataContext, PoolsDataProvider };
