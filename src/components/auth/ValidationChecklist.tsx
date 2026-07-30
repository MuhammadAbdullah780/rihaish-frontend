import { Icon } from "./Icon";

type ChecklistItem = {
  label: string;
  met: boolean;
};

export function ValidationChecklist({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2.5">
          {item.met ? (
            <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
              <Icon name="check" size={10} weight={700} className="text-white" />
            </div>
          ) : (
            <div className="w-4 h-4 border-[1.5px] border-border-hairline rounded-full" />
          )}
          <span className={`text-caption ${item.met ? "text-ink-600" : "text-ink-400"}`}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
