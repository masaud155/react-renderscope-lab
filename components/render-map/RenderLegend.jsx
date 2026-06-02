import { Badge } from "@/components/ui/badge";

export default function RenderLegend() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge tone="success">Necessary</Badge>
      <Badge tone="warning">Acceptable</Badge>
      <Badge tone="danger">Unnecessary</Badge>
      <Badge tone="neutral">Not affected</Badge>
    </div>
  );
}
