"use client";

import { PasswordField } from "./PasswordField";
import { PasswordStrengthMeter } from "./PasswordStrengthMeter";
import { ValidationChecklist } from "./ValidationChecklist";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function ResetPasswordForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-3">
        <PasswordField label="New password" defaultValue="**********" />
        <PasswordStrengthMeter filled={3} label="Strong" />
        <ValidationChecklist
          items={[
            { label: "At least 8 characters", met: true },
            { label: "Contains a number", met: true },
            { label: "Contains an uppercase letter", met: false },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <PasswordField label="Confirm new password" defaultValue="**********" />
        <div className="flex items-center gap-1.5">
          <Icon name="check_circle" size={14} filled className="text-success" />
          <span className="text-caption text-success">Passwords match</span>
        </div>
      </div>

      <Button type="submit">Update password</Button>

      <p className="text-caption text-center text-ink-400">You will be signed out of other devices.</p>
    </form>
  );
}
