import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Network,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const audiences = ["Instituciones educativas", "Empresas", "Comunidades"];

const valuePoints = [
  "Diagnóstico y ruta de cambio",
  "Formación docente y organizacional",
  "Innovación con impacto medible",
];

const impactPaths = [
  {
    icon: UsersRound,
    label: "Personas",
    text: "Fortalecemos capacidades, liderazgo y sentido humano.",
  },
  {
    icon: Building2,
    label: "Instituciones",
    text: "Ordenamos procesos para que el cambio sea sostenible.",
  },
  {
    icon: Network,
    label: "Comunidades",
    text: "Activamos redes de aprendizaje y acción colectiva.",
  },
];

export const Hero = () => {
  return (
    <section id="propuesta" className="relative h-[100svh] overflow-hidden bg-[#f7fbff] text-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-left-bottom opacity-90"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(247,251,255,0.98)_0%,rgba(247,251,255,0.95)_42%,rgba(247,251,255,0.78)_67%,rgba(247,251,255,0.42)_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_72%_30%,rgba(45,230,169,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_34%,rgba(13,73,196,0.12)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[linear-gradient(90deg,hsl(var(--accent)),hsl(var(--turquoise)),hsl(var(--primary)))]" />

      <div className="container relative z-10 mx-auto flex h-full items-center px-4 pb-5 pt-24 sm:px-6 sm:pb-6 lg:pb-8 lg:pt-28 [@media(max-height:720px)]:pt-20">
        <div className="grid w-full items-center gap-5 lg:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex max-w-full items-center gap-2 rounded-lg border border-primary/15 bg-white/88 px-3 py-1.5 text-xs font-black text-primary shadow-sm backdrop-blur sm:text-sm">
                <Sparkles className="h-4 w-4 shrink-0 text-accent" />
                <span className="truncate">Transformación educativa con propósito</span>
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-3 sm:mt-4 [@media(max-height:720px)]:mt-2">
                <p className="text-[0.7rem] font-black uppercase tracking-[0.28em] text-accent sm:text-xs">
                  Cambio Educativo
                </p>
                <h1 className="mt-2 max-w-4xl font-display text-[clamp(1.9rem,5.7vw,4.25rem)] font-black leading-[0.98] text-foreground [@media(max-height:720px)]:text-[clamp(1.65rem,5.1vw,3.45rem)]">
                  Tejemos educación con propósito para transformar realidades.
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base lg:text-[1.02rem] lg:leading-7 [@media(max-height:720px)]:line-clamp-4 [@media(max-height:720px)]:text-sm [@media(max-height:720px)]:leading-5">
                Somos una start-up social que acompaña procesos de transformación educativa y organizacional a través de la innovación, el aprendizaje y la acción colectiva. Trabajamos junto a instituciones, empresas y comunidades que creen que educar no es solo enseñar, sino crear oportunidades, fortalecer capacidades y generar cambios sostenibles con impacto real.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row [@media(max-height:720px)]:mt-3">
                <Button asChild size="lg" className="h-11 rounded-lg bg-primary px-5 text-sm font-black text-white shadow-xl shadow-primary/25 transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:h-12 sm:text-base">
                  <a href="#contacto">
                    Agenda una asesoría
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11 rounded-lg border-2 border-primary/20 bg-white/85 px-5 text-sm font-black text-primary shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-primary/5 sm:h-12 sm:text-base">
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-4 grid max-w-2xl gap-2 sm:grid-cols-3 [@media(max-height:680px)]:hidden">
                {audiences.map((audience) => (
                  <div key={audience} className="flex items-center gap-2 rounded-lg border border-white/80 bg-white/82 px-3 py-2 text-sm font-extrabold text-slate-700 shadow-sm backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-turquoise" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22} direction="left">
            <div className="relative mx-auto hidden w-full max-w-[480px] lg:block xl:max-w-[520px] [@media(max-height:760px)]:max-w-[440px]">
              <div className="absolute -left-3 top-8 hidden h-[78%] w-2 rounded-lg bg-[linear-gradient(180deg,hsl(var(--accent)),hsl(var(--turquoise)),hsl(var(--primary)))] shadow-xl sm:block" />

              <div className="relative overflow-hidden rounded-lg border border-white/75 bg-white/82 p-4 shadow-[0_35px_100px_-48px_rgba(13,73,196,0.95)] backdrop-blur-xl [@media(max-height:760px)]:p-3">
                <div className="grid gap-3 border-b border-slate-200/80 pb-3 sm:grid-cols-[3.25rem_1fr]">
                  <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/25">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">
                      Ruta de transformación
                    </p>
                    <p className="mt-1 font-display text-2xl font-black leading-tight text-primary [@media(max-height:760px)]:text-xl">
                      De la intención al cambio real.
                    </p>
                  </div>
                </div>

                <div className="mt-3 grid gap-2.5">
                  {valuePoints.map((point, index) => (
                    <motion.div
                      key={point}
                      className="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white/86 p-3 shadow-sm [@media(max-height:760px)]:p-2.5"
                      animate={{ y: [0, index === 1 ? -3 : 3, 0] }}
                      transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${index === 0 ? "bg-accent text-white" : index === 1 ? "bg-turquoise text-primary" : "bg-primary text-white"}`}>
                        {index === 0 ? <Lightbulb className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-black text-slate-950">{point}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 [@media(max-height:760px)]:hidden">
                          {index === 0
                            ? "Primero entendemos el contexto y priorizamos oportunidades."
                            : index === 1
                              ? "Luego formamos equipos capaces de sostener la mejora."
                              : "Finalmente medimos aprendizajes, decisiones y resultados."}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-3 [@media(max-height:760px)]:hidden">
                  {impactPaths.map((path, index) => {
                    const Icon = path.icon;

                    return (
                      <div key={path.label} className="rounded-lg border border-slate-200/80 bg-slate-50/90 p-3">
                        <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${index === 0 ? "bg-accent/15 text-accent" : index === 1 ? "bg-primary/12 text-primary" : "bg-turquoise/25 text-primary"}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-black text-slate-950">{path.label}</p>
                        <p className="mt-1 text-xs leading-snug text-slate-600">{path.text}</p>
                      </div>
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
