import { IconButton } from '@mui/material';

import styles from './Header.module.css';
import { MaterialIconUI } from '@/app/ui/components/MaterialIconUI/MaterialIconUI';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>DeFi Pools</h1>
        <p className={styles.description}>
          Find the best pools to provide liquidity
        </p>
      </div>
    </header>
  );
}
