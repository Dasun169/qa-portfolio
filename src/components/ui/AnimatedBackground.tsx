"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            ref.current.style.setProperty("--mouse-x", `${x}%`);
            ref.current.style.setProperty("--mouse-y", `${y}%`);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={ref}
            className="fixed inset-0 pointer-events-none z-0"
            style={
                {
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                } as React.CSSProperties
            }
        >
            {/* Primary radial gradient that follows mouse */}
            <div
                className="absolute inset-0 opacity-30 dark:opacity-20 transition-all duration-700 ease-out"
                style={{
                    background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.25), transparent 50%)`,
                }}
            />
            {/* Static ambient gradient */}
            <div className="absolute inset-0 opacity-40 dark:opacity-30"
                style={{
                    background: `
            radial-gradient(ellipse at 20% 20%, rgba(168,85,247,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(34,211,238,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)
          `,
                }}
            />
            {/* Floating orbs */}
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 dark:opacity-5"
                style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.8), transparent)",
                    filter: "blur(60px)",
                }}
            />
            <motion.div
                animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 dark:opacity-5"
                style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.8), transparent)",
                    filter: "blur(80px)",
                }}
            />
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
}