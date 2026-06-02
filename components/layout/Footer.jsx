import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-sm text-muted sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>RenderScope Lab. Frontend-only companion for a Medium article.</p>
        <div className="flex gap-4">
          <Link href="https://github.com/masaud155/react-renderscope-lab" target="_blank" rel="noreferrer" className="hover:text-white">GitHub repository</Link>
          <Link href="https://medium.com/@codetune" target="_blank" rel="noreferrer" className="hover:text-white">Medium profile</Link>
        </div>
      </div>
    </footer>
  );
}
