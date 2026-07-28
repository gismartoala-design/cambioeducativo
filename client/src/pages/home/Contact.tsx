import { Mail, MessageCircle, Send } from "lucide-react";
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
    label: "Correo",
    value: "contacto@cambioeducativo.com",
    href: "mailto:contacto@cambioeducativo.com",
    icon: Mail,
  },
];

export const Contact = () => {
  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg bg-primary p-8 md:p-10">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-turquoise">Trabajemos juntos</span>
                <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight md:text-6xl">
                  Empecemos a tejer tu próximo cambio
                </h2>
              </div>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-blue-50">
                D�janos tus datos y cu�ntanos c�mo crees que podemos acompa�arte.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-lg border border-white/10 bg-white/[0.07] p-6 md:p-8">
              <form
                className="grid gap-4"
                action="mailto:contacto@cambioeducativo.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-blue-50">
                    Nombre
                    <input name="nombre" required className="h-12 rounded-lg border border-white/10 bg-slate-950 px-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-turquoise" placeholder="Tu nombre" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-blue-50">
                    Cargo
                    <input name="cargo" required className="h-12 rounded-lg border border-white/10 bg-slate-950 px-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-turquoise" placeholder="Directora, gerente, coordinador..." />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-blue-50">
                    Institución / Empresa
                    <input name="institucion" required className="h-12 rounded-lg border border-white/10 bg-slate-950 px-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-turquoise" placeholder="Nombre de la organización" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold text-blue-50">
                    Correo corporativo
                    <input name="correo" type="email" required className="h-12 rounded-lg border border-white/10 bg-slate-950 px-4 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-turquoise" placeholder="nombre@organizacion.com" />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-bold text-blue-50">
                  ¿Qué deseas lograr junto a Cambio Educativo?
                  <textarea name="proyecto" required rows={5} className="resize-none rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-turquoise" placeholder="Cuéntanos qué reto, objetivo o proceso te gustaría impulsar." />
                </label>

                <Button type="submit" size="lg" className="mt-2 h-14 rounded-lg bg-accent px-7 font-black text-white hover:bg-accent/90">
                  Enviar solicitud
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex gap-3 rounded-lg border border-white/10 bg-slate-950 p-4 transition-colors hover:border-turquoise/60"
                    >
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-turquoise" />
                      <div>
                        <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-blue-100">{item.label}</p>
                        <p className="mt-1 break-words text-sm font-bold text-white">{item.value}</p>
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

