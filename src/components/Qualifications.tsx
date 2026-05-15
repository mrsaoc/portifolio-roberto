"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

const qualificationsData = [
    { id: 1, title: "ui/ux design", certImage: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format" },
    { id: 2, title: "advanced ui design", certImage: "https://images.unsplash.com/photo-1606326666490-45757474e788?q=80&w=1000&auto=format" },
    { id: 3, title: "css flexbox", certImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format" },
    { id: 4, title: "css grid layout", certImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format" },
    { id: 5, title: "ui/ux design", certImage: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format" },
    { id: 6, title: "advanced ui design", certImage: "https://images.unsplash.com/photo-1606326666490-45757474e788?q=80&w=1000&auto=format" },
    { id: 7, title: "css flexbox", certImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format" },
    { id: 8, title: "css grid layout", certImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format" },
];

export default function Qualifications() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedCert]);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, [visibleCount]);

    const isShowingAll = visibleCount >= qualificationsData.length;

    const handleToggleVisibility = () => {
        const lenis = (window as any).lenis;

        if (isShowingAll) {
            // O Lenis aceita o seletor "#id" nativamente, calculando o destino na hora
            if (lenis) {
                lenis.scrollTo("#qualifications", {
                    offset: -104,
                    duration: 0.8,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            }

            setTimeout(() => {
                setVisibleCount(4);
            }, 300);

        } else {
            setVisibleCount(qualificationsData.length);

            setTimeout(() => {
                if (lenis) {
                    lenis.scrollTo("#toggle-btn", {
                        offset: -(window.innerHeight / 1.5),
                        duration: 0.8,
                        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                }
            }, 50);
        }
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: (index % 4) * 0.1,
                duration: 0.4,
                ease: "easeOut"
            }
        }),
        exit: (index: number) => ({
            opacity: 0,
            y: -20,
            transition: {
                delay: (3 - (index % 4)) * 0.1,
                duration: 0.3,
                ease: "easeIn"
            }
        })
    };

    return (
        <motion.section
            id="qualifications"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full flex flex-col items-start gap-10 scroll-mt-32"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100"
            >
                qualifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
                <AnimatePresence initial={false}>
                    {qualificationsData.slice(0, visibleCount).map((qual, index) => (
                        <motion.div
                            key={qual.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl flex flex-col gap-3"
                        >
                            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                                {qual.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur et consequat leo.
                            </p>

                            <AnimatedButton
                                icon="right"
                                onClick={() => setSelectedCert(qual.certImage)}
                                className="mt-2"
                            >
                                see
                            </AnimatedButton>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div id="toggle-btn" className="self-start ml-6">
                <AnimatedButton
                    icon={isShowingAll ? "up" : "down"}
                    onClick={handleToggleVisibility}
                >
                    {isShowingAll ? "less" : "more"}
                </AnimatedButton>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            className="relative w-full max-w-2xl flex flex-col items-end gap-2"
                        >
                            <AnimatedButton
                                icon="close"
                                onClick={() => setSelectedCert(null)}
                            >
                                close
                            </AnimatedButton>

                            <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden border-none leading-[0]">
                                <img
                                    src={selectedCert}
                                    alt="Certification"
                                    className="w-full h-auto object-contain block"
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}