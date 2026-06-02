import { Badge } from "@/components/ui/badge";

export default function PerformanceScore({ metrics, savedWork }) {
  const tone = metrics.performanceScore > 85 ? "success" : metrics.performanceScore > 60 ? "warning" : "danger";
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">Performance score</span>
        <Badge tone={tone}>{metrics.performanceScore}/100</Badge>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-accent" style={{ width: `${metrics.performanceScore}%` }} />
      </div>
      <p className="mt-3 text-sm text-muted">Optimized mode saves about <span className="font-semibold text-success">{savedWork}%</span> of render work for this scenario.</p>
    </div>
  );
}
