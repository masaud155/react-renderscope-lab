import CodeBlock from "@/components/code/CodeBlock";

export default function CodeComparison({ example }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <CodeBlock code={example.bad} tone="bad" />
      <CodeBlock code={example.good} tone="good" />
    </div>
  );
}
