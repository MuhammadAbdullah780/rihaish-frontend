"use client";

import Image from "next/image";
import { Icon } from "@/components/auth/Icon";
import { currentUser } from "@/lib/buyer/mockData";

const settingsRows = [
  { icon: "saved_search", label: "Saved searches" },
  { icon: "notifications_active", label: "Notification preferences" },
  { icon: "lock", label: "Change password" },
  { icon: "help", label: "Help & support" },
];

export default function BuyerProfilePage() {
  return (
    <main className="w-full max-w-[640px] mx-auto pt-8 pb-20 px-4">
      <section className="bg-surface rounded-card border border-border-hairline p-8 mb-6">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            <div className="w-20 h-20 rounded-full border border-border-hairline overflow-hidden">
              <Image
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                width={80}
                height={80}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-surface rounded-full border border-border-hairline flex items-center justify-center shadow-resting hover:bg-bg-page transition-colors">
              <Icon name="photo_camera" size={16} className="text-brand-primary" />
            </button>
          </div>
          <div>
            <h1 className="font-semibold text-h3 text-ink-900 leading-tight mb-1">{currentUser.name}</h1>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-brand-tint text-brand-primary text-caption font-medium tracking-label">
              {currentUser.role}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border-hairline">
          <div className="mb-4">
            <label className="block text-caption text-ink-600 mb-1.5 ml-0.5">Full name</label>
            <input
              className="w-full h-12 px-4 rounded-card border border-border-hairline bg-surface text-ink-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-colors"
              type="text"
              defaultValue={currentUser.name}
            />
          </div>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-caption text-ink-600 mb-1.5 ml-0.5">Phone number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-600 font-medium tabular-nums">+92</span>
                <input
                  className="w-full h-12 pl-14 pr-4 rounded-card border border-border-hairline bg-surface text-ink-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-colors tabular-nums"
                  type="text"
                  defaultValue={currentUser.phone}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-caption text-ink-600 mb-1.5 ml-0.5">Email</label>
              <input
                className="w-full h-12 px-4 rounded-card border border-border-hairline bg-surface text-ink-900 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-colors"
                type="email"
                defaultValue={currentUser.email}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="w-full sm:w-[280px] h-12 bg-brand-primary text-white rounded-button font-semibold text-small hover:bg-brand-primary-hover active:scale-[0.98] transition-all">
              Save changes
            </button>
          </div>
        </div>
      </section>

      <section className="bg-surface rounded-card border border-border-hairline overflow-hidden">
        {settingsRows.map((row, i) => (
          <div key={row.label}>
            <button className="w-full h-14 px-5 flex items-center gap-4 hover:bg-bg-page transition-colors group">
              <Icon name={row.icon} size={20} className="text-ink-600" />
              <span className="flex-1 text-left text-body text-ink-900">{row.label}</span>
              <Icon name="chevron_right" size={16} className="text-ink-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
            {i < settingsRows.length - 1 && <div className="mx-5 border-b border-border-hairline" />}
          </div>
        ))}
        <div className="h-2 bg-bg-page" />
        <div className="border-t border-border-hairline">
          <button className="w-full h-14 px-5 flex items-center gap-4 hover:bg-danger-bg transition-colors group">
            <Icon name="logout" size={20} className="text-danger" />
            <span className="flex-1 text-left font-medium text-body text-danger">Log out</span>
          </button>
        </div>
      </section>
    </main>
  );
}
