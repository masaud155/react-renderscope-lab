import { Card, CardContent, CardHeader } from "@/components/ui/card";

const placements = [
  ["App level", "Worst for local interactions because too much UI may update."],
  ["Dashboard page", "Sometimes acceptable, but dangerous when many unrelated children depend on the parent."],
  ["Table section", "Better when search and filters only affect table content."],
  ["Search input", "Best when state is fully local and does not need to affect other sections."]
];

export default function StatePlacementDiagram() {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-white">State placement lab</h2>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-4">
        {placements.map(([title, copy], index) => (
          <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-3 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-accent" style={{ width: `${100 - index * 22}%` }} />
            </div>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
