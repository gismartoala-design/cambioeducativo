import { Reveal } from "@/components/ui/Reveal";

const ecosystemCards = [
  {
    number: "01",
    title: "La Escuela",
    subtitle: "Forma a las personas",
    desc: "Diplomados, cursos y talleres para docentes y directivos que quieren transformarse desde adentro.",
    accent: "bg-[#F7A545]",
    panel: "bg-[#FDF0D8]",
  },
  {
    number: "02",
    title: "Ruta ATI",
    subtitle: "Transforma instituciones",
    desc: "El camino de transformación institucional en 5 fases. Cada institución avanza según su momento.",
    accent: "bg-primary",
    panel: "bg-[#E8F0FB]",
  },
  {
    number: "03",
    title: "RETSO",
    subtitle: "Conecta y sostiene",
    desc: "Red de instituciones que ya están transformándose. Aprendizaje colectivo e intercambio real.",
    accent: "bg-turquoise",
    panel: "bg-[#E6FBF7]",
  },
];

export const Ecosystem = () => {
  return (
    <section id="ecosistema" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.28em] text-primary">
              Ecosistema de transformación
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Un conjunto de escenarios donde la transformación cobra vida.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">
              Un conjunto de escenarios donde estudiantes, docentes, familias y directivos, así como sistemas, procesos, currículo y prácticas, se transforman para crear un proyecto educativo innovador y con propósito.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ecosystemCards.map((card, index) => (
            <Reveal key={card.title} delay={0.15 + index * 0.05}>
              <article className={`overflow-hidden rounded-lg border border-primary/10 ${card.panel} shadow-lg shadow-primary/5`}>
                <div className={`px-6 py-3 text-center text-sm font-black text-white ${card.accent}`}>
                  {card.number}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl font-black text-primary">{card.title}</h3>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-accent">
                    {card.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{card.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
