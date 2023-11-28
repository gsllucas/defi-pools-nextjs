interface IconName {
  icon: string;
}

export function MaterialIconUI({ icon }: IconName) {
  return <span className="material-symbols-rounded">{icon}</span>;
}
