import { cn } from "@/lib/utils";

export function Badge({ className, tone = "neutral", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
        tone === "neutral" && "border-white/10 bg-white/[0.06] text-muted",
        tone === "success" && "border-success/30 bg-success/10 text-success",
        tone === "danger" && "border-danger/30 bg-danger/10 text-danger",
        tone === "warning" && "border-warning/30 bg-warning/10 text-warning",
        tone === "accent" && "border-accent/30 bg-accent/10 text-accent",
        className
      )}
      {...props}
    />
  );
}
