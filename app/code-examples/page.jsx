import { codeExamples } from "@/data/codeExamples";
import CodeExampleCard from "@/components/code/CodeExampleCard";

export const metadata = {
  title: "Code Examples | RenderScope Lab"
};

export default function CodeExamplesPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">JSX examples</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Bad code, better boundaries</h1>
        <p className="mt-3 max-w-3xl text-muted">Each example shows code that can look reasonable while still making React do more work than the interaction deserves.</p>
      </div>
      {codeExamples.map((example) => (
        <CodeExampleCard key={example.id} example={example} />
      ))}
    </div>
  );
}
