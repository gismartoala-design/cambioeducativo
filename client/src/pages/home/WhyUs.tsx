import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

export const WhyUs = () => {
  const features = [
    {
      title: "Soluciones Reales",
      desc: "Diseñamos soluciones educativas reales y aplicables a tu contexto específico.",
      icon: "🎯"
    },
    {
      title: "Innovación + Pedagogía",
      desc: "Integramos innovación, tecnología y pedagogía de manera orgánica.",
      icon: "🚀"
    },
    {
      title: "Impacto Sostenible",
      desc: "Trabajamos de la mano con cada institución para lograr cambios que perduren.",
      icon: "🌱"
    },
    {
      title: "Estrategias a Medida",
      desc: "No ofrecemos fórmulas genéricas. Creamos estrategias únicas para ti.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-4xl font-bold font-display mb-6">¿Por qué elegirnos?</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-muted-foreground">
              Más que consultores, somos aliados estratégicos en tu transformación educativa.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1 + 0.3} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
