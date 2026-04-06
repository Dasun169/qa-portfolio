"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            // Active section detection
            const sections = NAV_ITEMS.map((i) => i.href.slice(1));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        const id = href.slice(1);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass border-b border-white/10 py-3"
                : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.span
                    whileHover={{ scale: 1.02 }}
                    className="font-display font-bold text-xl cursor-pointer"
                    onClick={() => scrollTo("#home")}
                >
                    <span className="gradient-text text-3xl">Dasun</span>
                    <span className="text-slate-300 dark:text-slate-300 text-sm font-mono ml-1 text-3xl">
                        .QA
                    </span>
                </motion.span>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <button
                                onClick={() => scrollTo(item.href)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${activeSection === item.href.slice(1)
                                    ? "text-brand-400"
                                    : "text-slate-400 hover:text-slate-100"
                                    }`}
                            >
                                {activeSection === item.href.slice(1) && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-brand-500/10 rounded-lg border border-brand-500/20"
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="/cv.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Download CV
                    </motion.a>
                </div>

                {/* Mobile */}
                <div className="lg:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl glass border border-white/10"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-t border-white/10 px-4 pb-4"
                    >
                        {NAV_ITEMS.map((item, i) => (
                            <motion.button
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => scrollTo(item.href)}
                                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium mt-1 transition-colors ${activeSection === item.href.slice(1)
                                    ? "text-brand-400 bg-brand-500/10"
                                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                                    }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                        <a
                            href="/cv.pdf"
                            download
                            className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-gradient-to-r from-brand-500 to-accent-500 text-white text-sm font-semibold rounded-xl"
                        >
                            <Download className="w-4 h-4" /> Download CV
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    );
}