import React from 'react';

export interface TabProps {
  tabs: Tab[];
  onClick: Function;
}

export interface Tab {
  id: number;
  value: string;
  label: string;
  active: boolean;
  color?: string;
}

export function Tabs({ tabs, onClick }: TabProps) {
  function getTabStyles(tab: Tab): React.CSSProperties {
    const fontWeight = tab.active ? 700 : 'normal';
    return {
      fontWeight,
      fontSize: 13,
      color: tab.color ? tab.color : '#774af6',
      cursor: 'pointer',
      transition: '0.1s',
    };
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '30px' }}>
      {tabs.map((tab) => (
        <span
          key={tab.id}
          style={getTabStyles(tab)}
          onClick={() => onClick(tab)}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
}
