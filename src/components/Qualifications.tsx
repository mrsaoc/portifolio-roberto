"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

const qualificationsData = [
    { id: 1, title: "java se certification", certImage: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format" },
    { id: 2, title: "mysql advanced admin", certImage: "https://images.unsplash.com/photo-1606326666490-45757474e788?q=80&w=1000&auto=format" },
    { id: 3, title: "embedded c mastery", certImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format" },
    { id: 4, title: "data structures pro", certImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format" },
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

    const isShowingAll = visibleCount >= qualificationsData.length;

    const handleToggleVisibility = () => {
        const lenis = (window as any).lenis;
        if (isShowingAll) {
            if (lenis) lenis.scrollTo("#qualifications", { offset: -104, duration: 0.8 });
            setTimeout(() => setVisibleCount(4), 300);
        } else {
            setVisibleCount(qualificationsData.length);
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: (index % 4) * 0.1, duration: 0.4 }
        }),
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
                className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 uppercase"
            >
                qualifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <AnimatePresence>
                    {qualificationsData.slice(0, visibleCount).map((qual, index) => (
                        <motion.div
                            key={qual.id}
                            custom={index}
                            variants={cardVariants}
                            className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl flex flex-col gap-3"
                        >
                            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
                                {qual.title}
                            </h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Validação técnica de competências em backend e engenharia.
                            </p>

                            <button
                                onClick={() => setSelectedCert(qual.certImage)}
                                className="mt-2 w-fit flex items-center justify-center p-3 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 hover:scale-105 transition-transform"
                            >
                                <span className="material-symbols-rounded text-[24px]">visibility</span>
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div id="toggle-btn" className="self-start">
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-2xl bg-neutral-100 dark:bg-neutral-900 rounded-3xl shadow-2xl p-4"
                        >
                            <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 p-2 bg-white dark:bg-black rounded-full shadow-md z-10">
                                <span className="material-symbols-rounded block">close</span>
                            </button>
                            <img src={selectedCert} alt="Certification" className="w-full h-auto rounded-2xl" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}