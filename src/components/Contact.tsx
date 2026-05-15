"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";
import { fadeInUp } from "@/utils/animations";
import AnimatedButton from "./AnimatedButton";

export default function Contact() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    // Função para lidar com navegação externa via botão animado
    const navigateTo = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full flex flex-col gap-10 scroll-mt-32"
        >
            <h2 className="w-full text-left text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                contact
            </h2>

            {/* Alterado de items-start para md:items-center para centralizar verticalmente os links com o form */}
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-12 w-full">
                <form className="flex flex-col gap-4 w-full md:w-80" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="subject"
                        className="w-full bg-neutral-100 dark:bg-neutral-900 px-4 py-3 rounded-lg text-sm outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 transition-colors placeholder:text-neutral-500"
                    />
                    <input
                        type="email"
                        placeholder="your@mail.com"
                        className="w-full bg-neutral-100 dark:bg-neutral-900 px-4 py-3 rounded-lg text-sm outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 transition-colors placeholder:text-neutral-500 invalid:focus:border-red-500"
                    />
                    <textarea
                        placeholder="message"
                        rows={3}
                        className="w-full bg-neutral-100 dark:bg-neutral-900 px-4 py-3 rounded-lg text-sm outline-none border border-transparent focus:border-neutral-300 dark:focus:border-neutral-700 transition-colors placeholder:text-neutral-500 resize-none"
                    />

                    <AnimatedButton type="submit" icon="right" className="mt-2">
                        send
                    </AnimatedButton>
                </form>

                {/* md:items-end mantém o alinhamento à direita do texto enquanto o pai centraliza o bloco todo */}
                <div className="flex flex-col gap-4 text-sm font-bold text-left md:items-end">
                    <AnimatedButton icon="diagonal" onClick={() => navigateTo("/")}>
                        whatsapp
                    </AnimatedButton>
                    <AnimatedButton icon="diagonal" onClick={() => navigateTo("/")}>
                        linkedin
                    </AnimatedButton>
                    <AnimatedButton icon="diagonal" onClick={() => navigateTo("/")}>
                        github
                    </AnimatedButton>
                    <AnimatedButton icon="diagonal" onClick={() => navigateTo("/")}>
                        gmail
                    </AnimatedButton>
                </div>
            </div>
        </motion.section>
    );
}