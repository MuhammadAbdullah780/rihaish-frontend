import { ReactNode } from "react";

type SocialButtonProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-12 border border-border-hairline rounded-button flex items-center justify-center gap-3 bg-surface hover:bg-bg-page transition-colors active:scale-[0.98]"
    >
      {icon}
      <span className="text-small font-medium text-ink-900">{label}</span>
    </button>
  );
}

export function GoogleIcon() {
  return (
    <svg className="w-5 h-5" fill="#0F1720" viewBox="0 0 24 24">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.228 1.216-2.84 2.528-5.912 2.528-4.728 0-8.372-3.832-8.372-8.56s3.644-8.56 8.372-8.56c2.56 0 4.412.988 5.792 2.304l2.308-2.304C18.636 1.604 15.908 0 12.48 0 6.51 0 1.656 4.848 1.656 10.824s4.854 10.824 10.824 10.824c3.232 0 5.672-1.052 7.556-3.004 1.948-1.948 2.568-4.664 2.568-6.752 0-.64-.064-1.248-.152-1.96H12.48z" />
    </svg>
  );
}

export function AppleIcon() {
  return (
    <svg className="w-5 h-5" fill="#0F1720" viewBox="0 0 24 24">
      <path d="M17.073 10.364a5.21 5.21 0 012.384-4.227 5.264 5.264 0 00-4.14-2.222c-1.758-.178-3.426 1.036-4.321 1.036-.909 0-2.257-.999-3.738-.971-1.944.028-3.738 1.134-4.738 2.871-2.023 3.518-.519 8.711 1.442 11.536 1.002 1.444 2.133 3.036 3.693 2.977 1.503-.06 2.072-.971 3.886-.971 1.808 0 2.327.971 3.911.94 1.616-.027 2.57-1.428 3.559-2.871 1.144-1.666 1.614-3.275 1.64-3.359-.035-.015-3.151-1.209-3.181-4.743M14.732 3.125a5.034 5.034 0 001.168-3.125 5.2 5.2 0 00-3.394 1.748 4.793 4.793 0 00-1.218 3.013 4.316 4.316 0 003.444-1.636" />
    </svg>
  );
}
