import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 backdrop-blur-md text-primary font-bold text-sm mb-4 border border-blue-200/50 shadow-sm">
                ✨ Innovación Educativa
              </span>
            </Reveal>

            <Reveal delay={0.3}>
              <h1 className="text-6xl md:text-8xl font-extrabold font-display leading-[1.1] tracking-tight text-foreground">
                Impulsamos el <br />
                <span className="text-gradient">cambio</span> real.
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg border-l-4 border-primary/20 pl-6 py-2">
                Acompañamos a instituciones y docentes en la creación de experiencias de aprendizaje que <span className="text-foreground font-semibold italic">lideran el futuro.</span>
              </p>
            </Reveal>

            <Reveal delay={0.5} className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="rounded-full bg-primary text-white px-10 h-16 text-lg font-bold hover:bg-primary/90 shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95">
                Iniciar Proyecto
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg border-2 hover:bg-blue-50/50 font-semibold group">
                <PlayCircle className="mr-2 w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                Nuestra Metodología
              </Button>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.6} direction="left">
              <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] group">
                <img
                  src="/images/image-1.jpg"
                  alt="Educación del futuro"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 right-10 text-white p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                  <p className="font-bold text-xl leading-snug italic">
                    "La educación no debe adaptarse al mundo… debe liderar su transformación pedagógica."
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-10 h-[2px] bg-accent" />
                    <span className="text-accent font-bold tracking-widest text-xs uppercase">Filosofía Cambio</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Floating Elements with Parallax feels */}
            <motion.div
              className="absolute -top-16 -right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 p-4 glass-card rounded-2xl z-20"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl">🚀</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
