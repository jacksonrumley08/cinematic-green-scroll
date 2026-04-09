import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <TrustBar />
    {/* Green accent separator */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="h-0.5 bg-primary/80 w-full" />
    </div>
    <Services />
    <Gallery />
    <WhyUs />
    <Testimonials />
    <ServiceArea />
    <Contact />
    <Footer />
  </div>
);

export default Index;
