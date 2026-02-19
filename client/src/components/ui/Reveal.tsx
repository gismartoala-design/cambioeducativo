import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "100%", 
  delay = 0.25, 
  direction = "up",
  className = "" 
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom Cubic Bezier for smoother ease-out
      } 
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
