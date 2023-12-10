import { QueryParams } from '../interfaces/query-params';

export class PoolRestfulService {
  async getPools({
    token,
    exchange,
    chain,
    orderBy = 'volumeTvl',
    orientation = 'desc',
    limit = 100,
    offset = 0,
  }: QueryParams) {
    // TODO: Change this url later
    const result = await fetch(
      `http://localhost:3077/pools?pair=${token}&exchange=${exchange}&chain=${chain}&orderBy=${orderBy}&orientation=${orientation}&limit=${limit}&offset=${offset}`
    );
    const resultJson = await result.json();
    return resultJson;
  }

  async getTopPools() {
    // TODO: Change this url later
    const result = await fetch(
      `http://localhost:3077/pools?orderBy=volumeTvl&orientation=desc&limit=5&offset=0`
    );
    const resultJson = await result.json();
    return resultJson;
  }

  async getPoolChartData(poolId: string) {
    // TODO: test with servers down
    const result = await fetch(`https://yields.llama.fi/chart/${poolId}`);
    return result;
  }
}
