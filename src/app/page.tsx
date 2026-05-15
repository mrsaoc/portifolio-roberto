"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/BackToTop";
import Decorator from "@/components/Decorator";

export default function Home() {
    return (
        <SmoothScroll>
            <main className="relative min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-300">
                <Header />

                <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-36 flex flex-col gap-10 pb-10">
                    <Hero />
                    <Decorator />
                    <Experience />
                    <Decorator />
                    <Qualifications />
                    <Decorator />
                    <Contact />
                    <Footer />
                </div>

                {/* O botão flutuante independente */}
                <BackToTop />
            </main>
        </SmoothScroll>
    );
}