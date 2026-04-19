import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import CompanyNetwork from "@/components/CompanyNetwork";
import PlacementEcosystem from "@/components/PlacementEcosystem";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050509]">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <CompanyNetwork />
      <PlacementEcosystem />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
