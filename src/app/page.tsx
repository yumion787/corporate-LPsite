import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <ServiceSection />
      <ReviewsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
