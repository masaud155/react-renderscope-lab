import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UpdateFlow({ scenario, mode }) {
  const text = mode === "bad" ? scenario.badDescription : scenario.goodDescription;
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-3">
          <span className="mt-1 rounded-md border border-accent/30 bg-accent/10 p-2 text-accent"><ArrowRight className="h-4 w-4" /></span>
          <div>
            <p className="text-sm font-semibold text-white">Fix suggestion</p>
            <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
            <p className="mt-3 text-sm leading-6 text-accent">{scenario.lesson}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
