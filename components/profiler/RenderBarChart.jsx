"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function RenderBarChart({ scenario }) {
  const data = [
    { name: "Total", Bad: scenario.badMetrics.totalRenders, Good: scenario.goodMetrics.totalRenders },
    { name: "Wasted", Bad: scenario.badMetrics.wastedRenders, Good: scenario.goodMetrics.wastedRenders },
    { name: "Commit", Bad: scenario.badMetrics.commitDuration, Good: scenario.goodMetrics.commitDuration },
    { name: "Score", Bad: scenario.badMetrics.performanceScore, Good: scenario.goodMetrics.performanceScore }
  ];

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="name" stroke="rgba(226,232,240,0.6)" fontSize={12} />
          <YAxis stroke="rgba(226,232,240,0.6)" fontSize={12} />
          <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} contentStyle={{ background: "#0b1020", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8 }} />
          <Bar dataKey="Bad" fill="#f87171" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Good" fill="#4ade80" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
