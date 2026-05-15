"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { fadeInUp } from "@/utils/animations";

const projects = [
    { 
        id: 1, 
        title: "TASK MANAGER", 
        tags: ["JAVA", "BACKEND"], 
        description: "Aplicação simples desenvolvida para cadastro e organização de tarefas.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 2, 
        title: "RESTFUL API", 
        tags: ["SPRING BOOT", "SWAGGER"], 
        description: "Arquitetura de API escalável e documentada para serviços corporativos e integração de dados.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 3, 
        title: "DATA PARSER", 
        tags: ["C", "ALGORITHMS"], 
        description: "Processamento de dados de baixo nível focado em alta performance algorítmica e alocação de memória.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" 
    },
    { 
        id: 4, 
        title: "INVENTORY SYSTEM", 
        tags: ["JAVA", "MYSQL"], 
        description: "Sistema robusto de controle de estoque com persistência segura em banco de dados relacional.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" 
    },
];

export default function Experience() {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const infiniteProjects = [...projects, ...projects];

    useAnimationFrame(() => {
        if (isPaused) return;
        const contentWidth = containerRef.current ? containerRef.current.scrollWidth / 2 : 0;
        if (contentWidth <= 0) return;
        
        let currentX = x.get() - 1.2;
        if (currentX <= -contentWidth) currentX += contentWidth;
        x.set(currentX);
    });

    return (
        <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="w-full flex flex-col gap-10 scroll-mt-32 overflow-hidden"
        >
            {/* Título */}
            <div className="w-full max-w-5xl mx-auto px-6 md:px-0">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
                    EXPERIENCE
                </h2>
            </div>

            {/* Container do Carrossel (substituído w-screen por w-full para evitar quebra no mobile) */}
            <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
                <motion.div
                    ref={containerRef}
                    style={{ x }}
                    onPointerEnter={() => setIsPaused(true)}
                    onPointerLeave={() => setIsPaused(false)}
                    // Adicionado touch listener para pausar ao tocar no mobile
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    className="flex gap-4 md:gap-8 w-max px-6 md:px-8 py-4"
                >
                    {infiniteProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            // Ajuste na largura: 280px para mobile, 400px para desktop
                            className="group flex flex-col bg-neutral-100 dark:bg-neutral-900 p-6 rounded-[32px] w-[280px] sm:w-[320px] md:w-[400px] shrink-0 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300"
                        >
                            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mb-6">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    sizes="(max-width: 768px) 280px, 400px"
                                    className="object-cover" 
                                />
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 text-neutral-900 dark:text-neutral-100">
                                {project.title}
                            </h3>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span 
                                        key={tag} 
                                        className="text-[10px] md:text-[11px] font-bold tracking-widest text-neutral-500 uppercase border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 rounded-lg"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-2 md:line-clamp-3">
                                {project.description}
                            </p>

                            <button 
                                aria-label={`Ver detalhes de ${project.title}`}
                                className="mt-auto w-fit p-3 rounded-full border border-neutral-200 dark:border-neutral-800 cursor-pointer hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all duration-300 active:scale-95"
                            >
                                <span className="material-symbols-rounded block">arrow_forward</span>
                            </button>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}