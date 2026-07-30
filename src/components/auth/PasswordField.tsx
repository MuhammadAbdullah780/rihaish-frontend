"use client";

import { InputHTMLAttributes, useState } from "react";
import { Icon } from "./Icon";

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function PasswordField({ label, ...props }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-caption font-medium text-ink-600">{label}</label>
      <div className="relative h-12">
        <input
          type={visible ? "text" : "password"}
          className="h-full w-full border border-border-hairline rounded-card px-4 pr-11 bg-surface text-small text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-primary transition-colors"
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600 transition-colors"
        >
          <Icon name={visible ? "visibility_off" : "visibility"} size={20} />
        </button>
      </div>
    </div>
  );
}
