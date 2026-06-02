export function getRenderSeverity(componentId, scenario, mode) {
  const affected = scenario[`${mode}Affected`] || {};
  return affected[componentId] || "idle";
}
