import { AuthCardShell } from "@/components/auth/AuthCardShell";
import { Card } from "@/components/auth/Card";
import { SuccessIcon } from "@/components/auth/SuccessIcon";
import { LinkButton } from "@/components/auth/LinkButton";
import { RedirectNotice } from "@/components/auth/RedirectNotice";
import { Icon } from "@/components/auth/Icon";

export default function PasswordUpdatedPage() {
  return (
    <AuthCardShell>
      <Card>
        <SuccessIcon icon="check" size={56} />

        <h1 className="text-h2 font-semibold text-ink-900 mb-2">Password updated</h1>
        <p className="text-small text-ink-600 leading-body mb-5">You can now log in with your new password.</p>

        <div className="bg-bg-page rounded-card p-3.5 mb-6 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Icon name="shield" size={16} className="text-ink-400" />
            <span className="text-caption text-ink-600">Signed out of all other devices</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="schedule" size={16} className="text-ink-400" />
            <span className="text-caption text-ink-600">Changed on 30 July 2026 at 4:12 PM</span>
          </div>
        </div>

        <LinkButton href="/auth/login">Log in</LinkButton>

        <div className="mt-4 text-center">
          <RedirectNotice seconds={3} />
        </div>
      </Card>
    </AuthCardShell>
  );
}
