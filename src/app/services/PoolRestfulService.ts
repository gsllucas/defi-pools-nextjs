export class PoolRestfulService {
  async getPoolChartData(poolId: string) {
    const result = await fetch(`https://yields.llama.fi/chart/${poolId}`);
    return result;
  }
}
