export interface DataTileProps {
  id: number;
  label: string;
  labelColor?: string;
  value: string;
  valueColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export function DataTile({
  label,
  labelColor = '#6e6e73',
  value,
  valueColor = '#2c2935',
  backgroundColor = '#ffffff',
  borderColor = '#efefef',
}: DataTileProps) {
  return (
    <div
      style={{
        backgroundColor,
        padding: '24px 20px',
        border: `1px solid ${borderColor}`,
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ color: labelColor, fontWeight: 500, fontSize: 16 }}>
        {label}
      </span>
      <span style={{ color: valueColor, fontWeight: 700, fontSize: 20 }}>
        {value}
      </span>
    </div>
  );
}
