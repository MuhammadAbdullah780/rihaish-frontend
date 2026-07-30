import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "disabled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hover active:scale-[0.98]",
  secondary:
    "bg-surface text-brand-primary border border-brand-primary hover:bg-brand-tint active:scale-[0.98]",
  disabled:
    "bg-surface text-ink-400 border border-border-hairline opacity-60 cursor-not-allowed",
};

export function Button({ variant = "primary", className = "", children, disabled, ...props }: ButtonProps) {
  return (
    <button
      disabled={disabled || variant === "disabled"}
      className={`h-12 w-full rounded-button text-small font-semibold flex items-center justify-center gap-2 transition-all ${buttonVariantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
