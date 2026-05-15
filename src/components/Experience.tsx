"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

const projects = [
    { id: 1, title: "core banking api", tags: ["JAVA", "SPRING", "MYSQL"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "embedded system", tags: ["C", "RTOS", "HARDWARE"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "data parser pro", tags: ["C", "ALGORITHMS"], image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "query optimizer", tags: ["MYSQL", "TUNING"], image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" },
];

export default function Experience() {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const infiniteProjects = [...projects, ...projects];
    const speed = 1.2;

    useAnimationFrame(() => {
        if (isPaused) return;

        const contentWidth = containerRef.current ? containerRef.current.scrollWidth / 2 : 0;
        if (contentWidth <= 0) return;

        let currentX = x.get();
        currentX -= speed;

        if (currentX <= -contentWidth) {
            currentX += contentWidth;
        }

        x.set(currentX);
    });

    const handleDragEnd = () => {
        x.stop();
        const contentWidth = containerRef.current ? containerRef.current.scrollWidth / 2 : 0;
        if (contentWidth > 0) {
            const currentX = x.get();
            const normalizedX = ((currentX % contentWidth) - contentWidth) % contentWidth;
            x.set(normalizedX);
        }
        setIsPaused(false);
    };

    return (
        <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full flex flex-col gap-10 scroll-mt-32 overflow-x-hidden"
        >
            <h2 className="w-full text-left text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
                experience
            </h2>

            <div
                onPointerEnter={() => setIsPaused(true)}
                onPointerLeave={() => setIsPaused(false)}
                className="relative active:cursor-grabbing overflow-x-hidden w-screen left-1/2 -translate-x-1/2"
                style={{ width: "100vw" }}
            >
                <motion.div
                    ref={containerRef}
                    style={{ x }}
                    drag="x"
                    dragMomentum={false}
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={handleDragEnd}
                    className="flex gap-5 md:gap-8 lg:gap-10 w-max cursor-grab px-4 md:px-6 lg:px-8"
                >
                    {infiniteProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="group flex flex-col bg-neutral-100 dark:bg-neutral-900 p-4 md:p-5 lg:p-6 rounded-3xl w-[280px] sm:w-80 md:w-[28rem] lg:w-[32rem] shrink-0 transition-transform duration-500 select-none"
                        >
                            <div className="w-full aspect-[27/8] relative rounded-[16px] overflow-hidden bg-neutral-200 dark:bg-neutral-800 pointer-events-none mb-3">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-3">
                                    <h3 className="text-xl md:text-2xl lg:text-[32px] font-medium text-neutral-900 dark:text-neutral-100 leading-none">
                                        {project.title}
                                    </h3>

                                    <div className="flex gap-3 md:gap-6 items-center flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[9px] md:text-[10px] font-bold tracking-tighter text-neutral-600 dark:text-neutral-400 uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-sm md:text-base lg:text-[20px] font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">
                                    Desenvolvimento estrutural focado em integridade de dados e performance algorítmica.
                                </p>

                                <div className="mt-auto pt-2">
                                    <AnimatedButton icon="right" className="text-sm md:text-base lg:text-[20px]">
                                        ver
                                    </AnimatedButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}