import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPatternDivider } from "@/components/ui/SectionPatternDivider";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "Cinthya Game", image: "/images/equipo-cambioeducativo/CINTHYA%20GAME.jpg" },
  { name: "Claudia Sanchez", image: "/images/equipo-cambioeducativo/Claudia%20S%C3%A1nchez_.png" },
  { name: "Cyntia Banegas", image: "/images/equipo-cambioeducativo/CYNTIA%20BANEGAS.png" },
  { name: "Daniel Calderon", image: "/images/equipo-cambioeducativo/DANIEL%20CALDERON.png" },
  { name: "Hector Cedeno", image: "/images/equipo-cambioeducativo/H%C3%A9ctor%20Cede%C3%B1o.png" },
  { name: "Jimmy Zambrano", image: "/images/equipo-cambioeducativo/Jimmy%20Zambrano%20R_.jpg" },
  { name: "Johanna Pozo", image: "/images/equipo-cambioeducativo/Johanna%20Pozo.jpg" },
  { name: "Jose Ango", image: "/images/equipo-cambioeducativo/Jos%C3%A9%20Ango.jpg" },
  { name: "Lorena Salazar", image: "/images/equipo-cambioeducativo/Lorena%20Salazar.png" },
  { name: "Maria Elena Perez", image: "/images/equipo-cambioeducativo/MAR%C3%8DA%20ELENA%20P%C3%89REZ.jpg" },
  { name: "Nelson Villegas", image: "/images/equipo-cambioeducativo/Nelson%20Villegas.jpeg" },
  { name: "Sofia Litardo", image: "/images/equipo-cambioeducativo/Sof%C3%ADa%20Litardo_.jpg" },
];

const principles = [
  "Escuchamos antes de proponer, porque todo cambio educativo real nace del contexto y de las personas.",
  "Trabajamos desde la colaboracion para convertir ideas en procesos sostenibles de aprendizaje y transformacion.",
  "Creemos en una educacion con proposito, capaz de fortalecer comunidades, liderazgos y futuros compartidos.",
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-slate-950 py-28 text-white md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <img src="/images/PHOTO-2026-06-23-17-59-50.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.95),rgba(2,6,23,0.78),rgba(2,6,23,0.58))]" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <Reveal>
                <div>
                  <p className="brand-kicker text-xs text-turquoise">Equipo de trabajo</p>
                  <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.45rem,7vw,6.4rem)] font-black leading-[0.9]">
                    <span className="block text-white/75">Las personas</span>
                    <span className="block text-white">que impulsan</span>
                    <span className="block text-primary">Cambio</span>
                    <span className="block text-white">Educativo.</span>
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="max-w-2xl space-y-5 text-lg leading-8 text-white/84 md:text-xl">
                  <p>
                    Nuestro equipo acompana procesos de cambio educativo desde la conviccion de que transformar la educacion tambien es transformar relaciones, practicas y oportunidades.
                  </p>
                  <p>
                    Cada integrante aporta experiencia, sensibilidad y compromiso para construir caminos de aprendizaje con sentido humano, innovacion y accion compartida.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="brand" />

        <section className="relative overflow-hidden bg-[#fff9f2] py-20 md:py-28">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,130,36,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(22,78,135,0.06)_1px,transparent_1px)] bg-[size:84px_84px]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <div className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_28px_80px_-45px_rgba(22,78,135,0.75)] md:p-10">
                  <p className="brand-kicker text-xs text-turquoise">Como trabajamos</p>
                  <h2 className="mt-5 font-display text-3xl font-black leading-tight md:text-4xl">
                    El cambio educativo se construye en equipo, con escucha, confianza y vision compartida.
                  </h2>
                </div>
              </Reveal>

              <div className="grid gap-4">
                {principles.map((principle, index) => (
                  <Reveal key={principle} delay={0.1 + index * 0.05}>
                    <article className="rounded-[1.5rem] border border-primary/10 bg-white p-6 shadow-[0_18px_45px_-35px_rgba(22,78,135,0.45)]">
                      <p className="text-base leading-8 text-slate-700 md:text-lg">{principle}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="orange" />

        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <Reveal>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="brand-kicker text-xs text-primary">Conoce al equipo</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                  Personas que tejen procesos de aprendizaje, innovacion y transformacion.
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={0.06 * (index % 6)}>
                  <motion.article
                    className="group overflow-hidden rounded-[1.9rem] border border-primary/10 bg-white shadow-[0_24px_70px_-44px_rgba(15,23,42,0.35)]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[4/4.8] overflow-hidden bg-slate-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.72)_100%)]" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-display text-2xl font-black leading-tight text-white">{member.name}</h3>
                        <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-turquoise">
                          Equipo Cambio Educativo
                        </p>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="turquoise" />

        <section className="bg-primary/5 py-18 md:py-24">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <div>
                <p className="brand-kicker text-xs text-primary">Sigamos conversando</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
                  Cuando un equipo cree en el cambio, la educacion encuentra nuevas posibilidades.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 md:p-8">
                <p className="text-lg leading-relaxed text-slate-700">
                  Si quieres conocer mas sobre nuestro trabajo o explorar un proceso de acompanamiento, podemos conversar contigo y tu institucion.
                </p>
                <div className="mt-6">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-primary px-6 text-sm font-black text-white shadow-xl shadow-primary/20 hover:bg-primary/90 sm:text-base">
                    <a href="/#contacto">
                      Hablemos de tu proceso
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
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