import { ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

type BackLinkProps = {
  href: string;
  children: ReactNode;
};

export function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-small font-medium text-ink-600 hover:text-ink-900 transition-colors group"
    >
      <Icon name="chevron_left" size={16} className="transition-transform group-hover:-translate-x-0.5" />
      {children}
    </Link>
  );
}
