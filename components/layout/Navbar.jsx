"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gauge, Menu } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent shadow-glow">
            <Gauge className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">RenderScope Lab</span>
            <span className="block text-xs text-muted">React render performance</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted transition hover:bg-white/[0.06] hover:text-white",
                pathname === item.href && "bg-white/[0.08] text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="secondary" className="hidden sm:inline-flex">
          <Link href="/demo">Open Lab</Link>
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Navigation menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
