export interface PoolObject {
  poolId: string;
  chain: string;
  pair: string;
  exchange: string;
  poolFee: string;
  tvl: number;
  volume1d: number;
  volume7d: number;
  fees1d: number;
  fees7d: number;
  volumeTvl: number;
  apy: number;
}
