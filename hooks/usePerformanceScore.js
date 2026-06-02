"use client";

import { useMemo } from "react";
import { getSavedWork } from "@/lib/formatMetrics";

export function usePerformanceScore(scenario, mode) {
  return useMemo(() => {
    const metrics = scenario[`${mode}Metrics`];
    return {
      metrics,
      savedWork: getSavedWork(scenario.badMetrics.totalRenders, scenario.goodMetrics.totalRenders),
      improvement: getSavedWork(scenario.badMetrics.wastedRenders, scenario.goodMetrics.wastedRenders)
    };
  }, [scenario, mode]);
}
