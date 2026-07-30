import { Icon } from "./Icon";

type SuccessIconProps = {
  icon?: string;
  size?: number;
};

export function SuccessIcon({ icon = "check", size = 48 }: SuccessIconProps) {
  return (
    <div
      className="bg-success-bg rounded-full flex items-center justify-center mb-5"
      style={{ width: size, height: size }}
    >
      <Icon name={icon} size={Math.round(size * 0.5)} className="text-success" weight={500} />
    </div>
  );
}
