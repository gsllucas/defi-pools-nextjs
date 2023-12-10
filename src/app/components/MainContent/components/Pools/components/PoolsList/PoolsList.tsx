import React, { Fragment } from 'react';
import { PoolTile } from './components/PoolTile/PoolTile';
import { Spacing } from '@/app/ui/components/Spacing/Spacing';
import { usePoolsDataContext } from '@/app/contexts/PoolsDataContext';
import { Box, Container } from '@mui/material';

import styles from './PoolsList.module.css';

export function PoolList() {
  const { poolsData } = usePoolsDataContext();

  const labelTileRowsHeaders = [
    'Pair',
    'DEX',
    'Chain',
    'Fee%',
    'TVL',
    '24h Vol',
    '7d Vol',
    '24h Fees',
    '7d Fees',
    'APR',
    'V/TVL',
  ];

  return (
    <Box>
      <Container className={styles.labelTileRowHeader}>
        {labelTileRowsHeaders.map((label) => (
          <span className={styles.label}>{label}</span>
        ))}
      </Container>
      <Box overflow="auto" maxHeight={430} paddingRight="10px">
        {poolsData.map((pool, index) =>
          poolsData.length - 1 !== index ? (
            <Fragment>
              <PoolTile {...pool}></PoolTile>
              <Spacing height={10} />
            </Fragment>
          ) : (
            <PoolTile {...pool}></PoolTile>
          )
        )}
      </Box>
    </Box>
  );
}
