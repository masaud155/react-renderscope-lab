import { Badge } from "@/components/ui/badge";
import { getRenderSeverity } from "@/lib/getRenderSeverity";
import { severityStyles } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function RenderNode({ node, scenario, mode, counters }) {
  const severity = getRenderSeverity(node.id, scenario, mode);
  return (
    <div
      className={cn("flex items-center justify-between rounded-md border bg-white/[0.03] px-3 py-2", severityStyles[severity])}
      style={{ marginLeft: `${node.depth * 18}px` }}
    >
      <span className="font-mono text-xs text-white">{node.depth ? "└─ " : ""}{node.name}</span>
      <Badge tone={severity === "wasted" ? "danger" : severity === "necessary" ? "success" : severity === "acceptable" ? "warning" : "neutral"}>
        {counters[node.id] || 0}
      </Badge>
    </div>
  );
}
