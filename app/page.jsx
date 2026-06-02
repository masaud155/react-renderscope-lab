import HeroSection from "@/components/home/HeroSection";
import ProblemPreview from "@/components/home/ProblemPreview";
import LearningCards from "@/components/home/LearningCards";
import DemoPreview from "@/components/home/DemoPreview";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <ProblemPreview />
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white">What you will learn</h2>
        <LearningCards />
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white">Good vs bad architecture preview</h2>
        <DemoPreview />
      </section>
    </div>
  );
}
