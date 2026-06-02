import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DemoPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="border-danger/30">
        <CardContent>
          <Badge tone="danger">Bad architecture</Badge>
          <h3 className="mt-4 text-2xl font-semibold text-white">742 renders</h3>
          <p className="mt-2 text-muted">Search state in the dashboard parent causes header, sidebar, chart, table rows, and profile to re-render.</p>
        </CardContent>
      </Card>
      <Card className="border-success/30">
        <CardContent>
          <Badge tone="success">Optimized boundaries</Badge>
          <h3 className="mt-4 text-2xl font-semibold text-white">38 renders</h3>
          <p className="mt-2 text-muted">Search state lives in the table area, so unrelated dashboard sections stay stable.</p>
        </CardContent>
      </Card>
    </div>
  );
}
