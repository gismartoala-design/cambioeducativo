import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  "/images/image-1.jpg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
  "/images/ANAI%2010mo.jpeg",
];

export const IntroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide;
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 9000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent((index) => (index - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((index) => (index + 1) % slides.length);
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white">
      <AnimatePresence initial={false}>
        {slides.map((item, index) => (
          <motion.img
            key={item}
            src={item}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={false}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1 : 1.015,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.28)_0%,rgba(2,6,23,0.04)_38%,rgba(2,6,23,0.48)_100%)]" />

      <button
        type="button"
        aria-label="Imagen anterior"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-white/55 bg-slate-950/35 text-white shadow-2xl backdrop-blur transition hover:bg-white hover:text-primary md:left-8 md:h-14 md:w-14"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        type="button"
        aria-label="Imagen siguiente"
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-white/55 bg-slate-950/35 text-white shadow-2xl backdrop-blur transition hover:bg-white hover:text-primary md:right-8 md:h-14 md:w-14"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <motion.div
        className="absolute bottom-24 left-6 z-20 sm:left-10 md:bottom-28"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Button
          asChild
          size="lg"
          className="h-13 rounded-lg bg-accent px-6 text-sm font-black text-white shadow-2xl shadow-black/35 transition-transform hover:-translate-y-0.5 hover:bg-accent/90 sm:h-14 sm:px-7 sm:text-base"
        >
          <a href="/historia">
            Conoce nuestra historia
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-6">
        <div className="flex gap-2">
          {slides.map((item, index) => (
            <button
              key={item}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-10 bg-turquoise" : "w-2.5 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
