import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Concepts from "@/components/sections/Concepts";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Concepts />
      <Team />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
