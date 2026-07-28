import { Reveal } from "@/components/ui/Reveal";

const threads = [
  { letter: "T", title: "Tecnología educativa con propósito", tone: "from-[#f78c16] to-[#ef6a00]" },
  { letter: "E", title: "Educación para la transformación", tone: "from-[#48d3df] to-[#19a9ce]" },
  { letter: "J", title: "Justicia social", tone: "from-[#1e5d9f] to-[#15457c]" },
  { letter: "I", title: "Innovación e investigación", tone: "from-[#71e2eb] to-[#31b9d2]" },
  { letter: "D", title: "Desarrollo comunitario", tone: "from-[#0f8e92] to-[#0a6c74]" },
  { letter: "O", title: "Organización estratégica con impacto", tone: "from-[#ff9b1f] to-[#ff7b00]" },
  { letter: "S", title: "Saberes compartidos y sostenibles", tone: "from-[#2a73c9] to-[#124c97]" },
];

export const WhyUs = () => {
  return (
    <section id="tejidos" className="relative overflow-hidden bg-primary/5 py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(22,78,135,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(22,78,135,0.04)_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-black leading-tight text-slate-950 md:text-6xl">TEJIDOS</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-700 md:text-2xl">Cada hilo representa un principio educativo que, al entrelazarse, hace posible la transformación de instituciones, organizaciones y comunidades.</p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {threads.map((thread, index) => (
            <Reveal key={thread.letter} delay={index * 0.05}>
              <article className="flex h-full flex-col items-center text-center">
                <div className={`flex aspect-[0.8] w-full max-w-[120px] items-center justify-center rounded-[0.35rem] bg-gradient-to-br ${thread.tone} p-2 shadow-lg shadow-primary/10`}>
                  <div className="flex h-full w-full items-center justify-center rounded-[0.2rem] border border-white/25 bg-white/8">
                    <span className="font-display text-6xl font-black leading-none text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.16)] md:text-7xl">{thread.letter}</span>
                  </div>
                </div>
                <p className="mt-4 max-w-[150px] text-sm font-bold leading-snug text-slate-800">{thread.title}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

