"use client";

import { useCountdown } from "./useCountdown";

export function RedirectNotice({ seconds = 3 }: { seconds?: number }) {
  const { seconds: remaining } = useCountdown(seconds);

  return (
    <p className="text-caption text-ink-400 font-normal">
      Redirecting to log in in <span className="tabular-nums">{remaining}s</span>
    </p>
  );
}
