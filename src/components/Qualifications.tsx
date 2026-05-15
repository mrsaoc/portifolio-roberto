"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const qualifications = [
    { 
        id: 1, 
        title: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS", 
        institution: "FATEC",
        period: "Julho de 2023 - Atual",
        description: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS). Carga horária de 2600 horas.",
        icon: "school",
        certImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format" 
    },
    { 
        id: 2, 
        title: "TÉCNICO EM INFORMÁTICA (SUPORTE)", 
        institution: "ETEC Informática Nova Matriz",
        period: "Fevereiro de 2021 - Julho de 2022",
        description: "Formação técnica com foco em suporte e fundamentos de informática. Carga horária de 1200 horas.",
        icon: "computer",
        certImage: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format" 
    },
    { 
        id: 3, 
        title: "INGLÊS INTERMEDIÁRIO (B1)", 
        institution: "EF SET",
        period: "Setembro de 2023",
        description: "Certificado de proficiência atestando nível intermediário de leitura e escuta no idioma inglês.",
        icon: "language",
        certImage: "https://images.unsplash.com/photo-1606326666490-45757474e788?q=80&w=1000&auto=format" 
    }
];

export default function Qualifications() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);

    return (
        <motion.section 
            id="qualifications" 
            initial="hidden" 
            whileInView="visible" 
            variants={staggerContainer} 
            className="w-full flex flex-col gap-10 scroll-mt-32 max-w-5xl mx-auto px-6 md:px-0"
        >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
                QUALIFICATIONS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {qualifications.map((qual) => (
                    <div 
                        key={qual.id} 
                        className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-[32px] flex flex-col gap-4 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                            <span className="material-symbols-rounded text-3xl">{qual.icon}</span>
                            <span className="text-sm font-bold uppercase tracking-widest">{qual.institution}</span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-neutral-900 dark:text-neutral-100 mt-2">
                            {qual.title}
                        </h3>
                        
                        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-500 bg-white dark:bg-black w-fit px-3 py-1 rounded-md uppercase">
                            {qual.period}
                        </span>
                        
                        <p className="text-neutral-600 dark:text-neutral-400 mt-2 flex-grow">
                            {qual.description}
                        </p>
                        
                        <button 
                            onClick={() => setSelectedCert(qual.certImage)}
                            aria-label={`Ver certificado de ${qual.title}`}
                            className="mt-4 w-fit p-3 rounded-full border border-neutral-200 dark:border-neutral-800 cursor-pointer hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 active:scale-95"
                        >
                            <span className="material-symbols-rounded block">visibility</span>
                        </button>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }} 
                            exit={{ scale: 0.9, opacity: 0 }} 
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative bg-white dark:bg-neutral-900 p-4 rounded-3xl max-w-3xl w-full shadow-2xl"
                        >
                            <button 
                                onClick={() => setSelectedCert(null)} 
                                aria-label="Fechar modal"
                                className="absolute top-6 right-6 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors cursor-pointer z-10"
                            >
                                <span className="material-symbols-rounded block text-neutral-900 dark:text-white">close</span>
                            </button>
                            {/* Imagens provisórias do Unsplash, basta alterar a URL do array quando tiver os certificados reais */}
                            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden">
                                <img 
                                    src={selectedCert} 
                                    alt="Certificado de Qualificação" 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}