import { ReactNode } from "react";
import { Icon } from "./Icon";

type InfoNoteProps = {
  children: ReactNode;
};

export function InfoNote({ children }: InfoNoteProps) {
  return (
    <div className="w-full bg-bg-page rounded-card p-3 flex items-start gap-3">
      <Icon name="info" size={16} className="text-ink-400 mt-0.5" />
      <p className="text-caption text-ink-400 leading-snug">{children}</p>
    </div>
  );
}
