import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export const WhyUs = () => {
  const features = [
    {
      title: "Soluciones Reales",
      desc: "Diseñamos soluciones educativas reales y aplicables a tu contexto específico.",
      icon: "🎯",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Innovación + Pedagogía",
      desc: "Integramos innovación, tecnología y pedagogía de manera orgánica.",
      icon: "🚀",
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      title: "Impacto Sostenible",
      desc: "Trabajamos de la mano con cada institución para lograr cambios que perduren.",
      icon: "🌱",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Estrategias a Medida",
      desc: "No ofrecemos fórmulas genéricas. Creamos estrategias únicas para ti.",
      icon: "✨",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Diferenciales</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">¿Por qué <span className="text-primary">Elegirnos</span>?</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transformamos la educación mediante un enfoque centrado en la <span className="text-foreground font-semibold underline decoration-accent/30 underline-offset-4">experiencia humana</span> y resultados tangibles.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1 + 0.3} className="h-full">
              <motion.div
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.02
                }}
                className="h-full p-8 rounded-3xl bg-white border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-500 group relative overflow-hidden flex flex-col min-h-[340px]"
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-5xl mb-8 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.desc}
                  </p>

                  <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-1 bg-primary rounded-full" />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
