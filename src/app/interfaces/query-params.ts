export interface QueryParams {
  exchange?: string;
  chain?: string;
  token?: string;
  orientation?: 'asc' | 'desc';
  orderBy?:
    | 'pair'
    | 'tvl'
    | 'poolFee'
    | 'volume1d'
    | 'volume7d'
    | '1dfees'
    | '7dfees'
    | 'apr'
    | 'volumeTvl';
}
