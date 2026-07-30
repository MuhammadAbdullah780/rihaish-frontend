import { ReactNode } from "react";
import { AuthTopBar } from "./AuthTopBar";

type AuthCardShellProps = {
  topBarRight?: ReactNode;
  children: ReactNode;
};

export function AuthCardShell({ topBarRight, children }: AuthCardShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthTopBar right={topBarRight} />
      <main className="flex-grow flex items-center justify-center px-0 py-8 sm:px-4 sm:py-12">{children}</main>
    </div>
  );
}
