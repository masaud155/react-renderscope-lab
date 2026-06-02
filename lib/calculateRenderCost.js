export function calculateRenderCost(metrics) {
  const wasteRatio = metrics.totalRenders ? metrics.wastedRenders / metrics.totalRenders : 0;
  return {
    browserWork: `${Math.max(4, Math.round(metrics.commitDuration * 1.7))}ms`,
    wasteRatio,
    scoreTone: metrics.performanceScore > 80 ? "success" : metrics.performanceScore > 60 ? "warning" : "danger"
  };
}
