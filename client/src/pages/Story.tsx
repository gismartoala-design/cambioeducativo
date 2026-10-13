import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPatternDivider } from "@/components/ui/SectionPatternDivider";

const actionGallery = [
  {
    image: "/images/carousel-2026/grupal-03.jpg",
    className: "col-span-2 row-span-2 md:col-span-4 md:row-span-2",
    collageClass: "-rotate-[1.2deg]",
  },
  {
    image: "/images/carousel-2026/taller-02.jpg",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    collageClass: "rotate-[1deg] md:translate-y-3",
  },
  {
    image: "/images/PHOTO-2026-06-23-17-59-47.jpg",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    collageClass: "-rotate-[0.8deg] md:-translate-y-2",
  },
  {
    image: "/images/IMG_1761.jpeg",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    collageClass: "rotate-[1.1deg]",
  },
  {
    image: "/images/PHOTO-2026-06-23-17-59-50.jpg",
    className: "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
    collageClass: "-rotate-[1deg] md:translate-y-2",
  },
  {
    image: "/images/PHOTO-2026-06-23-17-59-53.jpg",
    className: "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
    collageClass: "rotate-[1deg]",
  },
  {
    image: "/images/carousel-2026/grupal-02.jpg",
    className: "col-span-2 row-span-2 md:col-span-4 md:row-span-2",
    collageClass: "rotate-[0.8deg] md:-translate-y-1",
  },
  {
    image: "/images/carousel-2026/taller-01.jpg",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    collageClass: "-rotate-[1.1deg] md:translate-y-3",
  },
  {
    image: "/images/carousel-2026/grupal-01.jpg",
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    collageClass: "rotate-[1deg]",
  },
];

const institutionalPrinciples = [
  "Sentido Humano: Ponemos a las personas en el coraz\u00f3n de cada proceso educativo.",
  "Esperanza activa: Trabajamos para encender en otros la esperanza en que pueden transformar su realidad.",
  "Transformaci\u00f3n social: Creemos que toda innovaci\u00f3n solo tiene sentido si contribuye a construir una sociedad m\u00e1s justa y equitativa.",
  "Coherencia: Vivimos lo que ense\u00f1amos y ense\u00f1amos lo que creemos.",
];

export default function Story() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-950 py-28 text-white md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <img src="/images/carousel-2026/taller-02.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-28" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.76),rgba(2,6,23,0.48))]" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <Reveal>
                <div>
                  <p className="brand-kicker text-xs text-turquoise">{"Qui\u00e9nes somos"}</p>
                  <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.55rem,7.4vw,7rem)] font-black leading-[0.88]">
                    <span className="block text-white/78">La</span>
                    <span className="block text-white">Historia</span>
                    <span className="block text-primary">de Cambio</span>
                    <span className="block text-white">Educativo</span>
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
                  {"Somos una empresa con horizonte social, que acompa\u00f1a la transformaci\u00f3n de personas, instituciones y organizaciones que quieren tejer educaci\u00f3n con prop\u00f3sito para cambiar el Ecuador, la regi\u00f3n y el mundo"}
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
                <h2 className="font-display text-3xl font-black leading-tight text-primary md:text-4xl">
                  {"Cambio Educativo en Acci\u00f3n"}
                </h2>
              </div>
            </Reveal>

            <div className="relative -mx-1 overflow-hidden bg-primary/[0.03] px-2 py-5 md:px-5 md:py-8">
              <div className="grid auto-rows-[132px] grid-cols-2 gap-x-4 gap-y-6 sm:auto-rows-[156px] md:grid-cols-8 md:gap-x-5 md:gap-y-7 lg:auto-rows-[176px]">
                {actionGallery.map((moment, index) => (
                  <motion.article
                    key={moment.image}
                    className={`relative overflow-visible ${moment.className}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.55, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`group relative h-full w-full overflow-visible rounded-lg bg-white p-2 shadow-[0_22px_44px_-30px_rgba(15,23,42,0.5)] ring-1 ring-slate-200/80 transition-transform duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.018] ${moment.collageClass}`}>
                      <span className="absolute left-1/2 top-0 z-10 h-4 w-14 -translate-x-1/2 -translate-y-1/2 rotate-1 bg-accent/20 shadow-sm backdrop-blur-sm" aria-hidden="true" />
                      <div className="h-full w-full overflow-hidden rounded-md bg-slate-100">
                        <img src={moment.image} alt="" aria-hidden="true" className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
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
                  <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-tight md:text-5xl">{"Lo que gu\u00eda cada proceso que acompa\u00f1amos"}</h2>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="space-y-4 rounded-lg border border-white/10 bg-white/[0.04] p-6 text-base leading-relaxed text-slate-200 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.75)] md:p-8">
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
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">{"El cambio se sostiene cuando las personas aprenden, lideran y act\u00faan juntas"}</h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 md:p-8">
                <p className="text-lg leading-relaxed text-slate-700">{"Nuestra misi\u00f3n es impulsar procesos de transformaci\u00f3n colectiva a trav\u00e9s de la educaci\u00f3n con sentido, la innovaci\u00f3n con prop\u00f3sito y la justicia como base de toda acci\u00f3n"}</p>
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