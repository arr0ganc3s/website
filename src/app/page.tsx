import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import ReadySection from "@/components/home/ReadySection";
import ServicesSection from "@/components/home/ServicesSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ShowcaseSection />
      <ServicesSection />
      <ProcessSection />
      <ReadySection />
    </div>
  );
}
