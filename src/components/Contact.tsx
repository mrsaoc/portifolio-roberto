"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

export default function Contact() {
    return (
        <motion.section 
            id="contact" 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeInUp} 
            viewport={{ once: true }}
            className="w-full py-20 scroll-mt-32 max-w-5xl mx-auto px-6 md:px-0"
        >
            {/* Título da Seção em CAIXA ALTA */}
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12 text-center text-neutral-900 dark:text-neutral-100">
                CONTACT
            </h2>
            
            <div className="max-w-4xl mx-auto bg-neutral-100 dark:bg-neutral-900 p-8 md:p-16 rounded-[40px] flex flex-col items-center gap-12 shadow-sm border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-500">
                
                {/* Canal de E-mail Principal */}
                <div className="flex flex-col items-center gap-4 group w-full">
                    <span className="material-symbols-rounded text-5xl text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                        mail
                    </span>
                    <Link 
                        href="mailto:robertoneivacorvino@gmail.com" 
                        className="text-xl sm:text-2xl md:text-3xl font-medium cursor-pointer hover:opacity-70 transition-opacity break-all text-center text-neutral-900 dark:text-neutral-100 underline-offset-8 hover:underline decoration-neutral-300 dark:decoration-neutral-700"
                    >
                        robertoneivacorvino@gmail.com
                    </Link>
                </div>
                
                {/* Canais de Conexão: WhatsApp, GitHub e LinkedIn */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-12 w-full">
                    
                    {/* WhatsApp */}
                    <Link 
                        href="https://wa.me/5513997244227" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-bold uppercase cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                    >
                        <span className="material-symbols-rounded text-2xl group-hover:scale-110 transition-transform">chat</span>
                        WHATSAPP
                    </Link>
                    
                    {/* GitHub */}
                    <Link 
                        href="https://github.com/6-beto-9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-bold uppercase cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                    >
                        <span className="material-symbols-rounded text-2xl group-hover:scale-110 transition-transform">terminal</span>
                        GITHUB
                    </Link>
                    
                    {/* LinkedIn */}
                    <Link 
                        href="https://www.linkedin.com/in/roberto-neiva-corvino/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-bold uppercase cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group"
                    >
                        <span className="material-symbols-rounded text-2xl group-hover:scale-110 transition-transform">link</span>
                        LINKEDIN
                    </Link>
                </div>
            </div>
            
            {/* Disclaimer de Disponibilidade */}
            <p className="mt-12 text-center text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] text-[10px] font-bold">
                Disponível para oportunidades de estágio e projetos backend.
            </p>
        </motion.section>
    );
}