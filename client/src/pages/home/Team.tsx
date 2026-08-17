import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
 
const teamMembers = [
  {
    name: "Liderazgo pedagogico",
    role: "Vision y acompanamiento",
    description:
      "Guiamos procesos de transformacion educativa desde la escucha, la estrategia y la construccion de rutas con proposito.",
    image: "/images/PHOTO-2026-06-23-17-59-47.jpg",
  },
  {
    name: "Innovacion aplicada",
    role: "Diseno de experiencias",
    description:
      "Convertimos ideas en experiencias de aprendizaje que conectan creatividad, metodologias activas e impacto real.",
    image: "/images/IMG_1761.jpeg",
  },
  {
    name: "Trabajo con comunidades",
    role: "Articulacion y sostenibilidad",
    description:
      "Acompanamos a instituciones, educadores y comunidades para que el cambio educativo sea colectivo y perdurable.",
    image: "/images/PHOTO-2026-03-16-14-39-51.jpg",
  },
];

export const Team = () => {
  return (
    <section id="equipo" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,130,36,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.14),transparent_28%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="brand-kicker text-primary">Equipo de trabajo</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              El equipo que impulsa procesos de cambio educativo con proposito
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
              En Cambio Educativo creemos que toda transformacion profunda comienza con las personas. Nuestro equipo acompana a instituciones, educadores y comunidades en la construccion de experiencias de aprendizaje con innovacion, sentido humano y compromiso con un impacto real y sostenible.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={0.18 + index * 0.06}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-primary/10 bg-[#fffaf5] shadow-[0_22px_70px_-42px_rgba(22,78,135,0.45)] transition-transform duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.72)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-turquoise">{member.role}</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{member.name}</h3>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Cambio educativo
                  </div>
                  <p className="text-sm leading-7 text-slate-700">{member.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-6 text-sm font-black text-white shadow-xl shadow-primary/20 hover:bg-primary/90 sm:text-base">
              <a href="#contacto">
                Conversemos sobre tu proceso de cambio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};