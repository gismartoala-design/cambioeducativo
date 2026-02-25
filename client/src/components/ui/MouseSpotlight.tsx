import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
            style={{
                background: `radial-gradient(circle 400px at var(--x) var(--y), rgba(59, 130, 246, 0.15), transparent 80%)`,
                // We'll use CSS variables for better performance via motion style
                // @ts-ignore
                "--x": springX.get() + "px",
                "--y": springY.get() + "px",
            }}
        />
    );
};
