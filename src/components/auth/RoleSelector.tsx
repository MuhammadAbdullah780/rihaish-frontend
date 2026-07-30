"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Role = {
  value: string;
  icon: string;
  title: string;
  description: string;
};

const roles: Role[] = [
  { value: "buyer", icon: "search", title: "Buyer", description: "I am looking to buy or rent" },
  { value: "seller", icon: "sell", title: "Seller", description: "I want to list my property" },
  { value: "agent", icon: "work", title: "Agent", description: "I manage clients and listings" },
  { value: "society", icon: "corporate_fare", title: "Society", description: "I represent a housing society" },
];

export function RoleSelector() {
  const [selected, setSelected] = useState("buyer");

  return (
    <div className="grid grid-cols-2 gap-4">
      {roles.map((role) => {
        const active = role.value === selected;
        return (
          <button
            type="button"
            key={role.value}
            onClick={() => setSelected(role.value)}
            className={`relative p-5 rounded-card text-left transition-all ${
              active
                ? "bg-brand-tint border-[1.5px] border-brand-primary"
                : "bg-surface border border-border-hairline hover:border-brand-primary"
            }`}
          >
            {active ? (
              <div className="w-5 h-5 bg-brand-primary rounded-full absolute top-3 right-3 flex items-center justify-center">
                <Icon name="check" size={12} weight={700} className="text-white" />
              </div>
            ) : null}
            <Icon name={role.icon} size={24} className="text-brand-primary mb-3 block" />
            <h3 className="text-small font-semibold text-ink-900 mb-1">{role.title}</h3>
            <p className="text-caption text-ink-400 truncate">{role.description}</p>
          </button>
        );
      })}
    </div>
  );
}
