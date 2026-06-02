import { componentTree } from "@/data/componentTree";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RenderLegend from "@/components/render-map/RenderLegend";
import RenderNode from "@/components/render-map/RenderNode";

export default function ComponentTree({ scenario, mode, counters }) {
  return (
    <Card>
      <CardHeader>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Component render map</p>
        <h2 className="mt-1 text-lg font-semibold text-white">What re-rendered?</h2>
      </CardHeader>
      <CardContent className="space-y-3">
        <RenderLegend />
        <div className="space-y-2">
          {componentTree.map((node) => (
            <RenderNode key={node.id} node={node} scenario={scenario} mode={mode} counters={counters} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
