import { ReactNode } from "react";
import { Icon } from "@/components/auth/Icon";

export type ChipTone = "success" | "warning" | "danger" | "neutral";

const toneClasses: Record<ChipTone, string> = {
  success: "bg-success-bg text-success",
  warning: "bg-warning-bg text-warning",
  danger: "bg-danger-bg text-danger",
  neutral: "bg-bg-page text-ink-400",
};

type ChipProps = {
  tone?: ChipTone;
  icon?: string;
  children: ReactNode;
  className?: string;
};

export function Chip({ tone = "neutral", icon, children, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-caption font-semibold ${toneClasses[tone]} ${className}`}
    >
      {icon && <Icon name={icon} size={14} filled />}
      {children}
    </span>
  );
}
