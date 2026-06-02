"use client";

import { motion } from "framer-motion";
import { Bell, MoreHorizontal, Search, Settings, UserCircle } from "lucide-react";
import { mockUsers } from "@/data/mockUsers";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRenderSeverity } from "@/lib/getRenderSeverity";
import { severityStyles } from "@/lib/constants";
import { cn } from "@/lib/utils";

function RenderBox({ id, label, scenario, mode, counters, children, className }) {
  const severity = getRenderSeverity(id, scenario, mode);
  return (
    <motion.div
      key={`${id}-${counters[id]}`}
      initial={{ scale: 0.985 }}
      animate={{ scale: 1 }}
      className={cn("min-w-0 rounded-lg border bg-white/[0.035] p-3 transition", severityStyles[severity], className)}
    >
      <div className="mb-2 flex min-w-0 flex-wrap items-start justify-between gap-2">
        <span className="min-w-0 text-xs font-medium uppercase tracking-[0.14em] text-muted">{label}</span>
        <Badge tone={severity === "wasted" ? "danger" : severity === "necessary" ? "success" : severity === "acceptable" ? "warning" : "neutral"}>
          {counters[id] || 0} renders
        </Badge>
      </div>
      {children}
    </motion.div>
  );
}

export default function DashboardSimulation({ state }) {
  const users = mockUsers.slice(0, 8);

  return (
    <Card className="demo-panel dashboard-panel">
      <div className="shrink-0 border-b border-white/10 bg-white/[0.035] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Live dashboard simulation</p>
            <h2 className="mt-1 text-xl font-semibold text-white">{state.scenario.interaction}</h2>
          </div>
          <Badge tone={state.mode === "bad" ? "danger" : "success"}>
            {state.mode === "bad" ? "Render storm" : "Focused update"}
          </Badge>
        </div>
      </div>
      <div className="dashboard-viewport dashboard-shell-grid p-4">
        <RenderBox id="sidebar" label="Sidebar" scenario={state.scenario} mode={state.mode} counters={state.counters}>
          <div className="space-y-2 text-sm text-muted">
            {["Overview", "Users", "Reports", "Settings"].map((item) => <div key={item} className="rounded bg-white/[0.05] px-2 py-1.5">{item}</div>)}
          </div>
        </RenderBox>
        <div className="dashboard-main min-w-0 space-y-3">
          <RenderBox id="header" label="Header" scenario={state.scenario} mode={state.mode} counters={state.counters}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-lg font-semibold text-white">Workspace analytics</p>
                <p className="text-sm text-muted">Small interactions should stay small.</p>
              </div>
              <div className="flex gap-2">
                <span className="rounded-md border border-white/10 p-2 text-muted"><Bell className="h-4 w-4" /></span>
                <span className="rounded-md border border-white/10 p-2 text-muted"><UserCircle className="h-4 w-4" /></span>
              </div>
            </div>
          </RenderBox>
          <div className="dashboard-action-grid">
            <RenderBox id="search" label="Search Panel" scenario={state.scenario} mode={state.mode} counters={state.counters} className="dashboard-search-card">
              <label className="flex items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm text-muted">
                <Search className="h-4 w-4" />
                <input className="min-w-0 w-full bg-transparent text-white outline-none" value={state.query} onChange={(event) => state.setQuery(event.target.value)} placeholder="Search users..." />
              </label>
            </RenderBox>
            <RenderBox id="notifications" label="Notifications" scenario={state.scenario} mode={state.mode} counters={state.counters}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Unread events</span>
                <span className="text-2xl font-semibold text-white">{state.notifications}</span>
              </div>
            </RenderBox>
          </div>
          <div className="dashboard-metrics-grid">
            {["Revenue", "Active users", "Latency"].map((metric, index) => (
              <RenderBox key={metric} id="metrics" label={metric} scenario={state.scenario} mode={state.mode} counters={state.counters}>
                <p className="break-words text-2xl font-semibold text-white">{index === 0 ? "$42.8k" : index === 1 ? "12,408" : "87ms"}</p>
                <p className="text-xs text-success">Healthy trend</p>
              </RenderBox>
            ))}
          </div>
          <div className="dashboard-lower-grid">
            <RenderBox id="table" label="Users Table" scenario={state.scenario} mode={state.mode} counters={state.counters}>
              <div className="overflow-hidden rounded-md border border-white/10">
                {users.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => state.setSelectedUserId(user.id)}
                    className={cn("grid grid-cols-[1fr_auto] gap-3 border-b border-white/10 px-3 py-2 text-sm last:border-b-0", state.selectedUserId === user.id && "bg-accent/10")}
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs text-muted">{user.team} / {user.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge tone={user.status === "Active" ? "success" : "warning"}>{user.status}</Badge>
                      <MoreHorizontal className="h-4 w-4 text-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </RenderBox>
            <div className="space-y-3">
              <RenderBox id="chart" label="Activity Chart" scenario={state.scenario} mode={state.mode} counters={state.counters}>
                <div className="flex h-36 items-end gap-2">
                  {[42, 72, 48, 88, 60, 96, 66].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t bg-accent/35" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </RenderBox>
              <RenderBox id="profile" label="Profile Panel" scenario={state.scenario} mode={state.mode} counters={state.counters}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10"><Settings className="h-5 w-5 text-muted" /></div>
                  <div>
                    <p className="text-sm font-medium text-white">Admin workspace</p>
                    <p className="text-xs text-muted">Permissions stable</p>
                  </div>
                </div>
              </RenderBox>
              <RenderBox id="modal" label="Settings Modal" scenario={state.scenario} mode={state.mode} counters={state.counters}>
                <p className="text-sm text-muted">{state.modalOpen ? "Modal is open and interactive." : "Modal is closed."}</p>
              </RenderBox>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
