import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const ecosystemPhotos = [
  "/images/image-1.jpg",
  "/images/image-2.jpg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
  "/images/image-5.jpg",
];

export const Ecosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ecosystemPhotos.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + ecosystemPhotos.length) % ecosystemPhotos.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % ecosystemPhotos.length);
  };

  return (
    <section id="ecosistema" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-xs font-black uppercase tracking-[0.28em] text-primary">{"Ecosistema de transformaci\u00f3n educativa"}</span>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-xl">{"Espacios donde tejemos la educaci\u00f3n que so\u00f1amos."}</p>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">{"Promovemos comunidades que aprenden juntas, instituciones que lideran con coherencia y personas que encuentran en la educaci\u00f3n una oportunidad para construir su futuro con dignidad y esperanza."}</p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-primary/10 bg-primary/5 p-4 shadow-[0_35px_90px_-55px_rgba(22,78,135,0.5)] md:p-5">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {ecosystemPhotos.map((photo) => (
                  <div key={photo} className="min-w-full">
                    <img src={photo} alt={"Escenas del ecosistema de transformaci\u00f3n educativa"} className="h-[280px] w-full object-cover md:h-[420px]" />
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/70 to-transparent p-4 md:p-6">
                <div className="flex gap-2">
                  {ecosystemPhotos.map((photo, index) => (
                    <button key={photo} type="button" onClick={() => setActiveIndex(index)} className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "w-10 bg-white" : "w-2.5 bg-white/50"}`} aria-label={`Ir a la foto ${index + 1}`} />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button type="button" onClick={goToPrevious} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary transition hover:bg-white" aria-label="Foto anterior">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={goToNext} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary transition hover:bg-white" aria-label="Foto siguiente">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
