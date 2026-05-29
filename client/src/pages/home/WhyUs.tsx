import {
  BookOpenCheck,
  BrainCircuit,
  Compass,
  Handshake,
  Layers3,
  LineChart,
  Network,
  Puzzle,
  Route,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const threads = [
  {
    letter: "T",
    title: "Transformar",
    desc: "Convertimos necesidades educativas en rutas claras de cambio.",
    icon: Sparkles,
  },
  {
    letter: "E",
    title: "Escuchar",
    desc: "Partimos del contexto, la voz de las personas y sus desafíos reales.",
    icon: BookOpenCheck,
  },
  {
    letter: "J",
    title: "Juntar",
    desc: "Conectamos instituciones, equipos y comunidades para aprender mejor.",
    icon: Network,
  },
  {
    letter: "I",
    title: "Innovar",
    desc: "Diseñamos experiencias aplicables, creativas y con propósito.",
    icon: BrainCircuit,
  },
  {
    letter: "D",
    title: "Desarrollar",
    desc: "Fortalecemos capacidades humanas, pedagógicas y organizacionales.",
    icon: UsersRound,
  },
  {
    letter: "O",
    title: "Orientar",
    desc: "Acompañamos decisiones con estrategia, seguimiento y evidencia.",
    icon: Route,
  },
  {
    letter: "S",
    title: "Sostener",
    desc: "Dejamos aprendizajes instalados para que el impacto permanezca.",
    icon: Target,
  },
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
    <section id="tejidos" className="relative overflow-hidden bg-[#f7fbff] py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(13,73,196,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(13,73,196,0.04)_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="container mx-auto px-6">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="brand-kicker text-xs text-primary">Modelo TEJIDOS</span>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl font-display">
              Una forma propia de acompañar el cambio.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              TEJIDOS organiza nuestra manera de trabajar: escuchar, conectar y transformar cada proceso educativo con propósito.
            </p>
          </Reveal>
        </div>

        <div className="relative z-10 mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {threads.map((thread, index) => {
            const Icon = thread.icon;
            const isLast = index === threads.length - 1;

            return (
              <Reveal key={thread.letter} delay={index * 0.04}>
                <article className={`group h-full overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-30px_rgba(13,73,196,0.65)] ring-1 ring-primary/10 transition-transform hover:-translate-y-1 ${isLast ? "lg:col-start-2" : ""}`}>
                  <div className="relative flex min-h-[150px] items-center justify-center overflow-hidden bg-primary p-7 text-white">
                    <div className="absolute -right-9 -top-9 h-28 w-28 rounded-full bg-turquoise/18" />
                    <div className="absolute -bottom-12 left-5 h-28 w-28 rotate-12 rounded-[45%_55%_48%_52%] bg-accent/25" />
                    <Icon className="relative z-10 h-14 w-14 stroke-[1.8]" />
                    <span className="absolute left-4 top-3 font-display text-5xl font-black leading-none text-white/16">
                      {thread.letter}
                    </span>
                  </div>
                  <div className="p-5 text-center">
                    <div className="mx-auto -mt-9 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white font-display text-2xl font-black text-primary shadow-lg ring-1 ring-primary/10">
                      {thread.letter}
                    </div>
                    <h3 className="text-lg font-black uppercase leading-tight text-slate-950 font-display">{thread.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">{thread.desc}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="relative z-10 mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
