import { ReactNode } from "react";

type AuthSplitShellProps = {
  aside: ReactNode;
  visual: ReactNode;
};

export function AuthSplitShell({ aside, visual }: AuthSplitShellProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-bg-page xl:p-6">
      <main className="flex flex-col lg:flex-row w-full max-w-[1440px] min-h-screen xl:min-h-0 xl:h-[calc(100vh-3rem)] overflow-hidden xl:rounded-card xl:shadow-elevated">
        <section className="flex-1 lg:flex-none w-full lg:w-[44%] bg-surface p-6 md:p-10 lg:p-16 flex flex-col justify-center lg:justify-between relative z-10 lg:border-r border-border-hairline overflow-y-auto scrollbar-hide">
          {aside}
        </section>
        <section className="hidden lg:block flex-1 lg:flex-none lg:w-[56%] relative overflow-hidden bg-brand-tint">
          {visual}
        </section>
      </main>
    </div>
  );
}
