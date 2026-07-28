import { ArrowUpRight, Building2, GraduationCap, Handshake, School } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Acompanamiento para la transformacion",
    desc: "Acompanamos a escuelas, colegios, centros infantiles, institutos y universidades en procesos de innovacion, liderazgo y mejora organizacional.",
    img: "/images/image-4.jpg",
    audience: "Instituciones educativas",
    result: "Instituciones con una ruta de mejora clara, equipos alineados y capacidades instaladas para sostener el cambio.",
    icon: School,
  },
  {
    title: "Formacion y capacitacion",
    desc: "Disenamos experiencias de aprendizaje para fortalecer capacidades pedagogicas, tecnologicas, socioemocionales y de liderazgo educativo.",
    img: "/images/image-2.jpg",
    audience: "Docentes y directivos",
    result: "Docentes y lideres con herramientas aplicables para mejorar sus practicas y acompanar aprendizajes significativos.",
    icon: GraduationCap,
  },
  {
    title: "Aprendizaje organizacional",
    desc: "Creamos soluciones de formacion, cultura e innovacion para empresas y organizaciones que quieren desarrollar equipos con proposito.",
    img: "/images/image-5.jpg",
    audience: "Crecimiento y desarrollo",
    result: "Equipos fortalecidos, cultura de aprendizaje activa y procesos formativos conectados con objetivos institucionales.",
    icon: Building2,
  },
  {
    title: "Proyectos sociales y comunitarios",
    desc: "Trabajamos con fundaciones, ONGs, organismos internacionales y comunidades para impulsar capacidades e impacto sostenible.",
    img: "/images/image-3.jpg",
    audience: "ONGs y comunidad",
    result: "Proyectos con enfoque humano, participacion comunitaria y resultados sostenibles en el territorio.",
    icon: Handshake,
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="relative overflow-hidden bg-primary/5 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(22,78,135,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(22,78,135,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-14">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.28em] text-primary">Que hacemos</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">Rutas de cambio para cada comunidad</h2>
          </Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="group grid h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 lg:grid-cols-[0.82fr_1.18fr]">
                  <div className="relative min-h-[260px] overflow-hidden bg-slate-100">
                    <img src={service.img} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary shadow-lg"><Icon className="h-6 w-6" /></div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <span className="text-xs font-black uppercase tracking-[0.22em] text-accent">{service.audience}</span>
                    <h3 className="mt-3 font-display text-3xl font-black text-foreground">{service.title}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{service.desc}</p>
                    <div className="mt-5 rounded-lg border border-primary/10 bg-primary/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Resultado esperado</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">{service.result}</p>
                    </div>
                    <Button asChild variant="outline" className="mt-7 h-11 w-fit rounded-lg border-2 px-5 font-bold hover:bg-primary hover:text-white">
                      <a href="#contacto">Conversar<ArrowUpRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
