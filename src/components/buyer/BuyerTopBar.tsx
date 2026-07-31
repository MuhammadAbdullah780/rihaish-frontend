import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/auth/Icon";
import { currentUser } from "@/lib/buyer/mockData";

export function BuyerTopBar() {
  return (
    <header className="w-full bg-surface border-b border-border-hairline h-[72px] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 h-full flex items-center justify-between gap-4">
        <Link href="/dashboard/buyer" className="flex items-center gap-2 shrink-0">
          <Image
            src="/auth/rihaish-logo-mark.png"
            alt="Rihaish"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-display font-semibold text-[20px] text-ink-900 lowercase leading-none">
            rihaish
          </span>
        </Link>
        <div className="hidden sm:block flex-1 max-w-[420px]">
          <div className="relative">
            <Icon
              name="search"
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              className="w-full h-11 bg-bg-page border border-border-hairline rounded-card pl-10 pr-4 text-small text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
              placeholder="Search by city, society or plot size"
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-5 sm:gap-6 shrink-0">
          <Link href="/dashboard/buyer/favourites" className="text-ink-600 hover:text-brand-primary transition-colors">
            <Icon name="favorite" size={22} />
          </Link>
          <Link
            href="/dashboard/buyer/notifications"
            className="text-ink-600 relative hover:text-brand-primary transition-colors"
          >
            <Icon name="notifications" size={22} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full border border-surface" />
          </Link>
          <Link
            href="/dashboard/buyer/profile"
            className="w-8 h-8 rounded-full border border-border-hairline overflow-hidden active:scale-95 transition-transform"
          >
            <Image
              src={currentUser.avatarUrl}
              alt={currentUser.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
              unoptimized
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
