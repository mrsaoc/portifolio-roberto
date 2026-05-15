"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { fadeInUp } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

const projects = [
    { id: 1, title: "project 1", tags: ["PHP", "CSS", "HTML"], image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "project 2", tags: ["NEXT.JS", "TS"], image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "project 3", tags: ["FIGMA", "UI"], image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "project 4", tags: ["REACT", "UX"], image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "project 5", tags: ["TAILWIND"], image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop" },
    { id: 6, title: "project 6", tags: ["NODE.JS"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" },
    { id: 7, title: "project 7", tags: ["PYTHON"], image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop" },
    { id: 8, title: "project 8", tags: ["JAVA"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
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
            <h2 className="w-full text-left text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
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
                                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 448px, 512px"
                                    draggable={false}
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
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur et consequat leo.
                                </p>

                                <div className="mt-auto pt-2">
                                    <AnimatedButton icon="right" className="text-sm md:text-base lg:text-[20px]">
                                        see
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