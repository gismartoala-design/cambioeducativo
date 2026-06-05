import { ArrowRight, BadgeCheck, GraduationCap, UsersRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  {
    title: "Laboratorios de Innovación Pedagógica",
    result: "+100 docentes capacitados en metodologías activas.",
    desc: "Espacios prácticos para transformar la planificación, la experiencia de aula y la evaluación.",
    image: "/images/service-1.jpg",
    alt: "Cambio Educativo - Innovación Pedagógica con docentes",
    icon: GraduationCap,
  },
  {
    title: "Rutas de Aprendizaje Organizacional",
    result: "Equipos alineados alrededor de objetivos compartidos.",
    desc: "Procesos de formación para empresas y organizaciones que necesitan aprender, adaptarse y colaborar mejor.",
    image: "/images/service-2.jpg",
    alt: "Cambio Educativo - Desarrollo Organizacional",
    icon: UsersRound,
  },
  {
    title: "Proyectos de Impacto Comunitario",
    result: "Redes educativas activadas con propósito social.",
    desc: "Diseño y acompañamiento de iniciativas junto a comunidades, fundaciones y aliados estratégicos.",
    image: "/images/service-3.jpg",
    alt: "Cambio Educativo - Proyectos de Impacto Social",
    icon: BadgeCheck,
  },
];

export const ImpactPortfolio = () => {
  return (
    <section id="impacto" className="relative overflow-hidden bg-[#f7fbff] py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_18%,rgba(80,235,192,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(255,128,31,0.14),transparent_28%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <div>
              <span className="brand-kicker text-xs text-primary">Portafolio de impacto</span>
              <h2 className="mt-4 font-display text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Proyectos que muestran cómo se aplica TEJIDOS.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:ml-auto">
              Una muestra de programas que combinan diagnóstico, formación, innovación y acompañamiento para dejar capacidades instaladas.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.title} delay={0.12 + index * 0.06}>
                <article className="group h-full overflow-hidden rounded-lg border border-primary/10 bg-white shadow-lg shadow-primary/5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">Caso destacado</p>
                    <h3 className="mt-3 font-display text-2xl font-black leading-tight text-primary">{project.title}</h3>
                    <p className="mt-4 rounded-lg bg-turquoise/18 px-4 py-3 text-sm font-black leading-relaxed text-primary">
                      {project.result}
                    </p>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">{project.desc}</p>
                    <a href="#contacto" className="mt-5 inline-flex items-center text-sm font-black text-primary transition-colors hover:text-accent">
                      Conversar sobre un proyecto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
