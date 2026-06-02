"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/10 px-3 py-5 xl:block">
      <nav className="sticky top-20 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted transition hover:bg-white/[0.06] hover:text-white",
                pathname === item.href && "bg-white/[0.08] text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
