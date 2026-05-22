import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, Send, X } from "lucide-react";
import { Button } from "./button";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

const replies: Record<string, string> = {
  institution:
    "Podemos acompañar procesos de transformación institucional, innovación educativa, liderazgo y fortalecimiento pedagógico. Escríbenos por WhatsApp para agendar una asesoría.",
  training:
    "Diseñamos capacitaciones docentes a medida: pedagogía, tecnología educativa, liderazgo, habilidades socioemocionales y aprendizaje activo.",
  organization:
    "Trabajamos con empresas, fundaciones y ONGs en formación, transformación cultural, aprendizaje organizacional y proyectos sociales con impacto sostenible.",
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hola. Soy el asistente de Cambio Educativo. ¿Qué proceso quieres iniciar?",
      sender: "bot",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSuggestion = (label: string, key: keyof typeof replies) => {
    setMessages((current) => [
      ...current,
      { id: Date.now(), text: label, sender: "user" },
      { id: Date.now() + 1, text: replies[key], sender: "bot" },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="mb-4 flex h-[420px] w-72 flex-col overflow-hidden rounded-lg border border-blue-100 bg-white shadow-2xl md:w-80"
          >
            <div className="flex items-center justify-between bg-primary p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/20 p-2">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Cambio Educativo</h3>
                  <p className="text-[10px] text-white/80">Asistente virtual</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-white/20"
                aria-label="Cerrar chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50/50 p-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[82%] rounded-lg p-3 text-sm ${
                      msg.sender === "user"
                        ? "rounded-tr-none bg-primary text-white"
                        : "rounded-tl-none border border-blue-50 bg-white text-foreground shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-100 bg-white p-4">
              <div className="mb-4 flex flex-wrap gap-2">
                <button
                  onClick={() => handleSuggestion("Soy una institución educativa", "institution")}
                  className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-blue-100"
                >
                  Institución educativa
                </button>
                <button
                  onClick={() => handleSuggestion("Busco capacitación docente", "training")}
                  className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-blue-100"
                >
                  Capacitación docente
                </button>
                <button
                  onClick={() => handleSuggestion("Soy empresa u ONG", "organization")}
                  className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs text-primary transition-colors hover:bg-blue-100"
                >
                  Empresa u ONG
                </button>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/593997769984?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20de%20Cambio%20Educativo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-gray-100 px-4 py-2 text-xs text-slate-600 transition-colors hover:bg-gray-200"
                >
                  Continuar por WhatsApp
                </a>
                <Button size="icon" className="h-8 w-8 rounded-lg" asChild>
                  <a
                    href="https://wa.me/593997769984?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20de%20Cambio%20Educativo."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enviar por WhatsApp"
                  >
                    <Send size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition-colors hover:bg-primary/90"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
