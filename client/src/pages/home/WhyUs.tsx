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
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const threads = [
  {
    letter: "T",
    title: "T - TRAZAR.",
    desc: "Diseñamos la ruta de cambio identificando las necesidades, desafíos y realidades específicas de cada entorno educativo u organizacional.",
    icon: Sparkles,
  },
  {
    letter: "E",
    title: "E - ENTRELAZAR.",
    desc: "Conectamos de forma empática a los actores clave: docentes, directivos, empresas y comunidades para activar la escucha activa.",
    icon: BookOpenCheck,
  },
  {
    letter: "J",
    title: "J - JUNTAR.",
    desc: "Unimos voluntades, capacidades y recursos bajo un mismo propósito, potenciando la fuerza de la acción colectiva.",
    icon: Network,
  },
  {
    letter: "I",
    title: "I - IMPULSAR.",
    desc: "Activamos la innovación pedagógica y social a través de experiencias de aprendizaje creativas, dinámicas y aplicables.",
    icon: BrainCircuit,
  },
  {
    letter: "D",
    title: "D - DESARROLLAR.",
    desc: "Fortalecemos el talento humano, las competencias pedagógicas y la cultura organizacional con un profundo sentido ético.",
    icon: UsersRound,
  },
  {
    letter: "O",
    title: "O - OPTIMIZAR.",
    desc: "Evaluamos y refinamos los procesos implementados, asegurando un acompañamiento estratégico basado en evidencias y resultados reales.",
    icon: Route,
  },
  {
    letter: "S",
    title: "S - SOSTENER.",
    desc: "Garantizamos que los aprendizajes queden firmemente instalados en el tejido institucional para que el impacto positivo permanezca en el tiempo.",
    icon: Target,
  },
];

const differentiators = [
  {
    title: "Diagnostico contextual.",
    desc: "Leemos cada realidad antes de disenar soluciones.",
    icon: Compass,
  },
  {
    title: "Diseno a medida.",
    desc: "Creamos rutas de aprendizaje y transformacion segun el publico.",
    icon: Puzzle,
  },
  {
    title: "Acompanamiento cercano.",
    desc: "Trabajamos con equipos, lideres y comunidades durante el proceso.",
    icon: UsersRound,
  },
  {
    title: "Resultados sostenibles.",
    desc: "Medimos avances y dejamos capacidades instaladas.",
    icon: LineChart,
  },
];

export const WhyUs = () => {
  const threadAreaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: threadAreaRef,
    offset: ["start 72%", "end 48%"],
  });
  const threadProgress = useTransform(scrollYProgress, [0, 1], [0.04, 1]);
  const threadGlow = useTransform(scrollYProgress, [0, 0.16, 1], [0, 0.95, 1]);

  const threadOffsets = [
    "lg:ml-[4%] lg:-rotate-1",
    "lg:ml-auto lg:mr-[6%] lg:rotate-1",
    "lg:ml-[12%] lg:rotate-[0.5deg]",
    "lg:ml-auto lg:mr-[14%] lg:-rotate-1",
    "lg:ml-[5%] lg:rotate-1",
    "lg:ml-auto lg:mr-[7%] lg:-rotate-[0.5deg]",
    "lg:ml-auto lg:mr-[24%] lg:rotate-[0.5deg]",
  ];

  return (
    <section id="tejidos" className="relative overflow-hidden bg-[#f7fbff] py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(13,73,196,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(13,73,196,0.04)_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="container mx-auto px-6">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="brand-kicker text-xs text-primary">Modelo TEJIDOS</span>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl font-display">
              Una forma propia de acompanar el cambio.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              TEJIDOS organiza nuestra manera de trabajar: escuchar, conectar y transformar cada proceso educativo con proposito.
            </p>
          </Reveal>
        </div>

        <div ref={threadAreaRef} className="relative z-10 mx-auto mt-14 max-w-7xl overflow-visible">
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
            viewBox="0 0 1200 980"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <pattern id="tejidos-texture" width="360" height="260" patternUnits="userSpaceOnUse">
                <image href="/images/foto-01-transparente.png" width="360" height="260" preserveAspectRatio="xMidYMid slice" opacity="0.92" />
              </pattern>
              <linearGradient id="tejidos-energy" x1="80" y1="90" x2="1060" y2="900" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="48%" stopColor="hsl(var(--turquoise))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <path
              d="M82 96 C276 34 438 112 604 166 C808 232 966 196 1084 112 C1158 60 1126 26 1078 50 C1018 82 1146 172 1038 250 C878 366 392 250 198 354 C44 438 220 562 492 526 C730 496 974 566 940 700 C904 836 652 882 526 780 C418 692 510 560 690 604 C868 646 788 816 1014 896"
              stroke="url(#tejidos-texture)"
              strokeWidth="46"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.16"
            />
            <motion.path
              d="M82 96 C276 34 438 112 604 166 C808 232 966 196 1084 112 C1158 60 1126 26 1078 50 C1018 82 1146 172 1038 250 C878 366 392 250 198 354 C44 438 220 562 492 526 C730 496 974 566 940 700 C904 836 652 882 526 780 C418 692 510 560 690 604 C868 646 788 816 1014 896"
              stroke="url(#tejidos-energy)"
              strokeWidth="34"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: threadProgress, opacity: threadGlow }}
            />
            <motion.path
              d="M82 96 C276 34 438 112 604 166 C808 232 966 196 1084 112 C1158 60 1126 26 1078 50 C1018 82 1146 172 1038 250 C878 366 392 250 198 354 C44 438 220 562 492 526 C730 496 974 566 940 700 C904 836 652 882 526 780 C418 692 510 560 690 604 C868 646 788 816 1014 896"
              stroke="rgba(255,255,255,0.54)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="24 20"
              style={{ pathLength: threadProgress, opacity: threadGlow }}
            />
          </svg>

          <div className="relative z-10 grid gap-7 lg:gap-8">
            {threads.map((thread, index) => {
              const Icon = thread.icon;

              return (
                <Reveal key={thread.letter} delay={index * 0.04}>
                  <article className={`relative max-w-xl rounded-lg bg-white p-5 shadow-md ring-1 ring-primary/10 transition-transform duration-300 hover:scale-[1.015] md:max-w-[34rem] lg:w-[28rem] ${threadOffsets[index]}`}>
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#0D49C4] text-white shadow-lg shadow-[#0D49C4]/20">
                        <Icon className="h-7 w-7 stroke-[1.9]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-base font-black uppercase leading-tight text-slate-950">
                          {thread.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                          {thread.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
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
