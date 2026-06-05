import { ArrowRight, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const commitments = [
  "Comunidades conectadas: Tejemos redes de apoyo y colaboración entre el entorno escolar, social y empresarial.",
  "Formación Docente: Potenciamos habilidades y competencias prácticas en los líderes del aula.",
  "Herramientas de Innovación: Diseñamos metodologías y soluciones creativas adaptadas a cada contexto.",
  "Impacto Sostenible: Aseguramos que las estrategias sigan funcionando a largo plazo.",
];

export const Purpose = () => {
  return (
    <section id="nos-mueve" className="relative overflow-hidden bg-[#fff8f1] py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,130,36,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(13,73,196,0.08)_1px,transparent_1px)] bg-[size:84px_84px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg bg-primary p-8 text-white md:p-10">
              <div>
                <div className="mb-8 inline-flex rounded-lg bg-white px-4 py-3 shadow-lg shadow-slate-950/10">
                  <img src="/images/logo.png" alt="Cambio Educativo" className="h-14 w-auto" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-turquoise">Qué nos mueve</span>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl font-display">
                  Cambiar la educación para cambiar realidades.
                </h2>
              </div>
              <p className="mt-10 text-lg leading-relaxed text-blue-50">
                Queremos impulsar procesos de transformación educativa y social que fortalezcan personas, instituciones y comunidades.
              </p>
            </div>
          </Reveal>

          <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 md:p-8">
            <Reveal delay={0.12}>
              <p className="text-2xl font-bold leading-relaxed text-slate-800 font-display">
                Acompañamos el desarrollo de capacidades, la innovación con propósito y la construcción de soluciones que generen cambios reales y sostenibles en el tiempo.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitments.map((commitment, index) => (
                <Reveal key={commitment} delay={0.18 + index * 0.05}>
                  <div className="flex h-full gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm font-semibold leading-relaxed text-slate-700">{commitment}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <Button asChild size="lg" className="mt-8 h-14 rounded-lg bg-accent px-7 font-bold text-white hover:bg-accent/90">
                <a href="#servicios">
                  Explorar servicios
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
