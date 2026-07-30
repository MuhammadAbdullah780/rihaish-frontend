import Image from "next/image";
import Link from "next/link";
import { AuthSplitShell } from "@/components/auth/AuthSplitShell";
import { Logo } from "@/components/auth/Logo";
import { Icon } from "@/components/auth/Icon";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthSplitShell
      aside={
        <>
          <header className="flex justify-between items-center w-full">
            <Link href="/auth/welcome" className="flex items-center gap-2 text-ink-600 hover:text-ink-900 transition-colors">
              <Icon name="chevron_left" size={20} />
              <span className="text-small">Back</span>
            </Link>
            <Logo size="sm" />
          </header>

          <main className="lg:flex-grow flex flex-col justify-center items-center mt-10">
            <div className="w-full max-w-[380px]">
              <h1 className="text-h2 font-semibold text-ink-900 mb-2">Log in to Rihaish</h1>
              <p className="text-small text-ink-600 mb-8">Enter the number or email linked to your account.</p>
              <LoginForm />
            </div>
          </main>

          <footer className="w-full mt-8 flex justify-center">
            <p className="text-small text-ink-600">
              New to Rihaish?{" "}
              <Link href="/auth/signup" className="text-brand-primary font-semibold hover:underline">
                Create account
              </Link>
            </p>
          </footer>
        </>
      }
      visual={
        <>
          <Image
            src="/auth/welcome-screen.png"
            alt="Verified property in Pakistan"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#0F1720 1px, transparent 1px), linear-gradient(90deg, #0F1720 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </>
      }
    />
  );
}
