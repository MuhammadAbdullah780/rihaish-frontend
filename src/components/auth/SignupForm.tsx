"use client";

import { PhoneField } from "./PhoneField";
import { PasswordField } from "./PasswordField";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";
import { Button } from "./Button";

export function SignupForm() {
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-2">
        <label className="text-caption font-medium text-ink-600">Full name</label>
        <input
          type="text"
          placeholder="e.g. Hamza Iqbal"
          className="h-12 w-full border border-border-hairline rounded-card px-4 bg-surface text-small text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-primary transition-colors"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <PhoneField label="Phone number" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-caption font-medium text-ink-600">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-12 w-full border border-border-hairline rounded-card px-4 bg-surface text-small text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <PasswordField label="Password" defaultValue="••••••••" />
        </div>
        <div className="flex-1">
          <PasswordField label="Confirm password" defaultValue="••••••••" />
        </div>
      </div>

      <PasswordStrengthMeter filled={3} label="Strong" hint="8+ characters with a number" />

      <label className="flex items-start gap-3 py-2 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 w-[18px] h-[18px] rounded-[4px] border-border-hairline accent-brand-primary focus:ring-0"
        />
        <span className="text-small text-ink-600 leading-tight">
          I agree to the{" "}
          <a className="text-ink-900 underline hover:text-brand-primary transition-colors" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-ink-900 underline hover:text-brand-primary transition-colors" href="#">
            Privacy Policy
          </a>
        </span>
      </label>

      <Button type="submit">Create account</Button>
    </form>
  );
}
