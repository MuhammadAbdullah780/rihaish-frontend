import Link from "next/link";
import { ReactNode } from "react";
import { Icon } from "@/components/auth/Icon";

type PageHeaderProps = {
  title: string;
  backHref?: string;
  meta?: string;
  action?: ReactNode;
};

export function PageHeader({ title, backHref, meta, action }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-end mb-6 gap-4">
      <div className="flex items-baseline gap-3">
        {backHref && (
          <Link href={backHref} className="text-ink-900 hover:text-brand-primary transition-colors">
            <Icon name="chevron_left" size={24} />
          </Link>
        )}
        <h1 className="font-semibold text-h2 text-ink-900 leading-tight">{title}</h1>
        {meta && <span className="text-small text-ink-600">{meta}</span>}
      </div>
      {action}
    </div>
  );
}
