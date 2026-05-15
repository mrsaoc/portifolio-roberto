"use client";

import { motion } from "framer-motion";
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
            {
                rootMargin: "-40% 0px -40% 0px",
            }
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
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            if (id === "me") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const section = document.getElementById(id);
                if (section) {
                    const targetY = section.getBoundingClientRect().top + window.scrollY - 104;
                    window.scrollTo({ top: targetY, behavior: "smooth" });
                }
            }
        }

        setActiveSection(id);
        setIsMenuOpen(false);
        window.history.pushState(null, "", `#${id}`);
    };

    return (
        <>
            <div className="fixed top-0 w-full max-w-5xl mx-auto flex items-center justify-between h-[104px] px-6 md:px-12 lg:px-24 z-40 pointer-events-none left-1/2 -translate-x-1/2">
                <Link
                    href="#me"
                    onClick={(e) => handleScrollTo("me", e)}
                    className={`text-[24px] font-medium tracking-tight pointer-events-auto transition-all duration-300 px-6 py-2 rounded-2xl ${
                        isScrolled
                            ? 'bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm'
                            : 'bg-transparent border border-transparent'
                    }`}
                >
                    ROBERTO C.
                </Link>
            </div>

            <div className="fixed top-0 w-full max-w-5xl mx-auto flex items-center justify-end h-[104px] px-6 md:px-12 lg:px-24 z-50 pointer-events-none left-1/2 -translate-x-1/2">
                <nav
                    className={`hidden md:flex items-center gap-[40px] px-8 py-3 rounded-2xl pointer-events-auto transition-all duration-300 ${
                        isScrolled
                            ? 'bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm'
                            : 'bg-transparent border border-transparent'
                    }`}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScrollTo(link.id, e)}
                            className={`flex items-center justify-center transition-colors duration-300 ${
                                activeSection === link.id
                                    ? 'text-neutral-900 dark:text-neutral-100'
                                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                            }`}
                        >
                            <span className="material-symbols-rounded text-[26px]">{link.icon}</span>
                        </Link>
                    ))}
                </nav>

                <button
                    className={`md:hidden p-3 text-neutral-900 dark:text-neutral-100 flex items-center justify-center rounded-2xl pointer-events-auto transition-all duration-300 ${
                        isScrolled
                            ? 'bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm'
                            : 'bg-transparent border border-transparent'
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <div className="grid grid-cols-3 gap-[3px] w-5 h-5">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-current rounded-[1px]" />
                        ))}
                    </div>
                </button>
            </div>

            {isMenuOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden w-full flex flex-col gap-6 p-6 text-[20px] font-normal bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl fixed top-[104px] z-40 shadow-sm left-1/2 -translate-x-1/2 max-w-[calc(100vw-48px)] pointer-events-auto"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={`mobile-${link.id}`}
                            href={`#${link.id}`}
                            onClick={(e) => handleScrollTo(link.id, e)}
                            className={`flex items-center gap-4 transition-colors duration-300 ${
                                activeSection === link.id
                                    ? 'text-neutral-900 dark:text-neutral-100'
                                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                            }`}
                        >
                            <span className="material-symbols-rounded text-[24px]">{link.icon}</span>
                            <span className="uppercase">{link.label}</span>
                        </Link>
                    ))}
                </motion.nav>
            )}
        </>
    );
}