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
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes somos", href: "#quienes-somos" },
    { name: "Nos mueve", href: "#nos-mueve" },
    { name: "TEJIDOS", href: "#tejidos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/90 py-3 shadow-[0_10px_35px_-18px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent py-6"
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

        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative rounded-lg px-3 py-2 text-sm font-bold tracking-wide text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary"
            >
              {link.name}
              <span className="absolute bottom-1 left-3 right-3 h-[2px] scale-x-0 bg-[linear-gradient(90deg,hsl(var(--turquoise)),hsl(var(--accent)))] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <Button asChild className="h-11 rounded-lg bg-primary px-6 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30">
            <a href="#contacto">Empezar</a>
          </Button>
        </div>

        <button
          className="rounded-lg bg-slate-100/80 p-2 text-foreground backdrop-blur-sm md:hidden"
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
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-between text-2xl font-extrabold text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>
              ))}
              <Button asChild className="mt-4 h-14 w-full rounded-lg bg-primary text-lg font-bold text-white shadow-xl">
                <a href="#contacto" onClick={() => setIsOpen(false)}>Agendar ahora</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
