type StatTileProps = {
  label: string;
  value: string | number;
};

export function StatTile({ label, value }: StatTileProps) {
  return (
    <div className="bg-surface p-5 border border-border-hairline rounded-card">
      <p className="text-caption text-ink-400 uppercase tracking-label mb-2">{label}</p>
      <p className="text-h2 font-semibold text-ink-900 tabular-nums">{value}</p>
    </div>
  );
}
