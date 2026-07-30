"use client";

import { OtpInputGroup } from "./OtpInputGroup";
import { Button } from "./Button";
import { useCountdown } from "./useCountdown";

export function VerifyForm() {
  const { label, done } = useCountdown(24);

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <OtpInputGroup length={6} />
      </div>

      <div className="mb-6">
        {done ? (
          <button type="button" className="text-small font-medium text-brand-primary hover:underline">
            Resend code
          </button>
        ) : (
          <span className="text-small text-ink-400">
            Resend code in <span className="font-semibold text-ink-900 tabular-nums">{label}</span>
          </span>
        )}
      </div>

      <Button type="button" className="mb-5">
        Verify
      </Button>

      <p className="text-center text-caption text-ink-400">
        Having trouble?{" "}
        <button type="button" className="font-medium text-brand-primary hover:underline">
          Contact support
        </button>
      </p>
    </div>
  );
}
