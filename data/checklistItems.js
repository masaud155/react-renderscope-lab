export const checklistCategories = [
  {
    id: "state",
    title: "State design",
    items: [
      { question: "Does this state live near the components that actually use it?", why: "State placed too high lets unrelated UI re-render.", risk: "High", fix: "Move the state into the smallest section that needs it." },
      { question: "Can the interaction be fully local?", why: "Local state avoids broadcasting every keystroke upward.", risk: "Medium", fix: "Keep transient input and menu state inside the component." }
    ]
  },
  {
    id: "boundaries",
    title: "Component boundaries",
    items: [
      { question: "Can you explain what has to re-render when this changes?", why: "That question reveals whether the component shape matches runtime behavior.", risk: "High", fix: "Split by responsibility and data dependency." },
      { question: "Is a giant component hiding unrelated concerns?", why: "Readable blocks can still be one expensive runtime unit.", risk: "High", fix: "Extract stable shell, data display, controls, and modal islands." }
    ]
  },
  {
    id: "context",
    title: "Context usage",
    items: [
      { question: "Does one provider contain values that change at different speeds?", why: "Fast values make slow consumers update.", risk: "High", fix: "Use focused providers or local state." },
      { question: "Does every shared value really need global context?", why: "Global reach creates global subscription cost.", risk: "Medium", fix: "Scope providers to the route or feature that needs them." }
    ]
  },
  {
    id: "lists",
    title: "List rendering",
    items: [
      { question: "Does selecting one row re-render every row?", why: "Large lists turn small mistakes into visible lag.", risk: "High", fix: "Isolate rows and pass stable props." },
      { question: "Are filters and sorting recomputed on every unrelated update?", why: "Derived list work can dominate commits.", risk: "Medium", fix: "Compute near the list and memoize after measuring." }
    ]
  },
  {
    id: "next",
    title: "Next.js boundaries",
    items: [
      { question: "Is use client placed above mostly static UI?", why: "It expands client work and bundle size.", risk: "High", fix: "Keep the page server-first and use client islands." },
      { question: "Are interactive widgets isolated?", why: "Small islands preserve server-rendered structure.", risk: "Medium", fix: "Move buttons, modals, and controls into focused client components." }
    ]
  },
  {
    id: "memo",
    title: "Memoization",
    items: [
      { question: "Was this memo added after profiling?", why: "Premature memoization can mask the real design problem.", risk: "Medium", fix: "Measure first, then memoize the remaining hotspot." },
      { question: "Are props stable enough for memo to work?", why: "New objects and inline functions defeat memoized children.", risk: "Medium", fix: "Stabilize data shapes or move state down." }
    ]
  },
  {
    id: "ai",
    title: "AI-generated code review",
    items: [
      { question: "Did generated code create one giant client component?", why: "AI drafts often optimize for complete output, not runtime boundaries.", risk: "High", fix: "Review generated structure before polishing UI." },
      { question: "Does the code look clean but render broadly?", why: "Clean source code is not automatically cheap runtime code.", risk: "High", fix: "Inspect update spread, not only readability." }
    ]
  }
];
