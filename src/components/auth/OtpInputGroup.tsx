"use client";

import { KeyboardEvent, useRef, useState } from "react";

type OtpInputGroupProps = {
  length?: number;
  onComplete?: (code: string) => void;
};

export function OtpInputGroup({ length = 6, onComplete }: OtpInputGroupProps) {
  const [digits, setDigits] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  function updateDigit(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (next.every((d) => d !== "")) {
      onComplete?.(next.join(""));
    }
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  const firstGroup = digits.slice(0, length / 2);
  const secondGroup = digits.slice(length / 2);

  function renderBox(digit: string, index: number) {
    const filled = digit !== "";
    return (
      <div
        key={index}
        className={`w-14 h-[60px] bg-surface rounded-card flex items-center justify-center border ${
          filled ? "border-[1.5px] border-brand-primary" : "border-border-hairline"
        }`}
      >
        <input
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          value={digit}
          onChange={(e) => updateDigit(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          inputMode="numeric"
          maxLength={1}
          className="w-full h-full text-center text-h3 font-semibold text-ink-900 tabular-nums bg-transparent focus:outline-none"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-5">
      <div className="flex gap-3">{firstGroup.map((digit, index) => renderBox(digit, index))}</div>
      <div className="flex gap-3">
        {secondGroup.map((digit, index) => renderBox(digit, index + length / 2))}
      </div>
    </div>
  );
}
