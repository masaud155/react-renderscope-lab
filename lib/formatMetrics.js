export function formatNumber(value) {
  return new Intl.NumberFormat("en").format(value);
}

export function getSavedWork(badValue, goodValue) {
  if (!badValue) return 0;
  return Math.max(0, Math.round(((badValue - goodValue) / badValue) * 1000) / 10);
}
