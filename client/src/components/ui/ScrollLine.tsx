import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollLine = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] z-0 pointer-events-none opacity-10 group">
            <motion.div
                className="h-full w-full bg-gradient-to-b from-primary via-accent to-primary origin-top"
                style={{ scaleY }}
            />
            {/* Connector dots at key intervals */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/20" />
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/20" />
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/20" />
        </div>
    );
};
