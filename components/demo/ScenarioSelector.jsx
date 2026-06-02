import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ScenarioSelector({ scenarios, scenarioId, setScenarioId }) {
  return (
    <Card className="demo-panel flex flex-col">
      <CardHeader className="shrink-0">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Scenarios</p>
        <h2 className="mt-1 text-lg font-semibold text-white">Rendering failure modes</h2>
      </CardHeader>
      <CardContent className="demo-panel-scroll space-y-2">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setScenarioId(scenario.id)}
            className={cn(
              "w-full rounded-md border p-3 text-left transition",
              scenarioId === scenario.id ? "border-accent/40 bg-accent/10" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 text-sm font-medium leading-5 text-white">{scenario.title}</span>
              <Badge tone={scenarioId === scenario.id ? "accent" : "neutral"}>{scenario.badMetrics.performanceScore}</Badge>
            </div>
            <p className="mt-1 text-xs leading-5 text-muted">{scenario.subtitle}</p>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
