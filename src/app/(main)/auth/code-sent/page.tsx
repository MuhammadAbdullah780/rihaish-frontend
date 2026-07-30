import { AuthCardShell } from "@/components/auth/AuthCardShell";
import { Card } from "@/components/auth/Card";
import { SuccessIcon } from "@/components/auth/SuccessIcon";
import { LinkButton } from "@/components/auth/LinkButton";
import { ResendButton } from "@/components/auth/ResendButton";
import { InfoNote } from "@/components/auth/InfoNote";
import { BackLink } from "@/components/auth/BackLink";

export default function CodeSentPage() {
  return (
    <AuthCardShell>
      <Card>
        <div className="flex flex-col items-start">
          <SuccessIcon icon="check_circle" size={48} />

          <h1 className="text-h2 font-semibold text-ink-900 leading-tight mb-2">Code sent</h1>
          <p className="text-small text-ink-600 leading-body mb-6">
            If an account exists for{" "}
            <span className="font-semibold text-ink-900 tabular-nums">+92 300 ... 4567</span>, a 6-digit
            verification code is on its way.
          </p>

          <div className="w-full flex flex-col gap-3 mb-5">
            <LinkButton href="/auth/verify">Enter code</LinkButton>
            <ResendButton startSeconds={47} />
          </div>

          <div className="w-full mb-4">
            <InfoNote>Codes expire after 10 minutes. If you used email, check your spam folder.</InfoNote>
          </div>

          <div className="w-full flex justify-center">
            <BackLink href="/auth/login">Back to log in</BackLink>
          </div>
        </div>
      </Card>
    </AuthCardShell>
  );
}
