import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "./button";

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "¡Hola! Soy tu asistente virtual. ¿Cómo puedo ayudarte hoy?", sender: "bot" },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleApplyClick = () => {
        const newMessages = [
            ...messages,
            { id: Date.now(), text: "Cómo puedo postular mi proyecto?", sender: "user" },
        ];
        setMessages(newMessages);

        setTimeout(() => {
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now() + 1,
                    text: "¡Excelente iniciativa! Para postular tu proyecto, puedes comunicarte directamente con nuestro equipo de admisiones al +593 9XXXXXXXX. Ellos te guiarán en todo el proceso de registro y evaluación.",
                    sender: "bot"
                },
            ]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="mb-4 w-72 md:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100 flex flex-col h-[400px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 text-white flex justify-between items-center bg-gradient-to-r from-primary to-blue-600">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Asistente Virtual</h3>
                                    <p className="text-[10px] text-white/80">En línea ahora</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                            ? "bg-primary text-white rounded-tr-none"
                                            : "bg-white border border-blue-50 text-foreground rounded-tl-none shadow-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions/Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <button
                                    onClick={handleApplyClick}
                                    className="text-xs bg-blue-50 text-primary px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                                >
                                    Postular mi proyecto
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Escribe un mensaje..."
                                    className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-primary outline-none"
                                    disabled
                                />
                                <Button size="icon" className="h-8 w-8 rounded-full" disabled>
                                    <Send size={14} />
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
                className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};
