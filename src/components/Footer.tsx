"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Função para scroll suave centralizada para todos os links internos
    const handleScrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.scrollTo(id, {
                offset: -104,
                duration: 1.2,
            });
        } else {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="w-full py-16 border-t border-neutral-200 dark:border-neutral-800 mt-20 bg-white dark:bg-black">
            <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
                
                {/* Topo do Footer: Identidade e Navegação */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    
                    {/* Identidade com Peso Médio e Caixa Alta baseada no currículo */}
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl font-medium tracking-tighter uppercase text-neutral-900 dark:text-neutral-100">
                            ROBERTO NEIVA CORVINO
                        </span>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                            Backend Engineer & ADS @ FATEC
                        </p>
                    </div>

                    {/* Links de Navegação em Caixa Alta */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">MENU</span>
                            <Link href="#me" onClick={(e) => handleScrollTo("#me", e)} className="text-sm font-bold uppercase cursor-pointer hover:text-neutral-500 transition-colors">ME</Link>
                            <Link href="#experience" onClick={(e) => handleScrollTo("#experience", e)} className="text-sm font-bold uppercase cursor-pointer hover:text-neutral-500 transition-colors">EXPERIENCE</Link>
                            <Link href="#qualifications" onClick={(e) => handleScrollTo("#qualifications", e)} className="text-sm font-bold uppercase cursor-pointer hover:text-neutral-500 transition-colors">QUALIFICATIONS</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">SOCIAL</span>
                            <Link href="https://linkedin.com/in/roberto-neiva-corvino/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase cursor-pointer hover:text-neutral-500 transition-colors">LINKEDIN</Link>
                            <Link href="https://github.com/6-beto-9" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase cursor-pointer hover:text-neutral-500 transition-colors">GITHUB</Link>
                        </div>
                    </div>
                </div>

                {/* Base do Footer: Direitos e Ícones de Stack */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-neutral-100 dark:border-neutral-900 gap-6">
                    
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest text-center md:text-left">
                        © {currentYear} ALL RIGHTS RESERVED • BUILT WITH PRECISION
                    </div>

                    {/* Ícones de Stack com Material Symbols Rounded/Fill */}
                    <div className="flex gap-8">
                        <div className="group flex items-center gap-2 cursor-pointer" title="Java">
                            <span className="material-symbols-rounded text-2xl text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">coffee</span>
                        </div>
                        <div className="group flex items-center gap-2 cursor-pointer" title="MySQL">
                            <span className="material-symbols-rounded text-2xl text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">database</span>
                        </div>
                        <div className="group flex items-center gap-2 cursor-pointer" title="C Language">
                            <span className="material-symbols-rounded text-2xl text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">terminal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}