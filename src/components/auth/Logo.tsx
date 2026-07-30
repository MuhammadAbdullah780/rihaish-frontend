import Image from "next/image";

type LogoProps = {
  size?: "sm" | "lg";
};

const sizes = {
  sm: { mark: 20, text: "text-[18px]" },
  lg: { mark: 28, text: "text-[22px]" },
};

export function Logo({ size = "sm" }: LogoProps) {
  const { mark, text } = sizes[size];

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/auth/rihaish-logo-mark.png"
        alt="Rihaish"
        width={mark}
        height={mark}
        className="object-contain"
      />
      <span className={`font-display font-semibold ${text} text-ink-900 lowercase leading-none tracking-tight`}>
        rihaish
      </span>
    </div>
  );
}
