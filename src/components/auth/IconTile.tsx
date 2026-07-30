import { Icon } from "./Icon";

type IconTileProps = {
  icon: string;
};

export function IconTile({ icon }: IconTileProps) {
  return (
    <div className="w-11 h-11 bg-brand-tint rounded-card flex items-center justify-center mb-5">
      <Icon name={icon} size={22} className="text-brand-primary" />
    </div>
  );
}
