"use client";
import { motion } from "framer-motion";
import { Mail, BookOpen } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

const SOCIALS = [
    { icon: Github, href: "https://github.com/Dasun169", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dasun-navindu-987857292/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dasunnavindu2001@gmail.com", label: "Email" },
    { icon: BookOpen, href: "https://medium.com/@dasunnavindu2001", label: "Medium" },
];

const LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Footer() {
    const scrollTo = (id: string) =>
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="relative py-16 px-4 border-t border-brand-500/10 overflow-hidden">
            {/* Subtle glow effect behind the footer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="inline-block cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollTo("home")}>
                            <p className="font-bold text-3xl md:text-4xl">
                                <span className="gradient-text">Dasun</span>
                                <span className="text-slate-500 text-xl md:text-2xl ml-1">.QA</span>
                            </p>
                        </div>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                            A passionate Software Quality Assurance Engineer dedicated to delivering high-quality, reliable, and user-centric software solutions. Let&apos;s build something flawless together.
                        </p>
                    </div>

                    {/* Quick nav */}
                    <div className="md:col-span-6 lg:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
                        <p className="font-semibold text-slate-100 mb-6 text-lg">Navigation</p>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                            {LINKS.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors font-medium flex items-center justify-center md:justify-start gap-2 group w-fit mx-auto md:mx-0"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-400 transition-colors hidden md:block" />
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-6 lg:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
                        <p className="font-semibold text-slate-100 mb-6 text-lg">Connect</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {SOCIALS.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3.5 glass rounded-2xl border border-white/5 hover:border-brand-500/30 text-slate-400 hover:text-brand-400 hover:bg-brand-500/10 transition-all shadow-lg"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-brand-500/10">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Dasun Navindu Dewnith. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs text-center md:text-right flex items-center justify-center gap-1.5">
                        Built with <span className="text-slate-300 font-medium">Next.js</span> & <span className="text-brand-400 font-medium">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}