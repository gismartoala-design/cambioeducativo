import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="quienes-somos" className="py-32 bg-slate-950 text-white overflow-hidden relative">

      {/* Abstract Animated Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-6 space-y-10">
            <Reveal>
              <span className="text-accent font-bold tracking-widest uppercase text-xs">Propósito de Vida</span>
              <h2 className="text-5xl md:text-7xl font-extrabold font-display leading-[0.9] mt-4">
                Redefinimos la <span className="text-blue-400">arquitectura</span> del aprendizaje.
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-xl text-slate-400 leading-relaxed border-l-2 border-white/10 pl-8 max-w-xl">
                No somos solo consultores; somos arquitectos de experiencias capaces de <span className="text-white font-medium">transformar la cultura institucional</span> desde su núcleo pedagógico.
              </p>
            </Reveal>

            <Reveal delay={0.4} className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-4 text-blue-400 font-bold">10+</div>
                <h3 className="text-lg font-bold mb-2">Años de Impacto</h3>
                <p className="text-sm text-slate-400">Guiando instituciones hacia la excelencia educativa.</p>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-4 text-orange-400 font-bold">500+</div>
                <h3 className="text-lg font-bold mb-2">Docentes Formados</h3>
                <p className="text-sm text-slate-400">Potenciando el talento humano en el aula.</p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <Button size="lg" className="rounded-full bg-white text-slate-950 font-bold px-10 h-16 hover:bg-blue-50 transition-all hover:scale-105 active:scale-95">
                Nuestra Historia
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-12 xl:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-start">
              <Reveal delay={0.4} className="col-span-7 mt-20" direction="right">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-800 shadow-2xl relative group">
                  <img src="/images/image-3.jpg" alt="Innovación" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>
              </Reveal>
              <Reveal delay={0.6} className="col-span-5" direction="up">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-800 shadow-2xl relative group border-4 border-slate-950 -ml-12 z-10">
                  <img src="/images/image-2.jpg" alt="Trabajo en equipo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:right-0 p-8 glass-card rounded-3xl shadow-2xl animate-float max-w-[280px] border-white/20 z-20 text-slate-950">
              <p className="font-bold text-lg leading-snug">
                "Innovamos no por la tecnología, sino por la <span className="text-primary italic">humanidad</span>."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
