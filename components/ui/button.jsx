import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function Button({ className, variant = "primary", size = "default", asChild, ...props }) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "border-accent/35 bg-accent/15 text-white hover:bg-accent/25",
        variant === "secondary" && "border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.1]",
        variant === "danger" && "border-danger/35 bg-danger/15 text-white hover:bg-danger/25",
        variant === "ghost" && "border-transparent bg-transparent text-muted hover:bg-white/[0.07] hover:text-white",
        size === "icon" && "h-9 w-9 p-0",
        size === "default" && "h-10 px-4",
        size === "sm" && "h-8 px-3",
        className
      )}
      {...props}
    />
  );
}
