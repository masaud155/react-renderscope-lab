import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetricsCards from "@/components/profiler/MetricsCards";

export default function ComparisonCard({ title, tone, description, metrics, points }) {
  return (
    <Card className={tone === "bad" ? "border-danger/30" : "border-success/30"}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <Badge tone={tone === "bad" ? "danger" : "success"}>{metrics.performanceScore}/100</Badge>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <MetricsCards metrics={metrics} />
        <ul className="space-y-2">
          {points.map((point) => (
            <li key={point} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-muted">{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
