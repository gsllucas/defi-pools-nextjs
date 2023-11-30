import styles from './LastUpdateTime.module.css';

export function LastUpdateTime() {
  // TODO: get last update time by request
  return (
    <span className={styles.lastUpdateTimeText}>
      Last update: <strong>11/30 - 12:42</strong>
    </span>
  );
}
