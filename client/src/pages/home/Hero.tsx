import { motion } from "framer-motion";
import { ArrowRight, Building2, Network, Sparkles, UsersRound } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const signals = [
  "Transformación educativa",
  "Innovación con propósito",
  "Acción colectiva",
];

const impactPaths = [
  {
    icon: UsersRound,
    label: "Personas",
    text: "Desarrollo de capacidades con sentido humano.",
  },
  {
    icon: Building2,
    label: "Instituciones",
    text: "Procesos de cambio sostenibles y coherentes.",
  },
  {
    icon: Network,
    label: "Comunidades",
    text: "Aprendizaje colectivo para transformar realidades.",
  },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-[100svh] overflow-hidden bg-[#f5fbff] text-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-left-bottom opacity-95"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(245,251,255,0.98)_0%,rgba(245,251,255,0.94)_42%,rgba(245,251,255,0.72)_68%,rgba(245,251,255,0.38)_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_36%,rgba(13,73,196,0.10)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--turquoise)),hsl(var(--primary)))]" />

      <div className="container relative z-10 mx-auto flex h-full items-end px-4 sm:px-6">
        <div
          className="grid w-full items-center gap-4 pb-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr]"
          style={{ height: "calc(100svh - clamp(4.5rem, 11svh, 6.25rem))" }}
        >
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex max-w-full items-center gap-2 rounded-lg border border-primary/15 bg-white/85 px-3 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur sm:text-sm">
                <Sparkles className="h-4 w-4 shrink-0 text-accent" />
                <span className="truncate">Educación que se teje con propósito</span>
              </span>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-[clamp(0.75rem,2svh,1.25rem)]">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-accent sm:text-xs md:text-sm">
                  Cambio Educativo
                </p>
                <h1 className="mt-2 max-w-4xl text-[clamp(2rem,6.2vw,4.15rem)] font-black leading-[1] text-foreground font-display lg:text-[clamp(2.9rem,4.8vw,4.35rem)]">
                  Tejemos educación con propósito para transformar realidades.
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-[clamp(0.75rem,2svh,1.25rem)] max-w-3xl text-[clamp(0.9rem,1.35vw,1.03rem)] leading-relaxed text-slate-700 md:leading-7 [@media(max-height:650px)]:line-clamp-3">
                Somos una start-up social que acompaña procesos de transformación educativa y organizacional a través de la innovación, el aprendizaje y la acción colectiva. Trabajamos junto a instituciones, empresas y comunidades que creen que educar no es solo enseñar, sino crear oportunidades, fortalecer capacidades y generar cambios sostenibles con impacto real.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-[clamp(0.9rem,2.4svh,1.65rem)] flex flex-col gap-2.5 sm:flex-row">
                <Button asChild size="lg" className="h-11 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 sm:h-12 sm:text-base">
                  <a href="#contacto">
                    Agenda una asesoría
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11 rounded-lg border-2 border-primary/20 bg-white/80 px-5 text-sm font-bold text-primary backdrop-blur hover:bg-primary/5 sm:h-12 sm:text-base">
                  <a href="#servicios">Conoce nuestros servicios</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-[clamp(0.9rem,2.2svh,1.5rem)] flex max-w-3xl flex-wrap gap-2 [@media(max-height:690px)]:hidden">
                {signals.map((signal) => (
                  <div key={signal} className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm backdrop-blur sm:text-sm">
                    {signal}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25} direction="left">
            <div className="relative mx-auto hidden w-full max-w-[430px] lg:block xl:max-w-[460px] [@media(max-height:690px)]:max-w-[380px]">
              <div className="absolute -left-5 top-7 h-[84%] w-2.5 rounded-full bg-[linear-gradient(180deg,hsl(var(--accent)),hsl(var(--turquoise)),hsl(var(--primary)))] shadow-xl" />
              <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white/78 p-4 shadow-[0_35px_90px_-46px_rgba(13,73,196,0.9)] backdrop-blur-xl [@media(max-height:760px)]:p-3">
                <div className="border-b border-slate-200/70 pb-4 [@media(max-height:760px)]:pb-3">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">
                    La transformación se teje
                  </p>
                  <p className="mt-2 text-[clamp(1.45rem,2.5vw,1.9rem)] font-black leading-tight text-primary font-display">
                    Personas, ideas y acciones entrelazadas para crear impacto sostenible.
                  </p>
                </div>

                <div className="mt-4 grid gap-2.5 [@media(max-height:760px)]:mt-3 [@media(max-height:760px)]:gap-2">
                  {impactPaths.map((path, index) => {
                    const Icon = path.icon;

                    return (
                      <motion.div
                        key={path.label}
                        className="grid grid-cols-[2.4rem_1fr] items-center gap-3 rounded-lg border border-slate-200/80 bg-white/82 p-3 shadow-sm [@media(max-height:760px)]:p-2.5"
                        animate={{ x: [0, index % 2 === 0 ? 5 : -5, 0] }}
                        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            index === 0
                              ? "bg-accent text-white"
                              : index === 1
                                ? "bg-primary text-white"
                                : "bg-turquoise text-primary"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-foreground">{path.label}</p>
                          <p className="mt-0.5 text-xs leading-snug text-slate-600">{path.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
