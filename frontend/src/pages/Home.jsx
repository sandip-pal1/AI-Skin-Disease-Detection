import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection";
import Disclaimer from "../components/home/Disclaimer";
import Capabilities from "../components/home/Capabilities";
import DiseaseCards from "../components/home/DiseaseCards";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <Capabilities />

      {/* 🔽 TARGET SECTION */}
      <section id="diseases-section">
        <DiseaseCards />
      </section>
      
      <Disclaimer />
      <Footer />
    </>
  );
}
