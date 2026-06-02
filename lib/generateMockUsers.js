const names = ["Ali Khan", "Umar Dev", "Sara Malik", "Nora Reed", "Mina Patel", "Owen Shaw", "Zara Chen", "Ivy Stone", "Leo Park", "Rayan Noor"];
const teams = ["Engineering", "Design", "Data", "Growth", "Content", "Support"];
const roles = ["Admin", "Editor", "Analyst", "Viewer", "Manager"];
const statuses = ["Active", "Pending", "Paused"];

export function generateMockUsers(count = 320) {
  return Array.from({ length: count }, (_, index) => {
    const name = names[index % names.length];
    const team = teams[index % teams.length];
    return {
      id: index + 1,
      name: `${name} ${index + 1}`,
      email: `${name.toLowerCase().replaceAll(" ", ".")}.${index + 1}@example.com`,
      role: roles[index % roles.length],
      status: statuses[index % statuses.length],
      team,
      lastLogin: index % 3 === 0 ? "2 minutes ago" : `${(index % 12) + 1} hours ago`,
      permissions: [team.toLowerCase(), "reports", index % 4 === 0 ? "billing" : "read"]
    };
  });
}
