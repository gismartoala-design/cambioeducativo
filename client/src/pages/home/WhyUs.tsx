import { Compass, Layers3, LineChart, Puzzle, UsersRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const threads = [
  ["T", "Transformación", "Procesos que conectan propósito, estrategia y cambio real."],
  ["E", "Ética", "Decisiones transparentes orientadas al bien común."],
  ["J", "Juntos", "Aprendizaje colaborativo con instituciones, empresas y comunidades."],
  ["I", "Innovación", "Soluciones creativas, aplicables y sostenibles."],
  ["D", "Desarrollo humano", "Capacidades que fortalecen personas y equipos."],
  ["O", "Organizaciones", "Culturas que aprenden, lideran y evolucionan."],
  ["S", "Sostenibilidad", "Impacto que permanece en el tiempo."],
];

const differentiators = [
  {
    title: "Diagnóstico contextual",
    desc: "Leemos cada realidad antes de diseñar soluciones.",
    icon: Compass,
  },
  {
    title: "Diseño a medida",
    desc: "Creamos rutas de aprendizaje y transformación según el público.",
    icon: Puzzle,
  },
  {
    title: "Acompañamiento cercano",
    desc: "Trabajamos con equipos, líderes y comunidades durante el proceso.",
    icon: UsersRound,
  },
  {
    title: "Resultados sostenibles",
    desc: "Medimos avances y dejamos capacidades instaladas.",
    icon: LineChart,
  },
];

export const WhyUs = () => {
  return (
    <section id="tejidos" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-primary">Modelo TEJIDOS</span>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl font-display">
                Cada hilo activa una forma de cambiar.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                TEJIDOS es una metáfora viva del Cambio Educativo. Personas, ideas y acciones se entrelazan para transformar instituciones, organizaciones y comunidades.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 rounded-lg border border-primary/10 bg-primary/5 p-6">
                <Layers3 className="mb-5 h-8 w-8 text-primary" />
                <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">Visión conectada</p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Integramos innovación, tecnología, estrategia y desarrollo humano para acompañar procesos de transformación con impacto sostenible.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.18}>
              <div className="grid gap-3">
                {threads.map(([letter, title, desc], index) => (
                  <div key={title} className="grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm md:grid-cols-[72px_1fr] md:items-center">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-black ${
                      index % 3 === 0
                        ? "bg-primary text-white"
                        : index % 3 === 1
                          ? "bg-turquoise/25 text-primary"
                          : "bg-accent/20 text-slate-900"
                    }`}>
                      {letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground font-display">{title}</h3>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10">
                  <Icon className="mb-5 h-7 w-7 text-accent" />
                  <h3 className="text-lg font-black text-foreground font-display">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
