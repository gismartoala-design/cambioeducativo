import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPatternDivider } from "@/components/ui/SectionPatternDivider";

const actionGallery = [
  {
    number: "1",
    title: "Hacemos conviccion.",
    image: "/images/image-1.jpg",
    frame: "lg:w-[24%] lg:left-[3%] lg:top-[4rem] lg:z-10",
    imageHeight: "lg:h-[320px]",
  },
  {
    number: "2",
    title: "Tejemos comunidad.",
    image: "/images/image-3.jpg",
    frame: "lg:w-[31%] lg:left-[30%] lg:top-0 lg:z-20",
    imageHeight: "lg:h-[420px]",
  },
  {
    number: "3",
    title: "Tejemos capacidades.",
    image: "/images/ANAI%2010mo.jpeg",
    frame: "lg:w-[24%] lg:right-[4%] lg:top-[2.75rem] lg:z-10",
    imageHeight: "lg:h-[340px]",
  },
];

const impactMetrics = [
  { value: 24, suffix: "", label: "Proyectos de transformacion educativa" },
  { value: 4200, suffix: "", label: "Personas impactadas" },
  { value: 120, suffix: "", label: "Recursos pedagogicos" },
  { value: 1500, suffix: "+", label: "Capacitaciones a docentes" },
  { value: 50, suffix: "+", label: "Consultorias nacionales e internacionales" },
];

const institutionalPrinciples = [
  "Sentido Humano: Ponemos a las personas en el corazon de cada proceso educativo.",
  "Esperanza activa: Trabajamos para encender en otros la esperanza en que pueden transformar su realidad.",
  "Transformacion social: Creemos que toda innovacion solo tiene sentido si contribuye a construir una sociedad mas justa y equitativa.",
  "Coherencia: Vivimos lo que ensenamos y ensenamos lo que creemos.",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 45;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      setDisplayValue(Math.round(value * progress));

      if (frame >= totalFrames) {
        window.clearInterval(timer);
        setDisplayValue(value);
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span className="font-display text-4xl font-black leading-none text-primary md:text-5xl">
      {suffix}
      {displayValue.toLocaleString("en-US")}
    </span>
  );
}

export default function Story() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-950 py-28 text-white md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <img src="/images/image-4.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-28" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.76),rgba(2,6,23,0.48))]" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <Reveal>
                <div>
                  <p className="brand-kicker text-xs text-turquoise">Quienes somos</p>
                  <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.55rem,7.4vw,7rem)] font-black leading-[0.88]">
                    <span className="block text-white/78">La</span>
                    <span className="block text-white">Historia</span>
                    <span className="block text-primary">de Cambio</span>
                    <span className="block text-white">Educativo.</span>
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
                  Somos una empresa con horizonte social, que acompana la transformacion de personas, instituciones y organizaciones que quieren tejer educacion con proposito para cambiar el Ecuador, la region y el mundo.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="brand" />

        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="mb-12 max-w-4xl">
                <h2 className="font-display text-3xl font-black leading-[0.9] text-primary md:text-4xl lg:whitespace-nowrap">
                  Cambio Educativo en Accion
                </h2>
              </div>
            </Reveal>

            <div className="relative mx-auto grid max-w-[420px] gap-6 sm:max-w-[560px] lg:h-[470px] lg:max-w-[1220px] lg:block">
              {actionGallery.map((moment, index) => (
                <motion.article
                  key={moment.number}
                  className={`group relative overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_28px_70px_-45px_rgba(15,23,42,0.45)] lg:absolute ${moment.frame}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={`relative h-[320px] overflow-hidden bg-slate-100 ${moment.imageHeight}`}>
                    <img src={moment.image} alt={moment.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent p-6">
                      <span className="text-sm font-black text-white/85">{moment.number}</span>
                      <h3 className="mt-2 font-display text-[1.9rem] font-black leading-none text-white md:text-[2.1rem]">{moment.title}</h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {impactMetrics.map((metric, index) => (
                <Reveal key={metric.label} delay={0.12 + index * 0.05}>
                  <article className="rounded-[1.5rem] border border-primary/10 bg-primary/5 p-6 shadow-[0_20px_45px_-35px_rgba(22,78,135,0.55)]">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    <p className="mt-3 text-sm font-bold leading-relaxed text-slate-700">{metric.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="orange" />

        <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <Reveal>
                <div>
                  <p className="brand-kicker text-xs text-turquoise">Valores institucionales</p>
                  <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-tight md:text-5xl">Lo que guia cada proceso que acompanamos.</h2>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-base leading-relaxed text-slate-200 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.75)] md:p-8">
                  {institutionalPrinciples.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-turquoise" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="turquoise" />

        <section className="bg-primary/5 py-18 md:py-24">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Lo que creemos</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">El cambio se sostiene cuando las personas aprenden, lideran y actuan juntas.</h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 md:p-8">
                <p className="text-lg leading-relaxed text-slate-700">Nuestra mision es impulsar procesos de transformacion colectiva a traves de la educacion con sentido, la innovacion con proposito y la justicia como base de toda accion.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
