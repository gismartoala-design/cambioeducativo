import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
    const [showMotto, setShowMotto] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowMotto(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const motto = "Liderando la transformación pedagógica";

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden"
        >
            <div className="noise-bg opacity-10" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-20 md:h-28 w-auto brightness-0 invert"
                    />
                </motion.div>

                {/* Motto Animation */}
                <div className="overflow-hidden h-8">
                    {showMotto && (
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white/60 font-display text-sm md:text-base tracking-[0.2em] uppercase font-bold"
                        >
                            {motto}
                        </motion.p>
                    )}
                </div>

                {/* Progress horizontal line */}
                <motion.div
                    className="absolute -bottom-12 w-40 h-[2px] bg-white/10 overflow-hidden rounded-full"
                >
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full bg-primary"
                    />
                </motion.div>
            </div>

            {/* Background Decorative Circles */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
            />
        </motion.div>
    );
};
