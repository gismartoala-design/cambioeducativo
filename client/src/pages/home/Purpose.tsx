import { CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const commitments = [
  "Desarrollo de las personas: Potenciamos habilidades y competencias prácticas para la educación",
  "Innovación con propósito: Diseñamos soluciones que responden a necesidades reales.",
  "Un sueño: imaginamos un futuro donde la educación que cambie vidas.",
];

export const Purpose = () => {
  return (
    <section id="nos-mueve" className="relative overflow-hidden bg-[#fff8f1] py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,130,36,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(22,78,135,0.08)_1px,transparent_1px)] bg-[size:84px_84px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg bg-primary p-8 text-white md:p-10">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-turquoise">
                  Qué nos mueve
                </span>
                <p className="mt-6 font-display text-3xl font-black leading-tight md:text-4xl">
                  Impulsamos una transformación educativa y social que fortalezca personas, instituciones y comunidades
                </p>
              </div>
            </div>
          </Reveal>

          <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 md:p-8">
            <Reveal delay={0.12}>
              <p className="font-display text-2xl font-bold leading-relaxed text-slate-800">
                Te acompañamos a generar cambios, a través del desarrollo de capacidades, la innovación con propósito y la construcción de soluciones.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3">
              {commitments.map((commitment, index) => (
                <Reveal key={commitment} delay={0.18 + index * 0.05}>
                  <div className="flex h-full gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm font-semibold leading-relaxed text-slate-700">{commitment}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
