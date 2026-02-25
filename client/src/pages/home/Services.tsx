import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Consultoría Estratégica",
      desc: "Diagnósticos profundos para identificar brechas y oportunidades de transformación en tu modelo educativo actual.",
      img: "/images/image-4.jpg",
      tags: ["Diagnóstico", "Planificación", "Modelos"]
    },
    {
      title: "Capacitación de Vanguardia",
      desc: "Empoderamos a tu equipo docente con las metodologías y herramientas tecnológicas más disruptivas del sector.",
      img: "/images/image-2.jpg",
      tags: ["Pedagogía", "Tecnología", "Soft Skills"]
    },
    {
      title: "Diseño de Experiencias",
      desc: "Creamos ecosistemas de aprendizaje que cautivan, inspiran y generan resultados académicos extraordinarios.",
      img: "/images/image-1.jpg",
      tags: ["UX Learning", "Curriculum", "Innovación"]
    },
    {
      title: "Arquitectura Institucional",
      desc: "Acompañamos la evolución de tu organización hacia una cultura ágil, moderna y centrada en el estudiante.",
      img: "/images/image-5.jpg",
      tags: ["Liderazgo", "Cultura", "Gestión"]
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <Reveal>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Portafolio de Impacto</span>
            <h2 className="text-5xl md:text-7xl font-extrabold font-display mt-4 max-w-2xl leading-[0.9]">
              Creamos el futuro <br /> <span className="text-gradient">junto a ti.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-muted-foreground max-w-sm mb-2 border-l-2 border-primary/20 pl-6">
              Estrategias holísticas para una educación en constante evolución.
            </p>
          </Reveal>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:items-center group`}>
              <div className="flex-1 relative">
                <Reveal direction={index % 2 === 1 ? 'right' : 'left'}>
                  <div className="relative">
                    <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Decorative Background Box */}
                    <div className={`absolute -inset-4 border-2 border-primary/10 rounded-[3.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700 z-0 ${index % 2 === 1 ? 'left-8' : 'right-8'}`} />
                  </div>
                </Reveal>
              </div>

              <div className="flex-1 space-y-8 relative z-20">
                <Reveal delay={0.2}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-widest border border-slate-100 hover:bg-slate-100 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold font-display leading-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </Reveal>

                <Reveal delay={0.3}>
                  <p className="text-2xl text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="flex flex-col gap-3 mb-8">
                    {["Enfoque personalizado", "Resultados medibles", "Soporte constante"].map(item => (
                      <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="rounded-full px-10 h-16 border-2 font-bold text-lg hover:bg-primary hover:text-white hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 group">
                    Descubrir servicio <ArrowUpRight className="ml-2 w-6 h-6" />
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
