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
    { name: "Quiénes Somos", href: "#quienes-somos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] py-4"
        : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/images/logo.png"
              alt="Cambio Educativo Logo"
              className="h-10 md:h-12 w-auto object-contain transition-all"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-foreground/70 hover:text-primary font-bold text-sm tracking-wide transition-colors group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
            Empezar
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-slate-100/50 backdrop-blur-sm text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-extrabold text-foreground hover:text-primary transition-colors flex items-center justify-between group"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <Button className="w-full bg-primary text-white rounded-full h-16 text-lg font-bold mt-4 shadow-xl">
                Agendar ahora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
