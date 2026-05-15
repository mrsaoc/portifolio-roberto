import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Importando Poppins
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomScroll from "@/components/CustomScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ROBERTO C. | Backend Engineer",
  description: "Especialista em Java, MySQL e C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`h-full ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* Importando Material Symbols com suporte a Rounded e Fill */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-full font-sans antialiased bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <SmoothScroll>
          <CustomScroll />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}