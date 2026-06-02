import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CodeComparison from "@/components/code/CodeComparison";

export default function CodeExampleCard({ example }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold text-white">{example.title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{example.problem}</p>
      </CardHeader>
      <CardContent>
        <CodeComparison example={example} />
      </CardContent>
    </Card>
  );
}
