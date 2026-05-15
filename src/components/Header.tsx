"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("me");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { id: "me", icon: "person", label: "ME" },
        { id: "experience", icon: "terminal", label: "EXPERIENCE" },
        { id: "qualifications", icon: "verified", label: "QUALIFICATIONS" },
        { id: "contact", icon: "alternate_email", label: "CONTACT" },
    ];

    const handleScrollTo = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const lenis = (window as any).lenis;

        if (lenis) {
            lenis.scrollTo(id === "me" ? 0 : `#${id}`, {
                offset: id === "me" ? 0 : -104,
                duration: 0.8,
            });
        }

        setActiveSection(id);
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full z-50 flex justify-center h-[104px] items-center px-6 pointer-events-none">
            <div className="w-full max-w-5xl flex justify-between items-center pointer-events-auto">
                {/* Logo com peso Medium */}
                <Link
                    href="#me"
                    onClick={(e) => handleScrollTo("me", e)}
                    className={`text-[24px] font-medium tracking-tighter cursor-pointer transition-all duration-300 px-6 py-2 rounded-2xl ${
                        isScrolled
                            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border border-neutral-200/50 dark:border-neutral-800/50"
                            : "bg-transparent border border-transparent"
                    }`}
                >
                    ROBERTO C.
                </Link>

                {/* Desktop Nav - Ícones Material Symbols Rounded/Fill */}
                <nav
                    className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-2xl transition-all duration-300 ${
                        isScrolled
                            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border border-neutral-200/50 dark:border-neutral-800/50"
                            : "bg-transparent border border-transparent"
                    }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScrollTo(link.id, e)}
                            className={`flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                                activeSection === link.id
                                    ? "text-neutral-900 dark:text-neutral-100"
                                    : "text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                            }`}
                        >
                            <span className="material-symbols-rounded text-[28px]">{link.icon}</span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger Menu Button */}
                <button
                    className={`md:hidden p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-center ${
                        isScrolled
                            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border border-neutral-200/50 dark:border-neutral-800/50"
                            : "bg-transparent border border-transparent"
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="flex flex-col gap-1.5 w-6">
                        <motion.span 
                            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-current rounded-full" 
                        />
                        <motion.span 
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-current rounded-full" 
                        />
                        <motion.span 
                            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-current rounded-full" 
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-[104px] left-6 right-6 p-8 bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-[32px] shadow-2xl flex flex-col gap-6 md:hidden pointer-events-auto"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={`mobile-${link.id}`}
                                href={`#${link.id}`}
                                onClick={(e) => handleScrollTo(link.id, e)}
                                className={`flex items-center gap-4 text-xl font-medium cursor-pointer transition-colors ${
                                    activeSection === link.id
                                        ? "text-neutral-900 dark:text-neutral-100"
                                        : "text-neutral-400"
                                }`}
                            >
                                <span className="material-symbols-rounded text-[28px]">{link.icon}</span>
                                <span className="uppercase">{link.label}</span>
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}