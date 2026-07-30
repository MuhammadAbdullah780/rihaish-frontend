import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ButtonVariant, buttonVariantClasses } from "./Button";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

export function LinkButton({ href, variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`h-12 w-full rounded-button text-small font-semibold flex items-center justify-center gap-2 transition-all ${buttonVariantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
