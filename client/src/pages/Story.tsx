import { motion } from "framer-motion";
import { ArrowRight, Eye, HeartHandshake, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

const storyMoments = [
  {
    number: "1",
    title: "Nace una convicción",
    text: "Cambio Educativo surge de una idea simple y profunda: la educación sí puede transformar realidades cuando se trabaja con propósito.",
    image: "/images/image-1.jpg",
    className: "lg:left-[3%] lg:top-[2%] lg:w-[29%]",
  },
  {
    number: "2",
    title: "Escuchamos el contexto",
    text: "Antes de diseñar soluciones, miramos a las personas, las instituciones y las comunidades que sostienen cada proceso.",
    image: "/images/image-3.jpg",
    className: "lg:left-[29%] lg:top-[13%] lg:z-20 lg:w-[28%]",
  },
  {
    number: "3",
    title: "Tejemos capacidades",
    text: "Acompañamos formación, innovación y liderazgo para que el cambio no sea un discurso, sino una práctica cotidiana.",
    image: "/images/ANAI%2010mo.jpeg",
    className: "lg:left-[63%] lg:top-0 lg:w-[26%]",
  },
  {
    number: "4",
    title: "Activamos comunidad",
    text: "Conectamos ideas, equipos y experiencias para construir aprendizaje colectivo con impacto sostenible.",
    image: "/images/image-4.jpg",
    className: "lg:left-0 lg:top-[43%] lg:w-[33%]",
  },
  {
    number: "5",
    title: "Creamos rutas de cambio",
    text: "Cada acompañamiento se convierte en una ruta concreta: diagnóstico, diseño, acción, medición y mejora.",
    image: "/images/image-2.jpg",
    className: "lg:left-[31%] lg:top-[57%] lg:z-20 lg:w-[27%]",
  },
  {
    number: "6",
    title: "Miramos hacia adelante",
    text: "Nuestra visión es tejer una red latinoamericana de transformación educativa y social con sentido humano.",
    image: "/images/image-5.jpg",
    className: "lg:left-[61%] lg:top-[40%] lg:w-[29%]",
  },
  {
    number: "7",
    title: "Transformamos con propósito",
    text: "Cada experiencia deja aprendizajes, vínculos y capacidades instaladas para seguir avanzando.",
    image: "/images/service-1.jpg",
    className: "lg:left-[58%] lg:top-[75%] lg:w-[30%]",
  },
];

const values = [
  {
    title: "Ética",
    desc: "Integridad que construye una sociedad más justa y orientada al bien común.",
    icon: ShieldCheck,
  },
  {
    title: "Sentido humano",
    desc: "Las personas y su dignidad son nuestro centro.",
    icon: HeartHandshake,
  },
  {
    title: "Esperanza activa",
    desc: "Convicción de que todas las realidades pueden cambiar.",
    icon: Sparkles,
  },
  {
    title: "Coherencia",
    desc: "Alineamos lo que pensamos, decimos y hacemos.",
    icon: Scale,
  },
  {
    title: "Transparencia",
    desc: "Claridad en nuestros procesos, resultados y aprendizajes.",
    icon: Eye,
  },
];

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
                  <p className="brand-kicker text-xs text-turquoise">Quiénes somos</p>
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
                  Somos una startup social que acompaña procesos de transformación educativa y organizacional a través de la innovación, el aprendizaje y la acción colectiva.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="mb-12 max-w-xl lg:mx-auto lg:w-[760px]">
                <h2 className="font-display text-3xl font-black uppercase leading-[0.9] text-slate-950 md:text-4xl">
                  Cambio Educativo en acción
                </h2>
              </div>
            </Reveal>

            <div className="relative mx-auto grid max-w-[360px] gap-8 sm:max-w-[560px] lg:h-[900px] lg:max-w-[1120px] lg:block">
              {storyMoments.map((moment, index) => (
                <motion.article
                  key={moment.number}
                  className={`group relative max-w-[360px] lg:absolute lg:max-w-none ${moment.className}`}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative aspect-[1.08/1] overflow-hidden bg-slate-100">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />
                    <div className="absolute -bottom-2 -left-2 h-20 w-24 md:h-24 md:w-28">
                      <svg
                        viewBox="0 0 120 96"
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]"
                      >
                        <path
                          fill="hsl(var(--accent))"
                          d="M11 78 47 24c12-18 25-24 42-16 9 4 8 16-1 19-10 3-20 8-26 17l-4 6 33 25c7 5 6 15-1 19-6 3-12 2-17-2L47 72 33 91c-5 7-15 8-21 2-4-4-5-10-1-15Z"
                        />
                        <path
                          fill="hsl(var(--accent))"
                          d="M48 52c10 7 18 16 25 26l-23-5-10 15c-4 6-13 4-14-3-1-3 0-6 2-8l20-25Z"
                        />
                      </svg>
                      <span className="absolute bottom-4 left-6 font-display text-5xl font-black leading-none text-white drop-shadow-md md:text-6xl">
                        {moment.number}
                      </span>
                    </div>
                  </div>
                  <div className="relative z-30 bg-white pr-3 pt-2">
                    <h3 className="max-w-[14rem] text-[0.7rem] font-black uppercase leading-[0.95] text-slate-950 md:text-sm">
                      {moment.title}
                    </h3>
                    <p className="mt-2 text-xs font-bold leading-tight text-slate-600 lg:hidden">{moment.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <Reveal>
                <div>
                  <p className="brand-kicker text-xs text-turquoise">Valores institucionales</p>
                  <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-tight md:text-5xl">
                    Lo que guía cada proceso que acompañamos.
                  </h2>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => {
                  const Icon = value.icon;

                  return (
                    <Reveal key={value.title} delay={index * 0.05}>
                      <article className={`h-full rounded-lg border p-5 ${
                        index === 4
                          ? "border-turquoise/25 bg-turquoise/10 sm:col-span-2"
                          : "border-white/10 bg-white/[0.06]"
                      }`}>
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-xl font-black text-white">{value.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{value.desc}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7fbff] py-18 md:py-24">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Lo que creemos</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
                  El cambio se sostiene cuando las personas aprenden, lideran y actúan juntas.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 md:p-8">
                <p className="text-lg leading-relaxed text-slate-700">
                  Nuestra misión es acompañar procesos de transformación social e institucional donde la innovación, la ética y el sentido humano son motores de impacto sostenible.
                </p>
                <Button asChild className="mt-7 h-12 rounded-lg bg-primary px-6 font-black text-white hover:bg-primary/90">
                  <a href="/#contacto">
                    Conversemos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
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
