import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandSection from "@/components/BrandSection";
import WhoIsItFor from "@/components/WhoIsItFor";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import DeveloperApi from "@/components/DeveloperApi";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <BrandSection />
      <WhoIsItFor />
      <HowItWorks />
      <Benefits />
      <DeveloperApi />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}