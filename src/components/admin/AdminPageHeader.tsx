import Link from "next/link";
import { ReactNode } from "react";

interface AdminPageHeaderProps {
  eyebrow: string;
  title: string;
  action?: { label: string; href: string; icon?: ReactNode };
}

export default function AdminPageHeader({ eyebrow, title, action }: AdminPageHeaderProps) {
  return (
    <div className="max-w-[1400px] mx-auto mb-8 flex items-end justify-between gap-6 flex-wrap">
      <div>
        <div className="font-accent text-[11px] tracking-[.2em] text-forest mb-2">
          {eyebrow}
        </div>
        <h1 className="text-[26px] md:text-[32px] font-black tracking-[-.01em] text-ink">
          {title}
        </h1>
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 bg-forest hover:bg-mint hover:text-ink text-white font-bold text-sm px-5 py-3 transition-colors"
        >
          {action.icon}
          {action.label}
        </Link>
      )}
    </div>
  );
}
