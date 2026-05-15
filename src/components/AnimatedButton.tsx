"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export type IconType = "down" | "up" | "left" | "right" | "diagonal" | "close";

interface AnimatedButtonProps {
    children: ReactNode;
    icon: IconType;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
                                           children,
                                           icon,
                                           onClick,
                                           className = "",
                                           type = "button"
                                       }: AnimatedButtonProps) {

    const getIconAnimation = () => {
        switch (icon) {
            case "right": return { x: 4 };
            case "left": return { x: -4 };
            case "down": return { y: 4 };
            case "up": return { y: -4 };
            case "diagonal": return { x: 4, y: -4 };
            case "close": return { scale: 0.8, opacity: 0.5 };
            default: return {};
        }
    };

    const iconVariants: Variants = {
        rest: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
        hover: { ...getIconAnimation(), transition: { duration: 0.2, ease: "easeOut" } }
    };

    const renderIcon = () => {
        const svgProps = {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round" as const,
            strokeLinejoin: "round" as const,
            className: "block"
        };

        switch (icon) {
            case "right":
                return <svg {...svgProps}><path d="m9 18 6-6-6-6" /></svg>;
            case "left":
                return <svg {...svgProps}><path d="m15 18-6-6 6-6" /></svg>;
            case "down":
                return <svg {...svgProps}><path d="m6 9 6 6 6-6" /></svg>;
            case "up":
                return <svg {...svgProps}><path d="m18 15-6-6-6 6" /></svg>;
            case "diagonal":
                // APENAS O CHEVRON (ÂNGULO), SEM HASTE
                return (
                    <svg {...svgProps}>
                        <path d="M9 9h6v6" />
                    </svg>
                );
            case "close":
                return (
                    <svg {...svgProps}>
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`flex items-center gap-1.5 text-sm font-bold hover:opacity-80 transition-opacity w-fit cursor-pointer lowercase ${className}`}
        >
            {children}
            <motion.span variants={iconVariants} className="flex items-center justify-center">
                {renderIcon()}
            </motion.span>
        </motion.button>
    );
}