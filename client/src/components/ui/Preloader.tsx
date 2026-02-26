import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
    const motto = "Liderando la transformación pedagógica";
    const words = motto.split(" ");

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="noise-bg opacity-20" />

            {/* Background Mesh Gradients */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] opacity-30 pointer-events-none"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
            </motion.div>

            {/* Shutter Exit Panels */}
            <motion.div
                variants={{
                    exit: {
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
                    }
                }}
                className="absolute inset-0 bg-slate-950 z-0"
            />

            <div className="relative z-10 flex flex-col items-center">
                {/* Logo with Light Sweep */}
                <div className="relative mb-10 overflow-hidden group">
                    <motion.div
                        initial={{ y: 40, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img
                            src="/images/logo.png"
                            alt="Logo"
                            className="h-24 md:h-32 w-auto brightness-0 invert"
                        />
                    </motion.div>

                    {/* Light sweep effect */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                </div>

                {/* Staggered Motto Animation */}
                <div className="flex flex-wrap justify-center gap-x-2 px-6">
                    {words.map((word, wordIdx) => (
                        <div key={wordIdx} className="overflow-hidden py-1">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5 + (wordIdx * 0.1),
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="inline-block text-white font-display text-sm md:text-lg tracking-[0.15em] uppercase font-black"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </div>

                {/* Animated geometric decoration */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "80px", opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mt-6"
                />
            </div>

            {/* Exit "Destruction" Panels - Top and Bottom */}
            <motion.div
                variants={{
                    exit: {
                        scaleY: 0,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }
                }}
                className="absolute inset-0 bg-primary/5 pointer-events-none z-50 origin-top"
            />
        </motion.div>
    );
};
