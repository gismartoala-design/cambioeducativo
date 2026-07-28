import { ArrowRight, Building2, GraduationCap, Handshake } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    title: "Instituciones Educativas",
    question: "\u00bfEres una Instituci\u00f3n Educativa?",
    desc: "Acompa\u00f1amos colegios, equipos directivos y docentes con rutas pedag\u00f3gicas, innovaci\u00f3n y formaci\u00f3n aplicada.",
    action: "Ver soluciones pedag\u00f3gicas",
    href: "#servicios",
    icon: GraduationCap,
    accent: "bg-primary text-white",
  },
  {
    title: "Empresas u Organizaciones",
    question: "\u00bfEres una Empresa u Organizaci\u00f3n?",
    desc: "Dise\u00f1amos experiencias para fortalecer cultura, liderazgo, aprendizaje organizacional y gesti\u00f3n del cambio.",
    action: "Ver desarrollo organizacional",
    href: "#servicios",
    icon: Building2,
    accent: "bg-accent text-white",
  },
  {
    title: "ONG o Fundaci\u00f3n",
    question: "\u00bfEres una ONG o Fundaci\u00f3n?",
    desc: "Co-creamos proyectos de impacto educativo y social con comunidades, aliados y objetivos medibles.",
    action: "Ver proyectos de impacto",
    href: "#impacto",
    icon: Handshake,
    accent: "bg-turquoise text-primary",
  },
];

export const Audiences = () => {
  return (
    <section id="publicos" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(13,73,196,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(13,73,196,0.035)_1px,transparent_1px)] bg-[size:78px_78px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="brand-kicker text-xs text-primary">{"Soluciones por p\u00fablico"}</span>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Cada contexto necesita una ruta distinta.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {"Organizamos nuestras soluciones para que colegios, empresas y organizaciones sociales encuentren r\u00e1pidamente el camino adecuado."}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <Reveal key={audience.title} delay={0.12 + index * 0.06} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-primary/10 bg-white p-6 shadow-lg shadow-primary/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${audience.accent} shadow-lg shadow-primary/10`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="mt-6 min-h-[1rem] text-xs font-black uppercase tracking-[0.24em] text-accent">{audience.title}</p>
                    <h3 className="mt-3 min-h-[4rem] font-display text-2xl font-black leading-tight text-primary">
                      {audience.question}
                    </h3>
                    <p className="mt-4 min-h-[5.25rem] flex-1 text-sm font-medium leading-relaxed text-slate-600">
                      {audience.desc}
                    </p>
                  </div>
                  <Button asChild className="mt-6 h-12 rounded-lg bg-primary font-bold text-white hover:bg-primary/90">
                    <a href={audience.href}>
                      {audience.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
