import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake, Lightbulb, Network } from "lucide-react";

const pillars = [
  {
    title: "Personas",
    desc: "Fortalecemos capacidades con sentido humano.",
    icon: HeartHandshake,
  },
  {
    title: "Innovaci\u00f3n",
    desc: "Dise\u00f1amos soluciones aplicables y con prop\u00f3sito.",
    icon: Lightbulb,
  },
  {
    title: "Comunidad",
    desc: "Activamos redes para lograr impacto sostenible.",
    icon: Network,
  },
];

const values = [
  {
    title: "\u00c9tica",
    desc: "Integridad que construye una sociedad m\u00e1s justa y orientada al bien com\u00fan.",
  },
  {
    title: "Sentido humano",
    desc: "Las personas y su dignidad son nuestro centro.",
  },
  {
    title: "Esperanza activa",
    desc: "Convicci\u00f3n de que todas las realidades pueden cambiar.",
  },
  {
    title: "Coherencia",
    desc: "Alineamos lo que pensamos, decimos y hacemos.",
  },
  {
    title: "Transparencia",
    desc: "Claridad en nuestros procesos, resultados y aprendizajes.",
  },
];

export const About = () => {
  return (
    <section id="quienes-somos" className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-turquoise">{"Qui\u00e9nes somos"}</span>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-6xl font-display">
                {"Educaci\u00f3n con prop\u00f3sito para transformar realidades."}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                {"Somos una startup social que acompa\u00f1a procesos de transformaci\u00f3n educativa y organizacional a trav\u00e9s de la innovaci\u00f3n, el aprendizaje y la acci\u00f3n colectiva."}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 grid gap-3">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${index === 0 ? "bg-turquoise/20 text-turquoise" : index === 1 ? "bg-accent/20 text-accent" : "bg-primary/30 text-blue-200"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">{pillar.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal delay={0.12}>
              <div className="rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/10 md:p-8">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-accent">Nuestra historia</span>
                <p className="mt-4 text-lg leading-relaxed text-slate-200">
                  {"Cambio Educativo naci\u00f3 de una convicci\u00f3n compartida: la educaci\u00f3n s\u00ed puede transformarlo todo. Unimos experiencia, innovaci\u00f3n y prop\u00f3sito para acompa\u00f1ar procesos de cambio que devuelvan a la educaci\u00f3n su poder m\u00e1s profundo: transformar vidas y construir mejores futuros."}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              <Reveal delay={0.18}>
                <div className="h-full rounded-lg border border-turquoise/25 bg-turquoise/10 p-6">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-turquoise">{"Misi\u00f3n"}</span>
                  <p className="mt-4 leading-relaxed text-slate-200">
                    {"Acompa\u00f1amos procesos de transformaci\u00f3n social e institucional donde la innovaci\u00f3n, la \u00e9tica y el sentido humano son motores de impacto sostenible."}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="h-full rounded-lg border border-accent/25 bg-accent/10 p-6">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-accent">{"Visi\u00f3n 2035"}</span>
                  <p className="mt-4 leading-relaxed text-slate-200">
                    {"Tejer una red latinoamericana de transformaci\u00f3n educativa y social con comunidades, instituciones y personas que aprenden y lideran con prop\u00f3sito."}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black font-display">Valores institucionales</h3>
                  <div className="h-1 flex-1 bg-[linear-gradient(90deg,hsl(var(--turquoise)),hsl(var(--accent)))]" />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {values.map((value) => (
                    <div key={value.title} className="rounded-lg border border-white/10 bg-slate-950 p-4">
                      <h4 className="text-sm font-bold text-white">{value.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <Button asChild size="lg" className="h-14 rounded-lg bg-white px-7 font-bold text-slate-950 hover:bg-turquoise">
                <a href="#nos-mueve">
                  {"Qu\u00e9 nos mueve"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
