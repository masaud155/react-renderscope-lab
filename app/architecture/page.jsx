import { architectureExamples } from "@/data/architectureExamples";
import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";
import StatePlacementDiagram from "@/components/architecture/StatePlacementDiagram";

export const metadata = {
  title: "Architecture Visualizer | RenderScope Lab"
};

export default function ArchitecturePage() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Architecture visualizer</p>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Update flow, component boundaries, and client islands</h1>
        <p className="mt-3 max-w-3xl text-muted">These diagrams turn architectural choices into visible render consequences.</p>
      </div>
      <StatePlacementDiagram />
      {architectureExamples.map((example) => (
        <ArchitectureDiagram key={example.title} example={example} />
      ))}
    </div>
  );
}
