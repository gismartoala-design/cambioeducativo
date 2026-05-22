import { motion } from "framer-motion";

export const Preloader = () => {
  const motto = "Educación que se teje con propósito";
  const words = motto.split(" ");

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="noise-bg opacity-20" />

      <motion.div
        variants={{
          exit: {
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
          },
        }}
        className="absolute inset-0 z-0 bg-slate-950"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="group relative mb-10 overflow-hidden">
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/logo.png" alt="Cambio Educativo" className="h-24 w-auto brightness-0 invert md:h-32" />
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-20 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-2 px-6">
          {words.map((word, wordIdx) => (
            <div key={word} className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + wordIdx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-sm font-black uppercase tracking-[0.15em] text-white font-display md:text-lg"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80px", opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-turquoise to-transparent"
        />
      </div>

      <motion.div
        variants={{
          exit: {
            scaleY: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          },
        }}
        className="pointer-events-none absolute inset-0 z-50 origin-top bg-primary/5"
      />
    </motion.div>
  );
};
