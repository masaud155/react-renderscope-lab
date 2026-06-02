import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg border border-white/10 bg-black/20 p-1">
      {[
        ["bad", "Bad Architecture"],
        ["good", "Optimized Boundaries"]
      ].map(([value, label]) => (
        <Button
          key={value}
          variant="ghost"
          className={cn("h-9", mode === value && (value === "bad" ? "bg-danger/15 text-danger" : "bg-success/15 text-success"))}
          onClick={() => setMode(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
