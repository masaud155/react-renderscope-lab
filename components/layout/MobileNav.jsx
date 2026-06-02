"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="mobile-nav">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "whitespace-nowrap rounded-md border border-white/10 px-3 py-2 text-xs text-muted",
            pathname === item.href && "border-accent/30 bg-accent/10 text-accent"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
