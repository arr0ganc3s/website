import CaseSnapshotsSection from "@/components/home/CaseSnapshotsSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import ProcessSection from "@/components/home/ProcessSection";
import ReadySection from "@/components/home/ReadySection";
import ServicesSection from "@/components/home/ServicesSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ImpactSection />
      <ShowcaseSection />
      <ServicesSection />
      <CaseSnapshotsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ReadySection />
    </div>
  );
}
