"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.15,
            wheelMultiplier: 1.2,
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // A MÁGICA: Expomos a instância do Lenis globalmente.
        // Isso acaba com a briga de motores, pois agora damos ordens direto para o cérebro dele.
        (window as any).lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
}