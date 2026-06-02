import { Activity, BookOpen, Braces, CheckSquare, GitBranch, Home, LayoutDashboard } from "lucide-react";

export const navigation = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/demo", label: "Interactive Demo", icon: Activity },
  { href: "/compare", label: "Compare", icon: LayoutDashboard },
  { href: "/architecture", label: "Architecture", icon: GitBranch },
  { href: "/code-examples", label: "Code Examples", icon: Braces },
  { href: "/checklist", label: "Checklist", icon: CheckSquare },
  { href: "/guide", label: "Guide", icon: BookOpen }
];
