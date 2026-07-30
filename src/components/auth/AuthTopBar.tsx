import { ReactNode } from "react";
import { Logo } from "./Logo";

type AuthTopBarProps = {
  right?: ReactNode;
};

export function AuthTopBar({ right }: AuthTopBarProps) {
  return (
    <header className="h-[72px] w-full px-12 flex items-center justify-between">
      <Logo size="sm" />
      {right}
    </header>
  );
}
