"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function WastedRenderChart({ metrics }) {
  const useful = Math.max(0, metrics.totalRenders - metrics.wastedRenders);
  const data = [
    { name: "Useful", value: useful, color: "#4ade80" },
    { name: "Wasted", value: metrics.wastedRenders, color: "#f87171" }
  ];

  return (
    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={44} outerRadius={66} paddingAngle={3}>
            {data.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "#0b1020", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
