import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight">
                Nuestra esencia es <span className="text-blue-400">transformar</span> desde adentro.
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg text-slate-300 leading-relaxed">
                Somos un equipo apasionado por transformar la educación. Creemos en el poder de las ideas, en la innovación como motor de crecimiento y en las personas como el centro de todo proceso educativo.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-2 text-orange-400">Nuestro Propósito</h3>
                <p className="text-slate-200">
                  Inspirar, diseñar e implementar experiencias educativas que preparen a las personas para el presente y el futuro.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 border-none">
                Conoce al equipo
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0.4} className="mt-12">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
                <img src="/images/image-3.jpg" alt="Team member" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
                <img src="/images/image-2.jpg" alt="Team member" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
