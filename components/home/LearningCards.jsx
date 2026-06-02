import { Card, CardContent } from "@/components/ui/card";

const lessons = ["State placed too high", "Big components hiding rendering problems", "Frontend rendering issues that look like backend problems", "Broad context causing too many updates", "Next.js use client used too high", "AI-generated React code that renders poorly"];

export default function LearningCards() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {lessons.map((lesson) => (
        <Card key={lesson}>
          <CardContent>
            <p className="text-sm font-semibold text-white">{lesson}</p>
            <p className="mt-2 text-sm leading-6 text-muted">Explore the runtime effect and the architectural fix.</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
