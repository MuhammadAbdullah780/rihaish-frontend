"use client";

import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./Logo";

type Phase = "idle" | "in" | "out";

const SLIDE_IN_MS = 180;
const SLIDE_OUT_MS = 320;

export function AuthRouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [display, setDisplay] = useState(children);
  const [phase, setPhase] = useState<Phase>("idle");

  const prevPathname = useRef(pathname);
  const pendingChildren = useRef(children);
  const phaseRef = useRef<Phase>("idle");
  const coveredRef = useRef(false);
  const navigatedRef = useRef(false);

  pendingChildren.current = children;
  phaseRef.current = phase;

  const reveal = () => {
    setDisplay(pendingChildren.current);
    setPhase("out");
  };

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    navigatedRef.current = true;

    if (phaseRef.current !== "in") {
      // Route changed without going through our intercepted click flow
      // (e.g. desktop, or a programmatic redirect) — just sync, no animation.
      setDisplay(children);
      return;
    }

    if (coveredRef.current) reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (phase !== "out") return;
    const timer = setTimeout(() => setPhase("idle"), SLIDE_OUT_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (phaseRef.current !== "idle") return;
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!window.matchMedia("(max-width: 639px)").matches) return;

    const anchor = (event.target as HTMLElement).closest("a");
    if (!anchor) return;
    if (anchor.target && anchor.target !== "_self") return;
    if (anchor.hasAttribute("download")) return;

    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("/")) return;
    if (href === pathname) return;

    event.preventDefault();
    event.stopPropagation();
    coveredRef.current = false;
    navigatedRef.current = false;
    setPhase("in");
    router.push(href);

    setTimeout(() => {
      coveredRef.current = true;
      if (navigatedRef.current) reveal();
    }, SLIDE_IN_MS);
  };

  return (
    <div onClickCapture={handleClickCapture}>
      {display}
      <div
        aria-hidden
        className={[
          "sm:hidden fixed inset-0 z-[60] flex items-center justify-center bg-bg-page pointer-events-none",
          "transition-transform ease-[cubic-bezier(0.65,0,0.35,1)]",
          phase === "in" ? "duration-[180ms]" : phase === "out" ? "duration-[320ms]" : "duration-0",
          phase === "in" ? "translate-x-0" : phase === "out" ? "-translate-x-full" : "translate-x-full",
        ].join(" ")}
      >
        <Logo size="lg" />
      </div>
    </div>
  );
}
