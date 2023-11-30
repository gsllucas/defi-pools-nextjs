interface MaterialIconUIProps {
  icon: string;
  size?: number;
}

export function MaterialIconUI({ icon, size }: MaterialIconUIProps) {
  return (
    <span className="material-symbols-rounded" style={{ fontSize: size }}>
      {icon}
    </span>
  );
}
