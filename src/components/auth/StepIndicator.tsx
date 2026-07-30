type StepIndicatorProps = {
  step: number;
  total: number;
  label: string;
};

export function StepIndicator({ step, total, label }: StepIndicatorProps) {
  return (
    <div className="flex flex-col gap-3 mb-10">
      <span className="text-caption uppercase tracking-[0.04em] text-ink-400 font-medium">{label}</span>
      <div className="flex gap-[6px] w-full">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-[3px] flex-1 rounded-full ${index < step ? "bg-brand-primary" : "bg-border-hairline"}`}
          />
        ))}
      </div>
    </div>
  );
}
