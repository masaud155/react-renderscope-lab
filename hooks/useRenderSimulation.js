"use client";

import { useState } from "react";
import { useScenario } from "@/hooks/useScenario";
import { useRenderCounters } from "@/hooks/useRenderCounters";
import { usePerformanceScore } from "@/hooks/usePerformanceScore";

export function useRenderSimulation() {
  const [mode, setMode] = useState("bad");
  const [query, setQuery] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(4);
  const scenarioState = useScenario();
  const renderCounters = useRenderCounters(scenarioState.scenario, mode);
  const score = usePerformanceScore(scenarioState.scenario, mode);

  function runInteraction(type) {
    renderCounters.bump();
    if (type === "search") setQuery((value) => (value === "engineering" ? "design" : "engineering"));
    if (type === "modal") setModalOpen((value) => !value);
    if (type === "notification") setNotifications((value) => value + 1);
    if (type === "row") setSelectedUserId((value) => (value % 12) + 1);
    if (type === "filter") setFilter((value) => (value === "All" ? "Active" : "All"));
  }

  return {
    mode,
    setMode,
    query,
    setQuery,
    selectedUserId,
    setSelectedUserId,
    filter,
    setFilter,
    modalOpen,
    notifications,
    runInteraction,
    ...scenarioState,
    ...renderCounters,
    ...score
  };
}
