import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const GalleryPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-20">
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
