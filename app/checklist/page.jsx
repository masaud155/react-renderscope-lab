import ChecklistBoard from "@/components/checklist/ChecklistBoard";

export const metadata = {
  title: "React Checklist | RenderScope Lab"
};

export default function ChecklistPage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">React rendering checklist</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Review architecture before reaching for memo</h1>
        <p className="mt-3 max-w-3xl text-muted">Use this checklist while reviewing dashboards, generated code, large lists, and Next.js route boundaries.</p>
      </div>
      <ChecklistBoard />
    </div>
  );
}
