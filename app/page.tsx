import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Gallery />

      <WhyChoose />

      <Reviews />

      <Contact />

      <Footer />

      <WhatsApp />

      <BackToTop />
    </>
  );
}