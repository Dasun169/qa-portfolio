"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Download, ChevronRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export default function Hero() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 px-4"
        >
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-6"
                >
                    <motion.div variants={item}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-500/30 text-brand-400 text-sm font-mono">
                            <span className="w-3 h-3 rounded-full bg-brand-400 animate-pulse" />
                            <p className="text-lg">Available for opportunities</p>
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                    >
                        <span className="text-slate-900 dark:text-slate-100">
                            Dasun Navindu
                        </span>
                        <br />
                        <span className="gradient-text">Dewnith</span>
                    </motion.h1>

                    <motion.div variants={item} className="space-y-1">
                        <p className="text-lg sm:text-xl font-semibold text-slate-300 font-display">
                            Software Quality Assurance Engineer
                        </p>
                        <p className="text-base text-accent-500 font-mono text-xl">
                            QA Automation Enthusiast
                        </p>
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="text-slate-400 text-lg leading-relaxed max-w-xl"
                    >
                        "I build reliable software through{" "}
                        <span className="text-cyan-400">smart testing</span> and{" "}
                        <span className="text-brand-400">automation</span>"
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-wrap gap-3"
                    >
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo("projects")}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold rounded-xl"
                        >
                            View Projects <ChevronRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo("contact")}
                            className="flex items-center gap-2 px-6 py-3 glass border border-white/20 hover:border-brand-400/50 text-slate-100 font-semibold rounded-xl transition-all"
                        >
                            <Mail className="w-4 h-4" /> Contact Me
                        </motion.button>
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="/cv.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 glass border border-white/20 hover:border-accent-400/50 text-slate-100 font-semibold rounded-xl transition-all"
                        >
                            <Download className="w-4 h-4" /> Download CV
                        </motion.a>
                    </motion.div>

                    <motion.div variants={item} className="flex items-center gap-4 pt-2">
                        {[
                            { icon: Github, href: "https://github.com/dasunnavindu", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com/in/dasunnavindu", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:dasunnavindu2001@gmail.com", label: "Email" },
                        ].map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="p-2.5 glass rounded-xl border border-white/10 hover:border-brand-400/50 text-slate-400 hover:text-brand-400 transition-colors"
                                aria-label={label}
                            >
                                <Icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Avatar / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="flex justify-center items-center"
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 via-accent-500 to-cyan-400 blur-2xl opacity-30 scale-110 animate-pulse" />
                        {/* Avatar container */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-56 h-56 sm:w-100 sm:h-100 rounded-full overflow-hidden border-2 border-white/10"
                        >
                            <Image
                                src="/dp.png"
                                alt="Dasun Navindu"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 640px) 14rem, 18rem"
                            />
                        </motion.div>
                        {/* Floating badges */}
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-white/10"
                        >
                            <p className="text-xs text-slate-200 font-mono">Status</p>
                            <p className="text-xs font-semibold text-brand-400">QA Engineer</p>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-white/10"
                        >
                            <p className="text-xs text-slate-200 font-mono">Experience in</p>
                            <p className="text-xs font-semibold text-accent-400">Automation</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => scrollTo("about")}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-brand-400 transition-colors"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.button>
        </section>
    );
}