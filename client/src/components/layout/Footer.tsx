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
  { label: "Qui\u00e9nes somos", href: "/historia" },
  { label: "Qu\u00e9 nos mueve", href: "/#nos-mueve" },
  { label: "TEJIDOS", href: "/#tejidos" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Contacto", href: "/#contacto" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-primary py-12 text-blue-100">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:items-start">
          <div>
            <img src="/images/logo.png" alt="Cambio Educativo" className="h-11 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {"Educaci\u00f3n que se teje con prop\u00f3sito para transformar personas, instituciones y comunidades."}
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition-colors hover:border-turquoise hover:bg-white/10 hover:text-turquoise"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-blue-100">
          {"\u00a9 2026 Cambio Educativo. Todos los derechos reservados."}
        </div>
      </div>
    </footer>
  );
};
