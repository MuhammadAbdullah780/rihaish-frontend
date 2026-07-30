import { AuthCardShell } from "@/components/auth/AuthCardShell";
import { Card } from "@/components/auth/Card";
import { IconTile } from "@/components/auth/IconTile";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthCardShell>
      <Card>
        <IconTile icon="shield_person" />

        <h1 className="text-h2 font-semibold text-ink-900 leading-tight mb-2">Set a new password</h1>
        <p className="text-small text-ink-600 mb-6">Choose a password you have not used on Rihaish before.</p>

        <ResetPasswordForm />
      </Card>
    </AuthCardShell>
  );
}
