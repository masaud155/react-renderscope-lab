import Navbar from "@/components/layout/Navbar";
import SidebarNav from "@/components/layout/SidebarNav";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="main-layout">
        <SidebarNav />
        <main className="page-content">
          <MobileNav />
          <div className="page-inner">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
