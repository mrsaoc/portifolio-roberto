"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
    // URL direta e correta da imagem do tigre branco próxima ao edifício
    const imageUrl = "https://images.unsplash.com/photo-1671132313213-474849d6065a?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <motion.section
            id="me"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-12 items-center scroll-mt-32"
        >
            {/* Imagem: 310x400 */}
            <div className="w-[310px] h-[400px] relative rounded-2xl overflow-hidden shrink-0 bg-neutral-200 dark:bg-neutral-800 shadow-sm">
                <Image
                    src={imageUrl}
                    alt="Close-up of a white tiger near a building"
                    fill
                    sizes="310px"
                    priority // Carregamento prioritário (acima da dobra)
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
            </div>

            {/* Conteúdo alinhado verticalmente com gaps de 24px (space-y-6) */}
            <div className="flex flex-col space-y-6 flex-1 text-center md:text-left">

                {/* H1: 96px, Semibold, Line Height 80px */}
                <h1 className="text-[96px] font-semibold leading-[80px] tracking-tighter text-neutral-900 dark:text-neutral-100">
                    ui/ux <br /> designer,
                </h1>

                {/* P: 20px, Regular, Line Height 28px */}
                <p className="text-[20px] font-normal leading-[28px] text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto md:mx-0">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. curabitur et consequat leo.
                    suspendisse enim magna, elementum ac ultricies vel, viverra ac nulla.
                </p>

                {/* Button: Atualizado para AnimatedButton mantendo o alinhamento mx-auto md:mx-0 */}
                <Link href="#experience" className="w-fit mx-auto md:mx-0">
                    <AnimatedButton icon="down" className="!text-[20px] !font-medium">
                        know more
                    </AnimatedButton>
                </Link>
            </div>
        </motion.section>
    );
}