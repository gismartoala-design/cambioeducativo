import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Quiénes somos", href: "/historia" },
    { name: "Nos mueve", href: "/#nos-mueve" },
    { name: "Públicos", href: "/#publicos" },
    { name: "TEJIDOS", href: "/#tejidos" },
    { name: "Servicios", href: "/#servicios" },
  ];
 
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/92 py-3 shadow-[0_10px_35px_-18px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
          <a className="flex items-center gap-2 group" aria-label="Cambio Educativo">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/logo.png"
              alt="Cambio Educativo"
              className="h-10 w-auto object-contain transition-all md:h-12"
            />
          </a>
        </Link>

        <div className="hidden items-center gap-2 md:flex lg:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative rounded-lg px-3 py-2 text-sm font-extrabold tracking-wide ${
                scrolled
                  ? "text-foreground/72"
                  : "bg-slate-950/22 text-white shadow-[0_2px_14px_rgba(0,0,0,0.28)] backdrop-blur-[2px] [text-shadow:0_2px_10px_rgba(0,0,0,0.95)]"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className={`h-11 rounded-lg px-5 font-black shadow-lg transition-all ${
              scrolled
                ? "bg-primary text-white shadow-primary/20 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                : "bg-white/92 text-primary shadow-black/30 backdrop-blur hover:bg-turquoise hover:text-primary"
            }`}
          >
            <a href="/#contacto">Agendar</a>
          </Button>
        </div>

        <button
          className={`rounded-lg p-2 shadow-sm backdrop-blur-sm md:hidden ${
            scrolled ? "bg-white/88 text-foreground" : "bg-slate-950/32 text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-full border-b border-slate-100 bg-white/96 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-5 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-xl font-extrabold text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight />
                </motion.a>
              ))}
              <Button asChild className="mt-2 h-14 w-full rounded-lg bg-primary text-lg font-black text-white shadow-xl">
                <a href="/#contacto" onClick={() => setIsOpen(false)}>Agendar ahora</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
