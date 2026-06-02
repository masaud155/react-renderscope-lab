import { Card, CardContent } from "@/components/ui/card";

export default function ScoreSummary({ completed, total, score }) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted">Rendering review progress</p>
          <p className="mt-1 text-3xl font-semibold text-white">{completed}/{total} checked</p>
        </div>
        <div className="min-w-48">
          <p className="text-right text-sm text-accent">{score}%</p>
          <div className="mt-2 h-2 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-accent" style={{ width: `${score}%` }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
