import { Badge } from "@/components/ui/badge";

export default function ChecklistItem({ item, id, checked, toggle }) {
  return (
    <button onClick={() => toggle(id)} className="w-full rounded-lg border border-white/10 bg-white/[0.035] p-4 text-left transition hover:bg-white/[0.06]">
      <div className="flex items-start gap-3">
        <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checked ? "border-success bg-success/20" : "border-white/20"}`}>
          {checked ? <span className="h-2 w-2 rounded-full bg-success" /> : null}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-white">{item.question}</h3>
            <Badge tone={item.risk === "High" ? "danger" : "warning"}>{item.risk}</Badge>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted">{item.why}</p>
          <p className="mt-2 text-sm leading-6 text-accent">{item.fix}</p>
        </div>
      </div>
    </button>
  );
}
