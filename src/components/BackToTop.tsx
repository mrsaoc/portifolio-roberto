"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const lenis = (window as any).lenis;
        if (lenis) {
            // Easing Apple-like convertido para a função nativa do Lenis
            lenis.scrollTo(0, {
                duration: 0.8,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 w-14 h-14 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 transition-colors group cursor-pointer flex items-center justify-center font-sans"
                    aria-label="Back to top"
                >
                    <span className="text-[28px] font-normal translate-y-[4px] group-hover:translate-y-0 transition-transform duration-300">
                        ^
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}