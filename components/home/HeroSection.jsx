import Link from "next/link";
import { ArrowRight, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="subtle-grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] px-5 py-14 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-accent">
          <Gauge className="h-4 w-4" />
          Medium companion app
        </div>
        <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-6xl">RenderScope Lab</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">An interactive React rendering performance lab that shows how small state changes can accidentally spread through an entire dashboard.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link href="/demo">Open Interactive Demo <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="secondary"><Link href="/code-examples">View Code Examples</Link></Button>
          <Button asChild variant="ghost"><Link href="/checklist">View Checklist</Link></Button>
        </div>
      </div>
    </section>
  );
}
