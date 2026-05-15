"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";

export default function Hero() {
    // Função para garantir o scroll suave até a experiência via Lenis ou Nativo
    const handleScrollToExperience = (e: React.MouseEvent) => {
        e.preventDefault();
        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.scrollTo("#experience", {
                offset: -104,
                duration: 1.2,
            });
        } else {
            const element = document.getElementById("experience");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <motion.section
            id="me"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-12 items-center pt-24 pb-20 scroll-mt-32 w-full max-w-5xl mx-auto px-6 md:px-0"
        >
            {/* Imagem de Perfil com efeito de Grayscale */}
            <div className="w-[280px] md:w-[310px] h-[360px] md:h-[400px] relative rounded-3xl overflow-hidden shrink-0 bg-neutral-200 dark:bg-neutral-800 shadow-sm grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
                <Image
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop"
                    alt="Roberto Neiva Corvino"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Conteúdo Informativo */}
            <div className="flex flex-col space-y-6 flex-1 text-center md:text-left">
                {/* Título em CAIXA ALTA */}
                <h1 className="text-[52px] sm:text-[64px] md:text-[84px] font-bold leading-[0.9] tracking-tighter uppercase text-neutral-900 dark:text-neutral-100">
                    BACKEND <br /> ENGINEER.
                </h1>

                <div className="flex flex-col gap-6 text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto md:mx-0">
                    <p>
                        Estudante de Análise e Desenvolvimento de Sistemas na FATEC, focado em construir sistemas robustos e arquiteturas de alta performance com foco em backend Java.
                    </p>
                    
                    {/* Stacks Principais com Ícones Material Symbols */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                            <span className="material-symbols-rounded">coffee</span> JAVA
                        </span>
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                            <span className="material-symbols-rounded">database</span> MYSQL
                        </span>
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                            <span className="material-symbols-rounded">terminal</span> C
                        </span>
                    </div>
                </div>

                {/* Ações Sociais e Navegação de Projetos */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-4">
                    {/* Link para Experiência: Ícone em vez de texto conforme solicitado */}
                    <Link 
                        href="#experience" 
                        onClick={handleScrollToExperience}
                        className="flex items-center justify-center p-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg active:scale-95"
                        aria-label="Ir para seção de Projetos"
                    >
                        <span className="material-symbols-rounded text-[32px]">arrow_downward</span>
                    </Link>

                    {/* Links Sociais Reais e WhatsApp */}
                    <div className="flex gap-4 items-center">
                        <Link 
                            href="https://github.com/6-beto-9" 
                            target="_blank"
                            rel="noopener noreferrer" 
                            aria-label="GitHub"
                            className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer group"
                        >
                            <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.44-1.304.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </Link>
                        
                        <Link 
                            href="https://linkedin.com/in/roberto-neiva-corvino/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer group"
                        >
                            <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732c.966 0 1.75.779 1.75 1.732s-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </Link>

                        <Link 
                            href="https://wa.me/5513997244227" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all cursor-pointer group"
                        >
                            <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}