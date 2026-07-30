"use client";

import { useState } from "react";
import { SegmentedToggle } from "./SegmentedToggle";
import { PhoneField } from "./PhoneField";
import { Button } from "./Button";
import { InfoNote } from "./InfoNote";

export function ForgotPasswordForm() {
  const [channel, setChannel] = useState("phone");

  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
            placeholder="example@domain.com"
            className="h-12 w-full border border-border-hairline rounded-card px-4 bg-surface text-small text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-primary transition-colors"
          />
        </div>
      )}

      <Button type="submit">Send code</Button>

      <InfoNote>Codes expire after 10 minutes. If you use email, check your spam folder.</InfoNote>
    </form>
  );
}
