type PasswordStrengthMeterProps = {
  filled: number;
  total?: number;
  label: string;
  hint?: string;
};

export function PasswordStrengthMeter({ filled, total = 4, label, hint }: PasswordStrengthMeterProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-[3px] flex-1 rounded-full ${index < filled ? "bg-success" : "bg-border-hairline"}`}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-caption font-medium text-success">{label}</span>
        {hint ? <span className="text-caption text-ink-400">{hint}</span> : null}
      </div>
    </div>
  );
}
