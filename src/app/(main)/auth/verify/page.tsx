import { AuthCardShell } from "@/components/auth/AuthCardShell";
import { Card } from "@/components/auth/Card";
import { IconTile } from "@/components/auth/IconTile";
import { VerifyForm } from "@/components/auth/VerifyForm";

export default function VerifyPage() {
  return (
    <AuthCardShell>
      <Card>
        <IconTile icon="chat_bubble" />

        <h1 className="text-h2 font-semibold text-ink-900 leading-tight mb-2">Verify your number</h1>
        <p className="text-small text-ink-600 leading-body mb-7">
          We sent a 6-digit code to <span className="font-semibold text-ink-900 tabular-nums">+92 300 123 4567</span>
          <button type="button" className="ml-1 font-medium text-small text-brand-primary hover:underline">
            Change
          </button>
        </p>

        <VerifyForm />
      </Card>
    </AuthCardShell>
  );
}
