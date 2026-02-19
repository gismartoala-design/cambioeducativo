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
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-4">
                Innovación Educativa
              </span>
            </Reveal>
            
            <Reveal delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] text-foreground">
                Impulsamos el <span className="text-primary">cambio</span> que la educación necesita.
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Acompañamos a instituciones y docentes en la creación de experiencias de aprendizaje innovadoras, humanas y alineadas con el futuro.
              </p>
            </Reveal>

            <Reveal delay={0.5} className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-primary text-white px-8 h-14 text-lg hover:bg-primary/90 shadow-lg shadow-primary/25">
                Hablemos de tu proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-2 hover:bg-blue-50/50">
                <PlayCircle className="mr-2 w-5 h-5 text-accent" />
                Ver Video
              </Button>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.6} direction="left">
              <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-bg.png" 
                  alt="Educación del futuro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 text-white p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <p className="font-medium text-lg">"La educación no solo debe adaptarse al mundo… debe liderar su transformación."</p>
                </div>
              </div>
            </Reveal>
            
            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 rounded-full animate-pulse delay-700" />
            <div className="absolute bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};
