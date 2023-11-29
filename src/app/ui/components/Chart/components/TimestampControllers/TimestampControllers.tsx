import { useState } from 'react';
import { TimestampController } from '../TimestampController/TimestampController';

import styles from './TimestampControllers.module.css';
import { timestampControllers } from './timestamp-controllers';

export interface TimestampControllersProps {
  align: 'flex-start' | 'center' | 'flex-end';
  setChartTimestamp: Function;
}

export interface HandleTapEvent {
  id: number;
  timestampDays: number;
}

export function TimestampControllers({
  align = 'flex-end',
  setChartTimestamp,
}: TimestampControllersProps) {
  const [selectedControllerId, setSelectedControllerId] = useState(3);

  function handleTap({ id, timestampDays }: HandleTapEvent) {
    setSelectedControllerId(id);
    setChartTimestamp(timestampDays);
  }

  return (
    <div className={styles.controllers} style={{ justifyContent: align }}>
      {timestampControllers.map((controller) => (
        <TimestampController
          key={controller.id}
          {...controller}
          active={controller.id === selectedControllerId}
          onTap={handleTap}
        />
      ))}
    </div>
  );
}
