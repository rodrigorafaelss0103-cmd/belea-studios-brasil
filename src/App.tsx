import { AgencyBanner } from "./components/AgencyBanner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PropertiesShowcase } from "./components/PropertiesShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GoogleRating } from "./components/GoogleRating";
import { LocationSection } from "./components/LocationSection";
import { ContactCta } from "./components/ContactCta";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0f12] text-[#e8ebed] flex flex-col relative selection:bg-[#c6a87d] selection:text-[#0c0f12]">
      {/* Discreet agency presentation indicator at top */}
      <AgencyBanner />

      {/* Primary header and navigation */}
      <Navbar />

      {/* Main content flow */}
      <main className="flex-1">
        <Hero />
        <PropertiesShowcase />
        <WhyChooseUs />
        <GoogleRating />
        <LocationSection />
        <ContactCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-first persistent floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
}
