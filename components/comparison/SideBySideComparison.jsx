"use client";

import { scenarios } from "@/data/scenarios";
import ComparisonCard from "@/components/comparison/ComparisonCard";
import ResultDiff from "@/components/comparison/ResultDiff";

export default function SideBySideComparison() {
  const scenario = scenarios[0];
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Good vs bad</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Same interaction, different blast radius</h1>
        <p className="mt-3 max-w-3xl text-muted">{scenario.subtitle}</p>
      </div>
      <ResultDiff scenario={scenario} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ComparisonCard
          title="Bad Architecture"
          tone="bad"
          description={scenario.badDescription}
          metrics={scenario.badMetrics}
          points={["State too high", "Broad update spread", "Unrelated header, chart, profile, and rows update", "Memoization would patch symptoms"]}
        />
        <ComparisonCard
          title="Optimized Boundaries"
          tone="good"
          description={scenario.goodDescription}
          metrics={scenario.goodMetrics}
          points={["State close to table usage", "Small update spread", "Unrelated shell stays stable", "Memoization reserved for measured hotspots"]}
        />
      </div>
    </div>
  );
}
