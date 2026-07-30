type IconProps = {
  name: string;
  size?: number;
  filled?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  className?: string;
};

export function Icon({ name, size = 20, filled = false, weight = 400, className = "" }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined align-middle select-none ${className}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}
