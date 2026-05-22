import { Mail, MessageCircle, Phone, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    label: "WhatsApp",
    value: "099 776 9984",
    href: "https://wa.me/593997769984?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20Cambio%20Educativo.",
    icon: MessageCircle,
  },
  {
    label: "Teléfono",
    value: "099 776 9984",
    href: "tel:+593997769984",
    icon: Phone,
  },
  {
    label: "Correo",
    value: "contacto@cambioeducativo.com",
    href: "mailto:contacto@cambioeducativo.com",
    icon: Mail,
  },
  {
    label: "Horario",
    value: "Lun - Vie 8h00-18h00",
    href: "#contacto",
    icon: Clock,
  },
];

export const Contact = () => {
  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--turquoise)),hsl(var(--accent)))]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg bg-primary p-8 md:p-10">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-turquoise">Hablemos</span>
                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight md:text-6xl font-display">
                  Empecemos a tejer tu próximo cambio.
                </h2>
              </div>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-blue-50">
                Cuéntanos qué proceso quieres iniciar y diseñemos juntos una ruta de aprendizaje, innovación y cambio con propósito.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-lg border border-white/10 bg-white/[0.07] p-6 md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 flex-1 rounded-lg bg-white px-7 font-bold text-primary hover:bg-turquoise">
                  <a href="https://wa.me/593997769984?text=Hola%2C%20quiero%20agendar%20una%20asesor%C3%ADa%20con%20Cambio%20Educativo." target="_blank" rel="noopener noreferrer">
                    Agenda una asesoría
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 flex-1 rounded-lg border-white px-7 font-bold text-white hover:bg-white/10">
                  <a href="mailto:contacto@cambioeducativo.com">Escríbenos</a>
                </Button>
              </div>

              <div className="mt-6 grid gap-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex gap-4 rounded-lg border border-white/10 bg-slate-950 p-5 transition-colors hover:border-turquoise/60"
                    >
                      <Icon className="mt-1 h-6 w-6 shrink-0 text-turquoise" />
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-100">{item.label}</p>
                        <p className="mt-2 break-words text-lg font-bold text-white">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
