"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
    const imageUrl = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop";

    return (
        <motion.section
            id="me"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-12 items-center pt-20 pb-20 scroll-mt-32"
        >
            <div className="w-[310px] h-[400px] relative rounded-2xl overflow-hidden shrink-0 bg-neutral-200 dark:bg-neutral-800 shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                    src={imageUrl}
                    alt="Roberto C. Portfolio Image"
                    fill
                    sizes="310px"
                    priority
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col space-y-6 flex-1 text-center md:text-left">
                <h1 className="text-[72px] md:text-[96px] font-bold leading-[1.1] md:leading-[80px] tracking-tighter text-neutral-900 dark:text-neutral-100 uppercase">
                    backend <br /> engineer,
                </h1>

                <div className="flex flex-col gap-4 text-[20px] font-normal leading-[28px] text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto md:mx-0">
                    <p>
                        Desenvolvedor focado em arquiteturas robustas e sistemas de alta performance.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-semibold">
                            <span className="material-symbols-rounded text-neutral-500">coffee</span> Java
                        </span>
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-semibold">
                            <span className="material-symbols-rounded text-neutral-500">database</span> MySQL
                        </span>
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-semibold">
                            <span className="material-symbols-rounded text-neutral-500">terminal</span> C Language
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4">
                    <Link href="#experience" className="w-fit">
                        <AnimatedButton icon="right" className="!text-[20px] !font-medium">
                            ver projetos
                        </AnimatedButton>
                    </Link>

                    <div className="flex gap-4">
                        <Link href="https://github.com" target="_blank" className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.44-1.304.763-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732c.966 0 1.75.779 1.75 1.732s-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}