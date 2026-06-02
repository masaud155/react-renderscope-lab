import { Card, CardContent } from "@/components/ui/card";
import { getSavedWork } from "@/lib/formatMetrics";

export default function ResultDiff({ scenario }) {
  const renders = getSavedWork(scenario.badMetrics.totalRenders, scenario.goodMetrics.totalRenders);
  const wasted = getSavedWork(scenario.badMetrics.wastedRenders, scenario.goodMetrics.wastedRenders);
  return (
    <Card>
      <CardContent className="grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-sm text-muted">Render work saved</p>
          <p className="mt-1 text-3xl font-semibold text-success">{renders}%</p>
        </div>
        <div>
          <p className="text-sm text-muted">Wasted renders reduced</p>
          <p className="mt-1 text-3xl font-semibold text-success">{wasted}%</p>
        </div>
        <div>
          <p className="text-sm text-muted">Senior question</p>
          <p className="mt-1 text-lg font-semibold text-white">What has to re-render when this changes?</p>
        </div>
      </CardContent>
    </Card>
  );
}
