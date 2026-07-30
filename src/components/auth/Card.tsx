import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  maxWidth?: number;
  padding?: string;
  className?: string;
};

export function Card({ children, maxWidth = 440, padding = "p-6 sm:p-9", className = "" }: CardProps) {
  return (
    <section
      className={`w-full bg-surface sm:border border-border-hairline rounded-none sm:rounded-card shadow-none sm:shadow-resting ${padding} ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </section>
  );
}
