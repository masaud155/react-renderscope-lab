export const architectureExamples = [
  {
    title: "State placement lab",
    badTitle: "App level state",
    goodTitle: "Table section state",
    badNodes: ["App", "DashboardPage", "Header", "Sidebar", "Metrics", "UsersTable", "Chart", "Modal"],
    goodNodes: ["App", "DashboardPage", "UsersTableSection", "SearchInput", "FilteredRows"],
    note: "Worst for local interactions when too much UI may update. Better when only the table needs the search state."
  },
  {
    title: "Big component breakdown",
    badTitle: "One Dashboard.jsx",
    goodTitle: "Responsibility boundaries",
    badNodes: ["Search", "Filters", "Table", "Chart", "Modal", "Permissions", "Export", "Rows"],
    goodNodes: ["DashboardShell.jsx", "DashboardHeader.jsx", "FilterPanel.jsx", "UserTable.jsx", "UserRow.jsx", "AnalyticsChart.jsx", "ExportToolbar.jsx", "UserModal.jsx"],
    note: "The goal is not more files. The goal is better rendering boundaries."
  },
  {
    title: "Context overload",
    badTitle: "AppContext",
    goodTitle: "Focused providers",
    badNodes: ["auth", "theme", "permissions", "notifications", "sidebar", "workspace", "settings", "flags"],
    goodNodes: ["AuthProvider", "ThemeProvider", "PermissionProvider", "NotificationProvider", "SidebarProvider"],
    note: "A notification update should not wake auth, theme, sidebar, and workspace consumers."
  },
  {
    title: "Next.js boundary visualizer",
    badTitle: "\"use client\" DashboardPage",
    goodTitle: "Server-first client islands",
    badNodes: ["Header", "Sidebar", "DataCards", "Table", "Chart", "Modal"],
    goodNodes: ["Server Header", "Server Sidebar", "Server DataCards", "Client SearchIsland", "Client TableControls", "Client ModalIsland"],
    note: "Keep the route server-first and isolate interactivity where it actually happens."
  }
];
