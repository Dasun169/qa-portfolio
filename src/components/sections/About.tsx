"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Zap, Code2, GitBranch } from "lucide-react";

const STATS = [
    { label: "Test Cases Created", value: "400+", icon: Shield },
    { label: "Automation Frameworks", value: "4+", icon: Zap },
    { label: "Manual Effort Reduced", value: "~40%", icon: Code2 },
    { label: "Months Experience", value: "8+", icon: GitBranch },
];

export default function About() {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="about" className="relative py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">
                            About Me
                        </span>
                        <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
                            Who Am I?
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-5"
                        >
                            <p className="text-slate-400 text-lg leading-relaxed">
                                I am an{" "}
                                <span className="text-brand-400 font-semibold">
                                    undergraduate Software Quality Assurance Engineer
                                </span>{" "}
                                with hands-on experience in both manual and automated testing.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                I specialize in building and maintaining automation frameworks using{" "}
                                <span className="text-cyan-400 font-semibold">Playwright</span> and{" "}
                                <span className="text-cyan-400 font-semibold">Selenium WebDriver</span>.
                                I have experience in{" "}
                                <span className="text-accent-400 font-semibold">API testing</span>,{" "}
                                <span className="text-accent-400 font-semibold">CI/CD integration</span>, and{" "}
                                <span className="text-accent-400 font-semibold">Agile environments</span>.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                I am passionate about improving software quality, reducing manual effort,
                                and delivering reliable applications.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Playwright", "Selenium", "Postman", "Jenkins", "Docker"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 glass rounded-full text-sm font-mono text-brand-400 border border-brand-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {STATS.map(({ label, value, icon: Icon }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="glass rounded-2xl p-5 border border-white/10 hover:border-brand-500/30 transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5 text-brand-400 mb-3" />
                                    <p className="font-display font-bold text-3xl gradient-text">{value}</p>
                                    <p className="text-slate-500 text-sm mt-1">{label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}