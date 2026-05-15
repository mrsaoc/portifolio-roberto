import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomScroll from "@/components/CustomScroll";

const sfProRounded = localFont({
    src: [
        {
            path: "../../public/fonts/SF-Pro-Rounded-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/SF-Pro-Rounded-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/SF-Pro-Rounded-Semibold.otf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-sf-pro-rounded",
});

export const metadata: Metadata = {
    title: "Marcos Vinícius | Visionary Design",
    description: "Portfólio de alto padrão com Tailwind v4",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="pt-br"
            className={`scroll-smooth scrollbar-hide h-full ${sfProRounded.variable}`}
            suppressHydrationWarning
        >
        <body className="min-h-full font-sans antialiased bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 selection:bg-neutral-500/30 overflow-x-hidden transition-colors duration-300">
        <SmoothScroll>
            <CustomScroll />
            {/* O children aqui já contém o Header e o Main do page.tsx */}
            {children}
        </SmoothScroll>
        </body>
        </html>
    );
}