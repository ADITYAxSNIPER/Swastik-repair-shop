import LoadingScreen from "@/components/sections/LoadingScreen";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Brands from "@/components/sections/Brands";
import RepairProcess from "@/components/sections/RepairProcess";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MouseGlow from "@/components/shared/MouseGlow";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans overflow-x-hidden">
      <MouseGlow />
      <LoadingScreen />
      <WhatsAppButton />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Brands />
        <RepairProcess />
        <BeforeAfter />
        <Testimonials />
        <Gallery />
        <FAQ />
        <BookingForm />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
