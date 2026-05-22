import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587129688398",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cambioeducativo.ec/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cambio-educativo/?viewAsMember=true",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:contacto@cambioeducativo.com",
    icon: Mail,
  },
];

const footerLinks = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Qué nos mueve", href: "#nos-mueve" },
  { label: "TEJIDOS", href: "#tejidos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:items-start">
          <div>
            <img src="/images/logo.png" alt="Cambio Educativo" className="h-10 w-auto brightness-0 invert opacity-85" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Educación que se teje con propósito para transformar personas, instituciones y comunidades.
            </p>
          </div>

          <nav className="grid gap-3 text-sm font-semibold">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="w-fit transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="lg:text-right">
            <div className="flex items-center gap-3 lg:justify-end">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-turquoise hover:text-turquoise"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6 text-sm leading-relaxed">
              <p>contacto@cambioeducativo.com</p>
              <p>WhatsApp: 099 776 9984</p>
              <p>Lun - Vie 8h00-18h00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm">
          © 2026 Cambio Educativo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
