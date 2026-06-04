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
    title: "Transformar.",
    desc: "Convertimos necesidades educativas en rutas claras de cambio.",
    icon: Sparkles,
  },
  {
    letter: "E",
    title: "Escuchar.",
    desc: "Partimos del contexto, la voz de las personas y sus desafíos reales.",
    icon: BookOpenCheck,
  },
  {
    letter: "J",
    title: "Juntar.",
    desc: "Conectamos instituciones, equipos y comunidades para aprender mejor.",
    icon: Network,
  },
  {
    letter: "I",
    title: "Innovar.",
    desc: "Diseñamos experiencias aplicables, creativas y con propósito.",
    icon: BrainCircuit,
  },
  {
    letter: "D",
    title: "Desarrollar.",
    desc: "Fortalecemos capacidades humanas, pedagógicas y organizacionales.",
    icon: UsersRound,
  },
  {
    letter: "O",
    title: "Orientar.",
    desc: "Acompañamos decisiones con estrategia, seguimiento y evidencia.",
    icon: Route,
  },
  {
    letter: "S",
    title: "Sostener.",
    desc: "Dejamos aprendizajes instalados para que el impacto permanezca.",
    icon: Target,
  },
];

const differentiators = [
  {
    title: "Diagnóstico contextual.",
    desc: "Leemos cada realidad antes de diseñar soluciones.",
    icon: Compass,
  },
  {
    title: "Diseño a medida.",
    desc: "Creamos rutas de aprendizaje y transformación según el público.",
    icon: Puzzle,
  },
  {
    title: "Acompañamiento cercano.",
    desc: "Trabajamos con equipos, líderes y comunidades durante el proceso.",
    icon: UsersRound,
  },
  {
    title: "Resultados sostenibles.",
    desc: "Medimos avances y dejamos capacidades instaladas.",
    icon: LineChart,
  },
];

export const WhyUs = () => {
  const threadOffsets = [
    "lg:mr-auto lg:ml-[4%] lg:-rotate-1",
    "lg:ml-auto lg:mr-[4%] lg:rotate-1",
    "lg:mr-auto lg:ml-[12%] lg:rotate-[0.5deg]",
    "lg:ml-auto lg:mr-[12%] lg:-rotate-1",
    "lg:mr-auto lg:ml-[4%] lg:rotate-1",
    "lg:ml-auto lg:mr-[4%] lg:-rotate-[0.5deg]",
    "lg:mx-auto lg:rotate-[0.5deg]",
  ];

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

        <div className="relative z-10 mx-auto mt-12 max-w-7xl lg:mt-14">
          <svg className="absolute left-8 top-4 h-[calc(100%-2rem)] w-12 overflow-visible text-primary/24 lg:hidden" viewBox="0 0 64 860" fill="none" aria-hidden="true">
            <path d="M32 6 C8 76 56 126 32 198 C8 270 56 320 32 392 C8 464 56 514 32 586 C8 658 56 716 32 854" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 14" />
            <path d="M42 8 C18 78 66 128 42 200 C18 272 66 322 42 394 C18 466 66 516 42 588 C18 660 66 718 42 856" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
            <path d="M22 8 C-2 78 46 128 22 200 C-2 272 46 322 22 394 C-2 466 46 516 22 588 C-2 660 46 718 22 856" stroke="hsl(var(--turquoise))" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
          </svg>

          <svg className="absolute inset-0 hidden h-full w-full overflow-visible lg:block" viewBox="0 0 1200 860" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M78 56 C255 20 594 48 788 168 C980 286 356 242 172 286 C-18 332 468 404 676 402 C888 402 248 512 78 520 C-80 530 564 650 788 638 C1010 626 600 792 424 796"
              stroke="hsl(var(--primary))"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="14 16"
              opacity="0.22"
            />
            <path
              d="M78 72 C270 40 604 68 788 184 C970 300 366 262 172 302 C-8 340 478 424 676 418 C888 412 258 532 78 536 C-70 540 574 670 788 654 C1000 638 608 808 424 812"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.45"
            />
            <path
              d="M78 40 C244 4 584 30 788 152 C1000 278 344 224 172 270 C-30 324 458 386 676 386 C900 386 236 496 78 504 C-92 514 552 632 788 622 C1030 610 586 774 424 780"
              stroke="hsl(var(--turquoise))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.34"
            />
          </svg>

          <div className="relative grid gap-4 md:gap-5">
          {threads.map((thread, index) => {
            const Icon = thread.icon;

            return (
              <Reveal key={thread.letter} delay={index * 0.04}>
                <article className={`group relative ml-16 max-w-xl rounded-lg bg-white p-4 shadow-[0_18px_45px_-30px_rgba(13,73,196,0.65)] ring-1 ring-primary/10 transition-transform duration-300 hover:scale-[1.015] md:ml-0 md:max-w-[30rem] lg:w-[34%] lg:max-w-none ${threadOffsets[index]}`}>
                  <div className="relative z-10 flex gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                      <div className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-turquoise/40" />
                      <div className="absolute -bottom-2 -left-2 h-8 w-8 rounded-[45%_55%_48%_52%] bg-accent/45" />
                      <Icon className="relative z-10 h-7 w-7 stroke-[1.9]" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 font-display text-lg font-black text-primary ring-1 ring-primary/10">
                        {thread.letter}
                      </div>
                      <h3 className="text-base font-black uppercase leading-tight text-slate-950 font-display">{thread.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{thread.desc}</p>
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
