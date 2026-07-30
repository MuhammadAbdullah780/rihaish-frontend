import { InputHTMLAttributes } from "react";

type PhoneFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function PhoneField({ label, ...props }: PhoneFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-caption font-medium text-ink-600">{label}</label>
      <div className="flex h-12 w-full border border-border-hairline rounded-card overflow-hidden bg-surface focus-within:border-brand-primary transition-colors">
        <div className="flex items-center px-4 bg-bg-page border-r border-border-hairline text-small font-medium text-ink-600 tabular-nums">
          +92
        </div>
        <input
          type="tel"
          placeholder="3XX XXX XXXX"
          className="flex-grow px-4 border-none bg-transparent text-small text-ink-900 placeholder:text-ink-400 focus:outline-none"
          {...props}
        />
      </div>
    </div>
  );
}
