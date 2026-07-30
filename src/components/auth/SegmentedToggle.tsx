type SegmentedToggleOption = {
  value: string;
  label: string;
};

type SegmentedToggleProps = {
  options: SegmentedToggleOption[];
  value: string;
  onChange: (value: string) => void;
};

export function SegmentedToggle({ options, value, onChange }: SegmentedToggleProps) {
  return (
    <div className="w-full h-11 bg-bg-page border border-border-hairline rounded-button flex p-1">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 rounded-[6px] text-small font-semibold transition-all ${
              active
                ? "bg-surface text-brand-primary shadow-resting"
                : "text-ink-400 hover:text-ink-600"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
