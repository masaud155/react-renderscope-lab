import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function NodeList({ title, nodes, tone }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-3">
      <h3 className={tone === "bad" ? "font-semibold text-danger" : "font-semibold text-success"}>{title}</h3>
      <div className="mt-3 space-y-2">
        {nodes.map((node) => (
          <div key={node} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-xs text-white">{node}</div>
        ))}
      </div>
    </div>
  );
}

export default function ArchitectureDiagram({ example }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-white">{example.title}</h2>
        <p className="mt-2 text-sm text-muted">{example.note}</p>
      </CardHeader>
      <CardContent>
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <NodeList title={example.badTitle} nodes={example.badNodes} tone="bad" />
          <ArrowRight className="mx-auto h-6 w-6 text-accent" />
          <NodeList title={example.goodTitle} nodes={example.goodNodes} tone="good" />
        </div>
      </CardContent>
    </Card>
  );
}
