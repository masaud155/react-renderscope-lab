import CopyCodeButton from "@/components/code/CopyCodeButton";

export default function CodeBlock({ code, tone }) {
  return (
    <div className={`overflow-hidden rounded-lg border ${tone === "bad" ? "border-danger/30" : "border-success/30"} bg-black/35`}>
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className={tone === "bad" ? "text-sm font-medium text-danger" : "text-sm font-medium text-success"}>{tone === "bad" ? "Bad" : "Better"}</span>
        <CopyCodeButton code={code} />
      </div>
      <pre className="code-scroll max-h-[420px] overflow-auto p-4 text-xs leading-5 text-slate-200"><code>{code}</code></pre>
    </div>
  );
}
