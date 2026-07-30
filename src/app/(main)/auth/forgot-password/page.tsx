import { AuthCardShell } from "@/components/auth/AuthCardShell";
import { Card } from "@/components/auth/Card";
import { BackLink } from "@/components/auth/BackLink";
import { IconTile } from "@/components/auth/IconTile";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthCardShell>
      <Card>
        <div className="mb-5">
          <BackLink href="/auth/login">Back to log in</BackLink>
        </div>

        <IconTile icon="key" />

        <h1 className="text-h2 font-semibold text-ink-900 leading-tight mb-2">Reset your password</h1>
        <p className="text-small text-ink-600 leading-body mb-6">
          We will send a verification code to your registered number or email.
        </p>

        <ForgotPasswordForm />
      </Card>
    </AuthCardShell>
  );
}
