import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Consultoría Educativa",
      desc: "Diagnóstico, planificación y ejecución de estrategias para fortalecer modelos educativos.",
      img: "/images/service-3.jpg",
      color: "bg-blue-50"
    },
    {
      title: "Capacitación Docente",
      desc: "Programas dinámicos que potencian habilidades pedagógicas y herramientas tecnológicas.",
      img: "/images/service-1.jpg",
      color: "bg-orange-50"
    },
    {
      title: "Diseño de Proyectos",
      desc: "Creamos experiencias de aprendizaje relevantes, adaptadas a cada realidad.",
      img: "/images/service-2.jpg",
      color: "bg-slate-50"
    },
    {
      title: "Innovación Institucional",
      desc: "Acompañamos procesos de cambio para construir organizaciones ágiles y modernas.",
      img: "/images/hero-bg.png",
      color: "bg-blue-50"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <Reveal>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">Lo que tejemos juntos</h2>
          </Reveal>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:items-center group`}>
              <div className="flex-1">
                <Reveal direction={index % 2 === 1 ? 'right' : 'left'}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </Reveal>
              </div>
              
              <div className="flex-1 space-y-6">
                <Reveal delay={0.2}>
                  <h3 className="text-3xl font-bold font-display">{service.title}</h3>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <Button variant="ghost" className="text-primary p-0 hover:bg-transparent hover:text-accent text-lg font-medium group-hover:translate-x-2 transition-all">
                    Saber más <ArrowUpRight className="ml-2 w-5 h-5" />
                  </Button>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
