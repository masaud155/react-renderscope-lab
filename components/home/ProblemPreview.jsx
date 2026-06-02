import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProblemPreview() {
  return (
    <Card>
      <CardHeader>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Main lesson</p>
        <h2 className="text-2xl font-semibold text-white">A small interaction should cause a small update.</h2>
      </CardHeader>
      <CardContent>
        <p className="max-w-3xl text-muted">React apps become slow when state changes spread too far through the UI. This lab makes invisible render work visible with counters, glow states, architecture diagrams, and profiler-inspired charts.</p>
      </CardContent>
    </Card>
  );
}
