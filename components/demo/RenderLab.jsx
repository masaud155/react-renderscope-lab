"use client";

import ModeToggle from "@/components/demo/ModeToggle";
import ScenarioSelector from "@/components/demo/ScenarioSelector";
import InteractionControls from "@/components/demo/InteractionControls";
import DashboardSimulation from "@/components/demo/DashboardSimulation";
import ComponentTree from "@/components/render-map/ComponentTree";
import UpdateFlow from "@/components/render-map/UpdateFlow";
import ProfilerPanel from "@/components/profiler/ProfilerPanel";
import { useRenderSimulation } from "@/hooks/useRenderSimulation";

export default function RenderLab() {
  const state = useRenderSimulation();

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Interactive demo</p>
          <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Render storm simulator</h1>
          <p className="mt-3 max-w-3xl text-muted">Use the same dashboard in bad and optimized modes to see how state placement, context shape, and component boundaries change update spread.</p>
        </div>
        <div className="w-full max-w-md">
          <ModeToggle mode={state.mode} setMode={state.setMode} />
        </div>
      </div>
      <div className="grid gap-4 2xl:grid-cols-[280px_minmax(0,1fr)_360px]">
        <div className="space-y-4">
          <ScenarioSelector scenarios={state.scenarios} scenarioId={state.scenarioId} setScenarioId={state.setScenarioId} />
          <InteractionControls runInteraction={state.runInteraction} />
          <UpdateFlow scenario={state.scenario} mode={state.mode} />
        </div>
        <DashboardSimulation state={state} />
        <div className="space-y-4">
          <ComponentTree scenario={state.scenario} mode={state.mode} counters={state.counters} />
          <ProfilerPanel scenario={state.scenario} mode={state.mode} metrics={state.metrics} savedWork={state.savedWork} />
        </div>
      </div>
    </div>
  );
}
