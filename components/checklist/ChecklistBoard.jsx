"use client";

import ChecklistCategory from "@/components/checklist/ChecklistCategory";
import ScoreSummary from "@/components/checklist/ScoreSummary";
import { useChecklist } from "@/hooks/useChecklist";

export default function ChecklistBoard() {
  const checklist = useChecklist();
  return (
    <div className="space-y-5">
      <ScoreSummary completed={checklist.completed} total={checklist.total} score={checklist.score} />
      <div className="grid gap-4 lg:grid-cols-2">
        {checklist.categories.map((category) => (
          <ChecklistCategory key={category.id} category={category} checked={checklist.checked} toggle={checklist.toggle} />
        ))}
      </div>
    </div>
  );
}
