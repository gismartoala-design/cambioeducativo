import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPatternDivider } from "@/components/ui/SectionPatternDivider";
import { Button } from "@/components/ui/button";

const teamSections = [
  {
    title: "Dirección general",
    members: [
      {
        name: "Daniel Calderón Zevallos",
        role: "Presidente Ejecutivo",
        image: "/images/equipo-cambioeducativo/DANIEL%20CALDERON.png",
      },
      {
        name: "Nelson Villegas Pinargote",
        role: "Gerente General",
        image: "/images/equipo-cambioeducativo/NELSON%20VILLEGAS.png",
      },
    ],
  },
  {
    title: "Equipo técnico",
    members: [
      {
        name: "Cyntia Banegas Quiñones",
        role: "Líder de Transformación Educativa",
        image: "/images/equipo-cambioeducativo/CYNTIA%20BANEGAS.png",
      },
      {
        name: "Lorena Salazar Suquilanda",
        role: "Líder de Proyectos Socioeducativos",
        image: "/images/equipo-cambioeducativo/Lorena%20Salazar.png",
      },
    ],
  },
  {
    title: "Equipo estratégico",
    members: [
      {
        name: "María Elena Pérez Dávalos",
        role: "Responsable de Comunicación y Relaciones Públicas",
        image: "/images/equipo-cambioeducativo/MARIA%20ELENA%20PEREZ.png",
      },
      {
        name: "Héctor Cedeño Lucas",
        role: "Responsable de Marketing y Ventas",
        image: "/images/equipo-cambioeducativo/Hector%20Cedeno.png",
      },
      {
        name: "Jostin Duarte Larrea",
        role: "Responsable de Tecnologías de la Información",
        image: "/images/equipo-cambioeducativo/JOSTIN%20DUARTE.png",
      },
    ],
  },
  {
    title: "Representantes regionales",
    members: [
      {
        name: "Sofía Litardo Rocho",
        role: "Representante Regional",
        image: "/images/equipo-cambioeducativo/Sofia%20Litardo.jpg",
      },
      {
        name: "Claudia Sánchez Bastidas",
        role: "Representante Regional",
        image: "/images/equipo-cambioeducativo/Claudia%20Sanchez.png",
      },
      {
        name: "Paulina Salazar Guevara",
        role: "Representante Regional",
      },
    ],
  },
  {
    title: "Comité científico",
    members: [
      {
        name: "Cinthya Game Varas",
        role: "Comité Científico",
        image: "/images/equipo-cambioeducativo/CINTHYA%20GAME.png",
      },
      {
        name: "Johanna Pozo Neira",
        role: "Comité Científico",
        image: "/images/equipo-cambioeducativo/JOHANNA%20POZO.png",
      },
      {
        name: "Jimmy Zambrano Ramírez",
        role: "Comité Científico",
        image: "/images/equipo-cambioeducativo/Jimmy%20Zambrano%20R.jpeg",
      },
      {
        name: "Richar Posso Pacheco",
        role: "Comité Científico",
      },
    ],
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-slate-950 py-28 text-white md:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <img src="/images/carousel-2026/grupal-02.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-32" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94),rgba(2,6,23,0.76),rgba(2,6,23,0.5))]" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <Reveal>
                <div>
                  <p className="brand-kicker text-xs text-turquoise">Equipo de trabajo</p>
                  <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.88]">
                    Conoce al equipo
                  </h1>
                  <p className="mt-5 max-w-3xl text-xl font-black leading-tight text-white/78 md:text-3xl">
                    Personas que tejen procesos de aprendizaje, innovación y transformación
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="max-w-2xl space-y-5 text-lg leading-8 text-white/84 md:text-xl">
                  <p>
                    Nuestro equipo reúne distintas experiencias, conocimientos y formas de mirar la educación. Esa diversidad es la que nos permite conectar ideas, sumar capacidades y crear soluciones que respondan a los desafíos de cada realidad.
                  </p>
                  <p>
                    Trabajamos de manera colaborativa, porque creemos que las mejores posibilidades aparecen cuando las personas comparten lo que saben, aprenden juntas y ponen sus capacidades al servicio de un propósito común.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="brand" />

        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {teamSections.map((section, sectionIndex) => (
                <Reveal key={section.title} delay={0.04 * sectionIndex}>
                  <section aria-labelledby={`team-${sectionIndex}`}>
                    <div className="mb-6 flex flex-col gap-3 border-b border-primary/12 pb-4 md:flex-row md:items-end md:justify-between">
                      <h2 id={`team-${sectionIndex}`} className="font-display text-2xl font-black leading-tight text-primary md:text-3xl">
                        {section.title}
                      </h2>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                        Cambio Educativo
                      </span>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {section.members.map((member, index) => (
                        <motion.article
                          key={member.name}
                          className="group overflow-hidden rounded-lg border border-primary/10 bg-white shadow-[0_24px_70px_-44px_rgba(15,23,42,0.35)]"
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          <div className="relative aspect-[4/4.7] overflow-hidden bg-primary/8">
                            {member.image ? (
                              <img
                                src={member.image}
                                alt={member.name}
                                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(22,78,135,0.14),rgba(255,130,36,0.16))]">
                                <span className="font-display text-6xl font-black text-primary/45">{getInitials(member.name)}</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.0)_34%,rgba(15,23,42,0.78)_100%)]" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                              <h3 className="font-display text-2xl font-black leading-tight">{member.name}</h3>
                              <p className="mt-2 text-sm font-extrabold leading-snug text-turquoise">{member.role}</p>
                              {!member.image && <p className="mt-2 text-xs font-bold text-white/72">Foto pendiente</p>}
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <SectionPatternDivider tone="turquoise" />

        <section className="relative overflow-hidden bg-primary py-20 text-white md:py-24">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="container relative z-10 mx-auto grid gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <div>
                <p className="brand-kicker text-xs text-turquoise">Sigamos construyendo</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-5xl">
                  Las ideas toman fuerza cuando se convierten en acción
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-2xl text-lg leading-8 text-white/84 md:text-xl">
                <p>
                  En Cambio Educativo ponemos conocimiento, experiencia y distintas perspectivas al servicio de cada desafío. Trabajamos contigo para comprender tu realidad, identificar oportunidades y construir caminos que generen capacidades e impacto.
                </p>
                <p className="mt-5 font-black text-white">¿Tienes un desafío en tu institución? Conversemos</p>
                <div className="mt-7">
                  <Button asChild size="lg" className="h-12 rounded-lg bg-accent px-6 text-sm font-black text-white shadow-xl shadow-black/20 hover:bg-accent/90 sm:text-base">
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
