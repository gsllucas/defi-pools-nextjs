export interface TimestampController {
  id: number;
  timestampLabel: string;
  timestampDays: number;
  active: boolean;
  onTap: Function;
}

export function TimestampController({
  id,
  timestampLabel,
  timestampDays,
  active,
  onTap,
}: TimestampController) {
  function getStyles(): React.CSSProperties {
    return {
      padding: '8px 12px',
      background: active ? '#774af6' : '#ffffff',
      borderRadius: 10,
      fontWeight: 700,
      color: active ? '#ffffff' : '#2c2935',
      fontSize: 12,
      cursor: 'pointer',
      transition: '0.1s',
    };
  }

  return (
    <div style={getStyles()} onClick={() => onTap({ id, timestampDays })}>
      {timestampLabel}
    </div>
  );
}
