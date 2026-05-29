import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroCarousel } from "@/pages/home/IntroCarousel";
import { Hero } from "@/pages/home/Hero";
import { WhyUs } from "@/pages/home/WhyUs";
import { Purpose } from "@/pages/home/Purpose";
import { Services } from "@/pages/home/Services";
import { Contact } from "@/pages/home/Contact";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ChatBot } from "@/components/ui/ChatBot";
import { ScrollLine } from "@/components/ui/ScrollLine";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import { Preloader } from "@/components/ui/Preloader";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="noise-bg" />
            <MouseSpotlight />

            <ScrollLine />
            <Navbar />
            <main>
              <IntroCarousel />
              <Hero />
              <Purpose />
              <WhyUs />
              <Services />
              <Contact />
            </main>
            <WhatsAppButton />
            <ChatBot />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
