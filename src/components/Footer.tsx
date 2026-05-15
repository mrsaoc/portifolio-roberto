"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 border-t border-neutral-200 dark:border-neutral-800 mt-20">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="text-[20px] font-medium tracking-tighter uppercase">
                        ROBERTO C.
                    </span>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Backend Engineer & Software Architect
                    </p>
                </div>

                <div className="text-sm text-neutral-400 dark:text-neutral-500 text-center">
                    © {currentYear} Todos os direitos reservados.
                </div>

                <div className="flex gap-6">
                    <span className="material-symbols-rounded text-neutral-400">code</span>
                    <span className="material-symbols-rounded text-neutral-400">terminal</span>
                    <span className="material-symbols-rounded text-neutral-400">database</span>
                </div>
            </div>
        </footer>
    );
}