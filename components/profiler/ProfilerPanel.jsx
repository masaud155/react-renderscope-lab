import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MetricsCards from "@/components/profiler/MetricsCards";
import RenderBarChart from "@/components/profiler/RenderBarChart";
import WastedRenderChart from "@/components/profiler/WastedRenderChart";
import PerformanceScore from "@/components/profiler/PerformanceScore";
import { calculateRenderCost } from "@/lib/calculateRenderCost";

export default function ProfilerPanel({ scenario, mode, metrics, savedWork }) {
  const cost = calculateRenderCost(metrics);
  return (
    <Card>
      <CardHeader>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Profiler-inspired metrics</p>
        <h2 className="mt-1 text-lg font-semibold text-white">{scenario.interaction}</h2>
        <p className="mt-1 text-sm text-muted">Estimated browser work: {cost.browserWork}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <MetricsCards metrics={metrics} />
        <PerformanceScore metrics={metrics} savedWork={savedWork} />
        <WastedRenderChart metrics={metrics} />
        <RenderBarChart scenario={scenario} mode={mode} />
      </CardContent>
    </Card>
  );
}
