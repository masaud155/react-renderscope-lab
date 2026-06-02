import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Learning Guide | RenderScope Lab"
};

const sections = [
  ["What this project demonstrates", "Small React interactions become expensive when state, context, and client boundaries are wider than the change."],
  ["How to use the demo", "Open the interactive lab, trigger an interaction, switch modes, and compare the render map with profiler metrics."],
  ["Suggested learning path", "Start with state placement, move to component boundaries, then study context, large lists, Next.js boundaries, and memoization."],
  ["How to read the code", "Data lives in /data, calculations in /lib and /hooks, and reusable surfaces in /components."],
  ["How to connect with the Medium article", "Use each scenario as a visual companion section for the article's architecture lessons."],
  ["How to extend the project", "Add more scenarios, swap mock data, create new code reviews, or add article-specific screenshots."]
];

export default function GuidePage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">GitHub-style guide</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Learning guide and project notes</h1>
        <p className="mt-3 max-w-3xl text-muted">A frontend-only guide for readers who want to connect the demo, the article, and the codebase.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {sections.map(([title, copy]) => (
          <Card key={title}>
            <CardHeader>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted">{copy}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Project links</h2>
            <p className="mt-2 text-sm text-muted">GitHub repo placeholder and Medium article placeholder are ready to replace.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="secondary"><Link href="#">GitHub placeholder</Link></Button>
            <Button asChild><Link href="#">Medium placeholder</Link></Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
