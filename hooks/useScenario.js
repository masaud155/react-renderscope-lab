"use client";

import { useMemo, useState } from "react";
import { scenarios } from "@/data/scenarios";

export function useScenario() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const scenario = useMemo(() => scenarios.find((item) => item.id === scenarioId) || scenarios[0], [scenarioId]);
  return { scenario, scenarioId, setScenarioId, scenarios };
}
