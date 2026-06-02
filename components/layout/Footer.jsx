import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-sm text-muted sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>RenderScope Lab. Frontend-only companion for a Medium article.</p>
        <div className="flex gap-4">
          <Link href="/guide" className="hover:text-white">GitHub placeholder</Link>
          <Link href="/guide" className="hover:text-white">Medium article placeholder</Link>
        </div>
      </div>
    </footer>
  );
}
