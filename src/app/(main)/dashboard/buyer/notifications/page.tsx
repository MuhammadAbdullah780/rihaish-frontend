"use client";

import { useState } from "react";
import { Icon } from "@/components/auth/Icon";
import { notifications as initialNotifications } from "@/lib/buyer/mockData";
import type { NotificationItem } from "@/lib/buyer/types";

const groupOrder: NotificationItem["group"][] = ["Today", "Yesterday", "Earlier"];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  function markAsRead(id: string) {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  const groups = groupOrder
    .map((group) => ({ group, items: notifications.filter((n) => n.group === group) }))
    .filter((g) => g.items.length > 0);

  return (
    <main className="w-full max-w-[760px] mx-auto pt-8 pb-16 px-4 sm:px-0">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-h2 font-semibold text-ink-900">Notifications</h1>
        <button onClick={markAllAsRead} className="text-brand-primary text-small font-medium hover:underline">
          Mark all as read
        </button>
      </div>

      <div className="bg-surface border border-border-hairline rounded-card overflow-hidden">
        {groups.map((groupData, groupIndex) => (
          <div key={groupData.group}>
            <div className="px-4 py-4 border-b border-border-hairline">
              <span className="text-caption font-medium uppercase text-ink-400 tracking-label">{groupData.group}</span>
            </div>
            {groupData.items.map((notification, i) => {
              const isLast = groupIndex === groups.length - 1 && i === groupData.items.length - 1;
              return (
                <button
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`w-full h-[72px] px-4 flex items-center relative group cursor-pointer hover:bg-bg-page transition-colors text-left ${
                    isLast ? "" : "border-b border-border-hairline"
                  }`}
                >
                  {!notification.read && <div className="absolute left-4 w-2 h-2 bg-brand-primary rounded-full" />}
                  <div className="ml-8 flex items-center w-full">
                    <div className="w-10 h-10 rounded-full bg-brand-tint flex items-center justify-center shrink-0">
                      <Icon name={notification.icon} size={20} className="text-brand-primary" />
                    </div>
                    <div className="ml-4 flex-grow overflow-hidden">
                      <h3
                        className={`text-small truncate ${
                          notification.read ? "font-normal text-ink-600" : "font-semibold text-ink-900"
                        }`}
                      >
                        {notification.title}
                      </h3>
                      <p className="text-caption text-ink-400 truncate">{notification.description}</p>
                    </div>
                    <div className="ml-4 tabular-nums text-caption text-ink-400 shrink-0">{notification.timeAgo}</div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
