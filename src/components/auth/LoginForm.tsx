"use client";

import { useState } from "react";
import { SegmentedToggle } from "./SegmentedToggle";
import { PhoneField } from "./PhoneField";
import { PasswordField } from "./PasswordField";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { SocialButton, GoogleIcon, AppleIcon } from "./SocialButton";

export function LoginForm() {
  const [channel, setChannel] = useState("phone");

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <SegmentedToggle
        value={channel}
        onChange={setChannel}
        options={[
          { value: "phone", label: "Phone" },
          { value: "email", label: "Email" },
        ]}
      />

      {channel === "phone" ? (
        <PhoneField label="Phone number" />
      ) : (
        <div className="flex flex-col gap-2">
          <label className="text-caption font-medium text-ink-600">Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-12 w-full border border-border-hairline rounded-card px-4 bg-surface text-small text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-primary transition-colors"
          />
        </div>
      )}

      <PasswordField label="Password" defaultValue="********" />

      <div className="flex justify-between items-center py-2">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" className="w-[18px] h-[18px] rounded-[4px] border-border-hairline accent-brand-primary focus:ring-0" />
          <span className="text-small text-ink-600 group-hover:text-ink-900">Remember me</span>
        </label>
        <a className="text-small text-brand-primary font-medium hover:underline" href="/auth/forgot-password">
          Forgot password?
        </a>
      </div>

      <Button type="submit">Log in</Button>

      <Divider label="Or continue with" />

      <div className="grid grid-cols-2 gap-4">
        <SocialButton icon={<GoogleIcon />} label="Google" />
        <SocialButton icon={<AppleIcon />} label="Apple" />
      </div>
    </form>
  );
}
