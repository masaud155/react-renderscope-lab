import { Bell, Filter, MousePointer2, Search, SquareStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const controls = [
  { id: "search", label: "Type search", icon: Search },
  { id: "modal", label: "Open modal", icon: SquareStack },
  { id: "notification", label: "Toggle notification", icon: Bell },
  { id: "row", label: "Select row", icon: MousePointer2 },
  { id: "filter", label: "Change filter", icon: Filter }
];

export default function InteractionControls({ runInteraction }) {
  return (
    <Card>
      <CardHeader>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Interactions</p>
        <h2 className="mt-1 text-lg font-semibold text-white">Trigger render work</h2>
      </CardHeader>
      <CardContent className="grid gap-2">
        {controls.map((control) => {
          const Icon = control.icon;
          return (
            <Button key={control.id} variant="secondary" className="justify-start" onClick={() => runInteraction(control.id)}>
              <Icon className="h-4 w-4" />
              {control.label}
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
