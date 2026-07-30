"use client";

import { useCountdown } from "./useCountdown";
import { Button } from "./Button";

export function ResendButton({ startSeconds = 47, onResend }: { startSeconds?: number; onResend?: () => void }) {
  const { label, done } = useCountdown(startSeconds);

  if (!done) {
    return (
      <Button variant="disabled" disabled>
        Resend in <span className="tabular-nums ml-1">{label}</span>
      </Button>
    );
  }

  return (
    <Button variant="secondary" onClick={onResend}>
      Resend code
    </Button>
  );
}
