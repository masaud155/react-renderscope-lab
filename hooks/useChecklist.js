"use client";

import { useMemo, useState } from "react";
import { checklistCategories } from "@/data/checklistItems";

export function useChecklist() {
  const [checked, setChecked] = useState({});
  const total = checklistCategories.reduce((sum, category) => sum + category.items.length, 0);
  const completed = Object.values(checked).filter(Boolean).length;

  const score = useMemo(() => Math.round((completed / total) * 100), [completed, total]);

  function toggle(id) {
    setChecked((current) => ({ ...current, [id]: !current[id] }));
  }

  return { categories: checklistCategories, checked, toggle, completed, total, score };
}
