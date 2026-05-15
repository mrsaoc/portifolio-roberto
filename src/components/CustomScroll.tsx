"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomScroll() {
    const { scrollYProgress } = useScroll();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    if (!isMounted) return null;

    return (
        // Posicionamento alterado para a esquerda (left-2)
        <div className="fixed left-2 top-1/2 -translate-y-1/2 h-[70vh] w-[6px] z-[9999] pointer-events-none hidden md:block">
            {/* Track: Fundo da barra com efeito Glass e borda sutil */}
            <div className="w-full h-full bg-neutral-200/10 dark:bg-white/5 backdrop-blur-md rounded-full overflow-hidden border border-white/10">
                {/* Thumb: O indicador de progresso ativo */}
                <motion.div
                    style={{ scaleY }}
                    className="w-full h-full bg-neutral-900/40 dark:bg-white/20 rounded-full origin-top"
                />
            </div>
        </div>
    );
}