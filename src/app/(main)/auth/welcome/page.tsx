import Image from "next/image";
import Link from "next/link";
import { AuthSplitShell } from "@/components/auth/AuthSplitShell";
import { Logo } from "@/components/auth/Logo";
import { LinkButton } from "@/components/auth/LinkButton";
import { Icon } from "@/components/auth/Icon";

const stats = [
  { value: "12,400+", label: "Verified Listings" },
  { value: "340", label: "Societies Mapped" },
  { value: "100%", label: "Approval Status Shown" },
];

export default function WelcomePage() {
  return (
    <AuthSplitShell
      aside={
        <>
          <Logo size="lg" />

          <div className="space-y-12 mt-10 xl:mt-0">
            <div className="space-y-6">
              <h1 className="font-display text-display leading-[1.15] tracking-[-0.01em] text-ink-900">
                Property you can <span className="text-brand-primary">verify</span>, not just view.
              </h1>
              <p className="text-body text-ink-600 leading-body max-w-[480px]">
                Every listing, plot and society on Rihaish carries verified utilities, approval status
                and AI-checked pricing.
              </p>
            </div>

            <div className="flex items-center border-y border-border-hairline py-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 flex items-center ${index > 0 ? "border-l border-border-hairline pl-4 ml-4" : ""}`}
                >
                  <div>
                    <div className="text-h3 font-semibold tabular-nums text-ink-900">{stat.value}</div>
                    <div className="text-caption font-medium uppercase tracking-[0.04em] text-ink-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <LinkButton href="/auth/login" variant="primary">
                  Log in
                </LinkButton>
                <LinkButton href="/auth/signup" variant="secondary">
                  Create account
                </LinkButton>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-caption font-medium text-ink-400 hover:text-ink-900 transition-colors group"
              >
                Continue as guest
                <Icon name="arrow_forward" size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="text-caption text-ink-400 leading-tight mt-8 xl:mt-0">
            By continuing you agree to our{" "}
            <a className="underline text-ink-900 font-medium" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline text-ink-900 font-medium" href="#">
              Privacy Policy
            </a>
          </div>
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
            className="absolute bottom-0 left-0 w-full h-1/3"
            style={{
              background: "linear-gradient(to top, rgba(15, 23, 32, 0.28) 0%, rgba(15, 23, 32, 0) 100%)",
            }}
          />

          <div className="absolute bottom-10 left-10 w-[320px] bg-surface/95 backdrop-blur-sm rounded-card p-4 shadow-elevated flex items-center gap-4 border border-border-hairline/30">
            <div className="w-14 h-14 flex-shrink-0 rounded-button overflow-hidden border border-border-hairline relative">
              <Image src="/auth/welcome-screen.png" alt="" fill sizes="56px" className="object-cover" />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="text-small font-semibold tabular-nums text-ink-900">Rs 2.4 Crore</div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-success-bg text-success rounded-full text-[11px] font-semibold">
                  <Icon name="verified" size={14} filled />
                  Verified
                </div>
              </div>
              <div className="text-caption text-ink-400 truncate mt-0.5">10 Marla - DHA Phase 6, Lahore</div>
            </div>
          </div>
        </>
      }
    />
  );
}
