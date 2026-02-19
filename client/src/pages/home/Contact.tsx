import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
            El cambio empieza con una decisión.
          </h2>
        </Reveal>
        
        <Reveal delay={0.3} width="100%">
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            La educación evoluciona. Tu institución también puede hacerlo.
          </p>
        </Reveal>

        <Reveal delay={0.5} width="100%">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 rounded-full h-16 px-10 text-lg font-bold shadow-xl">
              Agenda una asesoría
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full h-16 px-10 text-lg">
              Escríbenos
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
