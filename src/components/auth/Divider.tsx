export function Divider({ label }: { label: string }) {
  return (
    <div className="relative py-4 flex items-center">
      <div className="flex-grow border-t border-border-hairline" />
      <span className="flex-shrink mx-4 text-caption uppercase tracking-[0.04em] text-ink-400">{label}</span>
      <div className="flex-grow border-t border-border-hairline" />
    </div>
  );
}
