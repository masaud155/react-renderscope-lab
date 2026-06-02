import { Timer, Gauge, Layers, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/formatMetrics";

export default function MetricsCards({ metrics }) {
  const items = [
    { label: "Total renders", value: formatNumber(metrics.totalRenders), icon: Layers },
    { label: "Wasted renders", value: formatNumber(metrics.wastedRenders), icon: Zap },
    { label: "Commit duration", value: `${metrics.commitDuration}ms`, icon: Timer },
    { label: "Score", value: `${metrics.performanceScore}/100`, icon: Gauge }
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.label} className="p-3">
            <div className="flex items-center gap-2 text-muted">
              <Icon className="h-4 w-4" />
              <span className="text-xs">{item.label}</span>
            </div>
            <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
          </Card>
        );
      })}
    </div>
  );
}
