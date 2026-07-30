import Link from "next/link";
import { AuthCardShell } from "@/components/auth/AuthCardShell";
import { Card } from "@/components/auth/Card";
import { StepIndicator } from "@/components/auth/StepIndicator";
import { RoleSelector } from "@/components/auth/RoleSelector";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthCardShell
      topBarRight={
        <p className="text-small text-ink-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-brand-primary font-semibold hover:underline">
            Log in
          </Link>
        </p>
      }
    >
      <Card maxWidth={640} padding="p-6 sm:p-10">
        <StepIndicator step={1} total={2} label="Step 1 of 2 - Your Role" />

        <header className="mb-8">
          <h1 className="text-h2 font-semibold text-ink-900 leading-tight mb-2">Create your Rihaish account</h1>
          <p className="text-small text-ink-600">Choose how you will use Rihaish. You can add another role later.</p>
        </header>

        <div className="mb-10">
          <RoleSelector />
        </div>

        <div className="h-px w-full bg-border-hairline mb-8" />

        <SignupForm />
      </Card>
    </AuthCardShell>
  );
}
