export const codeExamples = [
  {
    id: "bad-state",
    title: "Bad state placement",
    problem: "DashboardPage owns search state, so every child is eligible to update.",
    bad: `"use client";

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  return (
    <DashboardShell>
      <Header />
      <Sidebar />
      <SearchBox value={search} onChange={setSearch} />
      <MetricsCards />
      <UsersTable search={search} />
      <ActivityChart />
    </DashboardShell>
  );
}`,
    good: `function DashboardPage() {
  return (
    <DashboardShell>
      <Header />
      <Sidebar />
      <MetricsCards />
      <UsersTableSection />
      <ActivityChart />
    </DashboardShell>
  );
}

function UsersTableSection() {
  const [search, setSearch] = useState("");
  return <UsersTable search={search} onSearchChange={setSearch} />;
}`
  },
  {
    id: "context",
    title: "Broad context vs focused context",
    problem: "One AppContext mixes values with different lifetimes and update frequency.",
    bad: `const AppContext = createContext();

function AppProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AppContext.Provider value={{
      auth, theme, permissions, notifications,
      sidebarOpen, workspace, featureFlags
    }}>
      {children}
    </AppContext.Provider>
  );
}`,
    good: `function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <WorkspaceProvider>
          {children}
        </WorkspaceProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

function HeaderNotifications() {
  return (
    <NotificationProvider>
      <NotificationButton />
    </NotificationProvider>
  );
}`
  },
  {
    id: "large-list",
    title: "Large list row rendering",
    problem: "Unstable row props turn one row click into hundreds of row updates.",
    bad: `function UsersTable({ users, selectedId, setSelectedId }) {
  return users.map((user) => (
    <UserRow
      key={user.id}
      user={user}
      selected={selectedId === user.id}
      onSelect={() => setSelectedId(user.id)}
    />
  ));
}`,
    good: `const UserRow = memo(function UserRow({ user, selected, onSelect }) {
  return <button onClick={() => onSelect(user.id)}>{user.name}</button>;
});

function UsersTable({ users }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectUser = useCallback((id) => setSelectedId(id), []);

  return users.map((user) => (
    <UserRow
      key={user.id}
      user={user}
      selected={selectedId === user.id}
      onSelect={selectUser}
    />
  ));
}`
  },
  {
    id: "next-boundary",
    title: "Next.js client boundary",
    problem: "A single interactive affordance can accidentally make a whole route client-rendered.",
    bad: `"use client";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <DataCards />
      <SearchAndTable />
      <SettingsModal />
    </>
  );
}`,
    good: `export default function DashboardPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <DataCards />
      <SearchIsland />
      <TableControls />
      <ModalIsland />
    </>
  );
}`
  },
  {
    id: "memo",
    title: "Memoization after measurement",
    problem: "Memoization helps, but it is a patch when the architecture is still broadcasting updates.",
    bad: `const Header = memo(HeaderBase);
const Sidebar = memo(SidebarBase);
const Chart = memo(ChartBase);

function DashboardPage() {
  const filteredUsers = useMemo(() => filterUsers(users, search), [users, search]);
  const onSearch = useCallback((value) => setSearch(value), []);

  return <GiantDashboard filteredUsers={filteredUsers} onSearch={onSearch} />;
}`,
    good: `function OptimizationOrder() {
  return (
    <ol>
      <li>Move state close to usage.</li>
      <li>Split responsibility boundaries.</li>
      <li>Keep context focused.</li>
      <li>Measure the remaining hotspot.</li>
      <li>Memoize the measured component.</li>
    </ol>
  );
}`
  }
];
