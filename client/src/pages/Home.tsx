import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/pages/home/Hero";
import { WhyUs } from "@/pages/home/WhyUs";
import { About } from "@/pages/home/About";
import { Services } from "@/pages/home/Services";
import { Contact } from "@/pages/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
