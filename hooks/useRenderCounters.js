"use client";

import { useMemo, useState } from "react";
import { componentTree } from "@/data/componentTree";

export function useRenderCounters(scenario, mode) {
  const [tick, setTick] = useState(1);
  const affected = scenario[`${mode}Affected`] || {};

  const counters = useMemo(() => {
    const multiplier = mode === "bad" ? tick * 6 : tick * 2;
    return componentTree.reduce((acc, node, index) => {
      const severity = affected[node.id] || "idle";
      const base = severity === "wasted" ? multiplier + index : severity === "necessary" ? tick + 2 : severity === "acceptable" ? tick : 0;
      acc[node.id] = base;
      return acc;
    }, {});
  }, [affected, mode, tick]);

  return { counters, tick, bump: () => setTick((value) => value + 1), reset: () => setTick(1) };
}
