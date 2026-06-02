import Navbar from "@/components/layout/Navbar";
import SidebarNav from "@/components/layout/SidebarNav";
import MobileNav from "@/components/layout/MobileNav";
import Footer from "@/components/layout/Footer";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MobileNav />
      <div className="mx-auto flex max-w-7xl">
        <SidebarNav />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:py-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
