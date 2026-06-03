# RenderScope Lab

A premium frontend-only companion app for the Medium article **The React Rendering Mistake That Quietly Slows Your App**.

RenderScope Lab is an interactive React rendering performance lab. It visually shows how small state changes can cause unnecessary re-renders across a dashboard, and how better component boundaries, local state, focused context, large-list protection, and Next.js server/client boundaries reduce wasted work.

## Live demo

Vercel URL placeholder: `[https://renderscope-lab.vercel.app](https://react-renderscope-heve2o862-masaud155s-projects.vercel.app/)`

## Purpose

This project supports the article with a practical, visual demo. Readers can open the lab, trigger interactions, compare bad and optimized architecture, inspect render maps, review JSX examples, and use a checklist for real React code reviews.

## Features

- Render storm simulator with bad and optimized modes
- Profiler-inspired metrics panel with Recharts visualizations
- Component render map with necessary, acceptable, wasted, and idle states
- Good vs bad architecture comparison
- Architecture visualizer for state placement, component splitting, context, and Next.js client islands
- JSX-only code examples for common rendering mistakes
- Interactive React rendering checklist
- GitHub-style learning guide
- Local mock users generated from frontend data only

## Screenshots

Add screenshots in `public/screenshots/` after deployment or article capture.

## Tech stack

- Next.js App Router
- React with JSX
- Tailwind CSS
- shadcn-style local UI primitives
- Framer Motion
- Recharts
- Lucide React icons
- Local mock data only

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```txt
app/                 App Router pages
components/          Reusable layout, demo, profiler, render-map, code, checklist, and UI components
data/                Local scenarios, users, code examples, checklist items, architecture examples, navigation
hooks/               Frontend simulation and checklist state
lib/                 Formatting, cost calculation, severity, utilities, mock data generation
public/              Static assets and screenshot placeholders
```

## Learning outcomes

Readers should leave with one core instinct: ask what has to re-render when a state change happens.

The demo teaches how to:

- Move state closer to where it is used
- Split giant components by responsibility
- Keep context providers focused
- Protect large lists from broad parent updates
- Keep Next.js pages server-first where possible
- Measure before adding memoization
- Treat AI-generated React code as an architectural draft

## Good vs bad architecture

Bad architecture usually spreads local changes through unrelated UI. Optimized architecture keeps the update near the component that needs it. The goal is not more files; the goal is clearer runtime boundaries.

## Deployment

This project is frontend-only and can be deployed directly to Vercel.
No backend server, database, or environment variables are required.

## License

MIT
