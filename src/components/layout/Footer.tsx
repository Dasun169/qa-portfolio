"use client";
import { motion } from "framer-motion";
import { Mail, BookOpen } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

const SOCIALS = [
    { icon: Github, href: "https://github.com/dasunnavindu", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/dasunnavindu", label: "LinkedIn" },
    { icon: Mail, href: "mailto:dasunnavindu2001@gmail.com", label: "Email" },
    { icon: BookOpen, href: "https://medium.com/@dasunnavindu", label: "Medium" },
];

const LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Footer() {
    const scrollTo = (id: string) =>
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="relative py-12 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <p className="font-display font-bold text-xl mb-2">
                            <span className="gradient-text">Dasun</span>
                            <span className="text-slate-500 font-mono text-sm">.QA</span>
                        </p>
                        <p className="text-slate-500 text-sm">
                            Software Quality Assurance Engineer building reliable systems through smart automation.
                        </p>
                    </div>

                    {/* Quick nav */}
                    <div>
                        <p className="font-semibold text-slate-300 mb-3 font-display">Navigation</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {LINKS.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    className="text-slate-500 hover:text-brand-400 text-sm transition-colors"
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="font-semibold text-slate-300 mb-3 font-display">Connect</p>
                        <div className="flex gap-3">
                            {SOCIALS.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="p-2.5 glass rounded-xl border border-white/10 hover:border-brand-400/50 text-slate-500 hover:text-brand-400 transition-all"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 text-center">
                    <p className="text-slate-600 text-sm font-mono">
                        © {new Date().getFullYear()} Dasun Navindu Dewnith. Built with Next.js & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}